"use client";

import { useEffect } from "react";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <Container>
      <div className="py-20 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-3">
          Error Encountered
        </div>
        <Heading className="text-3xl font-black text-neutral-900">
          Something went wrong
        </Heading>
        <Paragraph className="mt-3 text-neutral-600 max-w-md">
          An unexpected error occurred while loading this page. Please try again or return to the homepage.
        </Paragraph>
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-sm font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-4 py-2 bg-neutral-100 text-neutral-800 rounded-xl text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </Container>
  );
}
