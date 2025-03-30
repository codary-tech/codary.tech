import fs from "node:fs";
import { Resvg } from "@resvg/resvg-js";
import type { AstroIntegration } from "astro";
import parseFrontmatter from "gray-matter";
import satori from "satori";

// Define interface for collection configuration
interface CollectionConfig {
	pathname: string; // URL path prefix (e.g., "a/")
	directory: string; // Directory in data folder (e.g., "articles")
	pathPattern?: RegExp; // Optional regex pattern for complex path matching
	urlTransform?: (pathname: string) => string; // Optional transform function
}

// Plugin options interface
interface OgPluginOptions {
	collections: CollectionConfig[];
	fontPath?: string;
	renderOptions?: {
		width?: number;
		height?: number;
	};
	customRender?: (title: string) => unknown; // Custom render function
}

const render = (title: string) => ({
	type: "div",
	props: {
		style: {
			height: "100%",
			width: "100%",
			display: "flex",
			flexDirection: "column",
			backgroundColor: "#161618",
			padding: "55px 70px",
			color: "#70E1C8",
			fontFamily: "JetBrains Mono",
			fontSize: 72,
		},
		children: [
			{
				type: "svg",
				props: {
					xmlns: "http://www.w3.org/2000/svg",
					width: "48",
					height: "48",
					viewBox: "0 0 48 48",
					fill: "none",
					children: {
						type: "path",
						props: {
							d: "M7.03846 40.9615C4.91538 38.8385 6.32308 34.3846 5.23846 31.7769C4.15385 29.1692 0 26.8846 0 24C0 21.1154 4.10769 18.9231 5.23846 16.2231C6.36923 13.5231 4.91538 9.16154 7.03846 7.03846C9.16154 4.91538 13.6154 6.32308 16.2231 5.23846C18.8308 4.15385 21.1154 0 24 0C26.8846 0 29.0769 4.10769 31.7769 5.23846C34.4769 6.36923 38.8385 4.91538 40.9615 7.03846C43.0846 9.16154 41.6769 13.6154 42.7615 16.2231C43.8462 18.8308 48 21.1154 48 24C48 26.8846 43.8923 29.0769 42.7615 31.7769C41.6308 34.4769 43.0846 38.8385 40.9615 40.9615C38.8385 43.0846 34.3846 41.6769 31.7769 42.7615C29.1692 43.8462 26.8846 48 24 48C21.1154 48 18.9231 43.8923 16.2231 42.7615C13.5231 41.6308 9.16154 43.0846 7.03846 40.9615Z",
							fill: "#FFA800",
							fillOpacity: "0.75",
						},
					},
				},
			},
			{
				type: "div",
				props: {
					style: { marginTop: 96 },
					children: title,
				},
			},
		],
	},
});

export const og = (options?: OgPluginOptions): AstroIntegration => ({
	name: "satori-og",
	hooks: {
		"astro:build:done": async ({ dir, pages }) => {
			try {
				// Use defaults if options aren't provided - now with language support
				const collections = options?.collections || [
					// English articles
					{
						pathname: "en/news/", // Add pathname for backward compatibility
						pathPattern: /^en\/news\//,
						directory: "articles/en",
						urlTransform: (pathname) =>
							pathname.replace(/^en\/news\//, "").replace(/\/$/, ""),
					},
					// Spanish articles
					{
						pathname: "es/news/", // Add pathname for backward compatibility
						pathPattern: /^es\/news\//,
						directory: "articles/es",
						urlTransform: (pathname) =>
							pathname.replace(/^es\/news\//, "").replace(/\/$/, ""),
					},
					// English newsletters
					{
						pathname: "en/newsletter/", // Add pathname for backward compatibility
						pathPattern: /^en\/newsletter\//,
						directory: "newsletters/en",
						urlTransform: (pathname) =>
							pathname.replace(/^en\/newsletter\//, "").replace(/\/$/, ""),
					},
					// Spanish newsletters
					{
						pathname: "es/newsletter/", // Add pathname for backward compatibility
						pathPattern: /^es\/newsletter\//,
						directory: "newsletters/es",
						urlTransform: (pathname) =>
							pathname.replace(/^es\/newsletter\//, "").replace(/\/$/, ""),
					},
				];

				const fontPath =
					options?.fontPath || "src/assets/font/JetBrainsMono-Regular.ttf";
				const renderFn = options?.customRender || render;
				const renderOptions = {
					width: options?.renderOptions?.width || 1200,
					height: options?.renderOptions?.height || 630,
				};

				// Load the font
				const loadedFont = fs.readFileSync(fontPath);

				// Define collection stats type
				interface CollectionStats {
					total: number;
					success: number;
					failed: number;
				}

				// Keep track of processed pages for logging
				const processedPages = {
					success: 0,
					skipped: 0,
					failed: 0,
					collections: {} as Record<string, CollectionStats>,
				};

				// Process each page
				for (const { pathname } of pages) {
					// Check if page belongs to any configured collection
					console.log(
						`🔍 Checking if pathname '${pathname}' belongs to a configured collection`,
					);
					const collection = collections.find((c) => {
						// Check if pattern exists and use it for matching
						if (c.pathPattern) {
							const matches = c.pathPattern.test(pathname);
							console.log(
								`  → Testing against collection '${c.directory}' (pattern: ${c.pathPattern}): ${
									matches ? "MATCH" : "no match"
								}`,
							);
							return matches;
						}
						// Fall back to simple prefix matching
						const matches = pathname.startsWith(c.pathname);
						console.log(
							`  → Testing against collection '${c.directory}' (prefix: '${c.pathname}'): ${
								matches ? "MATCH" : "no match"
							}`,
						);
						return matches;
					});
					console.log(
						collection
							? `✅ Found matching collection: ${collection.directory}`
							: `⏭️ No matching collection found for '${pathname}'`,
					);

					if (!collection) {
						processedPages.skipped++;
						continue;
					}

					try {
						// Initialize collection stats if not exists
						if (!processedPages.collections[collection.directory]) {
							processedPages.collections[collection.directory] = {
								total: 0,
								success: 0,
								failed: 0,
							};
						}

						processedPages.collections[collection.directory].total++;

						// Transform the pathname to get the file path
						console.log(
							`🔍 Processing: ${pathname} in collection ${collection.directory}`,
						);

						// Use the collection's urlTransform function if available
						const fileSlug = collection.urlTransform
							? collection.urlTransform(pathname)
							: pathname.slice(collection.pathname.length, -1);

						console.log(`📄 Extracted file slug: ${fileSlug}`);
						console.log(
							`🔎 Looking for file: src/data/${collection.directory}/${fileSlug}.mdx`,
						);

						// Read the source file
						const file = fs.readFileSync(
							`src/data/${collection.directory}/${fileSlug}.mdx`,
						);

						// Parse the frontmatter to get the title
						const { title } = parseFrontmatter(file).data;

						// Generate the SVG
						const svg = await satori(renderFn(title), {
							width: renderOptions.width,
							height: renderOptions.height,
							fonts: [
								{
									name: "JetBrains Mono",
									data: loadedFont,
									weight: 400,
									style: "normal",
								},
							],
						});

						// Convert SVG to PNG
						const resvg = new Resvg(svg, {
							fitTo: {
								mode: "width",
								value: renderOptions.width,
							},
						});

						// Write the PNG file
						fs.writeFileSync(
							`${dir.pathname}${pathname}og.png`,
							resvg.render().asPng(),
						);

						processedPages.success++;
						processedPages.collections[collection.directory].success++;
					} catch (err) {
						console.error(`🚨 Error generating OG image for ${pathname}:`, err);
						processedPages.failed++;
						processedPages.collections[collection.directory].failed++;
					}
				}

				// Log per-collection stats
				for (const [collection, stats] of Object.entries(
					processedPages.collections,
				)) {
					console.log(
						`🟢  ${collection}: ${stats.success}/${stats.total} generated`,
					);
				}
				console.log(
					`📊 Total: ${
						processedPages.success +
						processedPages.failed +
						processedPages.skipped
					}`,
				);
				console.log(
					`✅ Generated: ${processedPages.success}, ❌ Failed: ${processedPages.failed}, ⏭️  Skipped: ${processedPages.skipped}`,
				);
				console.log();
			} catch (e) {
				console.error(e);
				console.log(
					"\x1b[31mog:\x1b[0m 🚨 OpenGraph image generation failed\n",
				);
			}
		},
	},
});
