import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const variants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-emerald-800 text-white hover:bg-emerald-900",
        outline:
          "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
        ghost: "bg-transparent text-slate-600 shadow-none hover:bg-slate-100",
        destructive: "bg-red-50 text-red-700 hover:bg-red-100",
      },
      size: {
        default: "h-9 px-3",
        icon: "h-8 w-8 p-0",
        sm: "h-8 px-2 text-xs",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        type="button"
        className={cn(variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
