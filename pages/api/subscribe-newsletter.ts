import { SupabaseError } from "./newsletter";

export async function subscribeToNewsletter(mail: string): Promise<void> {
  if (!mail) {
    throw new Error("Ovo polje ne može biti prazno");
  }

  const requestBody = {
    mail: mail,
  };

  const response = await fetch("/api/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorData: SupabaseError = await response.json();
    const supabaseError: SupabaseError = {
      message: errorData.message,
      details: errorData.details,
      hint: errorData.hint,
      code: errorData.code,
    };
    throw supabaseError;
  }
}
