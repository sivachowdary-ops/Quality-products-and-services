import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard, Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Services | Quality Products & Services",
  description: "Explore our expert contracting services: Construction Works, Interior Works, and Waterproofing Works executed across AP & Telangana.",
};

export default function ServicesHubPage() {
  const categories = [
    {
      title: "Construction Works",
      description: "Professional structural and civil contracting for corporate and commercial spaces.",
      imageUrl: "/images/construction-works.webp",
      label: "Construction",
      link: "/services/construction-works",
      bullets: ["False Ceiling Installation", "Plumbing & Sanitation Works", "Electrical & Wiring Works", "Flooring & Tiling Works", "Professional Wall Painting", "Fabrication & Structural Repairs"]
    },
    {
      title: "Interior Works",
      description: "Premium woodwork, wardrobes, space planning, and modular designs.",
      imageUrl: "/images/interior-works.webp",
      label: "Interiors",
      link: "/services/interior-works",
      bullets: ["Living Room Interiors", "Bedroom Designs & Woodwork", "Modular Kitchen Solutions", "Office Workspace Planning", "Decorative False Ceiling Solutions", "Wardrobes & Modular Storage"]
    },
    {
      title: "Waterproofing Works",
      description: "Advanced chemical waterproofing, PU injection grouting, and terrace damp proofing.",
      imageUrl: "/images/waterproofing-service.webp",
      label: "Waterproofing",
      link: "/services/waterproofing-works",
      bullets: ["Terrace & Roof Waterproofing", "Basement & Retaining Walls", "Sunken Slab & Toilets", "PU Injection Grouting", "Exterior Wall Damp Proofing", "Water Tank & Sump Lining"]
    }
  ];

  return (
    <div className="py-20 bg-[var(--color-surface-white)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="Discover our three core contracting and execution verticals, executed across Andhra Pradesh and Telangana."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
