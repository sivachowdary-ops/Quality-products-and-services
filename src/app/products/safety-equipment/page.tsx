import React from "react";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HardHat } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Safety Equipment | Quality Products & Services",
  description: "Head, eye, hand, body and respiratory protection, fall protection, gas detection, road safety products across India.",
};

export default function SafetyEquipmentPage() {
  const subCategories = [
    { title: "Head & Eye Protection", img: "/images/subcategories/safety-helmet.webp", desc: "Industrial helmets, safety goggles, face shields." },
    { title: "Hand & Body Protection", img: "/images/subcategories/safety-gloves.webp", desc: "Cut-resistant gloves, coveralls, aprons, protective clothing." },
    { title: "Respiratory Protection", img: "/images/subcategories/respiratory-mask.webp", desc: "Dust masks, half-face and full-face respirators, SCBA." },
    { title: "Fall Protection", img: "/images/subcategories/safety-harness.webp", desc: "Full-body harnesses, lanyards, retractable lifelines." },
    { title: "Gas Detection Instruments", img: "/images/subcategories/gas-detector.webp", desc: "Portable monitors and fixed detection systems." },
    { title: "First Aid Stations", img: "/images/subcategories/first-aid.webp", desc: "Complete medical kits, eye wash stations, stretchers." },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/safety-equipment.webp" 
            alt="Safety Equipment Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <HardHat className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Safety Equipment
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Comprehensive PPE, fall protection, gas monitors, and industrial first aid stations supplied across India.
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
          <Button variant="whatsapp" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20Safety%20Equipment.%20Please%20share%20details.">
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
