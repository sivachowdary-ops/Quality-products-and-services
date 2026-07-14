import React from "react";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getPexelsImage } from "@/lib/pexels";
import { NotebookPen } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Stationery Solutions | Quality Products & Services",
  description: "Office stationery, writing instruments, notebooks, files, office essentials, printers and copier paper supplied across India.",
};

export default async function StationerySolutionsPage() {
  const imgNotebooks = await getPexelsImage("office notebooks paper stack, white background", "square");

  const subCategories = [
    { title: "Writing Instruments", img: "/images/subcategories/writing-pens.webp", desc: "Ballpoint, gel, marker pens, and pencil sets." },
    { title: "Notebooks & Papers", img: imgNotebooks, desc: "Spiral, hardbound, and ruled notebooks in all sizes." },
    { title: "Files & Folders", img: "/images/subcategories/files-folders.webp", desc: "Lever arch, ring binders, box files, and document wallets." },
    { title: "Office Essentials", img: "/images/subcategories/office-essentials.webp", desc: "Staplers, punches, paper clips, rubber bands, pins." },
    { title: "Art & Craft Supplies", img: "/images/subcategories/art-supplies.webp", desc: "Colors, sketch pens, drawing sheets, and craft materials." },
    { title: "Printers & Ink / Toner", img: "/images/subcategories/printer-toner.webp", desc: "Compatible and original ink cartridges and toner." },
    { title: "Copier Paper (A4)", img: "/images/subcategories/copier-paper.webp", desc: "Premium 75GSM and 80GSM copier paper in bulk." },
    { title: "Desk Organizers", img: "/images/subcategories/desk-organizers.webp", desc: "Pen stands, magazine racks, and desktop filing trays." },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/stationery-solutions.webp" 
            alt="Stationery Solutions Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <NotebookPen className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Stationery Solutions
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Comprehensive office stationery, paper, desktop organization, and printing supplies for corporate workspaces across India.
          </p>
        </div>
      </section>

      {/* Bulk Enquiry CTA (Top) */}
      <section className="bg-[var(--color-surface-grey)] py-8 border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-on-light)] mb-1">Corporate & Bulk Orders</h3>
            <p className="text-[var(--color-text-on-light-muted)]">We supply large quantities with special B2B pricing across India.</p>
          </div>
          <Button variant="primary" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20Stationery%20Solutions.%20Please%20share%20details.">
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
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Stationery%20Solutions%20(${encodeURIComponent(cat.title)}).`}>
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
