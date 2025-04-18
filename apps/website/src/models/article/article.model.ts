import type { CollectionEntry } from "astro:content";
import type Category from "../category/category.model";
import type Post from "../post/post.model";

export default interface Article extends Post {
	category: Category;
	featured: boolean;
	entry?: CollectionEntry<"articles">;
}
