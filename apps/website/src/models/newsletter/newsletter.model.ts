import type { CollectionEntry } from "astro:content";
import type Post from "../post/post.model";

export default interface Newsletter extends Post {
	entry: CollectionEntry<"newsletter">;
}
