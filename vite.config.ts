import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import path from "node:path";

export default defineConfig({
	root: "src/",
	publicDir: "../public/",
	base: "./",
	plugins: [glsl()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
