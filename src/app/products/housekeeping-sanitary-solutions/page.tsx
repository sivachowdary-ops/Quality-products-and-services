import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getPexelsImage } from "@/lib/pexels";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Housekeeping & Sanitary Solutions | Quality Products & Services",
  description: "Cleaning chemicals, dispensers, tissue products, mops, bins, trolleys for facility management across India.",
};

export default async function HousekeepingSanitarySolutionsPage() {
  const subCategories = await Promise.all([
    getPexelsImage("cleaning chemicals bottles", "square"),
    getPexelsImage("hand sanitizer dispenser", "square"),
    getPexelsImage("tissue paper rolls", "square"),
    getPexelsImage("mop bucket cleaning", "square"),
    getPexelsImage("microfiber cleaning cloth", "square"),
    getPexelsImage("garbage bins sorting", "square"),
    getPexelsImage("entrance floor mat", "square"),
    getPexelsImage("cleaning trolley cart", "square"),
  ]).then((images) => [
    { title: "Cleaning Chemicals", img: images[0], desc: "Industrial strength floor, glass, and surface cleaners." },
    { title: "Dispensers", img: images[1], desc: "Automatic and manual soap, sanitizer, and tissue dispensers." },
    { title: "Tissue & Paper Products", img: images[2], desc: "Hand towels, toilet rolls, and facial tissues." },
    { title: "Mops, Brooms & Brushes", img: images[3], desc: "Heavy-duty floor cleaning tools and accessories." },
    { title: "Cloths, Wipes & Pads", img: images[4], desc: "Microfiber cloths, sponges, and scrub pads." },
    { title: "Garbage Bags & Bins", img: images[5], desc: "Waste management bins and bio-hazard bags." },
    { title: "Mats", img: images[6], desc: "Anti-fatigue, entrance, and logo mats for commercial spaces." },
    { title: "Trolleys, Buckets & Carts", img: images[7], desc: "Janitorial carts, mop buckets, and multi-purpose trolleys." },
  ]);

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/housekeeping-sanitary.webp" 
            alt="Housekeeping & Sanitary Solutions Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Housekeeping & Sanitary Solutions
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Everything you need for pristine facility management and professional hygiene maintenance.
          </p>
        </div>
      </section>

      {/* Corporate Framing Section */}
      <section className="py-16 bg-[var(--color-surface-grey)] border-b border-[#E8EAED]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading 
            title="Supply for Offices, Hotels & Facilities" 
            subtitle="We cater to the bulk supply needs of corporate offices, hospitality businesses, and large-scale facility management companies across India."
          />
          <Button variant="whatsapp" className="mt-8 shadow-lg text-lg px-8 py-4" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bulk%20housekeeping%20%26%20sanitary%20solutions.">
              Enquire for Bulk Corporate Orders
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
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bulk%20housekeeping%20%26%20sanitary%20supplies%20(${encodeURIComponent(cat.title)}).`}>
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
