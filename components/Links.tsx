import { ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

interface LinksArray {
  items: LinksProps[];
}

interface LinksProps {
  icon: ReactNode;
  name: string;
  desc: string;
  href: string;
}

const Links = ({ items }: LinksArray) => {
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
      : "rgba(46, 100, 125, 0.15)";

  return (
    <>
      <div className="min-w-[80%] sm:w-full">
        <div className="grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target="_blank"
              className="group relative h-fit rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-600 dark:bg-gray-800"
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
                <div className="h-8 w-8 text-blue-600">{item.icon}</div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <p className="text-lg font-medium text-black/80 dark:text-gray-200">
                    {item.name}
                  </p>
                  <p className="text-base text-black/70 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Links;
