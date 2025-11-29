'use server';

import { headers } from 'next/headers';

const apiKey = process.env.OPENAI_API_KEY;

export async function generateToken() {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/realtime/client_secrets",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session: {
            type: "realtime",
            model: "gpt-realtime",
            audio: {
              output: {
                voice: "verse",
              },
            },
          },
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Token generation error:", error);
    return { success: false, error: "Failed to generate token" };
  }
}
