import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: `${product.title} | Hussnain Mulazam`,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Hussnain Mulazam",
      description:
        "Hussnain Mulazam is a Senior Full Stack AI Developer building scalable web apps, REST APIs, and AI-agent powered systems.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
