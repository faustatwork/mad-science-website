import { useState } from "react";
import Button from "./Button";
import StyledDialog from "./PaymentDialog";
import { ShoppingCart } from "lucide-react";

interface TierArray {
  items: TierProps[];
}

interface TierProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  model: "jednokratno" | "mjesečno";
  recommended?: boolean;
}

const Tier = ({ items }: TierArray) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <StyledDialog isOpen={openDialog} setIsOpen={setOpenDialog} />
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-20 xl:gap-16 lg:flex-col">
        {items.map((item, index) => {
          const recommended = item.recommended
            ? "border-2 border-blue-600 shadow-2xl shadow-blue-400/75 p-12 "
            : "border border-gray-100 shadow dark:border-gray-600 py-6 px-12  ";

          return (
            <>
              <div
                className={
                  recommended +
                  "flex w-80 flex-col rounded-lg bg-white text-center text-gray-900 dark:bg-gray-800 dark:text-white xl:w-72 lg:w-96 sm:w-full"
                }
                key={index}
              >
                <p className="mb-4 text-2xl font-semibold">{item.title}</p>
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
                  icon={<ShoppingCart size={18} strokeWidth={3} />}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Tier;
