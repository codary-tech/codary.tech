/// <reference types="vitest" />

import { resolve } from "node:path";
import { getViteConfig } from "astro/config";
import { defineConfig } from "vitest/config";

// Use the parameter type of defineConfig so we don't tie to a specific Vite version's types.
type DefineConfigParam = Parameters<typeof defineConfig>[0];

// Normalize raw config from Astro (function or object) to a narrow shape.
const raw = getViteConfig;
const astroViteConfig = (typeof raw === "function" ? raw({}) : raw) as unknown;

// Local narrow types to avoid using `any` while describing the pieces we read.
type ResolveLike = { alias?: Record<string, string> } & Record<string, unknown>;
type TestLike = Record<string, unknown>;

function pickResolve(src: unknown): ResolveLike | undefined {
	if (src && typeof src === "object") {
		const maybe = src as Record<string, unknown>;
		const resolveVal = maybe.resolve;
		if (resolveVal && typeof resolveVal === "object")
			return resolveVal as ResolveLike;
	}
	return undefined;
}

function pickTest(src: unknown): TestLike | undefined {
	if (src && typeof src === "object") {
		const maybe = src as Record<string, unknown>;
		const testVal = maybe.test;
		if (testVal && typeof testVal === "object") return testVal as TestLike;
	}
	return undefined;
}

const existingResolve = pickResolve(astroViteConfig) || ({} as ResolveLike);
const existingAlias = existingResolve.alias || {};
const existingTest = pickTest(astroViteConfig) || ({} as TestLike);

const merged = {
	// start from whatever Astro provided (unknown -> typed below)
	...(astroViteConfig as DefineConfigParam),
	resolve: {
		...(existingResolve as Record<string, unknown>),
		alias: {
			...(existingAlias as Record<string, string>),
			"@": resolve(__dirname, "src"),
			"@/": resolve(__dirname, "src/"),
			"astro:i18n": resolve(__dirname, "src/__mocks__/astro-i18n.ts"),
		},
	},
	test: {
		...(existingTest as Record<string, unknown>),
	},
} as DefineConfigParam;

export default defineConfig(merged);
