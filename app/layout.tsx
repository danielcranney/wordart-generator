import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarNavigationItem } from "@/components/SidebarNavigationItem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "flex w-full"}>
        <aside>
          <h3 className="text-neutral-900 text-2xl font-bold mb-6">
            my90s.website
          </h3>

          <ul>
            <SidebarNavigationItem
              text={"Word Art"}
              route={"word-art"}
              icon={null}
            />
            <SidebarNavigationItem
              text={"aLteRnAtInG cApItAlS"}
              route={"alternating-capitals"}
              icon={null}
            />
            <SidebarNavigationItem
              text={"ASCII Art"}
              route={"ascii-art"}
              icon={null}
            />
            <SidebarNavigationItem
              text={"Hit Counter"}
              route={"hit-counter"}
              icon={null}
            />
            <SidebarNavigationItem
              text={"Ticker Tape"}
              route={"ticker-tape"}
              icon={null}
            />
            <SidebarNavigationItem
              text={"Under Construction"}
              route={"under-construction"}
              icon={null}
            />
          </ul>
        </aside>

        <main>{children}</main>
      </body>
    </html>
  );
}
