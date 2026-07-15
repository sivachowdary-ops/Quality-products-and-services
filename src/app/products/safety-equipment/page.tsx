import React from "react";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HardHat } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Safety Equipment | Quality Products & Services",
  description: "Head, eye, face, hearing, respiratory, hand, foot, and fall protection, high-visibility clothing, fire safety and traffic signage across India.",
};

export default function SafetyEquipmentPage() {
  const subCategories = [
    { title: "Head Protection", img: "/images/subcategories/safety-head.webp", desc: "Industrial helmets, hard hats, and bump caps in multiple colors." },
    { title: "Eye & Face Protection", img: "/images/subcategories/safety-eye-face.webp", desc: "Safety goggles, protective spectacles, and full-face shields." },
    { title: "Hearing Protection", img: "/images/subcategories/safety-hearing.webp", desc: "Noise-cancelling ear muffs and soft silicone corded earplugs." },
    { title: "Respiratory Protection", img: "/images/subcategories/safety-respiratory.webp", desc: "N95 masks, half-face respirators, and particulate filters." },
    { title: "Hand Protection", img: "/images/subcategories/safety-hand.webp", desc: "Cut-resistant, nitrile-coated, leather welding, and anti-slip gloves." },
    { title: "Foot Protection", img: "/images/subcategories/safety-foot.webp", desc: "Steel-toe cap safety shoes, boots, and anti-static industrial footwear." },
    { title: "High Visibility Clothing", img: "/images/subcategories/safety-high-vis.webp", desc: "Reflective safety vests, rainwear, and high-visibility parkas." },
    { title: "Fall Protection", img: "/images/subcategories/safety-fall.webp", desc: "Full-body safety harnesses, lifelines, shock-absorbing lanyards, and carabiners." },
    { title: "Fire Safety", img: "/images/subcategories/safety-fire.webp", desc: "Portable fire extinguishers, fire blankets, and cabinet brackets." },
    { title: "Traffic & Signage", img: "/images/subcategories/safety-traffic.webp", desc: "Reflective traffic cones, spring posts, wet floor caution boards, and safety barricade tapes." },
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
            Comprehensive B2B personal protective equipment, fall protection, high-visibility clothing, and road safety solutions supplied across India.
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
