/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import { defineConfig } from "vitest/config";

// Merge Astro's Vite configuration with Vitest's defineConfig. This avoids
// casting to `any` while providing the `test` property expected by Vitest.
const astroViteConfig = getViteConfig({});

export default defineConfig({
	...astroViteConfig,
	test: {
		// Vitest configuration options
	},
});
