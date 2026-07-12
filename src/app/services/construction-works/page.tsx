import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { getPexelsImage } from "@/lib/pexels";
import { Wrench } from "lucide-react";

export const metadata = {
  title: "Construction & Interior Works | Quality Products & Services",
  description: "False ceiling, plumbing, electrical, flooring, painting, and fabrication works in Hyderabad.",
};

export default async function ConstructionWorksPage() {
  const bgHero = await getPexelsImage("modern office ceiling construction", "landscape");

  const subCategories = await Promise.all([
    getPexelsImage("false ceiling modern", "square"),
    getPexelsImage("plumbing tools pipes", "square"),
    getPexelsImage("electrical wiring", "square"),
    getPexelsImage("flooring installation", "square"),
    getPexelsImage("painting roller wall", "square"),
    getPexelsImage("metal fabrication welding", "square"),
  ]).then((images) => [
    { title: "False Ceiling Works", img: images[0], desc: "Gypsum, POP, and grid ceilings for commercial spaces." },
    { title: "Plumbing Works", img: images[1], desc: "Complete piping and sanitation installations." },
    { title: "Electrical Works", img: images[2], desc: "Wiring, panels, and lighting fixtures." },
    { title: "Flooring Works", img: images[3], desc: "Tiles, epoxy, and carpet flooring solutions." },
    { title: "Painting Works", img: images[4], desc: "Interior and exterior professional painting." },
    { title: "Fabrication Works", img: images[5], desc: "Custom metal and steel structural fabrication." },
  ]);

  const faqs = [
    { question: "Do you handle both commercial and residential projects?", answer: "We primarily focus on commercial and B2B projects, but we do take up large-scale residential requirements." },
    { question: "Are materials included in your service quotes?", answer: "Yes, we provide end-to-end solutions including both material supply and professional installation." },
    { question: "How can I get a quote for my project?", answer: "You can reach out to us via WhatsApp with your project details, and our team will schedule a site visit to provide an accurate estimate." },
  ];

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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Wrench className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Construction & Interior Works
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Professional contracting and material supply for corporate spaces.
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
