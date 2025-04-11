import { getCollection } from "astro:content";
import { parseEntityId } from "@/utils/collection.entity";
import type { AppCriteria } from "./app.criteria";
import { toApps } from "./app.mapper";
import type App from "./app.model";

/**
 * Retrieves apps from the content collection with filtering options
 * @async
 * @param {AppCriteria} criteria - Criteria for filtering apps
 * @returns {Promise<App[]>} A promise that resolves to an array of filtered App objects
 */
export async function getApps(criteria?: AppCriteria): Promise<App[]> {
	const { lang, sponsored = false, tags } = criteria || {};

	const apps = await getCollection("apps", ({ id, data }) => {
		// Filter by language if provided
		if (lang) {
			const appLang = parseEntityId(id).lang;
			if (appLang !== lang) return false;
		}

		// Filter by tags if provided
		if (tags) {
			const tagsToMatch = Array.isArray(tags) ? tags : [tags];
			if (
				!data.tags ||
				!tagsToMatch.some((tag) => data.tags?.some((t) => t.id === tag))
			)
				return false;
		}

		// Filter by sponsored if provided
		if (sponsored !== undefined && data.isSponsored !== sponsored) return false;

		return true;
	});

	return toApps(apps);
}

/**
 * Retrieves a specific app by its ID
 * @async
 * @param {string} id - The ID of the app to retrieve
 * @returns {Promise<App | null>} A promise that resolves to the App object or null if not found
 */
export async function getApp(id: string): Promise<App | null> {
	const app = await getApps({ id });
	if (app.length === 0) return null;
	return app[0];
}

/**
 * Checks if an app exist based on a given criteria
 * @async
 * @param {AppCriteria} criteria - Criteria for filtering apps
 * @returns {Promise<boolean>} A promise that resolves to true if the app exists, false otherwise
 */
export async function hasApps(criteria: AppCriteria = {}): Promise<boolean> {
	const apps = await getApps(criteria);
	return apps.length > 0;
}
