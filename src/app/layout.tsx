import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ORB-Hub",
  description: "A comprehensive library of learning lessons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <Navbar />
        <main className="flex-1 w-full bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
