import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    
    // Description: accepts both 'description' and 'summary'
    description: z.string().optional(),
    summary: z.string().optional(),
    
    // Category: accepts both 'category' and 'type' with flexible values
    category: z.string().optional(),
    type: z.string().optional(),
    
    // Status for project state
    status: z.string().optional(),
    
    // Featured project flag
    featured: z.boolean().default(false),
    
    // Image for project card
    image: z.string().optional(),
    
    // Stack/technologies used
    stack: z.array(z.string()).optional(),
    
    // Key highlights
    highlights: z.array(z.string()).optional(),
    
    // External links
    github: z.string().optional(),
    demo: z.string().optional(),
    links: z.object({
      doc: z.string().optional(),
      github: z.string().optional(),
      demo: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
