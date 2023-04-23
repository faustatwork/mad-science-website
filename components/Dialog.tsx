import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import qrDark from "../public/images/qr-dark.webp";
import qrLight from "../public/images/qr-light.webp";
import { useTheme } from "next-themes";

interface DialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const StyledDialog = ({ isOpen, setIsOpen }: DialogProps) => {
  const theme = useTheme();

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/75 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed top-[50%] left-[50%] flex h-[40vh] max-h-[85vh] w-[70vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-[6px] bg-white p-[50px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow dark:bg-zinc-900">
          <Image
            src={theme.resolvedTheme === "dark" ? qrDark : qrLight}
            alt="qr code for payment address"
            width={200}
            height={200}
          />
          <Dialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-black hover:bg-gray-300 focus:shadow-[0_0_0_2px] focus:shadow-gray-300 focus:outline-none dark:text-white dark:hover:bg-gray-600 dark:focus:shadow-gray-600"
              aria-label="Close"
            >
              <X size={14} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default StyledDialog;
