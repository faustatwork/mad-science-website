import Link from "next/link";
import React, { useState } from "react";
import { Book } from "lucide-react";
import Image from "next/image";
import logo from "../public/brand/logo.webp";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <Link
          className="text-black transition hover:text-black/50 dark:text-white/50 dark:hover:text-white"
          href={"/#onama"}
        >
          O nama
        </Link>
      </li>
      <li>
        <Link
          className="text-black transition hover:text-black/50 dark:text-white/50 dark:hover:text-white"
          href={"/#recenzije"}
        >
          Recenzije
        </Link>
      </li>
      <li>
        <Link
          className="text-black transition hover:text-black/50 dark:text-white/50 dark:hover:text-white"
          href={"/#pitanja"}
        >
          Često postavljana pitanja
        </Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="absolute z-50 flex w-screen flex-row items-center justify-between px-20 py-10 text-gray-800 dark:text-gray-200 md:flex-col md:px-7 md:py-10">
        <div className="hidden md:flex md:w-full md:flex-row md:justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
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
          </motion.button>
          <Link
            href={"/"}
            className="flex flex-row items-center justify-center gap-5 text-xl font-bold"
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
          className="flex flex-row items-center justify-center gap-5 text-xl font-bold md:hidden"
        >
          <Image alt="Mad Science logo" src={logo} height={30} quality={100} />
          Mad Science
        </Link>
        <ul
          className={`list-none text-white md:absolute md:mt-[4.5rem] md:h-[90vh] md:w-full md:flex-col md:items-start md:justify-start md:gap-10 md:bg-gray-200 md:p-10 md:dark:bg-zinc-900 
        ${
          isOpen ? "md:flex" : "md:hidden"
        } flex flex-row items-center justify-center gap-10`}
        >
          {navLinks}
          <Link
            className="hidden w-full rounded-md bg-brand-primary px-3 py-2 text-center text-base font-medium text-white transition hover:scale-105 hover:bg-brand-hover hover:shadow-xl focus:ring-4 focus:ring-brand-secondary md:block"
            href={"/edukacija"}
          >
            <span className="mr-2 inline-block align-middle">
              <Book size={18} strokeWidth={3} />
            </span>
            Edukacija
          </Link>
        </ul>
        <Link
          className="rounded-md bg-brand-primary px-3 py-2 text-center text-base font-medium text-white transition hover:scale-105 hover:bg-brand-hover hover:shadow-xl focus:ring-4 focus:ring-brand-secondary md:hidden"
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
