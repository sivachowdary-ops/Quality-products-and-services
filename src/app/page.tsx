import React from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, SquareImageCard } from "@/components/ui/Card";
import { ShieldCheck, Clock, Tag, Users, Sparkles } from "lucide-react";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      title: "Fire Fighting Equipment",
      description: "Extinguishers, hydrants, hoses, smoke detectors, and suppression systems.",
      imageUrl: "/images/fire-equipment.webp",
      label: "Products",
      link: "/products/fire-equipment"
    },
    {
      title: "Safety Equipment",
      description: "PPE, fall protection, gas detection, road safety items, ESD shoes, and safety signage.",
      imageUrl: "/images/safety-equipment.webp",
      label: "Products",
      link: "/products/safety-equipment"
    },
    {
      title: "Housekeeping & Sanitary Solutions",
      description: "Cleaning chemicals, paper tissues, automatic dispensers, and waste bins.",
      imageUrl: "/images/housekeeping-sanitary.webp",
      label: "Products",
      link: "/products/housekeeping-sanitary-solutions"
    },
    {
      title: "Stationery Solutions",
      description: "Office writing instruments, notebook supplies, folders, calculators, whiteboards, and copier papers.",
      imageUrl: "/images/stationery-solutions.webp",
      label: "Products",
      link: "/products/stationery-solutions"
    },
    {
      title: "Electrical Materials",
      description: "Flexible wires, power cables, modular switches, DB boxes, PVC conduits, and LED bulbs.",
      imageUrl: "/images/electrical-materials.webp",
      label: "Products",
      link: "/products/electrical-materials"
    }
  ];

  const services = [
    {
      title: "Construction Works",
      description: "Comprehensive false ceiling, plumbing, electrical installation, flooring, painting, and civil contracting.",
      imageUrl: "/images/construction-works.webp",
      label: "Services",
      link: "/services/construction-works"
    },
    {
      title: "Interior Works",
      description: "Custom wardrobes, modern modular kitchen layouts, living rooms, and office designs.",
      imageUrl: "/images/interior-works.webp",
      label: "Services",
      link: "/services/interior-works"
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
    { title: "Fire Extinguishers", img: "/images/fire-equipment.webp", cat: "Fire Safety" },
    { title: "Plumbing Materials", img: "/images/explore/plumbing.webp", cat: "Construction" },
    { title: "Workplace Helmets", img: "/images/explore/helmet.webp", cat: "Safety" },
    { title: "Floor Cleaners", img: "/images/explore/cleaner.webp", cat: "Hygiene" },
    { title: "Writing Essentials", img: "/images/explore/stationery.webp", cat: "Stationery" },
    { title: "Modular Switches", img: "/images/explore/switches.webp", cat: "Electrical" },
    { title: "False Ceiling Installation", img: "/images/explore/ceiling.webp", cat: "Construction" },
    { title: "Modular Kitchen Fitting", img: "/images/interior-works.webp", cat: "Interiors" },
    { title: "First Aid Kits", img: "/images/explore/firstaid.webp", cat: "Safety" },
    { title: "Traffic Barricades", img: "/images/explore/barricade.webp", cat: "Road Safety" },
  ];

  return (
    <div>
      {/* Hero Section with AI-Generated Image & No Blue Overlay */}
      <section className="relative bg-[var(--color-brand-navy)] overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.webp" 
            alt="Quality Products and Services Construction Banner" 
            fill 
            className="object-cover opacity-35"
            priority
          />
        </div>
        
        {/* Dark gradient overlay for text readability, no blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-[var(--color-text-on-dark)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-[1.1] drop-shadow-md">
              Complete Solutions Under One Roof
            </h1>
            <p className="text-[var(--color-text-on-dark-muted)] text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-2xl leading-relaxed drop-shadow">
              Your trusted partner for Fire, Safety, Housekeeping, Stationery, and Electrical supplies across India, plus elite Construction & Interior services in AP & Telangana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" asChild className="text-base sm:text-lg">
                <a href="https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Quality%20Products%20%26%20Services.">
                  Enquire on WhatsApp
                </a>
              </Button>
              <Button variant="secondary" asChild className="text-base sm:text-lg text-[var(--color-text-on-dark)] border-white/20 hover:bg-white/10">
                <a href="#products">Explore Our Products</a>
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

      {/* Section A — Our Products (Using Flex Wrap Centering for 5 items) */}
      <section id="products" className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            title="Our Products" 
            subtitle="Everything you need to supply your workspaces and project sites, sourced and delivered across India."
            className="mb-8 md:mb-12"
          />
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {products.map((prod, i) => (
              <Link 
                href={prod.link} 
                key={i} 
                className="group flex flex-col bg-[var(--color-surface-white)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] border border-[#E8EAED] overflow-hidden hover:-translate-y-1 transition-all duration-[var(--animate-base)] ease-out focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] h-full w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-22px)] max-w-sm md:max-w-none"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={prod.imageUrl}
                    alt={prod.title}
                    fill
                    className="object-cover transition-transform duration-[var(--animate-base)] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-surface-white)] text-[var(--color-text-on-light)] px-3 py-1 rounded-[var(--radius-sm)] text-sm shadow-sm z-10 font-medium">
                    {prod.label}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold mb-2 text-[var(--color-text-on-light)]">{prod.title}</h4>
                  <p className="text-[var(--color-text-on-light-muted)] text-sm mb-6 flex-grow">{prod.description}</p>
                  
                  {/* Premium Navy CTA Button - turns Gold on hover */}
                  <div className="w-full bg-[var(--color-brand-navy)] text-white text-center py-2.5 px-4 rounded-[var(--radius-md)] text-sm font-medium transition-colors group-hover:bg-[var(--color-brand-gold)] group-hover:text-[var(--color-brand-navy)] mt-auto">
                    Click to view {prod.title.toLowerCase()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section B — Our Services */}
      <section id="services" className="py-16 md:py-24 bg-[var(--color-surface-grey)] border-t border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            title="Our Services" 
            subtitle="End-to-end contracting, false ceilings, plumbing, electrical, and custom interior execution across Andhra Pradesh and Telangana."
            className="mb-8 md:mb-12"
          />
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {services.map((svc, i) => (
              <Link 
                href={svc.link} 
                key={i} 
                className="group flex flex-col bg-[var(--color-surface-white)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] border border-[#E8EAED] overflow-hidden hover:-translate-y-1 transition-all duration-[var(--animate-base)] ease-out focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] h-full w-full md:w-[calc(50%-12px)] max-w-sm md:max-w-none"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={svc.imageUrl}
                    alt={svc.title}
                    fill
                    className="object-cover transition-transform duration-[var(--animate-base)] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-surface-white)] text-[var(--color-text-on-light)] px-3 py-1 rounded-[var(--radius-sm)] text-sm shadow-sm z-10 font-medium">
                    {svc.label}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold mb-2 text-[var(--color-text-on-light)]">{svc.title}</h4>
                  <p className="text-[var(--color-text-on-light-muted)] text-sm mb-6 flex-grow">{svc.description}</p>
                  
                  {/* Premium Navy CTA Button - turns Gold on hover */}
                  <div className="w-full bg-[var(--color-brand-navy)] text-white text-center py-2.5 px-4 rounded-[var(--radius-md)] text-sm font-medium transition-colors group-hover:bg-[var(--color-brand-gold)] group-hover:text-[var(--color-brand-navy)] mt-auto">
                    Click to view {svc.title.toLowerCase()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            title="Why Choose Quality Products & Services?" 
            className="mb-8 md:mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyChooseUs.map((item, i) => (
              <Card key={i} className="flex flex-col p-4 md:p-6 lg:p-8 bg-[var(--color-surface-grey)]">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-gold)] mb-3 md:mb-4" />
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-[var(--color-text-on-light)]">{item.title}</h3>
                <p className="text-[var(--color-text-on-light-muted)] text-sm md:text-base leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Range — Horizontal Scrolling with Card Peek */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-grey)] border-t border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            title="Explore Our Range" 
            subtitle="A glimpse into the vast catalog of products and services we offer across India."
            className="mb-8 md:mb-12"
          />
          
          {/* Responsive Layout with Scroll Peek on Mobile/Tablet */}
          <HorizontalScroll>
            {exploreRange.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[240px] sm:w-[280px]">
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
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-[var(--color-brand-gold)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[var(--color-brand-navy)] mb-4 md:mb-6">
            Ready to Start Your Project or Place an Order?
          </h2>
          <p className="text-[var(--color-brand-navy)]/80 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
            Get in touch with our team today for a custom quote on execution services or bulk supply orders.
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
