import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hussnain Mulazam - Full-Stack Developer",
  description:
    "Hussnain Mulazam is a Full-Stack Developer and AI & Agents Developer, building scalable web apps and backend systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans")}>
      <body
        className={twMerge(
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 h-screen overflow-hidden">
          <div className="flex-1 bg-white h-full lg:rounded-tl-xl border border-transparent lg:border-neutral-200 relative w-full overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
            <div className="relative z-10 h-full overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
