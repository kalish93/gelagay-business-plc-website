'use client';

import { motion } from 'framer-motion';

import { industries, sectionEyebrows } from '@/components/landing-data';
import { SectionHeading } from '@/components/section-heading';

export function Industries() {
  return (
    <section className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="From utility rooms to research benches, Gelagay supports teams that need reliable testing, training, lab inputs, and technical guidance."
          eyebrow={sectionEyebrows.industries}
          title="Serving facilities and teams that depend on reliable water systems."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                className="group rounded-lg border border-border bg-background p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                initial={{ opacity: 0, y: 16 }}
                key={industry.name}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                viewport={{ once: true, amount: 0.25 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">{industry.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
