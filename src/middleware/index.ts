import { defineMiddleware } from "astro:middleware";
import { supabase } from "@/lib/supabase";
import micromatch from "micromatch";

// Define routes with precise patterns
const protectedWebRoutes = [
	"/account(|/*)",
	"/dashboard(|/*)",
	"/settings(|/*)",
];

const protectedApiRoutes = ["/api/user(|/*)", "/api/protected(|/*)"];

export const onRequest = defineMiddleware(async (context, next) => {
	// Initialize auth state in locals
	context.locals.isAuthenticated = false;
	context.locals.user = null;

	// Get session from Supabase
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// If session exists, populate locals with user data
	if (session) {
		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (user) {
			context.locals.isAuthenticated = true;
			context.locals.user = {
				id: user.id,
				email: user.email || "",
				role: user.user_metadata?.role || "user",
			};
		}
	}

	// Extract the requested path and potential locale from URL
	const url = new URL(context.request.url);
	const pathSegments = url.pathname.split("/").filter(Boolean);
	const locale = pathSegments[0] || "en";
	const subPath = `/${pathSegments.slice(1).join("/")}`;

	// Check if the current path is a protected web route
	if (
		micromatch.isMatch(subPath, protectedWebRoutes) &&
		!context.locals.isAuthenticated
	) {
		return Response.redirect(`${url.origin}/${locale}/signin`, 302);
	}

	// Handle protected API routes differently with a proper error response
	if (
		micromatch.isMatch(subPath, protectedApiRoutes) &&
		!context.locals.isAuthenticated
	) {
		return new Response(
			JSON.stringify({
				error: "Unauthorized",
				message: "Authentication required",
			}),
			{
				status: 401,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}

	return next();
});
