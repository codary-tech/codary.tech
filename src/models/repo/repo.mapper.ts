import type { CollectionEntry } from "astro:content";
import type Repo from "./repo.model";

/**
 * Transforms a repository collection entry into a Repo model object.
 *
 * @param repoData - The repository data from the content collection
 * @returns A promise that resolves to a Repo model object
 */
export async function toRepo(
	repoData: CollectionEntry<"repositories">,
): Promise<Repo> {
	const data = repoData.data;
	return {
		id: repoData.id,
		url: data.html_url ?? "",
		platform: "github",
		stars: data.stargazers_count ?? 0,
		license: data.license?.key ?? "Unknown",
		language: data.language ?? "Unknown",
		lastActivity: data.updated_at
			? new Date(data.updated_at).toISOString()
			: new Date().toISOString(),
	};
}

/**
 * Converts an array of repository collection entries into an array of Repo model objects.
 *
 * @param repos - An array of repository collection entries
 * @returns A promise that resolves to an array of Repo model objects
 */
export async function toRepos(
	repos: CollectionEntry<"repositories">[],
): Promise<Repo[]> {
	return Promise.all(repos.map(toRepo));
}
