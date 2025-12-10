import { z } from "astro:content";

export const contextSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});
