import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { getPrimaryTopic, getVesselLabel } from './lib/topics';

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    subheadline: z.string().optional(),
    date: z.string(),
    location: z.string().optional(),
    slug: z.string(),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }).transform((data) => ({
    ...data,
    topic: getPrimaryTopic(data.tags),
    vessel: getVesselLabel(data.tags),
  })),
});

export const collections = { news };
