export const prerender = true;
import { BRAND_NAME, SITE_TITLE } from "@/consts";
import { useTranslations } from "@/i18n";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "@/i18n/locales";
import { getArticles } from "@/models/article";
import { getCategories } from "@/models/category";
import { getTags } from "@/models/tag";
import { cleanEntityId } from "@/utils/collection.entity";
import generateOgImage from "@/utils/open-graph/og.service";
import type { OgData } from "@/utils/open-graph/og.types";
import type { APIRoute, GetStaticPaths, GetStaticPathsItem } from "astro";

const STATIC_PATH = [
	{
		slug: typeof SITE_TITLE === "string" ? SITE_TITLE : String(SITE_TITLE),
	},
	{
		slug: "news",
	},
	{
		slug: "newsletter",
	},
];

export const getStaticPaths: GetStaticPaths = async () => {
	const result: GetStaticPathsItem[] = [];
	const supportedLanguages = Object.keys(LOCALES_SETTING);

	// Generate paths for each supported language
	for (const lang of supportedLanguages) {
		const t = useTranslations(lang);
		// const translatePath = useTranslatedPath(lang);

		// Static paths
		for (const item of STATIC_PATH) {
			const titles = {
				[String(SITE_TITLE)]: {
					en: `${SITE_TITLE} : Stay up to date with technology and programming`,
					es: `${SITE_TITLE} : Mantente al día con la tecnología y la programación`,
				},
				news: {
					en: "Learn and stay updated with the latest news in technology and programming",
					es: "Aprende y mantente al día con las últimas novedades en tecnología y programación",
				},
				newsletter: {
					en: "Learn and stay updated with the latest news in technology and programming",
					es: "Aprende y mantente al día con las últimas novedades en tecnología y programación",
				},
			};

			const title = titles[item.slug] ? t(titles[item.slug]) : item.slug;

			result.push({
				params: {
					lang,
					slug: item.slug,
				},
				props: {
					title,
					author: BRAND_NAME,
					date: new Date(),
					lang,
				},
			});
		}

		// Articles
		const articlesList = await getArticles({ includeDrafts: false, lang });
		for (const article of articlesList) {
			// Create the slug that matches the expected URL structure
			const articleSlug = `news/${cleanEntityId(article.id)}`;
			// Support for date-based paths as seen in the 404 errors
			const dateObj = new Date(article.date);

			for (const slug of [articleSlug]) {
				result.push({
					params: {
						lang,
						slug,
					},
					props: {
						title: article.title,
						author: article.author.name,
						category: article.category.title,
						tags: article.tags.map((tag) => tag.title),
						date: dateObj,
						lang,
					},
				});
			}
		}

		// Tags
		const articleTags = await getTags({ lang });
		for (const tag of articleTags) {
			result.push({
				params: {
					lang,
					slug: `tags/${cleanEntityId(tag.id)}`,
				},
				props: {
					title: t({
						en: `Articles tagged with "${tag.title}"`,
						es: `Artículos etiquetados con "${tag.title}"`,
					}),
					author: BRAND_NAME,
					tags: [tag.title],
					date: new Date(),
					lang,
				},
			});
		}

		// Categories
		const categories = await getCategories({ lang });
		for (const category of categories) {
			result.push({
				params: {
					lang,
					slug: `category/${cleanEntityId(category.id)}`,
				},
				props: {
					title: t({
						en: `Articles in category "${category.title}"`,
						es: `Artículos en la categoría "${category.title}"`,
					}),
					author: BRAND_NAME,
					category: category.title,
					date: new Date(),
					lang,
				},
			});
		}
	}

	return result;
};

export const GET: APIRoute<OgData & { lang?: string }> = async ({ props }) => {
	try {
		const response = await generateOgImage(
			props.title,
			props.author,
			props.category,
			props.tags,
			props.date,
			props.lang || DEFAULT_LOCALE_SETTING,
		);

		if (!response) {
			return new Response("Error generating image", {
				status: 500,
				headers: {
					"Content-Type": "text/plain",
				},
			});
		}

		return new Response(response, {
			status: 200,
			headers: {
				"Content-Type": "image/png",
				"Cache-Control": "public, max-age=31536000, immutable",
			},
		});
	} catch (error) {
		console.error("Error generating OG image:", error);
		return new Response("Error generating image", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
			},
		});
	}
};
