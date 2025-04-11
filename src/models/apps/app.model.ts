import type { ImageMetadata } from "astro";
import type Tag from "../tag/tag.model";

export default interface App {
	id: string;
	name: string;
	description: string;
	icon: ImageMetadata;
	url: string;
	isSponsored: boolean;
	tags: Tag[];
}
