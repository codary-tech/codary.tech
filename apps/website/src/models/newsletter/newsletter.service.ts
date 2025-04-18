/**
 * Service layer for managing newsletter-related operations
 * @module newsletterService
 */

import { getCollection } from "astro:content";
import { parseEntityId } from "@/utils/collection.entity";
import type { NewsletterCriteria } from "./newsletter.criteria";
import { toNewsletters } from "./newsletter.mapper";
import type Newsletter from "./newsletter.model";

/**
 * Retrieves newsletters from the content collection with filtering options
 * @async
 * @param {NewsletterCriteria} criteria - Criteria for filtering newsletters
 * @returns {Promise<Newsletter[]>} A promise that resolves to an array of filtered Newsletter objects
 */
export async function getNewsletters(
	criteria?: NewsletterCriteria,
): Promise<Newsletter[]> {
	const {
		lang,
		includeDrafts = false,
		author,
		tags,
		dateFrom,
		dateTo,
	} = criteria || {};

	const newsletters = await getCollection("newsletter", ({ id, data }) => {
		// Always check draft status unless includeDrafts is true
		if (!includeDrafts && data.draft) return false;

		// Filter by language if provided
		if (lang) {
			const newsletterLang = parseEntityId(id).lang;
			if (newsletterLang !== lang) return false;
		}

		// Filter by author if provided
		if (author) {
			const authorsToMatch = Array.isArray(author) ? author : [author];
			if (!data.author || !authorsToMatch.includes(data.author.id))
				return false;
		}

		// Filter by tags if provided
		if (tags) {
			const tagsToMatch = Array.isArray(tags) ? tags : [tags];
			if (
				!data.tags ||
				!tagsToMatch.some((tag) => data.tags.some((t) => t.id === tag))
			)
				return false;
		}

		// Filter by date range if provided
		if (dateFrom && new Date(data.date) < dateFrom) return false;
		if (dateTo && new Date(data.date) > dateTo) return false;

		return true;
	});

	return toNewsletters(newsletters);
}

/**
 * Retrieves a specific newsletter by its ID
 * @async
 * @param {string} id - The unique identifier of the newsletter to retrieve
 * @returns {Promise<Newsletter | undefined>} A promise that resolves to either an newsletter object if found, or undefined if not found
 */
export async function getNewsletterById(
	id: string,
): Promise<Newsletter | undefined> {
	const newsletters = await getNewsletters();
	return newsletters.find((newsletter) => newsletter.id === id);
}
/**
 * Checks if newsletters exist based on given criteria
 * @async
 * @param {NewsletterCriteria} criteria - Criteria for filtering newsletters
 * @returns {Promise<boolean>} A promise that resolves to true if newsletters exist, false otherwise
 */
export async function hasNewsletters(
	criteria: NewsletterCriteria = { includeDrafts: false },
): Promise<boolean> {
	const newsletters = await getNewsletters(criteria);
	return newsletters.length > 0;
}
