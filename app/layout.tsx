import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gleicy Branquinha",
  description: "Site oficial de Gleicy Branquinha.",
  openGraph: {
    title: "Gleicy Branquinha",
    description: "Site oficial de Gleicy Branquinha.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}