"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="max-w-5xl mx-auto my-10">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            key={`blog-${blog.title}`}
            href={`/articles/${blog.slug}`}
            className="group p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row gap-6 items-start my-6"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              height="200"
              width="280"
              className="rounded-xl object-cover h-36 w-full md:w-52 flex-shrink-0 border border-neutral-100 shadow-2xs group-hover:scale-[1.02] transition-transform duration-200"
            />
            <div className="flex flex-col justify-between h-full flex-1">
              <div>
                <h3 className="font-heading font-bold text-lg md:text-xl text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <Paragraph className="text-sm mt-2 text-neutral-600 leading-relaxed">
                  {blog.description}
                </Paragraph>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 flex-wrap gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {blog.tags?.map((tag) => (
                    <span
                      key={`tag-${blog.slug}-${tag}`}
                      className="text-xs font-medium bg-neutral-50 text-neutral-700 px-2.5 py-1 rounded-md border border-neutral-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
