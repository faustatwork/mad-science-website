import { createClient } from "@supabase/supabase-js";

const project_url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(project_url, anon_key);
