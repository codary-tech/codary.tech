import type { APIRoute } from "astro";
import { signInWithMagicLink } from "@/lib/supabase.helper";

interface SubscribeRequest {
	email?: string;
}

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json<SubscribeRequest>();

		const { email } = data;

		if (!email) {
			return new Response(
				JSON.stringify({ success: false, message: "Email is required" }),
				{
					status: 400,
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
		}

		// Sign in a user with a magic link instead of direct insertion
		const { error } = await signInWithMagicLink(email);

		if (error) {
			console.error("Supabase auth error:", error);
			return new Response(
				JSON.stringify({
					success: false,
					message: "Failed to process subscription",
				}),
				{
					status: 500,
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
		}

		return new Response(
			JSON.stringify({
				success: true,
				message: "Please check your email to confirm your subscription",
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	} catch (error) {
		console.error("Error in newsletter subscription:", error);
		return new Response(
			JSON.stringify({ success: false, message: "Internal server error" }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}
};
