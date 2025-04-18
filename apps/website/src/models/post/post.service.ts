import type Article from "../article/article.model";
import type Newsletter from "../newsletter/newsletter.model";
import type { ContentType } from "./post.model";
import type Post from "./post.model";

// Helper function to detect post type
export const getPostType = (post: Post): ContentType => {
	// Check if post has entry property (both Newsletter and Article have it)
	if ("entry" in post) {
		// Check the collection type in the entry
		if ((post as Newsletter).entry.collection === "newsletter") {
			return "newsletter";
		}
		if ((post as Article).entry?.collection === "articles") {
			return "news";
		}
	}
	// Default fallback
	return "newsletter";
};
