import { defineMiddleware } from "astro:middleware";
import { supabase } from "@/lib/supabase";

const protectedRoutes = ["/account", "/dashboard", "/api/user", "/settings"];

function isProtectedRoute(path: string): boolean {
	return protectedRoutes.some((route) => path.startsWith(route));
}

export const onRequest = defineMiddleware(async (context, next) => {
	context.locals.isAuthenticated = false;
	context.locals.user = null;

	const {
		data: { session },
	} = await supabase.auth.getSession();

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

	const url = new URL(context.request.url);
	const pathSegments = url.pathname.split("/").filter(Boolean);
	const locale = pathSegments[0] || "en";
	const path = `/${pathSegments.slice(1).join("/")}`;

	if (isProtectedRoute(path) && !context.locals.isAuthenticated) {
		return Response.redirect(`${url.origin}/${locale}/signin`, 302);
	}

	return next();
});
