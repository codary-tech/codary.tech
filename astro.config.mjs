import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { defineConfig, envField, passthroughImageService } from "astro/config";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./src/i18n/locales";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";
import { BASE_URL } from "./src/consts.ts";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	site: BASE_URL,
	compressHTML: true,
	output: "server",
	adapter: cloudflare({
		platformProxy: {
		  enabled: true
		}
	  }),
	i18n: {
		defaultLocale: DEFAULT_LOCALE_SETTING,
		locales: Object.keys(LOCALES_SETTING),
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},

	env: {
		schema: {
			AHREFS_KEY: envField.string({
				context: "client",
				access: "public",
			}),
			SUPABASE_URL: envField.string({
				context: "client",
				access: "public",
			}),
			SUPABASE_ANON_KEY: envField.string({
				context: "client",
				access: "public",
			}),
		},
	},

	image: {
		service: passthroughImageService(),
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.unsplash.com",
			},
		],
	},

	integrations: [
		mdx(),
		pagefind(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
				debug: false,
			},
		}),
		sitemap({
			i18n: {
				defaultLocale: DEFAULT_LOCALE_SETTING,
				locales: Object.fromEntries(
					Object.entries(LOCALES_SETTING).map(([key, value]) => [
						key,
						value.lang ?? key,
					]),
				),
			},
		}),
		icon({
			include: {
				tabler: ["*"],
			},
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
});
