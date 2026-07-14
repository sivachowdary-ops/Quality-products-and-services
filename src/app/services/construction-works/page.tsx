import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { getPexelsImage } from "@/lib/pexels";
import { Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Construction Works | Quality Products & Services",
  description: "False ceiling, plumbing, electrical installation, flooring, painting, and civil fabrication works in AP & Telangana.",
};

export default async function ConstructionWorksPage() {
  const subCategories = await Promise.all([
    getPexelsImage("house construction foundation site", "square"),
    getPexelsImage("commercial building interior renovation", "square"),
    getPexelsImage("laying brick mortar cement", "square"),
    getPexelsImage("plastering drywall worker", "square"),
    getPexelsImage("tiling floor layout ceramic", "square"),
    getPexelsImage("painter painting room wall", "square"),
    getPexelsImage("electrical panel wiring installation", "square"),
    getPexelsImage("plumbing pipes repair under sink", "square"),
    getPexelsImage("false ceiling grid frame", "square"),
    getPexelsImage("brick boundary compound wall", "square"),
    getPexelsImage("repairing concrete crack cement", "square"),
    getPexelsImage("waterproofing chemical roof coating", "square"),
  ]).then((images) => [
    { title: "House Construction & Extensions", img: images[0], desc: "Complete structural build, home expansions, and structural alterations." },
    { title: "Renovation & Modernization", img: images[1], desc: "Comprehensive refurbishments for office spaces and large residences." },
    { title: "Masonry & Brick Work", img: images[2], desc: "High-quality concrete block and brick wall partition construction." },
    { title: "Plastering & Wall Finishing", img: images[3], desc: "Smooth wall plastering, cement screeding, and wall preparations." },
    { title: "Tiling Works", img: images[4], desc: "Precision ceramic, vitrified tiles, granite, and marble laying." },
    { title: "Painting Works", img: images[5], desc: "Professional interior and exterior painting with putty finishing." },
    { title: "Electrical Works", img: images[6], desc: "Conduit piping, panel boards, wiring, and fixture installation.", linkNote: true },
    { title: "Plumbing Works", img: images[7], desc: "Water supply, drainage piping, sanitary fitting, and booster pump setup." },
    { title: "False Ceiling Installation", img: images[8], desc: "Base metal framing, gypsum board ceiling, grid ceiling, and POP works." },
    { title: "Boundary Wall & Compound Works", img: images[9], desc: "Perimeter brick compound wall and steel gate structural works." },
    { title: "Minor Civil Repairs", img: images[10], desc: "Slab repair, structural cracking injection, and concrete patching." },
    { title: "Waterproofing Works", img: images[11], desc: "Terrace, bathroom, basement dampness prevention and chemical coating." },
  ]);

  const faqs = [
    { question: "Do you handle both commercial and residential projects?", answer: "We focus on corporate offices, industrial projects, and commercial properties, but we also take up large residential building projects." },
    { question: "Are materials included in your service quotes?", answer: "Yes, we provide end-to-end solutions where we supply all materials and complete the execution with our own experienced teams." },
    { question: "How can I get a quote for my project?", answer: "Get in touch with us via WhatsApp. We will schedule a site visit to assess requirements and provide an itemized estimation." },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/construction-works.webp" 
            alt="Construction Works Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Wrench className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Construction Works
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Professional contracting, civil works, and complete site execution across Andhra Pradesh and Telangana.
          </p>
        </div>
      </section>

      {/* Sub-categories Grid */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subCategories.map((cat, i) => (
              <div key={i} className="flex flex-col h-full">
                <div className="flex-1 flex flex-col h-full">
                  <SquareImageCard 
                    imageUrl={cat.img}
                    imageAlt={cat.title}
                    title={cat.title}
                    description={cat.desc}
                    className="h-full flex-1"
                  />
                  {cat.linkNote && (
                    <div className="px-6 py-2 bg-[var(--color-surface-grey)] text-xs text-[var(--color-text-on-light-muted)] border-l border-r border-[#E8EAED]">
                      Looking for electrical materials? Check our{" "}
                      <Link href="/products/electrical-materials" className="text-[var(--color-brand-navy)] font-semibold hover:underline">
                        Electrical Materials
                      </Link>{" "}
                      page.
                    </div>
                  )}
                </div>
                <Button variant="whatsapp" className="w-full mt-4 rounded-t-none" asChild>
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%27m%20interested%20in%20your%20Construction%20Works%20services%20(${encodeURIComponent(cat.title)}).`}>
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
            subtitle="How we execute your project from start to finish."
            className="mb-12"
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            <div className="flex-1">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-navy)] font-bold flex items-center justify-center text-xl mx-auto mb-4">1</div>
              <h4 className="font-semibold text-[var(--color-text-on-light)]">Consultation & Site Visit</h4>
              <p className="text-sm text-[var(--color-text-on-light-muted)] mt-2">We understand your requirements and assess the site.</p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-[#E8EAED]"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-navy)] font-bold flex items-center justify-center text-xl mx-auto mb-4">2</div>
              <h4 className="font-semibold text-[var(--color-text-on-light)]">Quote & Approval</h4>
              <p className="text-sm text-[var(--color-text-on-light-muted)] mt-2">Detailed material and labor estimation provided for sign-off.</p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-[#E8EAED]"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-navy)] font-bold flex items-center justify-center text-xl mx-auto mb-4">3</div>
              <h4 className="font-semibold text-[var(--color-text-on-light)]">Execution & Delivery</h4>
              <p className="text-sm text-[var(--color-text-on-light-muted)] mt-2">Professional installation completed on schedule.</p>
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
