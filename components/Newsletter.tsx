import Link from "next/link";

const Newsletter = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-5 rounded-2xl bg-blue-600 py-14 px-8 text-center sm:items-start sm:justify-start sm:text-start">
        <h3 className="text-3xl font-bold text-white">
          Pretplatite se na naš newsletter
        </h3>
        <p className="leading-relaxed text-blue-100">Opis</p>
        <form
          onSubmit={e => e.preventDefault()}
          className="flex w-full max-w-xl items-center justify-center rounded-lg bg-white p-1 sm:max-w-full sm:flex-col"
          id="newsletter-form"
        >
          <input
            type="email"
            placeholder="Unesite svoj email"
            form="newsletter-form"
            required={true}
            name="newsletter_form_input"
            id="newsletter_form_input"
            className="w-full p-2 text-gray-500 outline-none"
          />
          <input
            type="submit"
            className="w-48 cursor-pointer rounded-lg bg-blue-600 p-2 px-3 font-medium text-white shadow-md outline-none duration-150 hover:bg-blue-500 focus:shadow-none active:bg-blue-700 sm:w-full sm:px-4"
            form="newsletter-form"
            aria-label="subscribe to newsletter button"
            value={"Pretplati se"}
          />
        </form>
        <p className="text-sm text-blue-100">
          Nikada ne šaljemo neželjene poruke, brinemo o zaštiti vaših podataka.
          Pročitajte naš{" "}
          <Link className="underline" href="/">
            {" "}
            Pravilnik o privatnosti
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default Newsletter;
