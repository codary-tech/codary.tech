import type { Lang } from "@/i18n";

export interface AppCriteria {
	id?: string;
	lang?: Lang;
	tags?: string | string[];
	sponsored?: boolean;
}
