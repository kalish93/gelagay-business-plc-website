'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ExternalLink, MapPinned } from 'lucide-react';
import { useState } from 'react';

import { contactDetails, products, sectionEyebrows } from '@/components/landing-data';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { submitContactForm } from '@/lib/contact-form';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setIsSent(false);
    setSubmitError('');

    try {
      await submitContactForm({
        fullName: String(formData.get('fullName') ?? ''),
        companyName: String(formData.get('companyName') ?? ''),
        email: String(formData.get('email') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        solutionArea: String(formData.get('solutionArea') ?? ''),
        message: String(formData.get('message') ?? ''),
        source: 'Contact section',
        website: String(formData.get('website') ?? ''),
      });

      setIsSubmitting(false);
      setIsSent(true);
      form.reset();
    } catch {
      setIsSubmitting(false);
      setSubmitError('Message could not be sent. Please email info@gelagay.com directly.');
    }
  };

  return (
    <section id="contact" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="Tell us the water system, lab equipment, reagent, testing kit, test requirement, or training support you need."
          eyebrow={sectionEyebrows.contact}
          title="Start a water or laboratory support conversation."
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

            <div className="overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
              <div className="relative min-h-[290px]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=9.063917%2C38.761056&output=embed"
                  title="Gelagay Business PLC location map"
                />
              </div>
              <div className="flex flex-col gap-3 border-t border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Current service location</h3>
                    <p className="text-sm text-muted-foreground">Ethiopia, Addis Ababa, Shiro meda</p>
                  </div>
                </div>
                <a
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
                  href="https://www.google.com/maps/search/?api=1&query=9.063917%2C38.761056"
                  rel="noreferrer"
                  target="_blank"
                >
                  Open Map
                  <ExternalLink className="h-4 w-4" />
                </a>
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
                name="solutionArea"
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
                placeholder="Water system, lab equipment, reagent, testing kit, test parameters, training request, location, and timeline."
                required
              />
            </label>

            <input
              aria-hidden="true"
              className="hidden"
              name="website"
              tabIndex={-1}
              type="text"
            />

            {isSent && (
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                Message sent. Gelagay will receive it at info@gelagay.com.
              </div>
            )}

            {submitError && (
              <div className="mt-4 rounded-lg border border-destructive/25 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {submitError}
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
