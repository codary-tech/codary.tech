import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE, LOCALES, type Lang, type Multilingual } from "./types";
import { ui } from "./ui";

/**
 * Helper to get the translation function
 * @param - The current language
 * @returns - The translation function
 */
export function useTranslations(lang: Lang) {
	return function t(multilingualOrKey: Multilingual | string): string {
		if (typeof multilingualOrKey === "string") {
			// Cuando es una cadena, busca en ui[lang] o ui[DEFAULT_LOCALE]
			return (
				ui[lang][multilingualOrKey] ??
				ui[DEFAULT_LOCALE][multilingualOrKey] ??
				multilingualOrKey
			);
		}
		// Cuando es un objeto TextMultilingual, devuelve el valor para lang o DEFAULT_LOCALE
		return multilingualOrKey[lang] ?? multilingualOrKey[DEFAULT_LOCALE] ?? "";
	};
}

/**
 * Helper to get corresponding path list for all locales
 * @param url - The current URL object
 * @returns - The list of locale paths
 */
export function getLocalePaths(url: URL): LocalePath[] {
	return Object.keys(LOCALES).map((lang) => {
		return {
			lang: lang as Lang,
			path: getRelativeLocaleUrl(
				lang,
				url.pathname.replace(/^\/[a-zA-Z-]+/, ""),
			),
		};
	});
}
type LocalePath = {
	lang: Lang;
	path: string;
};

/**
 * Helper to get locale parms for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
	params: { lang },
}));
