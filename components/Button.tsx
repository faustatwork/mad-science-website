import { tv } from "tailwind-variants";
import { ReactNode } from "react";

const button = tv({
  base: "font-medium rounded-md",
  variants: {
    color: {
      primary:
        "bg-blue-600 hover:bg-blue-700 text-white dark:focus:ring-blue-900 focus:ring-4 focus:ring-blue-200",
      secondary:
        "bg-purple-600 hover:bg-purple-700 text-white dark:focus:ring-purple-900 focus:ring-4 focus:ring-purple-200",
    },
    size: {
      sm: "text-sm px-3 py-2",
      md: "text-base px-3 py-2",
      lg: "px-4 py-3 text-lg",
    },
    disabled: {
      true: "opacity-50 bg-gray-500 pointer-events-none",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    disabled: "false",
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
