import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Quality Products & Services | KPHB, Hyderabad",
  description: "Complete Solutions Under One Roof: Construction & Interior Works, Fire Fighting, Safety & Road Safety Equipment, Cleaning & Housekeeping Supplies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased flex flex-col min-h-screen pt-[72px]`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat phoneNumber="919993454442" />
      </body>
    </html>
  );
}
