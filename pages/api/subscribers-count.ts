import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";
import { SupabaseError } from "../../types/supabase";

interface CountResponse {
  success: boolean;
  count: number;
  error?: SupabaseError;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CountResponse>,
) {
  if (req.method === "GET") {
    const { count, error } = await supabase
      .from("newsletter")
      .select("*", { count: "exact", head: true });

    if (error) {
      const supabaseError: SupabaseError = {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      };
      res.status(400).json({ success: false, count: -1, error: supabaseError });
    } else {
      res.status(200).json({ success: true, count: count ?? 0 });
    }
  } else {
    res.status(405).json({
      success: false,
      count: -1,
      error: { message: "Method Not Allowed" },
    });
  }
}
