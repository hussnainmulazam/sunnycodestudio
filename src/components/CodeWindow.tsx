import React from "react";

// import "prism-theme-night-owl";
import clsx from "clsx";

export const CodeWindow = ({ title, children }: any) => {
  return (
    <div
      className={clsx(
        "bg-slate-900 rounded-md w-auto overflow-hidden flex flex-col my-10 prose prose-sm",
        "prose prose-slate max-w-none dark:prose-invert dark:text-slate-400",
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
        "prose-lead:text-slate-500 dark:prose-lead:text-slate-400",
        "prose-a:font-semibold dark:prose-a:text-sky-400",
        "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]",
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10",
        "dark:prose-hr:border-slate-800"
      )}
    >
      <div className="flex justify-between items-center bg-slate-800 py-2 px-4">
        <p className="text-emerald-500 text-sm font-medium bg-emerald-600/[0.3] px-2 !my-0 shadow-sm">
          {title}
        </p>
      </div>

      <div>{children}</div>
    </div>
  );
};
