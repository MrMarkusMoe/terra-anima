import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Jedes Retreat ist eine Markdown-Datei in src/content/retreats/.
 * Die Felder sind fest definiert – so sieht jedes Retreat gleich aus.
 */
const retreats = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/retreats' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date(),
    location: z.string(),
    price: z.string(),
    spots: z.number().int().positive(),
    focus: z.array(z.enum(['psychologie', 'spirit', 'balance', 'rhythmus'])).default([]),
    tallyUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { retreats };
