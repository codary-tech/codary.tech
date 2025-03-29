/**
 * @file User API Response Types for authentication-related operations.
 *
 * Defines the response structures used in authentication-related API operations.
 */

import type { AuthError, User } from "@supabase/supabase-js";

/**
 * @interface GetUserResponse
 * @description Represents the response structure when fetching a user from Supabase.
 *
 * @property {object} data - Contains the retrieved user information.
 * @property {User|null} data.user - The user object if found, otherwise null.
 * @property {AuthError|null} error - Contains the error details if an error occurred, otherwise null.
 */
export interface GetUserResponse {
	data: {
		user: User | null;
	};
	error: AuthError | null;
}

/**
 * @interface UserAPISuccessResponse
 * @description Represents a successful response from a user authentication API operation.
 *
 * @property {boolean} isLoggedIn - Indicates whether the user is logged in.
 * @property {User|null} user - The authenticated user object, or null if not available.
 */
export interface UserAPISuccessResponse {
	isLoggedIn: boolean;
	user: User | null;
}

/**
 * @interface UserAPIErrorResponse
 * @description Represents an error response from a user authentication API operation.
 *
 * @property {string} error - A message describing the error encountered.
 * @property {false} isLoggedIn - Always false for error responses.
 * @property {null} user - Always null for error responses.
 */
export interface UserAPIErrorResponse {
	error: string;
	isLoggedIn: false;
	user: null;
}

/**
 * Represents the possible responses from a user authentication API operation.
 * Can be either a successful response or an error response.
 */
export type UserAPIResponse = UserAPISuccessResponse | UserAPIErrorResponse;
