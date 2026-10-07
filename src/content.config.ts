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
    // Optional per-note SERP overrides. The note page builds its <title> and
    // meta description from topicName/examName/weight, which cannot answer a
    // query the topic name does not name (a long topicName is truncated
    // mid-word, and an exam hub's "free notes" phrasing repeats on 3,000
    // pages). A note may set seoTitle/seoDescription to state the query it
    // actually ranks for. Absent = today's generated strings, unchanged.
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { notes };
