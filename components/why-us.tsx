'use client';

import { motion } from 'framer-motion';

import { features, sectionEyebrows } from '@/components/landing-data';
import { SectionHeading } from '@/components/section-heading';

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading
            align="left"
            description="Business buyers need more than product availability. They need repeatable service, accountable sourcing, and responsive people."
            eyebrow={sectionEyebrows.why}
            title="A partner relationship designed for operational confidence."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="group rounded-lg border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg"
                  initial={{ opacity: 0, y: 18 }}
                  key={feature.title}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-secondary group-hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
