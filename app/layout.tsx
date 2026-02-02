import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "99-Page Multi-Industry Showcase Hub | Famim Hayat",
  description:
    "Curated collection of 99 modern landing page experiences across 11 key industries, featuring the live Bobox Agency showcase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
