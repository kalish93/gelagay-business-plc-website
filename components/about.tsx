'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Eye, Target } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const commitments = [
  {
    title: 'Mission',
    description:
      'Deliver high-quality chemical products with dependable service, technical clarity, and long-term partnership value.',
    icon: Target,
  },
  {
    title: 'Vision',
    description:
      "Become one of East Africa's most trusted chemical supply partners for industry, agriculture, and commerce.",
    icon: Eye,
  },
  {
    title: 'Commitment',
    description:
      'Maintain quality, safety, customer satisfaction, and responsible handling across every supply relationship.',
    icon: BadgeCheck,
  },
];

export function About() {
  return (
    <section id="about" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          className="relative order-2 min-h-[420px] overflow-hidden rounded-lg border border-border bg-muted lg:order-1"
          initial={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            alt="Gelagay Business chemical warehouse and distribution center"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            src="/about.png"
          />
          <div className="absolute inset-x-5 bottom-5 grid gap-3 rounded-lg border border-white/20 bg-[#0A2342]/90 p-5 text-white shadow-2xl backdrop-blur-md sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-secondary">10+</p>
              <p className="text-xs text-white/80">Years experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">ISO-ready</p>
              <p className="text-xs text-white/80">Quality mindset</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">ET</p>
              <p className="text-xs text-white/80">Regional coverage</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 space-y-8 lg:order-2"
          initial={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase text-secondary">
              About Gelagay
            </span>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              A dependable chemical supply partner for Ethiopian businesses.
            </h2>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              Gelagay Business PLC is a trusted supplier of chemical products serving
              industrial, agricultural, laboratory, and commercial sectors. We are committed
              to delivering quality products, dependable service, and long-term business
              partnerships.
            </p>
          </div>

          <div className="grid gap-4">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="group grid gap-4 rounded-lg border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg sm:grid-cols-[auto_1fr]"
                  key={item.title}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-secondary group-hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button className="h-11 gap-2 px-5" onClick={() => scrollToSection('#safety')}>
            View Safety Standards
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
