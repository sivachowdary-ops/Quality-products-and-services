import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getPexelsImage } from "@/lib/pexels";
import { FlameKindling } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Fire Fighting Equipment | Quality Products & Services",
  description: "Fire extinguishers, hose reels, hydrant valves, fire blankets, smoke detectors, sprinklers and suppression systems in India.",
};

export default async function FireEquipmentPage() {
  const subCategories = await Promise.all([
    getPexelsImage("red fire extinguisher closeup", "square"),
    getPexelsImage("fire hose reel", "square"),
    getPexelsImage("fire blanket safety", "square"),
    getPexelsImage("smoke detector ceiling", "square"),
    getPexelsImage("fire sprinkler system", "square"),
    getPexelsImage("fire suppression system", "square"),
  ]).then((images) => [
    { title: "Fire Extinguishers", img: images[0], desc: "ABC, CO2, foam, and DCP extinguishers for all fire classes." },
    { title: "Hose Reels & Hydrant Systems", img: images[1], desc: "Complete hose reel drums, hydrant valves, and landing valves." },
    { title: "Fire Blankets", img: images[2], desc: "Fire-resistant blankets for kitchen and industrial use." },
    { title: "Smoke Detectors & Alarms", img: images[3], desc: "Optical, ionization, and multi-sensor detection systems." },
    { title: "Sprinkler Systems", img: images[4], desc: "Wet, dry, and pre-action sprinkler installations." },
    { title: "Fire Suppression Systems", img: images[5], desc: "FM200, Novec, and clean agent suppression for server rooms." },
  ]);

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/fire-equipment.webp" 
            alt="Fire Fighting Equipment Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-red)] rounded-full mb-6 text-white shadow-md">
            <FlameKindling className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Fire Fighting Equipment
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Reliable, certified firefighting gear and suppression systems for total premises safety.
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
          <Button className="bg-[var(--color-brand-red)] text-white hover:bg-[#A30D25] focus:ring-[var(--color-brand-red)]" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20Fire%20Fighting%20Equipment.%20Please%20share%20details.">
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
