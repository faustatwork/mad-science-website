interface DisclosureItems {
  question: string;
  answer: string;
}

interface DisclosureProps {
  content: DisclosureItems[];
}

const Disclosure = ({ content }: DisclosureProps) => {
  return (
    <div className="w-[60vw] divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
      {content.map((item, index) => {
        return (
          <>
            <details
              className="group p-6 [&_summary::-webkit-details-marker]:hidden"
              open={index === 0}
              key={index}
            >
              <summary className="flex cursor-pointer items-center justify-between">
                <h2 className="text-lg font-medium text-black dark:text-white">
                  {item.question}
                </h2>
                <span className="relative ml-1.5 h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                {item.answer}
              </p>
            </details>
          </>
        );
      })}
    </div>
  );
};

export default Disclosure;
