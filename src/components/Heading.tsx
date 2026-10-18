import React from "react";
import { twMerge } from "tailwind-merge";

export const Heading = ({
  className,
  children,
  as = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) => {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={twMerge(
        "font-heading font-black tracking-tight text-neutral-900",
        className
      )}
    >
      {children}
    </Tag>
  );
};
