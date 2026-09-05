import React from "react";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HardHat } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Construction Equipments & Tools | Quality Products & Services",
  description: "B2B supplier of shuttering oil, concrete shuttering tape, concrete vibrators, rebar cutters, scaffolding accessories, and civil site equipment across India.",
};

export default function ConstructionEquipmentToolsPage() {
  const subCategories = [
    { 
      title: "Shuttering Oil & Mould Release", 
      img: "/images/subcategories/shuttering-oil.webp", 
      desc: "High-efficiency chemical and mineral mould release oil (20L & 200L drums) for clean demoulding of concrete formwork and steel/plywood shuttering plates." 
    },
    { 
      title: "Concrete Shuttering Tape", 
      img: "/images/subcategories/concrete-tape.webp", 
      desc: "Heavy-duty waterproof adhesive tape in 50mm widths for sealing concrete shuttering plate joints, preventing slurry leakage and edge damage." 
    },
    { 
      title: "Concrete Needle Vibrators & Drives", 
      img: "/images/subcategories/shuttering-oil.webp", 
      desc: "Petrol and electric high-frequency concrete needle vibrators, poker shafts, and surface plate compactors for void-free concrete consolidation." 
    },
    { 
      title: "Rebar Cutters & Bar Benders", 
      img: "/images/subcategories/tools-hand-manual.webp", 
      desc: "Heavy-duty manual and motorized TMT rebar bending keys, hydraulic rod cutters, and stirrup benders for fast on-site steel reinforcement." 
    },
    { 
      title: "Scaffolding Couplers & Formwork Parts", 
      img: "/images/subcategories/nuts-bolts.webp", 
      desc: "Forged swivel clamps, fixed right-angle couplers, tie rods, wing nuts, water stoppers, and prop sleeve nuts for structural staging." 
    },
    { 
      title: "Wheelbarrows, Pans & Earth Rammers", 
      img: "/images/subcategories/tools-hand-manual.webp", 
      desc: "Heavy-gauge dual-wheel and single-wheel site wheelbarrows, GI mortar pans, tamping earth rammers, and masonry shovels." 
    },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/construction-equipment-tools.webp" 
            alt="Construction Equipments & Tools Background" 
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
            Construction Equipments & Tools
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Essential site consumables and machinery: premium shuttering oil, waterproof concrete joint tape, needle vibrators, rebar tools, and staging hardware supplied nationwide.
          </p>
        </div>
      </section>

      {/* Bulk Enquiry CTA (Top) */}
      <section className="bg-[var(--color-surface-grey)] py-8 border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-on-light)] mb-1">Direct Project & Contractor Supply</h3>
            <p className="text-[var(--color-text-on-light-muted)]">Supplying bulk formwork oils, heavy-duty tapes, and site machinery with scheduled project delivery.</p>
          </div>
          <Button variant="whatsapp" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20bulk%20requirement%20for%20Construction%20Equipments%20%26%20Tools.%20Please%20share%20details.">
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
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20${encodeURIComponent(cat.title)}.%20Please%20share%20pricing%20and%20specifications.`}>
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
