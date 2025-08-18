import { getCollection } from "astro:content";
import type { RepoCriteria } from "./repo.criteria";
import { toRepos } from "./repo.mapper";
import type Repo from "./repo.model";

/**
 * Retrieves repositories from the collection based on provided criteria.
 *
 * @param criteria - Optional filtering criteria for repository search
 * @returns Promise resolving to an array of Repo objects that match the criteria
 *
 * @example
 * // Get all repositories with at least 100 stars and JavaScript as language
 * const repos = await getRepos({ stars: 100, language: 'JavaScript' });
 */
export async function getRepos(criteria?: RepoCriteria): Promise<Repo[]> {
	const { id, url, stars, license, language, lastActivity } = criteria || {};
	const repos = await getCollection("repositories", ({ id: repoId, data }) => {
		// If id is provided, match by id
		if (id && repoId !== id) {
			return false;
		}

		// Filter by URL if specified
		if (url && data.url) {
			try {
				const urlObj1 = new URL(url);
				const urlObj2 = new URL(data.html_url);

				// Compare normalized versions of URLs (hostname + pathname)
				// Removes trailing slashes and normalizes hostname to lowercase
				const normalizedURL1 = `${urlObj1.hostname.toLowerCase()}${urlObj1.pathname.replace(/\/$/, "")}`;
				const normalizedURL2 = `${urlObj2.hostname.toLowerCase()}${urlObj2.pathname.replace(/\/$/, "")}`;

				if (normalizedURL1 !== normalizedURL2) {
					return false;
				}
			} catch (_error) {
				// Fallback to direct comparison if URL parsing fails
				if (data.html_url !== url) {
					return false;
				}
			}
		}

		// Filter by stars if specified
		if (stars !== undefined && (data.stargazers_count ?? 0) < stars) {
			return false;
		}

		// Filter by license if specified
		if (license && data.license?.name !== license) {
			return false;
		}

		// Filter by language if specified
		if (language && data.language !== language) {
			return false;
		}

		// Filter by last activity if specified
		if (lastActivity) {
			const repoLastActivity = data.updated_at
				? new Date(data.updated_at)
				: new Date();
			const criteriaDate =
				lastActivity instanceof Date ? lastActivity : new Date(lastActivity);

			if (repoLastActivity < criteriaDate) {
				return false;
			}
		}

		// If all filters pass, include this repo
		return true;
	});

	// Return all matching repositories as Repo model objects
	return await toRepos(repos);
}

/**
 * Retrieves a single repository from the collection based on provided criteria.
 *
 * @param criteria - Optional filtering criteria for repository search
 * @returns Promise resolving to a Repo object that matches the criteria
 * @throws Error when no repository matches the provided criteria
 *
 * @example
 * // Get a repository with at least 100 stars and JavaScript as language
 * const repo = await getRepo({ stars: 100, language: 'JavaScript' });
 */
export async function getRepo(criteria?: RepoCriteria): Promise<Repo> {
	const repos = await getRepos(criteria);

	// Throw error if no repository matches the criteria
	if (repos.length === 0) {
		throw new Error("No repository found matching the provided criteria");
	}

	// Return the first matching repository
	return repos[0];
}
