import React from "react";
import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={twMerge(
        "bg-neutral-100 text-neutral-900 font-semibold px-1.5 py-0.5 rounded-md border border-neutral-200/80 inline-block",
        className
      )}
    >
      {children}
    </span>
  );
};
