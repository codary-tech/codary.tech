import type { ImageMetadata } from "astro";
import type Author from "../author/author.model";
import type Tag from "../tag/tag.model";

/**
 * Represents a post in the system (common base for articles and newsletters)
 * @interface Post
 * @property {string} id - Unique identifier for the post
 * @property {string} title - Title of the post
 * @property {string} description - Brief description or summary of the post
 * @property {Author} author - Author of the post
 * @property {ImageMetadata} cover - Cover image metadata for the post
 * @property {Tag[]} tags - Array of tags associated with the post
 * @property {boolean} draft - Indicates if the post is a draft
 * @property {string} body - Main content of the post
 * @property {Date} date - Publication date of the post
 * @property {Date} [lastModified] - Last modification date of the post (optional)
 */
export default interface Post {
	id: string;
	title: string;
	description: string;
	author: Author;
	cover?: ImageMetadata;
	tags: Tag[];
	draft: boolean;
	body: string;
	date: Date;
	lastModified?: Date;
}

export type ContentType = "newsletter" | "news";
