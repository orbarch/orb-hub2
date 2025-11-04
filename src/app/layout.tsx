import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from '@/components/Navbar';
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning Library",
  description: "A comprehensive library of learning lessons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
