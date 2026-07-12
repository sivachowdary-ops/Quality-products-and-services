import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard, Card } from "@/components/ui/Card";
import { getPexelsImage } from "@/lib/pexels";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Products & Services | Quality Products & Services",
  description: "Explore our range of Construction Works, Fire & Safety Equipment, and Cleaning Supplies.",
};

export default async function ServicesHubPage() {
  const imgConstruction = await getPexelsImage("modern office ceiling construction", "square");
  const imgFire = await getPexelsImage("fire extinguisher safety", "square");
  const imgCleaning = await getPexelsImage("commercial cleaning supplies", "square");

  const categories = [
    {
      title: "Construction & Interior Works",
      description: "Professional contracting for corporate and commercial spaces.",
      imageUrl: imgConstruction,
      label: "Construction",
      link: "/services/construction-works",
      bullets: ["False Ceiling Works", "Plumbing Works", "Electrical Works", "Flooring Works", "Painting Works", "Fabrication Works"]
    },
    {
      title: "Fire Fighting & Safety Equipment",
      description: "Comprehensive PPE and firefighting systems.",
      imageUrl: imgFire,
      label: "Safety",
      link: "/services/fire-safety-equipment",
      bullets: ["Fire Fighting Equipment", "PPE & Fall Protection", "Gas Detection Instruments", "Road Safety Products", "Security & Access Systems"]
    },
    {
      title: "Cleaning & Housekeeping Supplies",
      description: "Bulk supplies for facility management.",
      imageUrl: imgCleaning,
      label: "Cleaning",
      link: "/services/cleaning-supplies",
      bullets: ["Cleaning Chemicals", "Tissue & Paper Products", "Mops, Brooms & Brushes", "Garbage Bags & Bins", "Trolleys & Carts"]
    }
  ];

  return (
    <div className="py-20 bg-[var(--color-surface-white)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Our Products & Services" 
          subtitle="Discover our three core verticals, bringing you complete facility solutions under one roof."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col gap-6">
              <a href={cat.link} className="block focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-[var(--radius-lg)]">
                <SquareImageCard 
                  imageUrl={cat.imageUrl}
                  imageAlt={cat.title}
                  title={cat.title}
                  description={cat.description}
                  categoryLabel={cat.label}
                />
              </a>
              <Card className="flex-1 bg-[var(--color-surface-grey)] border-none shadow-none">
                <h4 className="font-semibold text-[var(--color-text-on-light)] mb-4">At a Glance</h4>
                <ul className="flex flex-col gap-3">
                  {cat.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-on-light-muted)] text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
