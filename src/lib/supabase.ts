import { SUPABASE_KEY, SUPABASE_URL } from "astro:env/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		flowType: "pkce",
	},
});
