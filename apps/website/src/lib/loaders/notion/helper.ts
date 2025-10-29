import type { Client } from "@notionhq/client";
import type { NotionBlogPost } from "./schema";

/**
 * Helper functions for transforming Notion API responses
 */

/**
 * Extracts plain text from Notion rich text array
 */
export function extractPlainText(
	richText: Array<{ plain_text: string }> | undefined,
): string {
	if (!richText || richText.length === 0) return "";
	return richText.map((text) => text.plain_text).join("");
}

/**
 * Extracts the cover image URL from a Notion page
 */
export function extractCoverUrl(
	cover:
		| { type: "external"; external: { url: string } }
		| { type: "file"; file: { url: string } }
		| null
		| undefined,
): string | null {
	if (!cover) return null;
	if (cover.type === "external") return cover.external.url;
	if (cover.type === "file") return cover.file.url;
	return null;
}

/**
 * Transforms a Notion page to a NotionBlogPost
 */
export function transformNotionPage(page: any): NotionBlogPost {
	const properties = page.properties;

	return {
		id: page.id,
		title: extractPlainText(properties.Title?.title),
		slug:
			properties.Slug?.rich_text?.[0]?.plain_text ||
			properties.Slug?.formula?.string ||
			"",
		excerpt: extractPlainText(properties.Excerpt?.rich_text),
		date: properties["Published Date"]?.date?.start || new Date().toISOString(),
		tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
		cover: extractCoverUrl(page.cover),
		published: properties.Published?.checkbox ?? true,
		content: "", // Content will be fetched separately if needed
	};
}

/**
 * Fetches all published posts from a Notion database
 */
export async function fetchNotionPosts(
	client: Client,
	databaseId: string,
): Promise<NotionBlogPost[]> {
	const response = await client.databases.query({
		database_id: databaseId,
		filter: {
			property: "Published",
			checkbox: {
				equals: true,
			},
		},
		sorts: [
			{
				property: "Published Date",
				direction: "descending",
			},
		],
	});

	return response.results.map(transformNotionPage);
}
