import { useState } from "react";
import Button from "./Button";
import PaymentDialog from "./PaymentDialog";
import { ShoppingCart } from "lucide-react";

interface TierProps {
  title: string;
  description?: string;
  features: string[];
  models: Model[];
  recommended?: boolean;
  disabled?: boolean;
}

type Model = { interval: string | "jednokratno"; amount: number };

const Tier = ({
  title,
  description,
  features,
  models,
  recommended,
  disabled,
}: TierProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [recurringInterval, setRecurringInterval] = useState<string>();

  const isRecommended = recommended
    ? "border-2 border-brand-primary shadow-2xl shadow-[#4798ad]/75 p-12 "
    : "border border-gray-200 shadow dark:border-gray-600 py-6 px-12  ";

  const getAmountForInterval = () => {
    for (let i = 0; i < models.length; i++) {
      if (models[i].interval === recurringInterval) {
        return models[i].amount;
      }
    }
    return null;
  };

  return (
    <>
      <PaymentDialog
        isOpen={openDialog}
        setIsOpen={setOpenDialog}
        title={`Kupi ${title} edukaciju ($${
          getAmountForInterval() ?? models[0].amount
        } - ${recurringInterval ?? models[0].interval})`}
      />
      <div
        className={
          isRecommended +
          "flex w-[22rem] flex-col justify-between rounded-lg bg-white text-center text-gray-900 dark:bg-gray-800 dark:text-white md:w-full "
        }
      >
        <div className="flex flex-col">
          <p className="text-2xl font-semibold">{title}</p>
          {description ? (
            <p className="mt-4 font-light text-gray-500 dark:text-gray-400 sm:text-lg">
              {description}
            </p>
          ) : null}
          <div className="my-8 flex items-center justify-center">
            <span className="mr-2 text-4xl font-extrabold sm:text-3xl">
              $
              {disabled
                ? "???"
                : `${getAmountForInterval() ?? models[0].amount}`}
            </span>
            {disabled ? null : (
              <select
                className="cursor-pointer rounded-md bg-transparent p-1 text-sm text-gray-600 outline-none transition hover:scale-105 hover:bg-gray-200 hover:shadow-xl hover:shadow-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:shadow-gray-800"
                value={recurringInterval ?? models[0].interval}
                onChange={e => setRecurringInterval(e.target.value)}
              >
                {models.map((e, index) => {
                  return (
                    <option key={index} value={e.interval}>
                      {e.interval}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            {features.map((feature, index) => {
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
                  <span>{disabled ? "???" : feature}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <Button
          text={
            disabled
              ? "???"
              : `Kupi ($${getAmountForInterval() ?? models[0].amount})`
          }
          size={"lg"}
          color={"primary"}
          action={() => setOpenDialog(!openDialog)}
          icon={<ShoppingCart size={18} strokeWidth={3} />}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default Tier;
