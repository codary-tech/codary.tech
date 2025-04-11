import { type CollectionEntry, getEntries } from "astro:content";
import { toTag } from "../tag";
import type App from "./app.model";

/**
 * Maps a collection entry of type "apps" to an App object.
 *
 * @param appData - The collection entry containing app data
 * @returns Promise containing the mapped App object
 */
export async function toApp(appData: CollectionEntry<"apps">): Promise<App> {
	const tagEntries = appData.data.tags || [];
	const tags = await getEntries(tagEntries);

	return {
		id: appData.id,
		name: appData.data.name,
		description: appData.data.description,
		icon: appData.data.icon,
		url: appData.data.url,
		isSponsored: appData.data.isSponsored,
		tags: tags.map(toTag),
	};
}

/**
 * Converts an array of app collection entries to an array of App objects.
 *
 * @param apps - Array of collection entries of type "apps"
 * @returns Promise containing an array of mapped App objects
 */
export async function toApps(apps: CollectionEntry<"apps">[]): Promise<App[]> {
	return Promise.all(apps.map(toApp));
}
