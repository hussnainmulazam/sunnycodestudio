import Link from "next/link";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <span className="text-6xl mb-4">🔍</span>
        <Heading className="font-black text-3xl">404 - Page Not Found</Heading>
        <Paragraph className="mt-4 max-w-md text-neutral-600">
          The page you are looking for doesn&apos;t exist or has been moved.
        </Paragraph>
        <Link
          href="/"
          className="mt-6 px-4 py-2 rounded-md bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition"
        >
          Return Home
        </Link>
      </div>
    </Container>
  );
}
