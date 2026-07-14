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
  description: "Complete Solutions Under One Roof: Fire Equipment, Safety Equipment, Housekeeping & Sanitary Solutions, Stationery, Electrical Materials, Construction Works & Interior Works. Products supplied across India.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Quality Products & Services",
  "description": "B2B supplier of fire equipment, safety equipment, housekeeping & sanitary solutions, stationery, and electrical materials across India. Construction and interior works services in AP & Telangana.",
  "url": "https://quality-products-and-services.vercel.app",
  "telephone": "+919993454442",
  "email": "qualityproductsandservices999@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Flat No. 47, Venkata Rama Residency, Road No. 3, Sri Sai Nagar, KPHB",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500085",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Products & Services",
    "itemListElement": [
      { "@type": "OfferCatalog", "name": "Fire Fighting Equipment" },
      { "@type": "OfferCatalog", "name": "Safety Equipment" },
      { "@type": "OfferCatalog", "name": "Housekeeping & Sanitary Solutions" },
      { "@type": "OfferCatalog", "name": "Stationery Solutions" },
      { "@type": "OfferCatalog", "name": "Electrical Materials" },
      { "@type": "OfferCatalog", "name": "Construction Works" },
      { "@type": "OfferCatalog", "name": "Interior Works" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
