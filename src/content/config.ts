import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { projectSchema } from "@/schemas/projects";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: projectSchema,
});

export const collections = {
  projects,
};
