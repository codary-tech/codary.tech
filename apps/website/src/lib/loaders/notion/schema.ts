import { z } from "astro:content";

/**
 * Schema for a Notion blog post
 * Maps to the expected Notion database structure
 */
export const NotionBlogPostSchema = z.object({
	id: z.string(),
	title: z.string(),
	slug: z.string(),
	excerpt: z.string().optional(),
	date: z.string(),
	tags: z.array(z.string()).optional().default([]),
	cover: z.string().nullable().optional(),
	published: z.boolean().default(true),
	content: z.string().optional(),
});

export type NotionBlogPost = z.infer<typeof NotionBlogPostSchema>;
