import { type CollectionEntry, getEntries, getEntry } from "astro:content";
import { toImageMetadata } from "@/utils/image.utils";
import { toAuthor } from "../author";
import { toTag } from "../tag";
import type Newsletter from "./newsletter.model";

/**
 * Maps a collection entry of type "newsletter" to an Article object.
 *
 * @param newsletterEntry - The collection entry containing article data
 * @throws {Error} If the author is not found for the article
 * @throws {Error} If the category is not found for the article
 * @returns Promise containing the mapped Article object
 */
export async function toNewsletter(
	newsletterEntry: CollectionEntry<"newsletter">,
): Promise<Newsletter> {
	const author = await getEntry(newsletterEntry.data.author);
	const tags = await getEntries(newsletterEntry.data.tags);

	if (!author) {
		throw new Error(`Author not found for article: ${newsletterEntry.id}`);
	}

	return {
		id: newsletterEntry.id,
		title: newsletterEntry.data.title,
		description: newsletterEntry.data.description,
		author: toAuthor(author),
		cover: toImageMetadata(newsletterEntry.data.cover),
		tags: tags.map(toTag),
		draft: newsletterEntry.data.draft,
		body: newsletterEntry.body ?? "",
		date: newsletterEntry.data.date,
		lastModified: newsletterEntry.data.lastModified,
		entry: newsletterEntry,
	};
}

/**
 * Converts an array of article collection entries to an array of Article objects.
 *
 * @param newsletter - Array of collection entries of type "newsletter"
 * @returns Promise containing an array of mapped Article objects
 */
export async function toNewsletters(
	newsletter: CollectionEntry<"newsletter">[],
): Promise<Newsletter[]> {
	return Promise.all(newsletter.map(toNewsletter));
}
