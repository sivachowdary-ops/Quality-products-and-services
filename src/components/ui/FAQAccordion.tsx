"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={cn("w-full max-w-3xl mx-auto border-t border-[#E8EAED]", className)}>
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#E8EAED]">
          <button
            className="w-full py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-brand-gold)]"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-lg text-[var(--color-text-on-light)]">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-[var(--color-text-on-light-muted)] transition-transform duration-[var(--animate-base)] ease-[var(--ease-in-out)]",
                openIndex === index ? "rotate-180" : ""
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-5 text-[var(--color-text-on-light-muted)]">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
