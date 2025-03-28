import crypto from "node:crypto";

/**
 * Generates a Gravatar URL for a given email.
 *
 * This utility function creates a URL for the Gravatar service which provides avatar images
 * based on email addresses. It works by creating an MD5 hash of the normalized email address
 * and constructing a valid Gravatar URL with the requested parameters.
 *
 * @param email - The user's email address to generate the Gravatar for
 * @param size - The size of the Gravatar image in pixels (defaults to 200)
 * @param defaultImage - The default image type if no Gravatar is found (defaults to 'identicon')
 *                      Options include: 404, mp, identicon, monsterid, wavatar, retro, robohash, blank
 * @param rating - The maximum rating for the Gravatar image (defaults to 'g')
 *                Options include: g, pg, r, x
 * @returns A complete Gravatar URL string that can be used in an image tag
 *
 * @example
 * ```typescript
 * // Basic usage
 * const avatarUrl = getGravatarUrl('user@example.com');
 *
 * // Custom size and default image
 * const customAvatar = getGravatarUrl('user@example.com', 300, 'robohash');
 * ```
 */
export function getGravatarUrl(
	email: string,
	size = 200,
	defaultImage = "identicon",
	rating = "g",
): string {
	// Normalize the email: trim whitespace and convert to lowercase
	const normalizedEmail = email.trim().toLowerCase();

	// Generate the MD5 hash of the normalized email
	const hash = crypto.createHash("md5").update(normalizedEmail).digest("hex");

	// Build the Gravatar URL with optional query parameters
	return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=${encodeURIComponent(
		defaultImage,
	)}&r=${rating}`;
}
