import Link from "next/link";
import SwitchTheme from "./SwitchTheme";
import { InstagramLogo, TelegramLogo, TikTokLogo, YouTubeLogo } from "./Logos";
import Image from "next/image";
import logo from "../public/brand/logo.webp";

const Footer = () => {
  const footerNav = (
    <>
      <li>
        <Link
          className="text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
          href="/#onama"
        >
          O nama
        </Link>
      </li>
      <li>
        <Link
          className="text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
          href="/edukacija"
        >
          Edukacija
        </Link>
      </li>
      <li>
        <Link
          className="text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
          href="/#pitanja"
        >
          Često postavljana pitanja
        </Link>
      </li>
      <li>
        <Link
          className="text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
          href="/linkovi"
        >
          Linkovi
        </Link>
      </li>
    </>
  );

  const footerSocials = (
    <>
      <li>
        <Link
          href="/telegram"
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
        >
          <span className="sr-only">Telegram</span>
          <TelegramLogo className="h-6 w-6" />
        </Link>
      </li>
      <li>
        <Link
          href="/instagram"
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
        >
          <span className="sr-only">Instagram</span>
          <InstagramLogo className="h-6 w-6" />
        </Link>
      </li>
      <li>
        <Link
          href="/tiktok"
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
        >
          <span className="sr-only">TikTok</span>
          <TikTokLogo className="h-6 w-6" />
        </Link>
      </li>
      <li>
        <Link
          href="/youtube"
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
        >
          <span className="sr-only">YouTube</span>
          <YouTubeLogo className="h-6 w-6" />
        </Link>
      </li>
    </>
  );

  return (
    <>
      <footer aria-label="Site Footer">
        <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8 sm:px-6">
          <div className="flex flex-row items-center justify-center gap-5">
            <Image
              alt="Mad Science logo"
              src={logo}
              height={60}
              quality={100}
            />
            <p className="text-2xl leading-relaxed text-gray-600 dark:text-gray-400">
              Mad Science
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-500">
            A small group that can do the math.
          </p>
          <nav aria-label="Footer Nav" className="mt-6">
            <ul className="flex flex-wrap justify-center gap-6 lg:gap-12 md:gap-8">
              {footerNav}
            </ul>
          </nav>
          <ul className="mt-10 flex justify-center gap-6 md:gap-8">
            {footerSocials}
          </ul>
          <p className="mx-auto mt-10 text-center text-sm leading-relaxed text-gray-400 dark:text-gray-600">
            {new Date().getFullYear() === 2023
              ? `Copyright © 2023 Mad Science. All
            rights reserved.`
              : `Copyright © 2023 - ${new Date().getFullYear()} Mad Science. All
            rights reserved.`}
          </p>
          <div className="mt-6 flex items-center justify-center">
            <SwitchTheme />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
