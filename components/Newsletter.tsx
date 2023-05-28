import { toast } from "react-hot-toast";
import { XCircle, CheckCircle2 } from "lucide-react";
import { SupabaseError } from "../types/supabase";
import { useEffect, useState } from "react";

const Newsletter = () => {
  const [subscribersCount, setSubscribersCount] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: event.target.newsletter_form_input.value,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData.error as SupabaseError;
      }

      toast.custom(
        <div className="flex flex-row items-center justify-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow shadow-black/5 dark:border-gray-600 dark:bg-gray-800 dark:shadow-white/5">
          <CheckCircle2 size={20} color="green" />
          <p className="text-[0.93rem] font-medium text-black dark:text-white ">
            Uspješno ste se pretplatili na naš newsletter!
          </p>
        </div>,
      );
    } catch (error) {
      const submitError = error as SupabaseError;
      toast.custom(
        <div className="flex flex-row items-center justify-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow shadow-black/5 dark:border-gray-600 dark:bg-gray-800 dark:shadow-white/5">
          <XCircle size={20} color="red" />
          <div className="flex flex-col items-start justify-start gap-2">
            <p className="text-[0.93rem] font-medium text-black dark:text-white ">
              Došlo je do pogreške.
            </p>
            <p className="max-w-sm text-[0.88rem]">
              Error:{" "}
              <span className="text-gray-500 dark:text-gray-400">
                {submitError.message ===
                // eslint-disable-next-line quotes
                `duplicate key value violates unique constraint "newsletter_mail_key"`
                  ? "Već ste pretplaćeni na naš newsletter."
                  : submitError.message}
              </span>
            </p>
          </div>
        </div>,
      );
    }
  };

  useEffect(() => {
    async function fetchSubscriberCount() {
      try {
        const response = await fetch("/api/subscribers-count", {
          method: "GET",
        });
        const data = await response.json();

        if (response.ok) {
          setSubscribersCount(data.count);
        } else {
          throw data.error as SupabaseError;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }

    fetchSubscriberCount();
  }, []);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-7 rounded-2xl bg-blue-600 px-8 py-14 text-center sm:items-start sm:justify-start sm:text-start">
        <h3 className="text-3xl font-bold text-white">
          Pretplatite se na naš newsletter
        </h3>
        <p className="max-w-4xl leading-relaxed text-blue-100">
          Prijavite se za našu newsletter listu i dobijajte najnovije
          informacije direktno u vaš inbox. Ne propustite priliku da se
          pridružite ostalih {subscribersCount} pretplatnika i da unapredite
          svoje znanje i veštine!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-xl items-center justify-center rounded-lg bg-white p-1 sm:max-w-full sm:flex-col"
          id="newsletter-form"
        >
          <input
            type="email"
            // autoComplete is set to "off" due to the input field changing the color when a suggested
            // option is selected, the workarounds didn't seem reliable at time so I set this to "off"
            autoComplete="off"
            placeholder="Unesite svoj email"
            form="newsletter-form"
            required={true}
            name="newsletter_form_input"
            id="newsletter_form_input"
            className="w-full bg-white p-2 text-gray-500 outline-none"
          />
          <input
            type="submit"
            className="w-48 cursor-pointer rounded-lg bg-blue-600 p-2 px-3 font-medium text-white shadow-md outline-none duration-150 hover:bg-blue-500 focus:shadow-none active:bg-blue-700 sm:w-full sm:px-4"
            form="newsletter-form"
            aria-label="subscribe to newsletter button"
            value={"Pretplati se"}
          />
        </form>
        <p className="text-sm text-white/60">
          Nikada ne šaljemo neželjene poruke, brinemo o zaštiti vaših podataka.
        </p>
      </div>
    </>
  );
};

export default Newsletter;
