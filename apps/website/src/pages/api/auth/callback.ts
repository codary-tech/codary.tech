import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async ({ request, redirect }) => {
	const requestUrl = new URL(request.url);
	const code = requestUrl.searchParams.get("code");

	// If no code is provided, redirect to home page
	if (!code) {
		return redirect("/");
	}

	try {
		// Exchange the code for a session
		const { error } = await supabase.auth.exchangeCodeForSession(code);

		if (error) {
			console.error("Authentication error:", error);
			// Redirect to error page or login page with error message
			return redirect("/signin?error=authentication_failed");
		}

		// Successful authentication
		// Redirect to a success page or dashboard
		return redirect("/");
	} catch (error) {
		console.error("Error in auth callback:", error);
		return redirect("/signin?error=server_error");
	}
};
