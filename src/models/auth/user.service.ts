import type { UserAPIResponse } from "./user.api.response";

/**
 * Gets the authentication status of the current user
 *
 * @param request - The full request object or the cookie header string
 * @returns A boolean indicating if the user is logged in
 */
export async function getUser(): Promise<UserAPIResponse> {
	try {
		// Make the API call to check authentication status
		const response = await fetch("/api/user");

		if (!response.ok) {
			throw new Error(`API returned ${response.status}`);
		}

		const data = await response.json<UserAPIResponse>();
		return data;
	} catch (error) {
		return {
			isLoggedIn: false,
			user: null,
			error: "Internal server error",
		};
	}
}

/**
 * Client-side function to check user status
 * Can be used in client-side scripts
 */
export async function checkUserStatusClient(): Promise<boolean> {
	const userStatus = await getUser();
	return userStatus.isLoggedIn;
}
