import type { ImageMetadata } from "astro";
import type Repo from "../repo/repo.model";
import type Tag from "../tag/tag.model";

export default interface App {
	id: string;
	name: string;
	description: string;
	icon: ImageMetadata;
	url: string;
	repository?: Repo;
	isSponsored: boolean;
	tags: Tag[];
}
