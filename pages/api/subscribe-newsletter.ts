import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";
import { SupabaseError } from "../../types/supabase";

interface NewsletterResponse {
  success: boolean;
  error?: SupabaseError;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsletterResponse>,
) {
  if (req.method === "POST") {
    const { mail } = req.body;
    const { error } = await supabase.from("newsletter").insert({ mail });

    if (error) {
      const supabaseError: SupabaseError = {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      };
      res.status(400).json({ success: false, error: supabaseError });
    } else {
      res.status(200).json({ success: true });
    }
  } else {
    res
      .status(405)
      .json({ success: false, error: { message: "Method Not Allowed" } });
  }
}
