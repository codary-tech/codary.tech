// Simple function to extract GitHub repository URLs directly from JSON files
export async function getGitHubRepoUrlsFromApps(): Promise<string[]> {
	try {
		// Import Node.js file system promises API
		const { readdir, readFile } = await import("node:fs/promises");
		const { join } = await import("node:path");

		// Path to English apps directory
		const appsDir = join(process.cwd(), "src/data/apps/en");

		// Read all files in the directory
		const files = await readdir(appsDir);
		const jsonFiles = files.filter((file) => file.endsWith(".json"));

		// Extract GitHub repository URLs
		const githubRepoUrls: string[] = [];
		for (const file of jsonFiles) {
			const content = await readFile(join(appsDir, file), "utf-8");
			const appData = JSON.parse(content);

			if (
				appData.repository &&
				appData.repository.platform === "github" &&
				appData.repository.url
			) {
				githubRepoUrls.push(appData.repository.url);
			}
		}

		return githubRepoUrls.length > 0 ? githubRepoUrls : [];
	} catch (error) {
		console.error("Error extracting GitHub repository URLs:", error);
		return [];
	}
}
