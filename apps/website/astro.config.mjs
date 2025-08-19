import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { BASE_URL } from "./src/consts.ts";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./src/i18n/locales";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
	site: BASE_URL,
	compressHTML: true,
	output: "server",
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
			configPath: "wrangler.jsonc", // Explicitly specify your config file
			persist: true, // Enable local binding persistence for development
		},
		imageService: "cloudflare", // Use Cloudflare's image optimization service
		routes: {
			extend: {
				// Exclude static assets from server function for better performance
				exclude: [
					{ pattern: "/fonts/*" },
					{ pattern: "/images/*" },
					{ pattern: "/_astro/*" },
				],
			},
		},
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
				context: "server",
				access: "secret",
			}),
			SUPABASE_URL: envField.string({
				context: "server",
				access: "secret",
			}),
			SUPABASE_KEY: envField.string({
				context: "server",
				access: "secret",
			}),
		},
	},

	image: {
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
			filter: (page) => page !== `${BASE_URL}/admin/`,
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
				openmoji: ["*"],
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
