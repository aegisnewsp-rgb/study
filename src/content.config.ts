import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    exam: z.string(),
    examName: z.string(),
    subject: z.string(),
    subjectName: z.string(),
    topic: z.string(),
    topicName: z.string(),
    weight: z.number(),
    country: z.string(),
    generated: z.string(),
    diagramPrompt: z.string().optional(),
  }),
});

export const collections = { notes };
