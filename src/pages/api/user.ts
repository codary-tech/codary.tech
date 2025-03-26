import { supabase } from "@/lib/supabase";

import type { AuthError, User } from "@supabase/supabase-js";
import type { APIRoute } from "astro";

// Define type for the response from getUser()
interface GetUserResponse {
	data: {
		user: User | null;
	};
	error: AuthError | null;
}

export const GET: APIRoute = async ({ request }) => {
	try {
		// Get the session cookie from the request
		const cookie = request.headers.get("cookie");

		// If there's a cookie, set it in the Supabase client
		if (cookie) {
			supabase.auth.setSession({
				access_token: "",
				refresh_token: "",
			});
		}
		// Get the current user with proper typing
		const { data, error }: GetUserResponse = await supabase.auth.getUser();

		if (error) {
			return new Response(
				JSON.stringify({
					error: error.message,
					isLoggedIn: false,
					user: null,
				}),
				{
					status: 401,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		return new Response(
			JSON.stringify({
				isLoggedIn: !!data.user,
				user: data.user,
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				error: "Internal server error",
				isLoggedIn: false,
				user: null,
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
};
