import { supabase } from "../../lib/supabaseClient";

export type SupabaseError = {
  code: string;
  message: string;
  details: string;
  hint: string;
};

export async function addMailToList(mail: string): Promise<void> {
  const { error } = await supabase.from("newsletter").insert({ mail });

  if (error) {
    const supabaseError: SupabaseError = {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    };
    throw supabaseError;
  }
}
