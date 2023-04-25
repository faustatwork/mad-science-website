import React, { useState } from "react";

interface CopyBlockProps {
  value: string;
}

export default function CopyBlock({ value }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value).then(
      () => {
        setCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      err => {
        // eslint-disable-next-line no-console
        console.log("failed to copy", err.mesage);
      },
    );
  };

  const btnStyle = copied ? "bg-gray-200 dark:bg-gray-800 " : "";
  return (
    <div className="text-center">
      <button
        onClick={copyToClipboard}
        className={
          btnStyle +
          "-mt-8 w-80 truncate rounded border border-gray-300 p-3 text-sm text-black transition hover:bg-gray-300 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        }
      >
        {copied ? "Kopirano" : value}
      </button>
    </div>
  );
}
