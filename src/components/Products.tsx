"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              key={product.href}
              className="group p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row gap-6 items-start"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                height="240"
                width="320"
                className="rounded-xl object-cover h-40 w-full md:w-56 flex-shrink-0 border border-neutral-100 shadow-2xs group-hover:scale-[1.02] transition-transform duration-200"
              />
              <div className="flex flex-col justify-between h-full flex-1">
                <div>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <Paragraph className="text-sm mt-2 text-neutral-600 leading-relaxed">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex items-center justify-between pt-4 mt-2 flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {product.stack?.map((stack: string) => (
                      <span
                        key={stack}
                        className="text-xs font-medium bg-neutral-50 text-neutral-700 px-2.5 py-1 rounded-md border border-neutral-200/80"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore Details &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
