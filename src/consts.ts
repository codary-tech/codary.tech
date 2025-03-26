// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = "Codary";

export const SITE_DESCRIPTION: string | Multilingual = {
	en: "A starter template for Astro with i18n support.",
	es: "Una plantilla inicial para Astro con soporte i18n.",
};

export const X_ACCOUNT: string | Multilingual = "@yacosta738";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
	en: "This page is not available in your language.",
	es: "Esta página no está disponible en tu idioma.",
};

// Base URLs
const BASE_URL_LOCAL = "http://localhost:4321";
const BASE_URL_PROD = "https://codary.tech";
export const BASE_URL = import.meta.env.DEV ? BASE_URL_LOCAL : BASE_URL_PROD;

// cookies identifiers
export const ACCESS_TOKEN = "sb-access-token";
export const REFRESH_TOKEN = "sb-refresh-token";
