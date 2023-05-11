import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import qrDark from "../public/images/qr-dark.webp";
import qrLight from "../public/images/qr-light.webp";
import CopyBlock from "./CopyBlock";
import { useEffect } from "react";

interface PaymentDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const PaymentDialog = ({ isOpen, setIsOpen }: PaymentDialogProps) => {
  const theme = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.scrollBehavior = "auto";
    } else {
      const timeoutId = setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
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
                <Dialog.Panel className="flex w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all dark:bg-zinc-900">
                  <Dialog.Title
                    as="p"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Kupi kurs
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-400">Opis</p>
                  </div>
                  <div className="mt-4">
                    <Image
                      src={theme.resolvedTheme === "dark" ? qrDark : qrLight}
                      alt="qr code for payment address"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mt-8 flex flex-col items-start justify-start gap-5">
                    <p className="text-sm text-gray-600">USDT adresa</p>
                    <CopyBlock value="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" />
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
