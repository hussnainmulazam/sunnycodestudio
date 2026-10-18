"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar: purely CSS controlled, never unmounts, perfectly responsive */}
      <div className="hidden lg:flex px-6 z-[100] py-10 bg-neutral-100 w-fit relative h-screen flex-col justify-between flex-shrink-0">
        <div className="flex-1 overflow-auto">
          <SidebarHeader />
          <Navigation setOpen={setOpen} />
        </div>
        <div>
          <Badge href="/resume" text="Read Resume" />
        </div>
      </div>

      {/* Mobile Sidebar: exclusively controlled by state and Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[90] bg-neutral-900/50 lg:hidden backdrop-blur-sm"
          />
        )}
        {open && (
          <motion.div
            key="sidebar"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-10 bg-neutral-100 w-[16rem] fixed h-screen left-0 flex flex-col justify-between shadow-2xl lg:hidden"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => setOpen(false)}>
              <Badge href="/resume" text="Read Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Toggle Button */}
      <button
        className="fixed lg:hidden bottom-4 right-4 h-10 w-10 border border-neutral-200 rounded-full backdrop-blur-md bg-white/80 shadow-lg flex items-center justify-center z-[110]"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-5 w-5 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1.5 my-8 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className={twMerge(
            "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50 transition-colors flex items-center space-x-2.5 py-2 px-3 rounded-xl text-sm font-medium",
            isActive(link.href) && "bg-white shadow-2xs text-neutral-900 border border-neutral-200/80 font-semibold"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0 text-neutral-500",
              isActive(link.href) && "text-blue-600"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 pt-7 px-3 mb-1">
        Socials
      </p>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50 transition-colors flex items-center space-x-2.5 py-2 px-3 rounded-xl text-sm font-medium"
        >
          <link.icon className="h-4 w-4 flex-shrink-0 text-neutral-500" />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <Link href="/" className="flex items-center space-x-3 cursor-pointer">
      <Image
        src="/profile.jpeg"
        alt="Hussnain Mulazam"
        height={42}
        width={42}
        className="object-cover object-top rounded-full flex-shrink-0 border border-neutral-200 shadow-2xs"
      />
      <div className="flex flex-col">
        <p className="font-heading font-bold text-neutral-900 text-sm">Hussnain Mulazam</p>
        <p className="text-xs text-neutral-500 font-medium">Senior Full Stack AI Developer</p>
      </div>
    </Link>
  );
};
