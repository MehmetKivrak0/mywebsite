import { boxData } from "@/app/api/data";
import PortfolioContent from "./PortfolioContent";
import { Metadata } from "next";

export async function generateStaticParams() {
  return boxData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = boxData.find((item) => item.slug === slug);
  return {
    title: item ? `${typeof item.title === 'string' ? item.title : item.title.en} | mehmetk` : "Portfolio | mehmetk",
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PortfolioContent slug={slug} />;
}
