import { tv } from "tailwind-variants";
import { ReactNode } from "react";

const button = tv({
  base: "rounded-md font-medium",
  variants: {
    color: {
      primary:
        "bg-brand-primary text-white transition hover:scale-105 hover:bg-brand-hover hover:shadow-xl focus:ring-4 focus:ring-brand-secondary",
      secondary:
        "border-2 border-brand-primary text-brand-primary transition hover:scale-105 hover:bg-brand-hover hover:text-white hover:shadow-xl focus:ring-4 focus:ring-brand-secondary",
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
