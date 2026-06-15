'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { complianceItems, sectionEyebrows } from '@/components/landing-data';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function SafetyCompliance() {
  return (
    <section id="safety" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <SectionHeading
              align="left"
              description="Chemical supply requires discipline. Gelagay presents products with clear handling expectations, documentation practices, and customer support that reduce procurement risk."
              eyebrow={sectionEyebrows.safety}
              title="Quality, safe handling, and compliance are part of the supply process."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-11 gap-2 px-5" onClick={() => scrollToSection('#contact')}>
                Discuss Requirements
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                className="h-11 px-5"
                onClick={() => scrollToSection('#products')}
                variant="outline"
              >
                Review Products
              </Button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-border md:block" />
            <div className="grid gap-4">
              {complianceItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    className="relative rounded-lg border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg md:ml-12"
                    initial={{ opacity: 0, x: 24 }}
                    key={item.title}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    viewport={{ once: true, amount: 0.25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <div className="absolute -left-[4.45rem] top-5 hidden h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-emerald-600 shadow-sm md:flex dark:text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex gap-4 md:hidden">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
