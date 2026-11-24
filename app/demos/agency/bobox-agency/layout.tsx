import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Byteflyo Agency | Avant-Garde Digital Flagship & Motion Engineering",
  description:
    "Live showcase of Byteflyo Agency. Deep #0a0a0a obsidian canvas, warm off-white luminous accents, kinetic typography, and high-conversion editorial UX.",
};

export default function BoboxAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
