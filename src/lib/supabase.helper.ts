import { BASE_URL } from "@/consts";
import { supabase } from "@/lib/supabase";
import type { AuthOtpResponse } from "@supabase/supabase-js";

/**
 * Signs in a user with a magic link sent to their email.
 *
 * @param email - The user's email address
 * @param shouldCreateUser - Whether to create a new user if one doesn't exist
 * @param data - Optional metadata to include with the authentication request
 * @returns Promise resolving to the complete AuthOtpResponse
 */
export const signInWithMagicLink = async (
	email: string,
	shouldCreateUser = true,
	data?: Record<string, unknown>,
): Promise<AuthOtpResponse> => {
	// Sign in a user with a magic link
	const response = await supabase.auth.signInWithOtp({
		email: email,
		options: {
			emailRedirectTo: `${BASE_URL}/api/auth/callback`,
			shouldCreateUser: shouldCreateUser,
			data: data, // Pass optional metadata
		},
	});

	return response;
};
