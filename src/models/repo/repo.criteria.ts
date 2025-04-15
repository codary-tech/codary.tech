/**
 * Interface representing criteria for filtering repositories.
 *
 * This interface defines optional properties that can be used to specify
 * search criteria when querying repositories.
 *
 * @interface RepoCriteria
 * @property {string} [id] - The unique identifier of the repository
 * @property {string} [url] - The URL of the repository
 * @property {number} [stars] - The number of stars the repository has
 * @property {string} [license] - The license type of the repository
 * @property {string} [language] - The primary programming language of the repository
 * @property {Date|string} [lastActivity] - The date of the last activity in the repository
 */
export interface RepoCriteria {
	id?: string;
	url?: string;
	stars?: number;
	license?: string;
	language?: string;
	lastActivity?: Date | string;
}
