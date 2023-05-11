import React, { useState } from "react";
import { Copy, CheckCheck } from "lucide-react";

interface CopyBlockProps {
  value: string;
}

export default function CopyBlock({ value }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value).then(
      () => {
        setCopied(true);
        // Changing back to default state after 2 seconds
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      err => {
        // eslint-disable-next-line no-console
        console.log("Failed to copy: ", err.mesage);
      },
    );
  };

  const btnStyle = copied ? "bg-gray-200 dark:bg-gray-800 " : "";
  return (
    <div className="relative text-center">
      <button
        onClick={copyToClipboard}
        className={
          btnStyle +
          "-mt-8 w-80 rounded border border-gray-200 bg-white px-4 py-3 text-sm text-black transition hover:bg-gray-300 dark:border-gray-600 dark:bg-zinc-900 dark:text-white dark:hover:bg-gray-700"
        }
      >
        <p className="overflow-hidden text-clip">
          {copied ? (
            <>
              <span className="mr-2 inline-block align-middle">
                <CheckCheck size={17} />
              </span>
              Kopirano
            </>
          ) : (
            value
          )}
        </p>
        {copied ? null : (
          <span className="absolute bottom-2.5 right-2.5 bg-inherit pl-2">
            <Copy className="p-[3px]" />
          </span>
        )}
      </button>
    </div>
  );
}
