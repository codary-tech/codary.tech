import {
	defineCollection,
	reference,
	type SchemaContext,
	z,
} from "astro:content";
import { glob } from "astro/loaders";
import { githubReposLoader } from "./lib/loaders/github";
import { getGitHubRepoUrlsFromApps } from "./lib/loaders/github/helper";
import { RepoSchema } from "./lib/loaders/github/schema";
import { notionLoader } from "./lib/loaders/notion";
import { NotionBlogPostSchema } from "./lib/loaders/notion/schema";

const articles = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/articles" }),
	schema: ({ image }: SchemaContext) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			lastModified: z.coerce
				.date()
				.optional()
				.default(() => new Date()),
			cover: image().optional(),
			author: reference("authors"),
			tags: z.array(reference("tags")),
			category: reference("categories"),
			draft: z.boolean().optional().default(false),
			featured: z.boolean().optional().default(false),
		}),
});

const newsletter = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/newsletter" }),
	schema: ({ image }: SchemaContext) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			lastModified: z.coerce
				.date()
				.optional()
				.default(() => new Date()),
			cover: image().optional(),
			author: reference("authors"),
			tags: z.array(reference("tags")),
			draft: z.boolean().optional().default(false),
		}),
});

const tags = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/tags" }),
	schema: z.object({
		title: z.string(),
	}),
});

const categories = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/categories" }),
	schema: z.object({
		title: z.string(),
		order: z.number().optional(),
	}),
});

const authors = defineCollection({
	loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/authors" }),
	schema: z.object({
		name: z.string(),
		email: z.string(),
		avatar: z.string(),
		bio: z.string(),
		location: z.string(),
		socials: z.array(
			z.object({
				name: z.string(),
				url: z.string(),
				icon: z.string(),
			}),
		),
	}),
});

const apps = defineCollection({
	loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/apps" }),
	schema: ({ image }: SchemaContext) =>
		z.object({
			name: z.string(),
			description: z.string(),
			icon: image(),
			url: z.string().url(),
			repository: z.object({
				url: z.string().url(),
				platform: z.enum(["github", "gitlab", "bitbucket", "other"]),
			}),
			isSponsored: z.boolean().default(false),
			tags: z.array(reference("tags")).optional(),
		}),
});

const repositories = defineCollection({
	schema: RepoSchema,
	loader: githubReposLoader({
		auth: import.meta.env.GITHUB_TOKEN,
		repoUrls: (await getGitHubRepoUrlsFromApps()) || [],
	}),
});

// Blog collection using Notion as CMS
// Only loaded if NOTION_TOKEN and NOTION_DATABASE_ID are configured
const blog = defineCollection({
	loader:
		import.meta.env.NOTION_TOKEN && import.meta.env.NOTION_DATABASE_ID
			? notionLoader({
					auth: import.meta.env.NOTION_TOKEN,
					databaseId: import.meta.env.NOTION_DATABASE_ID,
				})
			: // Use an empty glob loader when Notion is not configured
				glob({ pattern: "**/_no_posts_*.json", base: "./src/data" }),
	schema: NotionBlogPostSchema,
});

export const collections = {
	articles,
	tags,
	categories,
	authors,
	newsletter,
	apps,
	repositories,
	blog,
};
