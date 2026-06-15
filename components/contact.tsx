'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MapPinned } from 'lucide-react';
import { useState } from 'react';

import { contactDetails, products, sectionEyebrows } from '@/components/landing-data';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setIsSent(false);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      form.reset();
    }, 900);
  };

  return (
    <section id="contact" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="Tell us what you need, where it is going, and whether you need supply, consultation, sourcing, or distribution support."
          eyebrow={sectionEyebrows.contact}
          title="Start a supply or advisory conversation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;

                return (
                  <div className="rounded-lg border border-border bg-card p-5 shadow-sm" key={detail.title}>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{detail.title}</h3>
                    <div className="mt-2 space-y-1">
                      {detail.value.map((line) => (
                        <p className="text-sm leading-5 text-muted-foreground" key={line}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="min-h-[250px] overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
              <div className="flex h-full min-h-[250px] flex-col items-center justify-center bg-[linear-gradient(135deg,rgba(10,35,66,0.12),rgba(212,160,23,0.12))] p-6 text-center">
                <MapPinned className="mb-4 h-10 w-10 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Google Maps Placeholder</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                  Embed the verified Addis Ababa office map here when the final address is confirmed.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="rounded-lg border border-border bg-card p-5 shadow-xl sm:p-6"
            initial={{ opacity: 0, x: 20 }}
            onSubmit={handleSubmit}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-foreground">
                Full Name
                <input
                  className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                  name="fullName"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground">
                Company Name
                <input
                  className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                  name="companyName"
                  placeholder="Company or institution"
                  required
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-foreground">
                Email
                <input
                  className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                  name="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground">
                Phone Number
                <input
                  className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                  name="phone"
                  placeholder="+251 ..."
                  required
                  type="tel"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-medium text-foreground">
              Solution Requirement
              <select
                className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                name="productRequirement"
                required
              >
                <option value="">Select solution area</option>
                {products.map((product) => (
                  <option key={product.title} value={product.title}>
                    {product.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-foreground">
              Message
              <textarea
                className="min-h-36 resize-none rounded-lg border border-border bg-background px-3 py-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                name="message"
                placeholder="Product or service need, quantity, use case, delivery location, consultation questions, and timeline."
                required
              />
            </label>

            {isSent && (
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                Request captured. Connect this form to email or CRM before launch.
              </div>
            )}

            <Button className="mt-5 h-12 w-full gap-2" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Sending request...' : 'Send Message'}
              {!isSubmitting && <ArrowRight className="h-4 w-4" />}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
