import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { getPexelsImage } from "@/lib/pexels";
import { PaintBucket } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Interior Works | Quality Products & Services",
  description: "Modern living room, bedroom, kitchen, office interiors, false ceiling solutions, and wardrobe design in AP & Telangana.",
};

export default async function InteriorWorksPage() {
  const subCategories = await Promise.all([
    getPexelsImage("modern living room couch design", "square"),
    getPexelsImage("luxury master bedroom setup", "square"),
    getPexelsImage("modular kitchen cabinets quartz", "square"),
    getPexelsImage("corporate office partition workspace", "square"),
    getPexelsImage("designer false ceiling spotlight", "square"),
    getPexelsImage("custom wardrobe closet organizer", "square"),
  ]).then((images) => [
    { title: "Living Room Interiors", img: images[0], desc: "Contemporary living spaces with premium woodwork and custom finishes." },
    { title: "Bedroom Interiors", img: images[1], desc: "Elegant bedroom designs, custom headboards, and bedside units." },
    { title: "Modular Kitchen Solutions", img: images[2], desc: "Space-efficient layouts with high-quality hardware and laminates." },
    { title: "Office Interiors", img: images[3], desc: "Professional workspace planning, partitions, and workstation setups." },
    { title: "False Ceiling Solutions", img: images[4], desc: "Aesthetic ceiling designs with integrated ambient lighting layouts." },
    { title: "Wardrobes & Storage", img: images[5], desc: "Custom sliding/hinged wardrobes, walk-in closets, and loft storage." },
  ]);

  const faqs = [
    { question: "Do you offer customized designs?", answer: "Yes, all our interior works are fully customized based on client requirements, space availability, and budget." },
    { question: "What is your typical execution timeline?", answer: "Timelines depend on the scale of work. A modular kitchen or single-room interior might take 2-3 weeks, while complete office or home interiors take 4-6 weeks." },
    { question: "Where do you provide interior services?", answer: "We offer complete interior design and execution services across Andhra Pradesh and Telangana." },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/interior-works.webp" 
            alt="Interior Works Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <PaintBucket className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Interior Works
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Custom modular solutions, design-focused false ceilings, and premium carpentry execution across AP & Telangana.
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
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%27m%20interested%20in%20your%20Interior%20Works%20services%20(${encodeURIComponent(cat.title)}).`}>
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
            title="Our Process" 
            subtitle="How we execute your interiors from initial concept to completion."
            className="mb-12"
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            <div className="flex-1">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-navy)] font-bold flex items-center justify-center text-xl mx-auto mb-4">1</div>
              <h4 className="font-semibold text-[var(--color-text-on-light)]">Consultation & Site Visit</h4>
              <p className="text-sm text-[var(--color-text-on-light-muted)] mt-2">We measure your site and understand your specific requirements.</p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-[#E8EAED]"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-navy)] font-bold flex items-center justify-center text-xl mx-auto mb-4">2</div>
              <h4 className="font-semibold text-[var(--color-text-on-light)]">Design & Approval</h4>
              <p className="text-sm text-[var(--color-text-on-light-muted)] mt-2">Detailed layout design and material finishes approved before build.</p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-[#E8EAED]"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-navy)] font-bold flex items-center justify-center text-xl mx-auto mb-4">3</div>
              <h4 className="font-semibold text-[var(--color-text-on-light)]">Execution & Handover</h4>
              <p className="text-sm text-[var(--color-text-on-light-muted)] mt-2">Professional modular installation and final styling handoff.</p>
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
