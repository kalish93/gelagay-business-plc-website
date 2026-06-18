'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { products } from '@/components/landing-data';
import { Button } from '@/components/ui/button';
import { submitContactForm } from '@/lib/contact-form';

type InquiryModalProps = {
  open: boolean;
  product?: string;
  onOpenChange: (open: boolean) => void;
};

export function InquiryModal({ open, product, onOpenChange }: InquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (!open) {
      setIsSubmitting(false);
      setIsSent(false);
      setSubmitError('');
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onOpenChange, open]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitContactForm({
        fullName: String(formData.get('fullName') ?? ''),
        companyName: String(formData.get('companyName') ?? ''),
        email: String(formData.get('email') ?? ''),
        solutionArea: String(formData.get('solutionArea') ?? ''),
        message: String(formData.get('message') ?? ''),
        source: 'Solution inquiry modal',
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
    <AnimatePresence>
      {open && (
        <motion.div
          aria-labelledby="inquiry-title"
          aria-modal="true"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-primary/70 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
        >
          <button
            aria-label="Close inquiry form"
            className="absolute inset-0 cursor-default"
            onClick={() => onOpenChange(false)}
            type="button"
          />
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-background shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-start justify-between border-b border-border bg-muted/40 p-5 sm:p-6">
              <div>
                <p className="text-sm font-semibold text-secondary">Solution inquiry</p>
                <h3 id="inquiry-title" className="mt-1 text-2xl font-bold text-foreground">
                  Contact Gelagay about this solution
                </h3>
              </div>
              <button
                aria-label="Close inquiry form"
                className="rounded-full border border-border bg-background p-2 text-foreground transition hover:bg-muted"
                onClick={() => onOpenChange(false)}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {isSent ? (
              <div className="p-6 text-center sm:p-8">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Inquiry received</h4>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  Your message has been sent to info@gelagay.com. Gelagay can follow up by email.
                </p>
                <Button className="mt-6 h-11 px-5" onClick={() => onOpenChange(false)}>
                  Close
                </Button>
              </div>
            ) : (
              <form className="grid gap-4 p-5 sm:p-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-foreground">
                    Full Name
                    <input
                      className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                      name="fullName"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-foreground">
                    Company
                    <input
                      className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                      name="companyName"
                      placeholder="Company name"
                      required
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
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
                    Solution Area
                    <select
                      className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                      defaultValue={product ?? ''}
                      name="solutionArea"
                      required
                    >
                      <option value="">Select solution area</option>
                      {products.map((item) => (
                        <option key={item.title} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Requirement
                  <textarea
                    className="min-h-28 resize-none rounded-lg border border-border bg-background px-3 py-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                    name="message"
                    placeholder="Tell us the product, use case, advisory question, quantity, delivery location, and timeline."
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
                {submitError && (
                  <div className="rounded-lg border border-destructive/25 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                    {submitError}
                  </div>
                )}
                <Button className="h-11 w-full gap-2 text-sm" disabled={isSubmitting} type="submit">
                  {isSubmitting ? 'Preparing inquiry...' : 'Submit Inquiry'}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
