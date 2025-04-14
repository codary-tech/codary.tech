export type VersionControlPlatform =
	| "github"
	| "gitlab"
	| "bitbucket"
	| "other";

/**
 * Represents a repository in a version control system.
 * @interface Repo
 * @property {string} id - The unique identifier for the repository.
 * @property {string} url - The URL to access the repository.
 * @property {VersionControlPlatform} platform - The version control platform hosting the repository.
 * @property {number} [stars] - The number of stars the repository has received (optional).
 * @property {string} [license] - The license under which the repository is published (optional).
 * @property {string} [language] - The primary programming language used in the repository (optional).
 * @property {Date|string} [lastActivity] - The date of the last activity in the repository (optional).
 */
export default interface Repo {
	id: string;
	url: string;
	platform: VersionControlPlatform;
	stars?: number;
	license?: string;
	language?: string;
	lastActivity?: Date | string;
}

/**
 * Converts a version control platform identifier to its corresponding icon.
 *
 * @param platform - The version control platform identifier
 * @returns The icon name associated with the platform
 *
 * @example
 * // Returns "tabler:brand-github"
 * platformToIcon("github");
 *
 * @example
 * // Returns "tabler:code" for unrecognized platforms
 * platformToIcon("unknown");
 */
export function platformToIcon(platform: VersionControlPlatform): string {
	switch (platform) {
		case "github":
			return "tabler:brand-github";
		case "gitlab":
			return "tabler:brand-gitlab";
		case "bitbucket":
			return "tabler:brand-bitbucket";
		default:
			return "tabler:code";
	}
}

/**
 * Converts a version control platform identifier to its display name.
 *
 * @param platform - The version control platform identifier
 * @returns The formatted display name of the platform
 *
 * @example
 * // Returns "GitHub"
 * platformToName("github");
 *
 * @example
 * // Returns "Other" for unrecognized platforms
 * platformToName("unknown");
 */
export function platformToName(platform: VersionControlPlatform): string {
	switch (platform) {
		case "github":
			return "GitHub";
		case "gitlab":
			return "GitLab";
		case "bitbucket":
			return "Bitbucket";
		default:
			return "Other";
	}
}

/**
 * Formats a number of stars into a human-readable string with appropriate unit suffix.
 *
 * @param stars - The number of stars to format
 * @returns A formatted string representation of the stars count
 *
 * @example
 * // Returns "1.2k"
 * formatStars(1234)
 *
 * @example
 * // Returns "2.5m"
 * formatStars(2500000)
 *
 * @example
 * // eturns "42" (no suffix for values less than 1000)
 * formatStars(42)
 */
export function formatStars(stars: number): string {
	const units = [
		{ value: 1_000_000_000_000, symbol: "t" },
		{ value: 1_000_000_000, symbol: "b" },
		{ value: 1_000_000, symbol: "m" },
		{ value: 1_000, symbol: "k" },
	];

	for (const { value, symbol } of units) {
		if (stars >= value) {
			return `${(stars / value).toFixed(1)}${symbol}`;
		}
	}

	return stars.toString();
}
