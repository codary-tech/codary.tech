import type { Loader } from "astro/loaders";
import { Octokit } from "octokit";
import { type Repo, RepoSchema } from "./schema";

export type { Repo };

type GitHubReposLoaderOptions = {
	/**
	 * A GitHub access token such as a personal access token or a GitHub App user
	 * access token, with at least the "Metadata" repository permissions (read).
	 * Optional if only public repositories are requested.
	 * See the [GitHub API Authentication docs](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28) for more details.
	 */
	auth?: string;

	/**
	 * The repository URLs to load.
	 * This can be a list of URLs or a single URL.
	 */
	repoUrls?: string[];
};

export function githubReposLoader({
	auth,
	repoUrls = [],
}: GitHubReposLoaderOptions): Loader {
	const octokit = new Octokit({ auth });

	return {
		name: "github-repo-loader",
		schema: RepoSchema,
		load: async ({ store, logger, generateDigest }) => {
			logger.info("Loading GitHub repositories");

			for (const url of repoUrls) {
				try {
					// Extract owner and repo name from URL
					const pathSegments = new URL(url).pathname.split("/").filter(Boolean);
					if (pathSegments.length < 2) continue;
					const [owner, repo] = pathSegments;

					// Fetch repository data
					const { data } = await octokit.rest.repos.get({
						owner,
						repo,
						headers: { "X-GitHub-Api-Version": "2022-11-28" },
					});

					// Store in the collection
					store.set({
						id: data.id.toString(),
						data: data satisfies Repo,
						digest: generateDigest(data),
					});

					logger.info(`Successfully loaded GitHub repository ${url}`);
				} catch (error) {
					logger.error(
						`Failed to load GitHub repository ${url}. ${(error as Error).message}`,
					);
				}
			}
		},
	};
}
