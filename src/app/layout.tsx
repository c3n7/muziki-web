import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muziki Web",
  description: "Muziki Web, by c3n7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-base-200 text-base-content`}>
        {children}
      </body>
    </html>
  );
}
