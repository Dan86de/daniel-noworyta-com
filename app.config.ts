import contentCollections from "@content-collections/vinxi";
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  tsr: {
    appDirectory: "app",
  },
  vite: {
    plugins: [
      contentCollections(),
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
  },
  react: {
    babel: {
      plugins: [
        [
          "babel-plugin-react-compiler",
          {
            target: "19",
          },
        ],
      ],
    },
  },
  server: {
    preset: "vercel",
    hooks: {
      "prerender:routes": async (routes) => {
        // add each post path to the routes set
        const { allArticles } = await import("./.content-collections/generated");
        for (const article of allArticles) {
          routes.add(`/articles/${article.slug}`);
        }
      },
    },
  },
});
