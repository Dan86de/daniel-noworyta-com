import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		tanstackStart({ target: "vercel", customViteReactPlugin: true }),
		tailwindcss(),
		tsConfigPaths(),
	  react(),
	],
});
