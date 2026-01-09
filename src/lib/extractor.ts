import { GoogleGenAI } from "@google/genai";

const project = process.env.GCP_PROJECT || '';
const location = process.env.GCP_LOCATION || 'us-central1';
const modelName = 'gemini-2.5-pro';

const ai = new GoogleGenAI({
  vertexai: true,
  project: project,
  location: location
});

export async function extractRecipe(textContent?: string, imageContent?: any) {
  if (!project) {
    throw new Error('GCP_PROJECT environment variable is not set.');
  }

  const systemPromptContent = `
You are an expert recipe extractor. Analyze the provided content.
Your task is to determine if the content contains a food recipe.
- If a food recipe is found, extract its details (name, ingredients, instructions, prepTime, cookTime, recipeYield, etc.) and format them STRICTLY as a JSON object conforming to the schema.org/Recipe standard (https://schema.org/Recipe).
- For "recipeInstructions", please provide an array of strings or an array of "HowToStep" objects. If using "HowToSection", ensure the sections are meaningful.
- Your response MUST contain ONLY the valid JSON object, with no extra text, explanations, or markdown formatting.
- If no food recipe is found, your response MUST be EXACTLY the following JSON object: {"recipeFound": false}
Do not include any introductory phrases like "Here is the JSON:" or explanations.
`;

  const parts = [];
  if (imageContent) {
    parts.push(imageContent);
  }
  if (textContent) {
    parts.push({ text: textContent });
  }
  
  parts.push({ text: systemPromptContent });

  const req = {
    model: modelName,
    contents: [{ role: 'user', parts: parts }],
    config: {
      responseMimeType: "application/json",
      temperature: 0.2,
    },
  };

  const resp = await ai.models.generateContent(req);
  const responseContent = resp.text;

  if (!responseContent) {
    throw new Error('No response content received from the API.');
  }

  return JSON.parse(responseContent);
}
