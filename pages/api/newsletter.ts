import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

export type SupabaseError = {
  code: string;
  message: string;
  details: string;
  hint: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
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
      res.status(400).json(supabaseError);
    } else {
      res.status(200).end();
    }
  } else {
    res.status(405).end();
  }
}
