import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Privacy Policy | Quality Products & Services",
  description: "Privacy Policy for Quality Products & Services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--color-surface-grey)] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Privacy Policy" 
          subtitle="Last updated: October 2023"
          className="mb-12"
        />

        <Card className="bg-[var(--color-surface-white)] text-[var(--color-text-on-light)] space-y-6">
          <p className="text-[var(--color-text-on-light-muted)]">
            At Quality Products & Services, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect, how it is used, and how it is protected.
          </p>

          <div>
            <h3 className="text-xl font-bold font-heading mb-3">1. Information We Collect</h3>
            <p className="text-[var(--color-text-on-light-muted)] leading-relaxed">
              We collect information you provide directly to us when you fill out a contact form, request a quote, or communicate with us via WhatsApp. This may include your name, phone number, email address, company name, and details regarding your specific requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-3">2. How We Use Your Information</h3>
            <p className="text-[var(--color-text-on-light-muted)] leading-relaxed mb-2">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-text-on-light-muted)]">
              <li>To provide, operate, and maintain our services.</li>
              <li>To process your orders and deliver the products or services requested.</li>
              <li>To communicate with you, including responding to your inquiries and providing customer support.</li>
              <li>To send you important notices, updates, or promotional materials (only if you have opted in).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-3">3. Data Sharing and Disclosure</h3>
            <p className="text-[var(--color-text-on-light-muted)] leading-relaxed">
              We do not sell, trade, or rent your personal identification information to third parties. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners or trusted affiliates.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-3">4. Security</h3>
            <p className="text-[var(--color-text-on-light-muted)] leading-relaxed">
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our site.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-3">5. Changes to This Privacy Policy</h3>
            <p className="text-[var(--color-text-on-light-muted)] leading-relaxed">
              Quality Products & Services has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage users to frequently check this page for any changes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-3">6. Contacting Us</h3>
            <p className="text-[var(--color-text-on-light-muted)] leading-relaxed">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <br/>
              <strong>Email:</strong> qualityproductsandservices999@gmail.com <br/>
              <strong>Phone:</strong> 9993454442
            </p>
          </div>

        </Card>
      </div>
    </div>
  );
}
