import { GoogleGenAI } from "@google/genai";

const project = process.env.GCP_PROJECT || '';
const location = process.env.GCP_LOCATION || 'us-central1';
const modelName = 'gemini-2.5-flash';

const ai = new GoogleGenAI({
  vertexai: true,
  project: project,
  location: location
});

export async function scaleRecipe(ingredients: string[], scaleFactor: number): Promise<{ scaledIngredients: string[] }> {
  if (!project) {
    throw new Error('GCP_PROJECT environment variable is not set.');
  }

  const systemPromptContent = `
You are an expert chef. Scale the following list of ingredients by a factor of ${scaleFactor}.
Return ONLY a valid JSON object with a single key "scaledIngredients" containing the list of scaled ingredient strings.
Do not include any other text or markdown formatting.
Example input: ["1 cup flour"], factor 2
Example output: {"scaledIngredients": ["2 cups flour"]}
`;

  const req = {
    model: modelName,
    contents: [{ 
      role: 'user', 
      parts: [
        { text: systemPromptContent },
        { text: JSON.stringify(ingredients) }
      ] 
    }],
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
