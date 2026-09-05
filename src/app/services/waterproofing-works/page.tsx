import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Droplets } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Waterproofing Works | Quality Products & Services",
  description: "Professional terrace, roof, basement, bathroom, and structural chemical waterproofing execution across Andhra Pradesh & Telangana.",
};

export default function WaterproofingWorksPage() {
  const subCategories = [
    { 
      title: "Terrace & Roof Waterproofing", 
      img: "/images/waterproofing-service.webp", 
      desc: "Multi-layered elastomeric polymer and fibre-mesh reinforced liquid membrane coatings for leak-free, heat-reflective roofs." 
    },
    { 
      title: "Basement & Retaining Wall Sealing", 
      img: "/images/subcategories/waterproofing-service-card.webp", 
      desc: "Positive and negative side crystalline coatings and bituminous membrane protection against hydrostatic groundwater pressure." 
    },
    { 
      title: "Bathroom & Sunken Slab Waterproofing", 
      img: "/images/subcategories/waterproofing-work.webp", 
      desc: "High-flexibility cementitious chemical coatings for sunken slabs, shower areas, drainage traps, and utility balconies." 
    },
    { 
      title: "PU Injection Grouting", 
      img: "/images/subcategories/waterproofing-service-card.webp", 
      desc: "High-pressure polyurethane injection grouting to stop active water gushing, structural crack leaks, and expansion joint seepage." 
    },
    { 
      title: "Exterior Wall Damp Proofing", 
      img: "/images/subcategories/waterproofing-work.webp", 
      desc: "Rain-proof breathable hydrophobic exterior coatings preventing efflorescence, paint peeling, and dampness penetration." 
    },
    { 
      title: "Water Tank & Sump Waterproofing", 
      img: "/images/subcategories/waterproofing-service-card.webp", 
      desc: "Non-toxic, food-grade certified epoxy and polymer-modified cementitious linings for underground sumps and overhead tanks." 
    },
  ];

  const faqs = [
    { question: "What warranty do you provide on waterproofing works?", answer: "We provide comprehensive service warranties ranging from 5 to 10 years depending on the waterproofing chemical system and site specifications." },
    { question: "Do you offer on-site leakage inspections?", answer: "Yes, our technical team conducts site visits across AP and Telangana with moisture meters and thermal checks to diagnose the root cause of leakages." },
    { question: "Are materials included in the service quotation?", answer: "Yes, our turnkey contracting quotes include all specialized chemicals, primers, mesh, and skilled execution labor." },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/waterproofing-service.webp" 
            alt="Waterproofing Works Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Droplets className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Waterproofing Works
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Advanced chemical waterproofing, PU injection grouting, terrace coatings, and structural damp proofing across Andhra Pradesh and Telangana.
          </p>
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
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20Waterproofing%20Works%20(${encodeURIComponent(cat.title)}).%20Please%20schedule%20an%20inspection.`}>
                    Enquire on WhatsApp
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-grey)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <SectionHeading 
            title="Our Waterproofing Process" 
            subtitle="Scientific diagnosis, surface preparation, and multi-layer protective execution."
            className="mb-12"
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            <div className="flex-1">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-navy)] font-bold flex items-center justify-center text-xl mx-auto mb-4">1</div>
              <h4 className="font-semibold text-[var(--color-text-on-light)]">Site Inspection & Moisture Check</h4>
              <p className="text-sm text-[var(--color-text-on-light-muted)] mt-2">We analyze source points, crack severity, and structural dampness.</p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-[#E8EAED]"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-navy)] font-bold flex items-center justify-center text-xl mx-auto mb-4">2</div>
              <h4 className="font-semibold text-[var(--color-text-on-light)]">Surface Preparation & Crack Sealing</h4>
              <p className="text-sm text-[var(--color-text-on-light-muted)] mt-2">High-pressure washing, polymer patching, and corner fillets.</p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-[#E8EAED]"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-navy)] font-bold flex items-center justify-center text-xl mx-auto mb-4">3</div>
              <h4 className="font-semibold text-[var(--color-text-on-light)]">Chemical Coating & Pond Testing</h4>
              <p className="text-sm text-[var(--color-text-on-light-muted)] mt-2">Application of primer, multi-coat membrane, and 48hr water testing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            title="Frequently Asked Questions" 
            className="mb-12"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
