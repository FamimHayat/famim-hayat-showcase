import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bobox Agency | Avant-Garde Digital Flagship & Motion Engineering",
  description:
    "Live showcase of Bobox Agency. Deep obsidian canvas, amber-gold accents, kinetic typography, and high-conversion editorial UX.",
};

export default function BoboxAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
