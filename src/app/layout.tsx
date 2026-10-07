import type { Metadata } from "next";
import { Inter, Syne, Jost } from "next/font/google";

import "./globals.css";
import Header from "../components/Header";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Predubezhdai",
  description: "Predubezdai Katarsis collection",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="font-inter min-h-full flex flex-col ">
        <Header />
        {children}
      </body>
    </html>
  );
}
