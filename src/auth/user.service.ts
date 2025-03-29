/**
 * Gets the authentication status of the current user
 *
 * @param request - The full request object or the cookie header string
 * @returns A boolean indicating if the user is logged in
 */
export async function getUserAuthStatus(
	request: Request | string | null | undefined,
): Promise<boolean> {
	try {
		// Handle different input types to extract cookie header
		let cookieHeader = "";

		if (typeof request === "string") {
			cookieHeader = request;
		} else if (request instanceof Request) {
			cookieHeader = request.headers.get("cookie") || "";
		}

		// Make the API call to check authentication status
		const response = await fetch("/api/user", {
			headers: {
				cookie: cookieHeader,
			},
		});

		if (!response.ok) {
			throw new Error(`API returned ${response.status}`);
		}

		const data = (await response.json()) as { isLoggedIn: boolean };
		return data.isLoggedIn;
	} catch (error) {
		console.error("Error fetching user authentication status:", error);
		return false; // Default to not logged in on error
	}
}

/**
 * Client-side function to check user status
 * Can be used in client-side scripts
 */
export async function checkUserStatusClient(): Promise<boolean> {
	try {
		const response = await fetch("/api/user");
		const data = (await response.json()) as { isLoggedIn: boolean };
		return data.isLoggedIn;
	} catch (error) {
		console.error("Error checking user status:", error);
		return false;
	}
}
