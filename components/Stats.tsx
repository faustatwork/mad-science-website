import { ReactNode } from "react";

interface StatsArray {
  items: StatsProps[];
}

interface StatsProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const Stats = ({ items }: StatsArray) => {
  return (
    <>
      <div className="max-w-4xl sm:w-full">
        <ul className="grid grid-cols-3 gap-8 sm:grid-cols-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="space-y-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-600 dark:bg-gray-800"
            >
              <div className="pb-3 text-indigo-600">{item.icon}</div>
              <h2 className="text-lg font-semibold text-black dark:text-white">
                {item.title}
              </h2>
              <h3 className="leading-relaxed text-gray-500 dark:text-gray-300">
                {item.desc}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Stats;
