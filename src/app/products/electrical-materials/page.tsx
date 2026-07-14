import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getPexelsImage } from "@/lib/pexels";
import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Electrical Materials | Quality Products & Services",
  description: "Wires, cables, MCBs, switches, sockets, LED lighting, conduits, fans, and industrial plugs supplied across India.",
};

export default async function ElectricalMaterialsPage() {
  const subCategories = await Promise.all([
    getPexelsImage("electrical wires cables", "square"),
    getPexelsImage("mcb circuit breaker", "square"),
    getPexelsImage("modular switch socket", "square"),
    getPexelsImage("led bulb tube light", "square"),
    getPexelsImage("pvc conduit fittings", "square"),
    getPexelsImage("ceiling fan modern", "square"),
    getPexelsImage("industrial plug socket", "square"),
  ]).then((images) => [
    { title: "Wires & Cables", img: images[0], desc: "Flexible wires, house wires, power and control cables." },
    { title: "MCB & DB Boxes", img: images[1], desc: "MCBs, RCCBs, isolators, enclosures, and accessories." },
    { title: "Switches & Sockets", img: images[2], desc: "Modular switches, sockets, plates, dimmers, switchboards." },
    { title: "Lighting Solutions", img: images[3], desc: "LED bulbs, tube lights, panel lights, floodlights." },
    { title: "Conduits & Fittings", img: images[4], desc: "PVC/GI conduits, connectors, and junction boxes." },
    { title: "Fans & Ventilation", img: images[5], desc: "Ceiling fans, exhaust fans, and ventilation accessories." },
    { title: "Industrial Plugs & Sockets", img: images[6], desc: "Industrial connectors, sockets, plugs, extensions." },
  ]);

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/electrical-materials.webp" 
            alt="Electrical Materials Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Zap className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Electrical Materials
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            High-grade electrical wires, distribution boxes, modular fittings, and lighting fixtures supplied across India.
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
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20Electrical%20Materials.%20Please%20share%20details.">
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
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Electrical%20Materials%20(${encodeURIComponent(cat.title)}).`}>
                    Enquire on WhatsApp
                  </a>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-[var(--color-surface-grey)] rounded-[var(--radius-lg)] border border-[#E8EAED] text-center max-w-2xl mx-auto">
            <p className="text-[var(--color-text-on-light-muted)]">
              Looking for electrical installation services? Check our{" "}
              <Link href="/services/construction-works" className="text-[var(--color-brand-navy)] font-semibold hover:underline">
                Construction Works
              </Link>{" "}
              page for professional Electrical Works.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
