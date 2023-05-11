import Link from "next/link";
import React, { useState } from "react";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import { Book } from "lucide-react";
import Image from "next/image";
import logo from "../public/images/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  const navLinks = (
    <>
      <li>
        <Link
          className="text-black transition hover:text-black/50 dark:text-white/50 dark:hover:text-white"
          href={"https://mad-science.io/#onama"}
        >
          O nama
        </Link>
      </li>
      <li>
        <Link
          className="text-black transition hover:text-black/50 dark:text-white/50 dark:hover:text-white"
          href={"https://mad-science.io/#recenzije"}
        >
          Recenzije
        </Link>
      </li>
      <li>
        <Link
          className="text-black transition hover:text-black/50 dark:text-white/50 dark:hover:text-white"
          href={"https://mad-science.io/#pitanja"}
        >
          Često postavljana pitanja
        </Link>
      </li>
    </>
  );

  return (
    <nav>
      <div
        className={
          isWindowSizeSmall
            ? "absolute z-50 flex w-screen flex-col items-center justify-between p-10 text-gray-800 dark:text-gray-200"
            : "absolute z-50 flex w-screen flex-row items-center justify-between px-20 py-10 text-gray-800 dark:text-gray-200"
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
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            )}
          </button>
          <Link
            href={"/"}
            className="flex flex-row items-center justify-center gap-5 text-2xl font-bold"
          >
            <Image
              alt="Mad Science logo"
              src={logo}
              height={30}
              quality={100}
            />
            Mad Science
          </Link>
        </div>
        <Link
          href={"/"}
          className={
            isWindowSizeSmall
              ? "hidden"
              : "flex flex-row items-center justify-center gap-5 text-2xl font-bold"
          }
        >
          <Image alt="Mad Science logo" src={logo} height={30} quality={100} />
          Mad Science
        </Link>
        <ul
          className={
            isWindowSizeSmall
              ? "absolute mt-[4.5rem] h-[90vh] w-full list-none flex-col items-start justify-start gap-10 bg-gray-200 p-10 text-white dark:bg-zinc-900" +
                (isOpen ? " flex" : " hidden")
              : "flex list-none flex-row items-center justify-center gap-10"
          }
        >
          {navLinks}
          <Link
            className={
              isWindowSizeSmall
                ? "w-full  rounded-md bg-blue-600 px-4 py-2 text-center text-lg font-medium text-white transition hover:scale-105 hover:bg-blue-700 hover:shadow-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                : "hidden"
            }
            href={"/edukacija"}
          >
            <span className="mr-2 inline-block align-middle">
              <Book size={18} strokeWidth={3} />
            </span>
            Edukacija
          </Link>
        </ul>
        <Link
          className={
            isWindowSizeSmall
              ? "hidden"
              : "rounded-md bg-blue-600 px-4 py-2 text-lg font-medium text-white transition hover:scale-105 hover:bg-blue-700 hover:shadow-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
          }
          href={"/edukacija"}
        >
          <span className="mr-2 inline-block align-middle">
            <Book size={18} strokeWidth={3} />
          </span>
          Edukacija
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
