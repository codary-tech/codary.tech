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
	const redirectTo = `${BASE_URL}/api/auth/callback`;

	const otpSignInOptions = {
		redirectTo: redirectTo,
		shouldCreateUser: shouldCreateUser,
		data: data,
	};
	const response = await supabase.auth.signInWithOtp({
		email: email,
		options: otpSignInOptions,
	});

	return response;
};
