import { ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { useTheme } from "next-themes";

interface StatsArray {
  items: StatsProps[];
}

interface StatsProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const Stats = ({ items }: StatsArray) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const theme = useTheme();

  const hoverColor =
    theme.resolvedTheme === "dark"
      ? "rgba(14, 165, 233, 0.15)"
      : "rgba(0, 174, 255, 0.15)";

  return (
    <>
      <div className="max-w-6xl sm:w-full">
        <ul className="grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="group relative rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-600 dark:bg-gray-800"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${hoverColor},
              transparent 80%
            )
          `,
                }}
              />
              <div className="flex flex-col items-start justify-start gap-4">
                <div className="text-blue-600">{item.icon}</div>
                <h2 className="text-lg font-semibold text-black dark:text-white">
                  {item.title}
                </h2>
                <h3 className="leading-relaxed text-gray-500 dark:text-gray-300">
                  {item.desc}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Stats;
