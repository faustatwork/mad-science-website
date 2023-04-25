import Link from "next/link";
import React, { useState } from "react";
import useMediaQuery from "../utils/hooks/useMediaQuery";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  const navLinks = (
    <>
      <li>
        <Link href={"/telegram"}>Telegram</Link>
      </li>
      <li>
        <Link href={"/discord"}>Discord</Link>
      </li>
    </>
  );

  return (
    <nav>
      <div
        className={
          isWindowSizeSmall
            ? "absolute flex h-fit w-screen flex-col items-center justify-between p-10 text-gray-800 dark:text-gray-200"
            : "absolute flex h-fit w-screen flex-row items-center justify-between px-20 py-10 text-gray-800 dark:text-gray-200"
        }
      >
        <div
          className={
            isWindowSizeSmall
              ? "flex w-full flex-row justify-between"
              : "hidden"
          }
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="show navbar button"
          >
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <Link href={"/"} className="text-2xl font-extrabold">
            Mad Science
          </Link>
        </div>
        <Link
          href={"/"}
          className={isWindowSizeSmall ? "hidden" : "text-2xl font-extrabold"}
        >
          Mad Science
        </Link>
        <ul
          className={
            isWindowSizeSmall
              ? "mt-8 h-64 w-full list-none flex-col items-center justify-center gap-10 bg-gray-600 text-white" +
                (isOpen ? " flex" : " hidden")
              : "flex list-none flex-row items-center justify-center gap-10"
          }
        >
          {navLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
