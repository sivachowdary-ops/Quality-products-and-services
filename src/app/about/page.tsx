import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getPexelsImage } from "@/lib/pexels";
import { ShieldCheck, Clock, Tag, Users, Sparkles, MapPin } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us | Quality Products & Services",
  description: "Learn about Quality Products & Services, your trusted partner in Hyderabad for construction works, safety gear, and cleaning supplies.",
};

export default async function AboutPage() {
  const bgHero = await getPexelsImage("business handshake office", "landscape");
  const storyImage = await getPexelsImage("warehouse logistics modern", "landscape");

  const whyChooseUs = [
    { icon: ShieldCheck, title: "Quality Assured", desc: "We source only the best materials and proven products." },
    { icon: Clock, title: "Timely Delivery", desc: "Committed to delivering your requirements on schedule." },
    { icon: Tag, title: "Competitive Pricing", desc: "Best-in-class value for B2B and bulk procurement." },
    { icon: Users, title: "Experienced Team", desc: "Skilled professionals handling all installation and service." },
    { icon: Sparkles, title: "One-Stop Solution", desc: "Everything from construction to daily housekeeping supplies." },
  ];

  return (
    <div>
      {/* Hero */}
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
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center">
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            About Quality Products & Services
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Quality You Can Trust. Delivering excellence across Hyderabad.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our Story" 
                className="text-left mb-6"
              />
              <div className="text-[var(--color-text-on-light-muted)] space-y-4 leading-relaxed">
                <p>
                  Welcome to Quality Products & Services, based in the heart of KPHB, Hyderabad. We are a dedicated B2B supplier and service provider designed to meet the rigorous demands of modern facilities, builders, and corporate procurement teams.
                </p>
                <p>
                  Our foundation was built on a simple premise: provide reliable, top-tier products without compromising on quality or service. Over the years, we have grown into a comprehensive "One-Stop Solution" operating across three main verticals: Construction & Interior Works, Fire & Safety Equipment, and Cleaning & Housekeeping Supplies.
                </p>
                <p>
                  Whether it's executing a flawless false ceiling project, equipping a facility with essential firefighting gear, or keeping offices pristine with professional cleaning chemicals, our experienced team ensures total satisfaction.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-card)]">
              <Image 
                src={storyImage} 
                alt="Our Warehouse and Team" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-grey)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            title="What Makes Us Different" 
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <Card key={i} className="flex flex-col">
                <item.icon className="w-10 h-10 text-[var(--color-brand-gold)] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text-on-light)]">{item.title}</h3>
                <p className="text-[var(--color-text-on-light-muted)] leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)]">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold font-heading text-[var(--color-text-on-light)] mb-4">Areas We Serve</h2>
          <p className="text-[var(--color-text-on-light-muted)] text-lg mb-8">
            Operating from KPHB, Hyderabad, we proudly serve corporate and industrial clients across the greater Hyderabad region and surrounding areas.
          </p>
          <Button variant="whatsapp" className="text-lg" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20enquire%20if%20you%20serve%20my%20area.">
              Check Service Availability
            </a>
          </Button>
        </div>
      </section>

    </div>
  );
}
