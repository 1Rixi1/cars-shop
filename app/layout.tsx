import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Best Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
