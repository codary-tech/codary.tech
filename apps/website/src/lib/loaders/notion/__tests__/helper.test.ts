import { describe, expect, it } from "vitest";
import {
	extractCoverUrl,
	extractPlainText,
	transformNotionPage,
} from "../helper";

describe("Notion Helper Functions", () => {
	describe("extractPlainText", () => {
		it("should extract plain text from rich text array", () => {
			// Arrange
			const richText = [{ plain_text: "Hello " }, { plain_text: "World" }];

			// Act
			const result = extractPlainText(richText);

			// Assert
			expect(result).toBe("Hello World");
		});

		it("should return empty string for undefined input", () => {
			// Act
			const result = extractPlainText(undefined);

			// Assert
			expect(result).toBe("");
		});

		it("should return empty string for empty array", () => {
			// Arrange
			const richText: Array<{ plain_text: string }> = [];

			// Act
			const result = extractPlainText(richText);

			// Assert
			expect(result).toBe("");
		});
	});

	describe("extractCoverUrl", () => {
		it("should extract external cover URL", () => {
			// Arrange
			const cover = {
				type: "external" as const,
				external: { url: "https://example.com/image.jpg" },
			};

			// Act
			const result = extractCoverUrl(cover);

			// Assert
			expect(result).toBe("https://example.com/image.jpg");
		});

		it("should extract file cover URL", () => {
			// Arrange
			const cover = {
				type: "file" as const,
				file: { url: "https://files.notion.so/image.jpg" },
			};

			// Act
			const result = extractCoverUrl(cover);

			// Assert
			expect(result).toBe("https://files.notion.so/image.jpg");
		});

		it("should return null for null input", () => {
			// Act
			const result = extractCoverUrl(null);

			// Assert
			expect(result).toBeNull();
		});

		it("should return null for undefined input", () => {
			// Act
			const result = extractCoverUrl(undefined);

			// Assert
			expect(result).toBeNull();
		});
	});

	describe("transformNotionPage", () => {
		it("should transform a complete Notion page to NotionBlogPost", () => {
			// Arrange
			const notionPage = {
				id: "test-id-123",
				cover: {
					type: "external" as const,
					external: { url: "https://example.com/cover.jpg" },
				},
				properties: {
					Title: {
						title: [{ plain_text: "Test Blog Post" }],
					},
					Slug: {
						rich_text: [{ plain_text: "test-blog-post" }],
					},
					Excerpt: {
						rich_text: [{ plain_text: "This is a test excerpt" }],
					},
					"Published Date": {
						date: { start: "2025-02-20" },
					},
					Tags: {
						multi_select: [{ name: "technology" }, { name: "astro" }],
					},
					Published: {
						checkbox: true,
					},
				},
			};

			// Act
			const result = transformNotionPage(notionPage);

			// Assert
			expect(result).toEqual({
				id: "test-id-123",
				title: "Test Blog Post",
				slug: "test-blog-post",
				excerpt: "This is a test excerpt",
				date: "2025-02-20",
				tags: ["technology", "astro"],
				cover: "https://example.com/cover.jpg",
				published: true,
				content: "",
			});
		});

		it("should use formula slug if rich_text is not available", () => {
			// Arrange
			const notionPage = {
				id: "test-id-123",
				properties: {
					Title: {
						title: [{ plain_text: "Test Post" }],
					},
					Slug: {
						formula: { string: "test-post-formula" },
					},
					"Published Date": {
						date: { start: "2025-02-20" },
					},
					Published: {
						checkbox: true,
					},
				},
			};

			// Act
			const result = transformNotionPage(notionPage);

			// Assert
			expect(result.slug).toBe("test-post-formula");
		});

		it("should handle missing optional fields", () => {
			// Arrange
			const notionPage = {
				id: "test-id-123",
				properties: {
					Title: {
						title: [{ plain_text: "Minimal Post" }],
					},
					Slug: {
						rich_text: [{ plain_text: "minimal-post" }],
					},
					"Published Date": {
						date: { start: "2025-02-20" },
					},
				},
			};

			// Act
			const result = transformNotionPage(notionPage);

			// Assert
			expect(result).toMatchObject({
				id: "test-id-123",
				title: "Minimal Post",
				slug: "minimal-post",
				excerpt: "",
				date: "2025-02-20",
				tags: [],
				cover: null,
				published: true,
				content: "",
			});
		});

		it("should default to current date if Published Date is missing", () => {
			// Arrange
			const notionPage = {
				id: "test-id-123",
				properties: {
					Title: {
						title: [{ plain_text: "No Date Post" }],
					},
					Slug: {
						rich_text: [{ plain_text: "no-date" }],
					},
				},
			};

			// Act
			const result = transformNotionPage(notionPage);

			// Assert
			expect(result.date).toBeDefined();
			expect(new Date(result.date).getTime()).toBeLessThanOrEqual(Date.now());
		});

		it("should handle unpublished posts", () => {
			// Arrange
			const notionPage = {
				id: "test-id-123",
				properties: {
					Title: {
						title: [{ plain_text: "Draft Post" }],
					},
					Slug: {
						rich_text: [{ plain_text: "draft" }],
					},
					"Published Date": {
						date: { start: "2025-02-20" },
					},
					Published: {
						checkbox: false,
					},
				},
			};

			// Act
			const result = transformNotionPage(notionPage);

			// Assert
			expect(result.published).toBe(false);
		});
	});
});
