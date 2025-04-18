/**
 * Converts a cover image object to Astro's ImageMetadata format.
 *
 * @param cover - The image cover data or undefined
 * @returns ImageMetadata object compatible with Astro's image handling
 * @throws {Error} If cover is undefined but required in the calling context
 */
export function toImageMetadata(
	cover:
		| {
				src: string;
				width: number;
				height: number;
				format:
					| "png"
					| "jpg"
					| "jpeg"
					| "tiff"
					| "webp"
					| "gif"
					| "svg"
					| "avif";
		  }
		| undefined,
): import("astro").ImageMetadata {
	if (!cover) {
		throw new Error("Cover image is required but was not provided");
	}

	return {
		src: cover.src,
		width: cover.width,
		height: cover.height,
		format: cover.format,
		orientation: 1,
	};
}
