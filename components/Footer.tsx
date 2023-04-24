import Link from "next/link";
import SwitchTheme from "./SwitchTheme";

const Footer = () => {
  const footerLinks = (
    <Link href="/telegram" target="_blank" rel="noopener noreferrer">
      Telegram
    </Link>
  );

  return (
    <>
      <footer className="mt-40 flex h-fit w-full flex-row flex-wrap items-center justify-center gap-20 py-20 px-16 text-black dark:text-white sm:p-10">
        {footerLinks}
        <SwitchTheme />
      </footer>
    </>
  );
};

export default Footer;
