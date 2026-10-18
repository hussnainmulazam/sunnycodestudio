"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900 flex min-h-screen items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm text-center">
          <h2 className="text-2xl font-black text-neutral-900 mb-2">
            Something went wrong!
          </h2>
          <p className="text-sm text-neutral-600 mb-6">
            A critical error occurred. Please try reloading the application.
          </p>
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
