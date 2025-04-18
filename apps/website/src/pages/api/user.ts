import { supabase } from "@/lib/supabase";
import type {
	GetUserResponse,
	UserAPIErrorResponse,
	UserAPISuccessResponse,
} from "@/models/auth/user.api.response";

import type { APIRoute } from "astro";

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
			const response: UserAPIErrorResponse = {
				error: error.message,
				isLoggedIn: false,
				user: null,
			};
			return new Response(JSON.stringify(response), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}

		const response: UserAPISuccessResponse = {
			isLoggedIn: !!data.user,
			user: data.user,
		};
		return new Response(JSON.stringify(response), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		const response: UserAPIErrorResponse = {
			error: "Internal server error",
			isLoggedIn: false,
			user: null,
		};
		return new Response(JSON.stringify(response), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
