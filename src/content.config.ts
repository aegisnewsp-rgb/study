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
    generated: z.union([z.string(), z.date()]).transform((v) => typeof v === 'string' ? v : v.toISOString().slice(0, 10)),
    // Real last-edit date stamped by the curate worker on rewrite. Optional:
    // notes that have never been rewritten fall back to `generated` at render.
    lastUpdated: z.union([z.string(), z.date()]).transform((v) => typeof v === 'string' ? v : v.toISOString().slice(0, 10)).optional(),
    diagramPrompt: z.string().optional(),
  }),
});

export const collections = { notes };
