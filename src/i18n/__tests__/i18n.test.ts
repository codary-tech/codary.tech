import { beforeEach, describe, expect, test, vi } from "vitest";
import { useTranslatedPath, useTranslations } from "../i18n";
import { DEFAULT_LOCALE, type Lang, type Multilingual } from "../types";
import { ui } from "../ui";

// Define mock function before vi.mock
const mockShowDefaultLang = vi.fn().mockReturnValue(false);

// Mock the ui module
vi.mock("../ui", () => ({
	ui: {
		en: {
			hello: "Hello",
			welcome: "Welcome {name}",
			missing: "This exists in English",
			repeat: "Hello {name}, {name}!",
			complex: "Hello {name}, you are {age} years old.",
		},
		es: {
			hello: "Hola",
			welcome: "Bienvenido {name}",
			// Note: 'missing' key doesn't exist in Spanish
		},
	},
}));

// Mock the types module
vi.mock("../types", () => ({
	DEFAULT_LOCALE: "en",
	LOCALES: { en: "English", es: "Spanish" },
	// Use the mock function here
	get SHOW_DEFAULT_LANG_IN_URL() {
		return mockShowDefaultLang();
	},
}));

describe("useTranslations", () => {
	test("returns translation for string key in specified language", () => {
		const t = useTranslations("es");
		expect(t("hello")).toBe("Hola");
	});

	test("falls back to DEFAULT_LOCALE when key is missing in specified language", () => {
		const t = useTranslations("es");
		expect(t("missing")).toBe("This exists in English");
	});

	test("returns the key itself when translation doesn't exist in any language", () => {
		const t = useTranslations("en");
		expect(t("nonexistent")).toBe("nonexistent");
	});

	test("returns correct translation for multilingual object", () => {
		const t = useTranslations("es");
		const multilingual: Multilingual = {
			en: "Hello world",
			es: "Hola mundo",
		};
		expect(t(multilingual)).toBe("Hola mundo");
	});

	test("falls back to DEFAULT_LOCALE when key is missing in multilingual object", () => {
		const t = useTranslations("es");
		const multilingual: Multilingual = {
			en: "English only",
			// No Spanish translation
		};
		expect(t(multilingual)).toBe("English only");
	});

	test("returns empty string when multilingual object has no matching language", () => {
		const t = useTranslations("es");
		const multilingual: Multilingual = {
			de: "Deutsch",
			// No Spanish or English translation
		};
		expect(t(multilingual)).toBe("");
	});

	test("replaces variables in translation string", () => {
		const t = useTranslations("en");
		expect(t("welcome", { name: "John" })).toBe("Welcome John");
	});

	test("replaces multiple occurrences of the same variable", () => {
		const t = useTranslations("en");
		// No need to spy on repeat since it's already defined in the mock
		expect(t("repeat", { name: "John" })).toBe("Hello John, John!");
	});

	test("handles multiple different variables", () => {
		const t = useTranslations("en");
		// No need to spy on complex since it's already defined in the mock
		expect(t("complex", { name: "John", age: 30 })).toBe(
			"Hello John, you are 30 years old.",
		);
	});
});

describe("useTranslatedPath", () => {
	beforeEach(() => {
		// Reset the mock before each test
		mockShowDefaultLang.mockReset();
		mockShowDefaultLang.mockReturnValue(false); // Default value
	});

	test("translates a simple path to a non-default language", () => {
		mockShowDefaultLang.mockReturnValue(false);
		const translatePath = useTranslatedPath("en");
		expect(translatePath("/about", "es")).toBe("/es/about");
	});

	test("when SHOW_DEFAULT_LANG_IN_URL is false, default language has no prefix", () => {
		mockShowDefaultLang.mockReturnValue(false);
		const translatePath = useTranslatedPath("en");
		expect(translatePath("/about", "en")).toBe("/about");
	});

	test("when SHOW_DEFAULT_LANG_IN_URL is true, default language has prefix", () => {
		mockShowDefaultLang.mockReturnValue(true);
		const translatePath = useTranslatedPath("en");
		expect(translatePath("/about", "en")).toBe("/en/about");
	});

	test("normalizes paths without a leading slash", () => {
		mockShowDefaultLang.mockReturnValue(false);
		const translatePath = useTranslatedPath("en");
		expect(translatePath("about", "es")).toBe("/es/about");
	});

	test("prevents duplicate language prefixes", () => {
		mockShowDefaultLang.mockReturnValue(true);
		const translatePath = useTranslatedPath("en");
		expect(translatePath("/en/about", "en")).toBe("/en/about");
		expect(translatePath("/es/privacy-policy", "es")).toBe(
			"/es/privacy-policy",
		);
	});

	test("uses the current language when no target language is specified", () => {
		mockShowDefaultLang.mockReturnValue(false);
		const translatePath = useTranslatedPath("es");
		expect(translatePath("/about")).toBe("/es/about");
	});
});
