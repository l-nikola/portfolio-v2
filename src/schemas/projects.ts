import { z } from "astro:content";

export const projectSchema = z.object({
  title: z.string(),
  date: z.date(),
  context: z.string(),
  stack: z.array(z.string()).default([]),
  links: z.object({
    github: z.string().optional(),
    figma: z.string().optional(),
    site: z.string().optional(),
  }),
  cover: z.string().optional(),
});
