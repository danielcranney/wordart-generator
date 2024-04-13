import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WordArt Generator",
  description: "Generate 90s-style WordArt and download it as a PNG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex flex-col w-full bg-white relative"}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
