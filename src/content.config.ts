import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    // One line a prospect can scan on the index page.
    summary: z.string(),
    // Longer positioning line used at the top of the case study itself.
    lede: z.string(),
    role: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    // Hidden from the index until the work is confirmed publishable / shipped.
    draft: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { work };
