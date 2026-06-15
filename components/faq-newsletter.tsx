'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Send } from 'lucide-react';
import { useState } from 'react';

import { faqs } from '@/components/landing-data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FaqNewsletter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubscribing(true);
    setSubscribed(false);

    window.setTimeout(() => {
      setIsSubscribing(false);
      setSubscribed(true);
      form.reset();
    }, 700);
  };

  return (
    <section id="faq" className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          className="rounded-lg bg-[#0A2342] p-6 text-white shadow-xl sm:p-8"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="text-sm font-semibold uppercase text-secondary">Stay informed</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">
            Chemical supply updates for business buyers.
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/75">
            Receive product availability notes, procurement reminders, and safety-focused supply
            updates from Gelagay.
          </p>

          <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              className="h-12 rounded-lg border border-white/20 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/60 focus:border-secondary focus:ring-3 focus:ring-secondary/20"
              id="newsletter-email"
              placeholder="business@email.com"
              required
              type="email"
            />
            <Button
              className="h-12 gap-2 bg-secondary px-5 text-primary hover:bg-secondary/90"
              disabled={isSubscribing}
              type="submit"
            >
              {isSubscribing ? 'Joining...' : 'Subscribe'}
              {!isSubscribing && <Send className="h-4 w-4" />}
            </Button>
          </form>
          {subscribed && (
            <p className="mt-3 text-sm font-medium text-secondary">
              Subscription captured for backend integration.
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="text-sm font-semibold uppercase text-secondary">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Common procurement questions.
          </h2>

          <div className="mt-6 divide-y divide-border rounded-lg border border-border bg-background shadow-sm">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    aria-expanded={isActive}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-foreground transition hover:bg-muted/50"
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                    type="button"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn('h-4 w-4 shrink-0 text-secondary transition', isActive && 'rotate-180')}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300',
                      isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
