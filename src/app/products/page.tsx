import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard, Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Products | Quality Products & Services",
  description: "Browse our complete product range: Fire Equipment, Safety Materials, Housekeeping & Sanitary Solutions, Stationery, Electrical Materials, Aluminium Ladders, Wire Nails, Nut & Bolts Fasteners, and MS Binding Wire supplied across India.",
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
      title: "Safety Materials",
      description: "PPE, fall protection, high-visibility clothing, gas detection, road safety items, ESD shoes, and safety signage.",
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
    },
    {
      title: "Aluminium Ladders",
      description: "Self-supporting step ladders, multi-purpose folding ladders, telescopic and scaffolding tower ladders.",
      imageUrl: "/images/subcategories/aluminium-ladders.webp",
      label: "Safety & Access",
      link: "/products/aluminium-ladders",
      bullets: ["A-Type Step Ladders", "Multi-Purpose Folding", "Extension & Telescopic", "Platform Step Ladders", "Straight Wall Ladders", "Mobile Scaffolding Towers"]
    },
    {
      title: "Wire Nails",
      description: "Complete range of common wire nails, hardened concrete nails, duplex formwork nails, and roofing umbrella nails.",
      imageUrl: "/images/subcategories/wire-nails.webp",
      label: "Hardware",
      link: "/products/wire-nails",
      bullets: ["Common Steel Wire Nails", "Concrete & Masonry Nails", "Duplex Shuttering Nails", "Roofing Umbrella Nails", "Brad & Finishing Nails", "Collated Coil Nails"]
    },
    {
      title: "Nut & Bolts Fasteners",
      description: "High-tensile Grade 8.8/10.9 hex bolts, heavy hex nuts, threaded rods, and concrete expansion anchor fasteners.",
      imageUrl: "/images/subcategories/nuts-bolts.webp",
      label: "Fasteners",
      link: "/products/nuts-bolts",
      bullets: ["Hex Head Machine Bolts", "Hex Nuts & Heavy Nuts", "Threaded Rods & Studs", "Concrete Anchor Fasteners", "Socket Head Cap Screws", "Plain & Spring Washers"]
    },
    {
      title: "MS Binding Wire",
      description: "Soft annealed mild steel binding wire (16G, 18G, 20G), galvanized iron GI wire, and loop ties for rebar tying.",
      imageUrl: "/images/subcategories/ms-binding-wire.webp",
      label: "Civil Supplies",
      link: "/products/ms-binding-wire",
      bullets: ["18 Gauge (1.2mm) Wire", "20 Gauge (0.9mm) Wire", "16 Gauge (1.6mm) Heavy Wire", "Galvanized GI Wire", "Double Loop Rebar Ties", "25kg / 50kg Bulk Coils"]
    }
  ];

  return (
    <div className="py-20 bg-[var(--color-surface-white)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Our Products" 
          subtitle="Explore our nine core product verticals, supplied and delivered to businesses and sites across India."
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
