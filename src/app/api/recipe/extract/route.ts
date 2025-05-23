import { NextResponse } from 'next/server';
import { VertexAI, HarmCategory, HarmBlockThreshold } from '@google-cloud/vertexai';

// Initialize Vertex AI
const project = process.env.GCP_PROJECT || '';
const location = process.env.GCP_LOCATION || 'us-central1'; // Default location, adjust if needed

if (!project) {
  console.error('GCP_PROJECT environment variable is not set.');
  // Optionally throw an error or handle appropriately if project ID is absolutely required at startup
}

const vertexAI = new VertexAI({ project: project, location: location });

const modelName = 'gemini-2.0-flash-lite'; // Use appropriate Vertex AI model name

const generativeModel = vertexAI.getGenerativeModel({
  model: modelName,
  // Safety settings and generation config are now part of the request
});


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { textContent } = body;

    if (!textContent || typeof textContent !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid textContent in request body' }, { status: 400 });
    }

    // Check for necessary environment variables for Vertex AI
    if (!project) {
        // This check might be redundant if handled at initialization, but good for clarity within the request handler
        console.error('GCP_PROJECT environment variable is not set.');
        return NextResponse.json({ error: 'Server configuration error: GCP Project ID not found.' }, { status: 500 });
    }
    // Location check might also be redundant depending on initialization strategy
    // if (!location) {
    //    console.error('GCP_LOCATION environment variable is not set and no default provided.');
    //    return NextResponse.json({ error: 'Server configuration error: GCP Location not found.' }, { status: 500 });
    // }

    // System instruction integrated into the user message structure for Vertex AI
    const systemPromptContent = `
You are an expert recipe extractor. Analyze the provided text content from a webpage.
Your task is to determine if the text contains a food recipe.
- If a food recipe is found, extract its details (name, ingredients, instructions, prepTime, cookTime, recipeYield, etc.) and format them STRICTLY as a JSON object conforming to the schema.org/Recipe standard (https://schema.org/Recipe). Your response MUST contain ONLY the valid JSON object, with no extra text, explanations, or markdown formatting.
- If no food recipe is found in the text, your response MUST be EXACTLY the following JSON object: {"recipeFound": false}
Do not include any introductory phrases like "Here is the JSON:" or explanations.
`;

     const userMessage = {
        role: 'user',
        parts: [{ text: `${systemPromptContent}\n\nHere is the text content:\n\n${textContent}` }],
    };

    // Construct the request for Vertex AI
    const req = {
        contents: [userMessage],
        generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.2,
        },
        safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        ],
        // systemInstruction: { parts: [{ text: systemPromptContent }] } // Use this if SDK supports direct systemInstruction
    };

    // Using generateContent (non-streaming) for simplicity unless streaming is required
    const resp = await generativeModel.generateContent(req);
    const aggregatedResponse = resp.response; // Access the response object directly


    // Extract text from the aggregated response
    const responseContent = aggregatedResponse.candidates?.[0]?.content?.parts?.[0]?.text;


    if (!responseContent) {
      const blockReason = aggregatedResponse.promptFeedback?.blockReason;
      if (blockReason) {
          console.error(`Request blocked due to safety settings: ${blockReason}`);
          // Return the standard "not found" response when blocked, or a specific error
          return NextResponse.json({ recipeFound: false, error: `Content blocked: ${blockReason}` });
      }
      // Check finish reason if available
      const finishReason = aggregatedResponse.candidates?.[0]?.finishReason;
      console.error(`No response content received. Finish reason: ${finishReason}`);
      throw new Error(`No response content received from Vertex AI. Finish Reason: ${finishReason || 'Unknown'}`);
    }

    try {
      // The response should already be JSON if responseMimeType is respected
      const recipeJson = JSON.parse(responseContent);
      if (recipeJson.recipeFound === false) {
        return NextResponse.json(recipeJson);
      }
      return NextResponse.json(recipeJson);
    } catch (parseError) {
      console.error('Failed to parse Vertex AI response as JSON (even with responseMimeType):', parseError);
      console.error('Raw Vertex AI response:', responseContent);
      // Fallback if JSON parsing fails unexpectedly
      return NextResponse.json({ recipeFound: false, error: 'Failed to process recipe data' });
    }

  } catch (error: any) {
    console.error('Error processing recipe extraction request with Vertex AI:', error);
    let errorMessage = 'Internal Server Error';
    let statusCode = 500;

    if (error.message.includes('textContent')) {
        errorMessage = error.message;
        statusCode = 400;
    } else if (error.code === 7 || error.message.includes('permission denied') || error.message.includes('authentication')) {
        // gRPC code 7 is PERMISSION_DENIED
        errorMessage = 'Server configuration error: Authentication/Authorization failed with Google Cloud Vertex AI.';
        statusCode = 500; // Or 403 Forbidden? 500 seems safer for server config issues.
    } else if (error.message.includes('GCP_PROJECT')) {
        errorMessage = 'Server configuration error: GCP Project ID not found or invalid.';
        statusCode = 500;
    } else if (error.message.includes('Quota') || error.code === 8) {
         // gRPC code 8 is RESOURCE_EXHAUSTED (often quota)
        errorMessage = 'API quota exceeded. Please try again later.';
        statusCode = 429; // Too Many Requests
    } else {
        errorMessage = `Vertex AI Error (${error.code || 'N/A'}): ${error.details || error.message}`;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}