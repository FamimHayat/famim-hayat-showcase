import { ShowcaseClientHub } from "@/components/ShowcaseClientHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "99-Page Multi-Industry Showcase Hub | Famim Hayat",
  description:
    "Curated architectural index of 99 modern landing page experiences across 11 industries featuring the live Byteflyo Agency showcase.",
};

export default function HomePage() {
  return <ShowcaseClientHub />;
}
