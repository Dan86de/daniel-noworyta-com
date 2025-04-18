import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	tsr: {
		appDirectory: "app",
	},
	vite: {
		plugins: [
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
	},
});
