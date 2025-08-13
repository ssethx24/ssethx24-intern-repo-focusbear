import React from "react";

function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

const VARIANTS = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-600",
  secondary:
    "bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50 active:bg-slate-100 focus-visible:ring-slate-500",
  danger:
    "bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 focus-visible:ring-rose-600",
};

const SIZES = {
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-3.5 py-2",
  lg: "text-base px-4 py-2.5",
};

export default function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className,
  disabled,
  children,
  ...props
}) {
  return (
    <Comp
      className={cx(
        "inline-flex items-center justify-center rounded-md font-medium tracking-tight",
        "transition-transform duration-100 active:scale-95",
        "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
}
