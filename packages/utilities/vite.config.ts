import { resolve } from "node:path";
import { sharedViteConfig } from "@codary/config/vite.config.shared";
import { defineConfig, mergeConfig } from "vite";
import dts from "vite-plugin-dts";

/** @type {import('vite').UserConfig} */
export default defineConfig(
	mergeConfig(sharedViteConfig(__dirname), {
		build: {
			lib: {
				entry: resolve(__dirname, "src/index.ts"),
				name: "utilities",
				formats: ["es"],
			},
			target: "esnext", // transpile as little as possible
		},
		plugins: [dts({ rollupTypes: true })],
	}),
);
