"use client";
import React, { useState } from "react";
import { Paragraph } from "@/components/Paragraph";

const defaultFormState = {
  fullName: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  company: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Write your submit logic here
    console.log(formData);
  };
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">
        {/* Left column */}
        <div className="pt-2">
          <div className="h-12 w-12 rounded-xl border border-neutral-200 bg-white shadow-sm flex items-center justify-center">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-neutral-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </div>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
            Contact us
          </h2>
          <Paragraph className="mt-4 max-w-xl text-neutral-600">
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
          </Paragraph>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500">
            <a className="hover:text-neutral-700" href="mailto:hussnainmulazam@gmail.com">
              hussnainmulazam@gmail.com
            </a>
            <span className="text-neutral-300">•</span>
            <a className="hover:text-neutral-700" href="tel:+923266655307">
              +92 326 6655307
            </a>
            <span className="text-neutral-300">•</span>
            <a
              className="hover:text-neutral-700"
              href="https://github.com/Sunny-Janjua"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Sunny-Janjua
            </a>
          </div>

          {/* Map-like section (matches screenshot) */}
          <div className="mt-10 relative h-[170px] sm:h-[210px]">
            <div className="absolute inset-0 opacity-40">
              <svg
                viewBox="0 0 900 260"
                className="h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="fade" x1="0" x2="1">
                    <stop offset="0" stopColor="#a3a3a3" stopOpacity="0.0" />
                    <stop offset="0.25" stopColor="#a3a3a3" stopOpacity="0.35" />
                    <stop offset="0.7" stopColor="#a3a3a3" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#a3a3a3" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* very simplified “world map” blobs */}
                <path
                  d="M120 150c40-40 90-55 150-45 40 6 70 25 86 44 18 22 9 50-30 63-56 19-130 6-206-10-18-4-23-30 0-52z"
                  fill="url(#fade)"
                />
                <path
                  d="M395 112c35-30 85-38 140-25 52 13 95 55 100 85 6 38-48 55-105 52-58-3-130-12-155-45-16-20-3-47 20-67z"
                  fill="url(#fade)"
                />
                <path
                  d="M660 125c35-25 75-30 110-18 36 12 56 45 48 68-10 30-55 38-98 25-35-10-72-34-78-52-5-15 1-18 18-23z"
                  fill="url(#fade)"
                />
              </svg>
            </div>

            {/* Marker */}
            <div className="absolute left-1/2 top-[35%] -translate-x-1/2">
              <div className="px-2 py-1 rounded-md bg-white border border-neutral-200 text-xs text-neutral-600 shadow-sm">
                We are here
              </div>
              <div className="mx-auto mt-2 h-12 w-[2px] bg-blue-400/60" />
              <div className="mx-auto -mt-1 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />
            </div>
          </div>
        </div>

        {/* Right column: Form card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-7 shadow-sm"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            backgroundPosition: "center",
          }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-neutral-500 mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="Hussnain Mulazam"
                className="bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-3 py-2 rounded-md text-sm text-neutral-800 w-full"
                value={formData.fullName.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: { value: e.target.value, error: "" },
                  })
                }
              />
            </div>

            <div>
              <label className="block text-xs text-neutral-500 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-3 py-2 rounded-md text-sm text-neutral-800 w-full"
                value={formData.email.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: { value: e.target.value, error: "" },
                  })
                }
              />
            </div>

            <div>
              <label className="block text-xs text-neutral-500 mb-1">
                Company
              </label>
              <input
                type="text"
                placeholder="Your Company"
                className="bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-3 py-2 rounded-md text-sm text-neutral-800 w-full"
                value={formData.company.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company: { value: e.target.value, error: "" },
                  })
                }
              />
            </div>

            <div>
              <label className="block text-xs text-neutral-500 mb-1">
                Message
              </label>
              <textarea
                placeholder="Type your message here"
                rows={6}
                className="bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-3 py-2 rounded-md text-sm text-neutral-800 w-full resize-none"
                value={formData.message.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: { value: e.target.value, error: "" },
                  })
                }
              />
            </div>

            <button
              className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Working embedded map (kept, but placed below like the “working map” request) */}
      <div className="mt-10 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
        <iframe
          title="Contact map"
          className="w-full h-[260px] sm:h-[320px] lg:h-[360px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Faisalabad%2C%20Pakistan&output=embed"
        />
      </div>
    </div>
  );
};
