import React from "react";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Hammer } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Wire Nails | Quality Products & Services",
  description: "Comprehensive B2B supplier of common wire nails, concrete steel nails, duplex shuttering nails, umbrella roofing nails, finishing brads, coil nails, and GI nails across India.",
};

export default function WireNailsPage() {
  const subCategories = [
    { 
      title: "Common Steel Wire Nails", 
      img: "/images/subcategories/nail-common-wire.webp", 
      desc: "Standard bright round wire nails available from 1 inch to 5 inches for general construction, timber framing, and carpentry works." 
    },
    { 
      title: "Concrete & Masonry Steel Nails", 
      img: "/images/subcategories/nail-concrete-steel.webp", 
      desc: "High-grade carbon steel hardened nails with fluted or smooth shanks for direct driving into brick walls, plaster, and concrete blocks." 
    },
    { 
      title: "Duplex Shuttering Nails", 
      img: "/images/subcategories/nail-duplex-shuttering.webp", 
      desc: "Double-headed temporary nails designed for easy removal in concrete formwork, shuttering plywood, and staging frameworks." 
    },
    { 
      title: "Roofing Umbrella Head Nails", 
      img: "/images/subcategories/nail-roofing-umbrella.webp", 
      desc: "Galvanized nails with wide umbrella heads and integrated weatherproof EPDM rubber washers for securing corrugated sheets and roofing tiles." 
    },
    { 
      title: "Finishing & Brad Nails", 
      img: "/images/subcategories/nail-finishing-brad.webp", 
      desc: "Small lost-head finishing panel pins and brad nails for fine cabinetry, interior moulding, skirting boards, and decorative woodworking." 
    },
    { 
      title: "Collated Coil & Framing Nails", 
      img: "/images/subcategories/nail-coil-framing.webp", 
      desc: "Pneumatic nail gun wire coil and paper-collated strip framing nails for high-speed automated pallet making and construction." 
    },
    { 
      title: "Galvanized GI Wire Nails", 
      img: "/images/subcategories/nail-common-wire.webp", 
      desc: "Hot-dip and electro-galvanized rust-resistant nails engineered for outdoor timber construction and high-moisture environments." 
    },
    { 
      title: "Clout & Gypsum Drywall Nails", 
      img: "/images/subcategories/wire-nails.webp", 
      desc: "Wide-flat head clout nails for plasterboard fixing, roofing felt attachment, and sheet material fastening." 
    },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/subcategories/wire-nails.webp" 
            alt="Wire Nails Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Hammer className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Wire Nails
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Premium quality steel wire nails for every application — from heavy civil construction and formwork to precision cabinetry and roofing.
          </p>
        </div>
      </section>

      {/* Bulk Enquiry CTA (Top) */}
      <section className="bg-[var(--color-surface-grey)] py-8 border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-on-light)] mb-1">Wholesale & Ton-Scale Supply</h3>
            <p className="text-[var(--color-text-on-light-muted)]">Supplying 50kg bags, carton boxes, and bulk container lots with nationwide logistics.</p>
          </div>
          <Button variant="whatsapp" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20bulk%20requirement%20for%20Wire%20Nails.%20Please%20share%20pricing%20and%20sizes.">
              Enquire for Bulk Order
            </a>
          </Button>
        </div>
      </section>

      {/* Sub-categories Grid */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subCategories.map((cat, i) => (
              <div key={i} className="flex flex-col h-full">
                <SquareImageCard 
                  imageUrl={cat.img}
                  imageAlt={cat.title}
                  title={cat.title}
                  description={cat.desc}
                  className="h-full flex-1"
                />
                <Button variant="whatsapp" className="w-full mt-4 rounded-t-none" asChild>
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20${encodeURIComponent(cat.title)}.%20Please%20share%20specifications%20and%20pricing.`}>
                    Enquire on WhatsApp
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
