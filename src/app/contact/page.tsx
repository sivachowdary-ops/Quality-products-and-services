"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "General Enquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, category, message } = formData;
    const waText = `Hi! I am ${name} (Ph: ${phone}).\nI have an enquiry regarding *${category}*.\n\nMessage: ${message}`;
    const waLink = `https://wa.me/919993454442?text=${encodeURIComponent(waText)}`;
    window.open(waLink, "_blank");
  };

  return (
    <div className="bg-[var(--color-surface-grey)] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <SectionHeading 
          title="Contact Us" 
          subtitle="Get in touch for quotes, bulk orders, or service requests. We reply promptly on WhatsApp."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Direct Contact Details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Card className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--color-brand-navy)] rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[var(--color-brand-gold)]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[var(--color-text-on-light)]">Call Us</h4>
                <div className="flex flex-col">
                  <a href="tel:+919993454442" className="text-[var(--color-text-on-light-muted)] hover:text-[var(--color-brand-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">9993454442</a>
                </div>
              </div>
            </Card>
            
            <Card className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--color-brand-navy)] rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[var(--color-brand-gold)]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[var(--color-text-on-light)]">Email Us</h4>
                <a href="mailto:qualityproductsandservices999@gmail.com" className="text-[var(--color-text-on-light-muted)] hover:text-[var(--color-brand-navy)] break-all focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
                  qualityproductsandservices999@gmail.com
                </a>
              </div>
            </Card>

            <Card className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--color-brand-navy)] rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[var(--color-brand-gold)]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[var(--color-text-on-light)]">Visit Us</h4>
                <p className="text-[var(--color-text-on-light-muted)]">
                  Flat No. 47, Venkata Rama Residency,<br />Road No. 3, Sri Sai Nagar, KPHB,<br />Hyderabad – 500085
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-[var(--color-surface-white)]">
              <h3 className="text-2xl font-bold font-heading text-[var(--color-text-on-light)] mb-6">Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-[var(--color-text-on-light)]">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="border border-[#E8EAED] rounded-[var(--radius-md)] px-4 py-3 focus:outline-none focus:border-[var(--color-brand-gold)] focus:ring-1 focus:ring-[var(--color-brand-gold)] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-[var(--color-text-on-light)]">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      className="border border-[#E8EAED] rounded-[var(--radius-md)] px-4 py-3 focus:outline-none focus:border-[var(--color-brand-gold)] focus:ring-1 focus:ring-[var(--color-brand-gold)] transition-colors"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="text-sm font-semibold text-[var(--color-text-on-light)]">Category of Interest</label>
                  <select 
                    id="category" 
                    name="category" 
                    value={formData.category}
                    onChange={handleChange}
                    className="border border-[#E8EAED] rounded-[var(--radius-md)] px-4 py-3 focus:outline-none focus:border-[var(--color-brand-gold)] focus:ring-1 focus:ring-[var(--color-brand-gold)] transition-colors bg-white"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Fire Fighting Equipment">Fire Fighting Equipment</option>
                    <option value="Safety Equipment">Safety Equipment</option>
                    <option value="Housekeeping & Sanitary Solutions">Housekeeping & Sanitary Solutions</option>
                    <option value="Stationery Solutions">Stationery Solutions</option>
                    <option value="Electrical Materials">Electrical Materials</option>
                    <option value="Construction Works">Construction Works</option>
                    <option value="Interior Works">Interior Works</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[var(--color-text-on-light)]">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="border border-[#E8EAED] rounded-[var(--radius-md)] px-4 py-3 focus:outline-none focus:border-[var(--color-brand-gold)] focus:ring-1 focus:ring-[var(--color-brand-gold)] transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {/* Using primary (gold) variant as decided, avoiding mix of whatsapp buttons */}
                <Button type="submit" variant="primary" className="w-full sm:w-auto self-start mt-2">
                  Send Enquiry via WhatsApp
                </Button>
                <p className="text-xs text-[var(--color-text-on-light-muted)] mt-1">
                  Clicking this will open WhatsApp with a pre-filled message.
                </p>

              </form>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
