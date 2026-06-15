'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileCheck2, PackageSearch, Truck } from 'lucide-react';
import { useState } from 'react';

import { InquiryModal } from '@/components/inquiry-modal';
import {
  accentClasses,
  chemicalCategories,
  products,
  sectionEyebrows,
} from '@/components/landing-data';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const workflow = [
  { label: 'Needs assessment', icon: PackageSearch },
  { label: 'Documentation', icon: FileCheck2 },
  { label: 'Supply plan', icon: Truck },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openInquiry = (product: string) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="A future-ready services structure for companies that need dependable sourcing, documentation, advisory support, and distribution."
          eyebrow={sectionEyebrows.products}
          title="Solutions built around supply, advisory, and business continuity."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            const accent = accentClasses[product.accent as keyof typeof accentClasses];

            return (
              <motion.article
                className={cn(
                  'group flex min-h-[260px] flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl',
                  accent.border,
                )}
                initial={{ opacity: 0, y: 24 }}
                key={product.title}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                viewport={{ once: true, amount: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className={cn('flex h-12 w-12 items-center justify-center rounded-lg', accent.panel)}>
                    <Icon className={cn('h-6 w-6', accent.icon)} />
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    Solution ready
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{product.description}</p>

                <Button
                  className="mt-6 h-10 justify-between px-4"
                  onClick={() => openInquiry(product.title)}
                  variant="outline"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition group-hover/button:translate-x-1" />
                </Button>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-8 rounded-lg border border-border bg-background p-5 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <h3 className="text-lg font-bold text-foreground">Current chemical focus areas</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                These are the core categories Gelagay supports today while the company prepares
                for broader business sectors.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {chemicalCategories.map((category) => (
                <span
                  className="rounded-full border border-border bg-muted/60 px-3 py-2 text-xs font-semibold text-foreground"
                  key={category}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 rounded-lg border border-border bg-background p-5 shadow-sm lg:grid-cols-[1fr_auto]"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <h3 className="text-lg font-bold text-foreground">Need advice before ordering?</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Share your use case, product list, volumes, preferred packaging, and destination.
              Gelagay can help plan safe selection, sourcing, documentation, and delivery cadence.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[520px]">
            {workflow.map((step) => {
              const Icon = step.icon;

              return (
                <div className="rounded-lg border border-border bg-muted/50 p-4" key={step.label}>
                  <Icon className="mb-3 h-5 w-5 text-secondary" />
                  <p className="text-sm font-semibold text-foreground">{step.label}</p>
                  <div className="mt-3 h-2 w-full animate-pulse rounded-full bg-primary/10" />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <InquiryModal onOpenChange={setIsModalOpen} open={isModalOpen} product={selectedProduct} />
    </section>
  );
}
