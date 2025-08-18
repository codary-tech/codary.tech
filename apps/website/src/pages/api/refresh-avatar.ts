import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

// Define the shape of the expected request body
interface RefreshAvatarRequest {
	filePath: string;
}

export const POST: APIRoute = async ({ request }) => {
	try {
		// Type the request body properly
		const data = (await request.json()) as RefreshAvatarRequest;
		const { filePath } = data;

		if (!filePath) {
			return new Response(JSON.stringify({ error: "File path is required" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		// Create a signed URL with 1-hour expiration
		const { data: urlData, error } = await supabase.storage
			.from("avatars")
			.createSignedUrl(filePath, 3600);

		if (error) {
			return new Response(JSON.stringify({ error: error.message }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(JSON.stringify({ signedUrl: urlData.signedUrl }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		const errorMessage =
			err instanceof Error ? err.message : "An unknown error occurred";
		return new Response(JSON.stringify({ error: errorMessage }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
