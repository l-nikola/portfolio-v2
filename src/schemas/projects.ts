import { reference, z } from "astro:content";

// prettier-ignore
export const projectSchema = z.object({
  title: z.string(),
  date: z.date(),
  context: reference("contexts"),
  stack: z.array(z.string()).default([]),
  links: z.object({
      github: z.string().optional(),
      figma: z.string().optional(),
      site: z.string().optional(),
    }).optional(),
  cover: z.string().optional(),
});
