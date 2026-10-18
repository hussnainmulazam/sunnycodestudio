"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );
  return (
    <div className="py-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={product.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height="1000"
          width="1000"
          className="rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap">
        {product.images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image}
              alt="product thumbnail"
              height="1000"
              width="1000"
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
            />
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row justify-between items-start flex-col mt-12 gap-4">
        <div>
          <Heading className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-900 mb-2">
            {product.title}
          </Heading>
          <Paragraph className="max-w-2xl text-neutral-600 mt-2">
            {product.description}
          </Paragraph>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs font-medium bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-md border border-neutral-200/80"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-700 mt-8 pt-6 border-t border-neutral-200">
        {product?.content}
      </div>

      <div className="pt-8">
        <a
          href={product.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition shadow-sm text-sm"
        >
          <span>Live Demo &amp; Code</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
};
