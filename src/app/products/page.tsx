import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard, Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Products | Quality Products & Services",
  description: "Browse our complete product range: Fire Equipment, Safety Equipment, Housekeeping & Sanitary Solutions, Stationery, and Electrical Materials supplied across India.",
};

export default function ProductsHubPage() {
  const categories = [
    {
      title: "Fire Fighting Equipment",
      description: "Extinguishers, hydrants, hoses, smoke detectors, and clean-agent suppression systems.",
      imageUrl: "/images/fire-equipment.webp",
      label: "Fire Safety",
      link: "/products/fire-equipment",
      bullets: ["Fire Extinguishers", "Hose Reels & Hydrants", "Fire Blankets", "Smoke Detectors", "Sprinkler Systems", "Suppression Systems"]
    },
    {
      title: "Safety Equipment",
      description: "PPE, fall protection, gas detection, road safety items, ESD shoes, and safety signage.",
      imageUrl: "/images/safety-equipment.webp",
      label: "Personal Safety",
      link: "/products/safety-equipment",
      bullets: ["Head & Eye Protection", "Hand & Body Protection", "Respiratory Protection", "Fall Protection", "Road Safety Products", "Safety Shoes & Signage"]
    },
    {
      title: "Housekeeping & Sanitary Solutions",
      description: "Industrial cleaning chemicals, paper tissues, automatic dispensers, and waste bins.",
      imageUrl: "/images/housekeeping-sanitary.webp",
      label: "Hygiene",
      link: "/products/housekeeping-sanitary-solutions",
      bullets: ["Cleaning Chemicals", "Automatic Dispensers", "Tissue & Paper Products", "Mops, Brooms & Brushes", "Garbage Bags & Bins", "Trolleys & Carts"]
    },
    {
      title: "Stationery Solutions",
      description: "Office writing instruments, notebook supplies, folders, calculators, whiteboards, and copier papers.",
      imageUrl: "/images/stationery-solutions.webp",
      label: "Office Supply",
      link: "/products/stationery-solutions",
      bullets: ["Writing Instruments", "Notebooks & Paper", "Files & Folders", "Office Essentials", "Art & Craft", "Copier Paper (A4)"]
    },
    {
      title: "Electrical Materials",
      description: "Flexible wires, power cables, modular switches, DB boxes, PVC conduits, and LED bulbs.",
      imageUrl: "/images/electrical-materials.webp",
      label: "Electricals",
      link: "/products/electrical-materials",
      bullets: ["Wires & Cables", "MCBs & DB Boxes", "Switches & Sockets", "Lighting Solutions", "Conduits & Fittings", "Industrial Plug Fittings"]
    }
  ];

  return (
    <div className="py-20 bg-[var(--color-surface-white)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Our Products" 
          subtitle="Explore our five core product verticals, supplied and delivered to businesses and sites across India."
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
