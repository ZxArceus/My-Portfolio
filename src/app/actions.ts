'use server';

import {
  generateAboutMeVariations,
  type GenerateAboutMeVariationsInput,
} from '@/ai/flows/generate-about-me-variations';

export async function generateVariationsAction(
  input: GenerateAboutMeVariationsInput
) {
  try {
    const result = await generateAboutMeVariations(input);
    if (result && result.variations && result.variations.length > 0) {
      return { success: true, variations: result.variations };
    }
    return {
      success: false,
      error: 'Could not generate variations. The AI model might be unavailable.',
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
