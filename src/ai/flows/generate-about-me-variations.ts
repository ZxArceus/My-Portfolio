// 'use server';

/**
 * @fileOverview Generates alternative 'About Me' sections with different styles and lengths.
 *
 * - generateAboutMeVariations - A function that generates About Me variations.
 * - GenerateAboutMeVariationsInput - The input type for the generateAboutMeVariations function.
 * - GenerateAboutMeVariationsOutput - The return type for the generateAboutMeVariations function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeVariationsInputSchema = z.object({
  originalAboutMe: z.string().describe('The original About Me section.'),
  style: z.string().describe('The desired style of the About Me section (e.g., professional, casual, humorous).'),
  length: z.string().describe('The desired length of the About Me section (e.g., short, medium, long).'),
  numVariations: z.number().describe('The number of variations to generate.').default(3),
});
export type GenerateAboutMeVariationsInput = z.infer<typeof GenerateAboutMeVariationsInputSchema>;

const GenerateAboutMeVariationsOutputSchema = z.object({
  variations: z.array(z.string()).describe('An array of generated About Me variations.'),
});
export type GenerateAboutMeVariationsOutput = z.infer<typeof GenerateAboutMeVariationsOutputSchema>;

export async function generateAboutMeVariations(input: GenerateAboutMeVariationsInput): Promise<GenerateAboutMeVariationsOutput> {
  return generateAboutMeVariationsFlow(input);
}

const generateAboutMeVariationsPrompt = ai.definePrompt({
  name: 'generateAboutMeVariationsPrompt',
  input: {schema: GenerateAboutMeVariationsInputSchema},
  output: {schema: GenerateAboutMeVariationsOutputSchema},
  prompt: `You are an AI assistant helping users generate variations of their "About Me" sections for their portfolio websites.

  The user will provide their original "About Me" section, the desired style, the desired length, and the number of variations to generate.

  Your goal is to generate the requested number of variations that adhere to the specified style and length.

  Original About Me Section: {{{originalAboutMe}}}
  Desired Style: {{{style}}}
  Desired Length: {{{length}}}
  Number of Variations: {{{numVariations}}}

  Variations:`, // Removed JSON formatting requirement
});

const generateAboutMeVariationsFlow = ai.defineFlow(
  {
    name: 'generateAboutMeVariationsFlow',
    inputSchema: GenerateAboutMeVariationsInputSchema,
    outputSchema: GenerateAboutMeVariationsOutputSchema,
  },
  async input => {
    const numVariations = input.numVariations || 3; // Use default if undefined
    const variations = [];
    for (let i = 0; i < numVariations; i++) {
      const {output} = await generateAboutMeVariationsPrompt(input);
      if (output && output.variations && output.variations.length > 0) {
        variations.push(output.variations[0]); // Changed to get only the first variation since the prompt is not a list prompt.
      }
    }
    return {variations};
  }
);
