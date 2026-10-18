import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hussnain Mulazam - Senior Full Stack AI Developer",
  description:
    "Hussnain Mulazam is a Senior Full Stack AI Developer with 4+ years of experience specializing in React, Next.js, Node.js, Python, FastAPI, AI Agents, and scalable SaaS platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(montserrat.variable, openSans.variable, "font-sans antialiased")}
    >
      <body
        className={twMerge(
          "flex antialiased h-screen overflow-hidden bg-gray-100 text-neutral-800"
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
