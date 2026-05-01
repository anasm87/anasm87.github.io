import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    order: z.number(),
  }),
});

const educationCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/education" }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    order: z.number(),
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    techStack: z.array(z.string()),
    youtubeId: z.string().optional(),
    githubLink: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  'experience': experienceCollection,
  'education': educationCollection,
  'portfolio': portfolioCollection,
};
