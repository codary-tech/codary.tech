import { SUPABASE_ANON_KEY, SUPABASE_URL } from "astro:env/client";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		flowType: "pkce",
	},
});
