/// <reference types="vitest" />

import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"@/": resolve(__dirname, "src/"),
			"astro:i18n": resolve(__dirname, "src/__mocks__/astro-i18n.ts"),
		},
	},
	test: {
		globals: true,
		setupFiles: [],
	},
});
