import { supabase } from "../../lib/supabaseClient";

export async function addMailToList(mail: string): Promise<void> {
  const { error } = await supabase.from("newsletter").insert({ mail });

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
