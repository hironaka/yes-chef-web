import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { textContent } = body;

    if (!textContent || typeof textContent !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid textContent in request body' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
        console.error('OPENAI_API_KEY is not set in environment variables.');
        return NextResponse.json({ error: 'Server configuration error: OpenAI API key not found.' }, { status: 500 });
    }

    const systemPrompt = `
You are an expert recipe extractor. Analyze the provided text content from a webpage.
Your task is to determine if the text contains a food recipe.
- If a food recipe is found, extract its details (name, ingredients, instructions, prepTime, cookTime, recipeYield, etc.) and format them STRICTLY as a JSON object conforming to the schema.org/Recipe standard (https://schema.org/Recipe). Your response MUST contain ONLY the valid JSON object, with no extra text, explanations, or markdown formatting.
- If no food recipe is found in the text, your response MUST be EXACTLY the following JSON object: {"recipeFound": false}
Do not include any introductory phrases like "Here is the JSON:" or explanations.
`;

    const userPrompt = `Here is the text content:\n\n${textContent}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', // Or another suitable model
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: "json_object" }, // Enforce JSON output if using compatible models
      temperature: 0.2, // Lower temperature for more deterministic output
    });

    const responseContent = completion.choices[0]?.message?.content;

    if (!responseContent) {
      throw new Error('No response content received from OpenAI');
    }

    try {
      const recipeJson = JSON.parse(responseContent);
      // Basic check if it looks like the "not found" response
      if (recipeJson.recipeFound === false) {
        return NextResponse.json(recipeJson);
      }
      // Assume it's a recipe if it's valid JSON and not the "not found" object
      // More robust validation against schema.org/Recipe could be added here if needed
      return NextResponse.json(recipeJson);
    } catch (parseError) {
      console.error('Failed to parse OpenAI response as JSON:', parseError);
      console.error('Raw OpenAI response:', responseContent);
      // Fallback if JSON parsing fails but content exists - maybe treat as not found?
      return NextResponse.json({ recipeFound: false, error: 'Failed to process recipe data' });
    }

  } catch (error: any) {
    console.error('Error processing recipe extraction request:', error);
    let errorMessage = 'Internal Server Error';
    let statusCode = 500;

    if (error instanceof OpenAI.APIError) {
        errorMessage = `OpenAI API Error: ${error.status} ${error.name} ${error.message}`;
        statusCode = error.status || 500;
    } else if (error.message.includes('textContent')) {
        // Handle specific validation errors if needed, though handled above
        errorMessage = error.message;
        statusCode = 400;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}