import type { Lang } from "@/i18n";

/**
 * Interface for newsletter filtering criteria
 */
export interface NewsletterCriteria {
	lang?: Lang;
	includeDrafts?: boolean;
	author?: string | string[];
	tags?: string | string[];
	dateFrom?: Date;
	dateTo?: Date;
}
