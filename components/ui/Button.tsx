import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

const baseStyles =
  "btn-shimmer inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-full transition-all duration-300 ease-out whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream-light disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-dark hover:text-cream-light shadow-[0_8px_24px_-8px_rgba(201,149,58,0.45)] hover:shadow-[0_12px_30px_-6px_rgba(201,149,58,0.6)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal",
  ghost:
    "bg-transparent text-charcoal hover:text-gold",
  dark:
    "bg-charcoal text-cream-light hover:bg-charcoal-deep border border-charcoal hover:border-gold hover:text-gold",
};

const sizeStyles: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type LinkButtonProps = ButtonBaseProps & Omit<ComponentProps<typeof Link>, "className">;
type NativeButtonProps = ButtonBaseProps & Omit<ComponentProps<"button">, "className"> & { href?: undefined };

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in rest && rest.href) {
    return (
      <Link className={classes} {...(rest as ComponentProps<typeof Link>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
