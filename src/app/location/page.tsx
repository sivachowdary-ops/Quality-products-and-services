import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getPexelsImage } from "@/lib/pexels";

export const metadata = {
  title: "Location & Areas We Serve | Quality Products & Services",
  description: "Find Quality Products & Services at Sri Sai Nagar, KPHB, Hyderabad 500085. Products supplied across India; construction & interior services in AP & Telangana.",
};

export default async function LocationPage() {
  const bgHero = await getPexelsImage("hyderabad city map", "landscape");

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
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <MapPin className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Location & Areas We Serve
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Headquartered in KPHB, Hyderabad. Products delivered across India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <SectionHeading 
                  title="Our Office" 
                  className="text-left mb-6"
                />
                <p className="text-[var(--color-text-on-light-muted)] text-lg mb-8 leading-relaxed">
                  We are headquartered in KPHB, Hyderabad, placing us in an ideal location to quickly dispatch orders and mobilize our service teams across the city.
                </p>
              </div>

              <Card className="flex flex-col gap-6 bg-[var(--color-brand-navy)] text-[var(--color-text-on-dark)] border-none">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[var(--color-brand-gold)] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-[var(--color-text-on-dark-muted)]">
                      Quality Products & Services<br />
                      Flat No. 47, Venkata Rama Residency,<br />
                      Road No. 3, Sri Sai Nagar, KPHB,<br />
                      Hyderabad – 500085
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[var(--color-brand-gold)] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                    <p className="text-[var(--color-text-on-dark-muted)]">
                      Monday to Saturday<br />
                      9:00 AM - 6:00 PM<br />
                      Closed on Sundays
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[var(--color-brand-gold)] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <div className="flex flex-col">
                      <a href="tel:+919993454442" className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">9993454442</a>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h3 className="text-2xl font-bold font-heading text-[var(--color-text-on-light)] mb-4">Areas We Serve</h3>
                <p className="text-[var(--color-text-on-light-muted)] leading-relaxed mb-3">
                  <strong className="text-[var(--color-text-on-light)]">Products (India-wide):</strong> We supply Fire Equipment, Safety Equipment, Housekeeping & Sanitary Solutions, Stationery, and Electrical Materials across India, including major cities like Hyderabad, Bangalore, Chennai, Mumbai, and Delhi.
                </p>
                <p className="text-[var(--color-text-on-light-muted)] leading-relaxed">
                  <strong className="text-[var(--color-text-on-light)]">Services (AP & Telangana):</strong> Our Construction Works and Interior Works execution services are currently available across Andhra Pradesh and Telangana, covering Hyderabad, Secunderabad, HITEC City, Gachibowli, Madhapur, Balanagar, Jeedimetla, Patancheru, and surrounding areas.
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-[400px] lg:h-auto min-h-[500px] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-card)] border border-[#E8EAED] relative">
              {/* Google Maps Embed (KPHB general area since exact address isn't confirmed) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.123456789!2d78.3835!3d17.4897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9173003058cb%3A0xc39247c7ce1a5e17!2sSri+Sai+Nagar%2C+KPHB%2C+Hyderabad%2C+Telangana+500085!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location - Sri Sai Nagar, KPHB, Hyderabad 500085"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
