import type { APIRoute } from "astro";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/consts";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async ({ cookies, redirect }) => {
	try {
		// Sign out from Supabase
		await supabase.auth.signOut();

		// Clear cookies after successful signout
		cookies.delete(ACCESS_TOKEN, { path: "/" });
		cookies.delete(REFRESH_TOKEN, { path: "/" });

		// Return redirect after successful flow
		return redirect("/");
	} catch (error) {
		console.error("Error during sign out:", error);

		// Still clear cookies even if Supabase signout fails
		cookies.delete(ACCESS_TOKEN, { path: "/" });
		cookies.delete(REFRESH_TOKEN, { path: "/" });

		// Return redirect even after error
		return redirect("/");
	}
};
