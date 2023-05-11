import Link from "next/link";
import { ReactNode } from "react";

interface PartnersArray {
  items: PartnersProps[];
}

interface PartnersProps {
  logo: ReactNode;
  link: string;
  label: string;
}

const Partners = ({ items }: PartnersArray) => {
  return (
    <>
      <div>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-10">
          {items.map((item, index) => {
            return (
              <>
                <li key={index}>
                  <Link
                    aria-label={item.label}
                    href={item.link}
                    target="_blank"
                  >
                    <span className="fill-gray-400 hover:fill-gray-600 dark:fill-gray-500 dark:hover:fill-gray-300">
                      {item.logo}
                    </span>
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Partners;
