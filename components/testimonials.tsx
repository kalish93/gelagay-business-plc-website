'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

import { sectionEyebrows, testimonials } from '@/components/landing-data';
import { SectionHeading } from '@/components/section-heading';

export function Testimonials() {
  return (
    <section className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="Representative client feedback from businesses that value timely supply, product clarity, and practical support."
          eyebrow={sectionEyebrows.testimonials}
          title="Trusted by teams with real procurement pressure."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="flex min-h-[320px] flex-col rounded-lg border border-border bg-background p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              key={testimonial.name}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <Quote className="h-7 w-7 text-secondary" />
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star className="h-4 w-4 fill-secondary text-secondary" key={starIndex} />
                  ))}
                </div>
              </div>

              <p className="flex-1 text-sm leading-7 text-muted-foreground">
                &ldquo;{testimonial.testimonial}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                  <Image
                    alt={testimonial.name}
                    className="object-cover"
                    fill
                    sizes="48px"
                    src={testimonial.image}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs font-medium text-secondary">{testimonial.company}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
