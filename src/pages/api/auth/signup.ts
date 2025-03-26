import { supabase } from "@/lib/supabase";
import { signInWithMagicLink } from "@/lib/supabase.helper";
import type { APIRoute } from "astro";
interface SignupRequest {
	name?: string;
	email?: string;
}
export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json<SignupRequest>();
		const { name, email } = data;

		if (!name || !email) {
			return new Response(
				JSON.stringify({
					success: false,
					message: !name ? "Name is required" : "Email is required",
				}),
				{
					status: 400,
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
		}

		// First check if user already exists
		const { data: existingUser } = await supabase
			.from("profiles")
			.select("id")
			.eq("email", email)
			.single();

		if (existingUser) {
			return new Response(
				JSON.stringify({
					success: false,
					message: "User with this email already exists",
				}),
				{
					status: 409,
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
		}

		// Sign in with magic link and create user
		// Pass the name as metadata to be available after authentication
		const { data: signupData, error } = await signInWithMagicLink(
			email,
			true,
			{ name, full_name: name }, // Pass name as data to be stored with the user
		);

		if (error) {
			console.error("Supabase auth error:", error);

			const errorMessage = error.message || "Failed to process sign-up";
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
				message: "Please check your email to complete your registration",
				data: signupData,
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	} catch (error) {
		console.error("Error in user signup:", error);

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
