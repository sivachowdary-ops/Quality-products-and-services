import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getPexelsImage } from "@/lib/pexels";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Fire Fighting & Safety Equipment | Quality Products & Services",
  description: "Premium safety gear, firefighting equipment, and road safety products for complete protection in Hyderabad.",
};

export default async function FireSafetyEquipmentPage() {
  const bgHero = await getPexelsImage("firefighter safety emergency", "landscape");

  const subCategories = await Promise.all([
    getPexelsImage("fire extinguisher safety", "square"),
    getPexelsImage("safety helmet construction", "square"),
    getPexelsImage("safety boots industrial", "square"),
    getPexelsImage("road safety cones", "square"),
    getPexelsImage("first aid medical", "square"),
    getPexelsImage("gas detector monitor", "square"),
  ]).then((images) => [
    { title: "Fire Fighting Equipment", img: images[0], desc: "Extinguishers, hydrants, hoses, and suppression systems." },
    { title: "Head, Eye & Body Protection", img: images[1], desc: "Helmets, goggles, gloves, and protective clothing." },
    { title: "Foot Protection", img: images[2], desc: "Industrial-grade safety shoes and gumboots." },
    { title: "Road Safety Products", img: images[3], desc: "Cones, barricades, mirrors, and solar traffic lighting." },
    { title: "First Aid Stations", img: images[4], desc: "Complete medical kits and eye wash stations." },
    { title: "Gas Detection Instruments", img: images[5], desc: "Portable monitors and fixed detection systems." },
  ]);

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${bgHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-red)] rounded-full mb-6 text-white shadow-md">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Fire Fighting & Safety Equipment
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Comprehensive protection for your workforce and premises.
          </p>
        </div>
      </section>

      {/* Bulk Enquiry CTA (Top) */}
      <section className="bg-[var(--color-surface-grey)] py-8 border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-on-light)] mb-1">Corporate & Bulk Orders</h3>
            <p className="text-[var(--color-text-on-light-muted)]">We supply large quantities with special B2B pricing.</p>
          </div>
          <Button className="bg-[var(--color-brand-red)] text-white hover:bg-[#A30D25] focus:ring-[var(--color-brand-red)]" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20Fire%20Fighting%20%2F%20Safety%20Equipment.%20Please%20share%20details.">
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
                <Button className="w-full mt-4 rounded-t-none bg-[var(--color-brand-red)] text-white hover:bg-[#A30D25] focus:ring-[var(--color-brand-red)]" asChild>
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20${encodeURIComponent(cat.title)}.%20Please%20share%20details.`}>
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
