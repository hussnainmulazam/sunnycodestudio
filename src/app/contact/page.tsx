import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Hussnain Mulazam",
  description:
    "Reach out to Hussnain Mulazam. Send a message using the form or contact him via email/phone.",
};

export default function ContactPage() {
  return (
    <Container>
      <Contact />
    </Container>
  );
}
