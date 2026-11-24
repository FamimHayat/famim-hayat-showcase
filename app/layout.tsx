import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "99-Page Multi-Industry Showcase Hub | Famim Hayat",
  description:
    "Curated collection of 99 modern landing page experiences across 11 key industries, featuring the live Byteflyo Agency showcase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full antialiased dark ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${plusJakartaSans.className} min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed] transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
