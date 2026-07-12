import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { getPexelsImage } from "@/lib/pexels";

export const metadata = {
  title: "FAQs | Quality Products & Services",
  description: "Frequently Asked Questions about our construction works, fire safety equipment, and cleaning supplies.",
};

export default async function FAQsPage() {
  const bgHero = await getPexelsImage("question mark modern abstract", "landscape");

  const generalFaqs = [
    { question: "What areas do you serve?", answer: "We supply and provide services across Hyderabad and Secunderabad. For large B2B orders, we can arrange delivery across the Telangana region." },
    { question: "Do you only handle B2B or corporate orders?", answer: "Our primary focus is B2B, corporate offices, and facility management companies, but we do take up large individual requirements depending on the scope." },
    { question: "How can I get a quotation?", answer: "The fastest way is to reach out to us via WhatsApp (9993454442) with your requirements. We typically respond within a few hours with an estimate or to schedule a site visit." },
  ];

  const constructionFaqs = [
    { question: "Do you provide material supply or full installation for construction works?", answer: "We provide complete end-to-end solutions. This includes both supplying premium materials and executing the installation with our experienced team." },
    { question: "What type of false ceilings do you install?", answer: "We specialize in Gypsum, POP, and Grid (Acoustic) ceilings suitable for modern office and commercial environments." },
  ];

  const safetyFaqs = [
    { question: "Do your fire extinguishers come with certifications?", answer: "Yes, all our fire fighting equipment meets standard safety regulations and comes with the necessary manufacturing and warranty certifications." },
    { question: "Can you supply custom safety signage?", answer: "Absolutely. We supply standard safety signages as well as custom-printed caution boards and directional signs as per your facility's requirements." },
  ];

  const cleaningFaqs = [
    { question: "Do you supply cleaning chemicals in bulk?", answer: "Yes, we supply industrial-grade cleaning chemicals in 5L, 20L, and 50L bulk packaging tailored for daily facility maintenance." },
    { question: "Are your tissue and paper products eco-friendly?", answer: "We offer several ranges of tissue products, including recycled and eco-friendly options for companies committed to green practices." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[30vh]">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${bgHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center">
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          
          <div>
            <SectionHeading 
              title="General Enquiries" 
              className="mb-8"
            />
            <FAQAccordion items={generalFaqs} />
          </div>

          <div>
            <SectionHeading 
              title="Construction & Interior Works" 
              className="mb-8"
            />
            <FAQAccordion items={constructionFaqs} />
          </div>

          <div>
            <SectionHeading 
              title="Fire & Safety Equipment" 
              className="mb-8"
            />
            <FAQAccordion items={safetyFaqs} />
          </div>

          <div>
            <SectionHeading 
              title="Cleaning Supplies" 
              className="mb-8"
            />
            <FAQAccordion items={cleaningFaqs} />
          </div>

        </div>
      </section>
    </div>
  );
}
