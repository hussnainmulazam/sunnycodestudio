"use client";

import React from "react";
import { Globe } from "@/components/ui/globe";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default function GlobeDemo() {
  return (
    <div className="w-full rounded-2xl border border-neutral-200 bg-white p-6 overflow-hidden">
      <Heading as="h2" className="text-2xl lg:text-3xl font-black">
        Globe
      </Heading>
      <Paragraph className="mt-2 max-w-xl">
        A lightweight 3D globe demo built with React Three Fiber.
      </Paragraph>

      <div className="mt-6 h-[360px] md:h-[420px] w-full">
        <Globe
          className="h-full w-full"
          arcs={[
            {
              startLat: 31.5204,
              startLng: 74.3587,
              endLat: 37.7749,
              endLng: -122.4194,
              color: "#60a5fa",
            },
            {
              startLat: 31.5204,
              startLng: 74.3587,
              endLat: 51.5072,
              endLng: -0.1276,
              color: "#a78bfa",
            },
            {
              startLat: 31.5204,
              startLng: 74.3587,
              endLat: 25.2048,
              endLng: 55.2708,
              color: "#34d399",
            },
          ]}
        />
      </div>
    </div>
  );
}

