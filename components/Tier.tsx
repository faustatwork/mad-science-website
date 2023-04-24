import { useState } from "react";
import Button from "./Button";
import StyledDialog from "./Dialog";

interface TierArray {
  items: TierProps[];
}

interface TierProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  model: "jednokratno" | "mjesečno";
}

const Tier = ({ items }: TierArray) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <StyledDialog isOpen={openDialog} setIsOpen={setOpenDialog} />
      <div className="mx-auto px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Naslov
          </h2>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Opis
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
          {items.map((item, index) => {
            return (
              <>
                <div
                  className="flex w-80 flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8"
                  key={index}
                >
                  <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                    {item.description}
                  </p>
                  <div className="my-8 flex items-baseline justify-center">
                    <span className="mr-2 text-5xl font-extrabold">
                      €{item.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /{item.model}
                    </span>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {item.features.map((feature, index) => {
                      return (
                        <li className="flex items-center space-x-3" key={index}>
                          <svg
                            className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    text={`Kupi (€${item.price})`}
                    size={"lg"}
                    color={"primary"}
                    action={() => setOpenDialog(!openDialog)}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tier;