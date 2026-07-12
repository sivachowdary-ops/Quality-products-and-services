import React from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, SquareImageCard } from "@/components/ui/Card";
import { getPexelsImage } from "@/lib/pexels";
import { ShieldCheck, Clock, Tag, Users, Sparkles } from "lucide-react";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";

export default async function Home() {
  const [
    imgConstruction,
    imgFire,
    imgCleaning,
    imgExplore1,
    imgExplore2,
    imgExplore3,
    imgExplore4,
    imgExplore5,
    imgExplore6,
    imgExplore7,
    imgExplore8,
  ] = await Promise.all([
    getPexelsImage("modern office ceiling construction", "square"),
    getPexelsImage("fire extinguisher safety", "square"),
    getPexelsImage("commercial cleaning supplies", "square"),
    getPexelsImage("plumbing tools pipes", "square"),
    getPexelsImage("safety helmet construction", "square"),
    getPexelsImage("mop bucket cleaning", "square"),
    getPexelsImage("electrical wiring", "square"),
    getPexelsImage("safety boots industrial", "square"),
    getPexelsImage("hand sanitizer dispenser", "square"),
    getPexelsImage("road safety cones", "square"),
    getPexelsImage("painting roller wall", "square"),
  ]);

  const services = [
    {
      title: "Construction & Interior Works",
      description: "Comprehensive solutions including false ceiling, plumbing, electrical, flooring, and painting works.",
      imageUrl: imgConstruction,
      label: "Services",
      link: "/services/construction-works"
    },
    {
      title: "Fire & Safety Equipment",
      description: "Premium safety gear, firefighting equipment, and road safety products for complete protection.",
      imageUrl: imgFire,
      label: "Products",
      link: "/services/fire-safety-equipment"
    },
    {
      title: "Cleaning & Housekeeping",
      description: "High-quality chemicals, dispensers, and tools for facility management and housekeeping.",
      imageUrl: imgCleaning,
      label: "Products",
      link: "/services/cleaning-supplies"
    }
  ];

  const whyChooseUs = [
    { icon: ShieldCheck, title: "Quality Assured", desc: "We source only the best materials and proven products." },
    { icon: Clock, title: "Timely Delivery", desc: "Committed to delivering your requirements on schedule." },
    { icon: Tag, title: "Competitive Pricing", desc: "Best-in-class value for B2B and bulk procurement." },
    { icon: Users, title: "Experienced Team", desc: "Skilled professionals handling all installation and service." },
    { icon: Sparkles, title: "One-Stop Solution", desc: "Everything from construction to daily housekeeping supplies." },
  ];

  const exploreRange = [
    { title: "Plumbing Materials", img: imgExplore1, cat: "Construction" },
    { title: "Head Protection", img: imgExplore2, cat: "Safety" },
    { title: "Floor Cleaning Tools", img: imgExplore3, cat: "Cleaning" },
    { title: "Electrical Supplies", img: imgExplore4, cat: "Construction" },
    { title: "Safety Shoes", img: imgExplore5, cat: "Safety" },
    { title: "Hygiene Dispensers", img: imgExplore6, cat: "Cleaning" },
    { title: "Road Safety Cones", img: imgExplore7, cat: "Safety" },
    { title: "Painting Supplies", img: imgExplore8, cat: "Construction" },
  ];

  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative bg-[var(--color-brand-navy)] overflow-hidden flex items-center min-h-[85vh] md:min-h-[90vh]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://videos.pexels.com/video-files/5917216/5917216-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-navy)]/60 via-[var(--color-brand-navy)]/40 to-[var(--color-brand-navy)]/70" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-[var(--color-text-on-dark)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-[1.1]">
              Complete Solutions Under One Roof
            </h1>
            <p className="text-[var(--color-text-on-dark-muted)] text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-2xl leading-relaxed">
              Your trusted partner for Construction & Interior Works, Fire & Safety Equipment, and professional Cleaning Supplies in Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" asChild className="text-base sm:text-lg">
                <a href="https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Quality%20Products%20%26%20Services.">
                  Enquire on WhatsApp
                </a>
              </Button>
              <Button variant="secondary" asChild className="text-base sm:text-lg text-[var(--color-text-on-dark)]">
                <a href="#services">View Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[var(--color-surface-grey)] py-10 md:py-12 border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {whyChooseUs.slice(0,4).map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[var(--color-surface-white)] rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm border border-[#E8EAED]">
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-[var(--color-brand-navy)]" />
                </div>
                <h4 className="font-semibold text-sm md:text-base text-[var(--color-text-on-light)] mb-1">{item.title}</h4>
                <p className="text-xs md:text-sm text-[var(--color-text-on-light-muted)] hidden md:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products & Services — 2 per row on mobile */}
      <section id="services" className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            title="Our Products & Services" 
            subtitle="Expertise spanning across three major verticals to meet all your facility and project needs."
            className="mb-8 md:mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((svc, i) => (
              <a href={svc.link} key={i} className="block focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-[var(--radius-lg)]">
                <SquareImageCard 
                  imageUrl={svc.imageUrl}
                  imageAlt={svc.title}
                  title={svc.title}
                  description={svc.description}
                  categoryLabel={svc.label}
                  className="h-full"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-grey)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            title="Why Choose Quality Products & Services?" 
            className="mb-8 md:mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyChooseUs.map((item, i) => (
              <Card key={i} className="flex flex-col p-4 md:p-6 lg:p-8">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-gold)] mb-3 md:mb-4" />
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-[var(--color-text-on-light)]">{item.title}</h3>
                <p className="text-[var(--color-text-on-light-muted)] text-sm md:text-base leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Range — Horizontal Scrolling on Mobile */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            title="Explore Our Range" 
            subtitle="A glimpse into the vast catalog of products we supply across Hyderabad."
            className="mb-8 md:mb-12"
          />
          
          {/* Desktop: Grid layout */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {exploreRange.map((item, i) => (
              <SquareImageCard 
                key={i}
                imageUrl={item.img}
                imageAlt={item.title}
                title={item.title}
                categoryLabel={item.cat}
              />
            ))}
          </div>
          
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden">
            <HorizontalScroll>
              {exploreRange.map((item, i) => (
                <div key={i} className="flex-shrink-0 w-[160px] sm:w-[200px]">
                  <SquareImageCard 
                    imageUrl={item.img}
                    imageAlt={item.title}
                    title={item.title}
                    categoryLabel={item.cat}
                  />
                </div>
              ))}
            </HorizontalScroll>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-[var(--color-brand-gold)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[var(--color-brand-navy)] mb-4 md:mb-6">
            Ready to Start Your Project or Place an Order?
          </h2>
          <p className="text-[var(--color-brand-navy)]/80 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
            Get in touch with our team today for a custom quote on services or bulk supply orders.
          </p>
          <Button variant="whatsapp" className="shadow-lg text-base md:text-lg px-6 md:px-8 py-3 md:py-4" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.">
              Enquire on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
