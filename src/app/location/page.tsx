import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getPexelsImage } from "@/lib/pexels";

export const metadata = {
  title: "Location & Areas We Serve | Quality Products & Services",
  description: "Find Quality Products & Services in KPHB, Hyderabad. We serve the entire Telangana region.",
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
            Conveniently located in KPHB, serving businesses across Hyderabad.
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
                      KPHB, Hyderabad,<br />
                      Telangana
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
                <p className="text-[var(--color-text-on-light-muted)] leading-relaxed">
                  We cater to the entirety of Hyderabad and Secunderabad, including major IT hubs like HITEC City, Madhapur, Gachibowli, and industrial sectors such as Balanagar, Jeedimetla, and Patancheru. For large corporate orders, we can facilitate delivery across Telangana.
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-[400px] lg:h-auto min-h-[500px] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-card)] border border-[#E8EAED] relative">
              {/* Google Maps Embed (KPHB general area since exact address isn't confirmed) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30441.776609950587!2d78.3800613!3d17.4897042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9173003058cb%3A0xc39247c7ce1a5e17!2sKukatpally%20Housing%20Board%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location - KPHB, Hyderabad"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
