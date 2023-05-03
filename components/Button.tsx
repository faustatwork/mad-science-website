import { tv } from "tailwind-variants";
import { ReactNode } from "react";

const button = tv({
  base: "rounded-md font-medium",
  variants: {
    color: {
      primary:
        "bg-blue-600 text-white transition hover:scale-105 hover:bg-blue-700 hover:shadow-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900",
      secondary:
        "border-2 border-blue-600 text-blue-600 transition hover:scale-105 hover:bg-blue-700 hover:text-white hover:shadow-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    },
    disabled: {
      true: "pointer-events-none bg-gray-500 opacity-50",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    disabled: false,
  },
});

interface ButtonProps {
  text: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  disabled?: boolean;
  icon?: ReactNode;
  action?: () => void;
}

const Button = ({ text, size, color, disabled, icon, action }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={action}
      className={button({ size: size, color: color, disabled: disabled })}
    >
      {icon ? (
        <span className="mr-2 inline-block align-middle">{icon}</span>
      ) : null}
      {text}
    </button>
  );
};

export default Button;
