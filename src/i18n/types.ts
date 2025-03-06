import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./locales";
/**
 * User-defined locales list
 */
export const LOCALES = LOCALES_SETTING as Record<string, LocaleConfig>;
type LocaleConfig = {
	readonly label: string;
	readonly lang?: string;
	readonly dir?: "ltr" | "rtl";
};

/**
 * Type for the language code
 * @example
 * "en" | "ja" | ...
 */
export type Lang = keyof typeof LOCALES;

/**
 * Default locale code
 * @constant @readonly
 */
export const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING as Lang;

// Tipo para las traducciones de la UI (siempre objetos por idioma)
export type UIMultilingual = { [key in Lang]: Record<string, string> };

// Tipo para el texto multilingüe pasado a t (cadenas por idioma)
export type Multilingual = { [key in Lang]?: string };
