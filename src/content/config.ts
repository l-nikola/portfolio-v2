import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { projectSchema } from "@/schemas/projects";
import { contextSchema } from "@/schemas/contexts";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: projectSchema,
});

const contexts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/contexts" }),
  schema: contextSchema,
});

export const collections = {
  projects,
  contexts,
};
