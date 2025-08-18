// Minimal mock of 'astro:i18n' used in tests
// Only implements getRelativeLocaleUrl used by the codebase
export function getRelativeLocaleUrl(lang: string, path: string): string {
	// Ensure path begins with slash
	const normalized = path.startsWith("/") ? path : `/${path}`;
	// If lang is empty or root-like, return normalized
	if (!lang) return normalized;
	// Remove existing lang prefix if present
	const stripped = normalized.replace(/^\/[a-zA-Z-]+/, "");
	return `/${lang}${stripped}`;
}
