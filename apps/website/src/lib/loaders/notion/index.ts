import { Client } from "@notionhq/client";
import type { Loader } from "astro/loaders";
import { fetchNotionPosts } from "./helper";
import { type NotionBlogPost, NotionBlogPostSchema } from "./schema";

export type { NotionBlogPost };

type NotionLoaderOptions = {
	/**
	 * Notion integration token with read permissions
	 * Can be obtained from https://www.notion.so/my-integrations
	 */
	auth: string;

	/**
	 * The ID of the Notion database to load posts from
	 * The database must be shared with the integration
	 */
	databaseId: string;
};

/**
 * Astro Content Loader for Notion blog posts
 *
 * This loader fetches blog posts from a Notion database during build time
 * and makes them available as an Astro content collection.
 *
 * @example
 * ```ts
 * import { notionLoader } from "./lib/loaders/notion";
 *
 * const blog = defineCollection({
 *   loader: notionLoader({
 *     auth: import.meta.env.NOTION_TOKEN,
 *     databaseId: import.meta.env.NOTION_DATABASE_ID,
 *   }),
 * });
 * ```
 */
export function notionLoader({
	auth,
	databaseId,
}: NotionLoaderOptions): Loader {
	if (!auth) {
		throw new Error(
			"Notion auth token is required. Please set NOTION_TOKEN in your environment.",
		);
	}

	if (!databaseId) {
		throw new Error(
			"Notion database ID is required. Please set NOTION_DATABASE_ID in your environment.",
		);
	}

	const notion = new Client({ auth });

	return {
		name: "notion-blog-loader",
		schema: NotionBlogPostSchema,
		load: async ({ store, logger, generateDigest }) => {
			logger.info("Loading blog posts from Notion");

			try {
				const posts = await fetchNotionPosts(notion, databaseId);

				logger.info(`Found ${posts.length} published posts in Notion`);

				for (const post of posts) {
					// Use slug as the ID for cleaner URLs
					const id = post.slug || post.id;

					store.set({
						id,
						data: post,
						digest: generateDigest(post),
					});

					logger.info(`Loaded post: ${post.title} (${id})`);
				}

				logger.info("Successfully loaded all Notion blog posts");
			} catch (error) {
				logger.error(
					`Failed to load Notion blog posts: ${(error as Error).message}`,
				);
				throw error;
			}
		},
	};
}
