import { NextResponse } from 'next/server';
import { scaleRecipe } from '@/lib/scaling';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ingredients, scaleFactor } = body;

    if (!ingredients || !Array.isArray(ingredients) || typeof scaleFactor !== 'number') {
      return NextResponse.json({ error: 'Invalid input. "ingredients" must be an array of strings and "scaleFactor" must be a number.' }, { status: 400 });
    }

    const result = await scaleRecipe(ingredients, scaleFactor);
    return NextResponse.json(result);

  } catch (error: any) {
    console.error('Error processing recipe scaling request:', error);
    let errorMessage = 'Internal Server Error';
    let statusCode = 500;

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Failed to process scaling data' });
    }

    if (error.code === 7 || error.message?.includes('permission denied') || error.message?.includes('authentication')) {
        errorMessage = 'Server configuration error: Authentication/Authorization failed with Google Cloud Vertex AI.';
    } else if (error.message?.includes('GCP_PROJECT')) {
        errorMessage = 'Server configuration error: GCP Project ID not found or invalid.';
    } else if (error.message?.includes('Quota') || error.code === 8) {
        errorMessage = 'API quota exceeded. Please try again later.';
        statusCode = 429;
    } else {
        errorMessage = `Scaling Error (${error.code || 'N/A'}): ${error.details || error.message}`;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
