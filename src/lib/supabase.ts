import { SUPABASE_KEY, SUPABASE_URL } from "astro:env/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
	auth: {
		flowType: "pkce",
	},
});
