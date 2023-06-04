import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import qrDark from "../public/payment/qr-dark.svg";
import qrLight from "../public/payment/qr-light.svg";
import CopyBlock from "./CopyBlock";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

interface PaymentDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  desc: string;
}

const PaymentDialog = ({
  isOpen,
  setIsOpen,
  title,
  desc,
}: PaymentDialogProps) => {
  const theme = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.scrollBehavior = "auto";
    } else {
      const timeoutId = setTimeout(() => {
        document.documentElement.style.scrollBehavior = "";
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={isOpen}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all dark:bg-zinc-900">
                  <Dialog.Title
                    as="p"
                    className="text-center text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-5 text-center">
                    <p className="w-full text-sm text-gray-500">{desc}</p>
                  </div>
                  <div className="mt-5">
                    <Image
                      src={theme.resolvedTheme === "dark" ? qrDark : qrLight}
                      alt="qr code for payment address"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mt-8 flex w-full flex-col items-start justify-start gap-5">
                    <p className="text-sm text-gray-900 dark:text-gray-300">
                      USDT TRC20 Adresa
                    </p>
                    <CopyBlock value="TBXic6mWhJcet2TdnDdzKhPiX867FDxrnd" />
                  </div>
                  <div className="mt-6 flex flex-row items-center justify-center gap-5">
                    <AlertCircle
                      size={24}
                      className="text-gray-400 dark:text-gray-600"
                    />
                    <p className="w-full text-sm text-gray-400 dark:text-gray-600">
                      Da biste dobili pristup kursu, potrebno je nakon uplate
                      javiti se adminu putem Telegrama klikom{" "}
                      <Link
                        className="font-medium underline"
                        href="https://t.me/N3M_332"
                      >
                        ovdje
                      </Link>
                      .
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PaymentDialog;
