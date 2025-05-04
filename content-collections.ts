import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const articles = defineCollection({
  name: "articles",
  directory: "content/articles",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    author: z.string(),
    authorAvatar: z.string(),
    status: z.enum(["draft", "published"]),
    tags: z.array(z.string()),
    type: z.enum(["article", "tutorial"]),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    const slug = document._meta.path.split("/").pop() as string;
    return {
      ...document,
      mdx,
      slug,
    };
  },
});

export default defineConfig({
  collections: [articles],
});
