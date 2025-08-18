import type { APIRoute } from "astro";
import { signInWithMagicLink } from "@/lib/supabase.helper";

interface SignInRequest {
	email?: string;
}

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json<SignInRequest>();

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

		// Sign in a user with a magic link but don't create a new user
		const { data: signInData, error } = await signInWithMagicLink(email, false);

		if (error) {
			console.error("Supabase auth error:", error);

			// More specific error handling
			const errorMessage = error.message || "Failed to process sign-in";
			const statusCode = error.status || 500;

			return new Response(
				JSON.stringify({ success: false, message: errorMessage }),
				{
					status: statusCode,
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
		}

		return new Response(
			JSON.stringify({
				success: true,
				message: "Please check your email for the sign-in link",
				data: signInData,
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	} catch (error) {
		console.error("Error in user sign-in:", error);

		// More detailed error handling for unexpected errors
		const errorMessage =
			error instanceof Error ? error.message : "Internal server error";

		return new Response(
			JSON.stringify({ success: false, message: errorMessage }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}
};
