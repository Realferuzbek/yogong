import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "YoGong",
  description: "Relationship OS for couples to feel closer every day."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} bg-midnight-900 text-slate-50 antialiased`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
