import { NextResponse } from 'next/server';
import { extractRecipe } from '@/lib/extractor';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { textContent, imageContent } = body;

    if ((!textContent || typeof textContent !== 'string') && !imageContent) {
      return NextResponse.json({ error: 'Missing or invalid textContent or imageContent in request body' }, { status: 400 });
    }

    const recipeJson = await extractRecipe(textContent, imageContent);
    return NextResponse.json(recipeJson);

  } catch (error: any) {
    console.error('Error processing recipe extraction request:', error);
    let errorMessage = 'Internal Server Error';
    let statusCode = 500;

    if (error instanceof SyntaxError) {
      return NextResponse.json({ recipeFound: false, error: 'Failed to process recipe data' });
    }

    if (error.message?.includes('textContent')) {
        errorMessage = error.message;
        statusCode = 400;
    } else if (error.code === 7 || error.message?.includes('permission denied') || error.message?.includes('authentication')) {
        errorMessage = 'Server configuration error: Authentication/Authorization failed with Google Cloud Vertex AI.';
    } else if (error.message?.includes('GCP_PROJECT')) {
        errorMessage = 'Server configuration error: GCP Project ID not found or invalid.';
    } else if (error.message?.includes('Quota') || error.code === 8) {
        errorMessage = 'API quota exceeded. Please try again later.';
        statusCode = 429;
    } else {
        errorMessage = `Extraction Error (${error.code || 'N/A'}): ${error.details || error.message}`;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}