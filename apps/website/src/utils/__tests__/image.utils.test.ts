import { describe, expect, it } from "vitest";
import { toImageMetadata } from "../image.utils";

describe("toImageMetadata", () => {
	it("should convert a valid cover image to ImageMetadata", () => {
		// Arrange
		const cover = {
			src: "/images/test.jpg",
			width: 800,
			height: 600,
			format: "jpg" as const,
		};

		// Act
		const result = toImageMetadata(cover);

		// Assert
		expect(result).toEqual({
			src: "/images/test.jpg",
			width: 800,
			height: 600,
			format: "jpg",
			orientation: 1,
		});
	});

	it("should handle all supported image formats", () => {
		// Arrange
		const formats = [
			"png",
			"jpg",
			"jpeg",
			"tiff",
			"webp",
			"gif",
			"svg",
			"avif",
		] as const;

		// Act & Assert
		for (const format of formats) {
			const cover = {
				src: `/images/test.${format}`,
				width: 1024,
				height: 768,
				format,
			};

			const result = toImageMetadata(cover);

			expect(result.format).toBe(format);
		}
	});

	it("should throw an error when cover is undefined", () => {
		// Arrange
		const cover = undefined;

		// Act & Assert
		expect(() => toImageMetadata(cover)).toThrow(
			"Cover image is required but was not provided",
		);
	});

	it("should preserve the original properties", () => {
		// Arrange
		const cover = {
			src: "/images/complex-path/nested/image.webp",
			width: 1920,
			height: 1080,
			format: "webp" as const,
		};

		// Act
		const result = toImageMetadata(cover);

		// Assert
		expect(result.src).toBe(cover.src);
		expect(result.width).toBe(cover.width);
		expect(result.height).toBe(cover.height);
		expect(result.format).toBe(cover.format);
		expect(result.orientation).toBe(1);
	});
});
