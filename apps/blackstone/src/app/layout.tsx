import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const geistSans = GeistSans;

export const metadata: Metadata = {
  title: "LanguBridge Education Centre | Immersive Language Programs",
  description:
    "Immersive summer language programs in Korea, Japan, and China. Connect the world by language with LanguBridge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
