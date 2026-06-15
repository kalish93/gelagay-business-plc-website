'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Beaker, ChevronDown, ClipboardCheck, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

import { heroHighlights } from '@/components/landing-data';
import { Button } from '@/components/ui/button';

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#0A2342] px-4 pb-10 pt-28 text-white sm:px-6 lg:px-8"
    >
      <Image
        alt="Chemical containers, laboratory equipment, and industrial supply operations"
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src="/hero.png"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,35,66,0.95)_0%,rgba(10,35,66,0.76)_44%,rgba(10,35,66,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl pb-10"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex flex-wrap gap-2">
            {heroHighlights.map((item) => (
              <span
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mb-4 text-sm font-semibold uppercase text-secondary">
            Building Value. Creating Opportunities.
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Gelagay Business PLC
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Trusted Chemical Supply Solutions for Industry, Agriculture, and Business
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Providing high-quality chemical products, accountable sourcing, and reliable
            distribution services across Ethiopia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              className="h-12 gap-2 bg-secondary px-6 text-primary hover:bg-secondary/90"
              onClick={() => scrollToSection('#contact')}
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              className="h-12 border-white/30 bg-white/10 px-6 text-white hover:bg-white/20"
              onClick={() => scrollToSection('#products')}
              variant="outline"
            >
              View Products
            </Button>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-3"
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          {[
            { label: 'Documented product quality', icon: ClipboardCheck },
            { label: 'Safe handling guidance', icon: ShieldCheck },
            { label: 'Lab and industrial coverage', icon: Beaker },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div className="flex items-center gap-3 text-sm text-white/90" key={item.label}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-secondary">
                  <Icon className="h-4 w-4" />
                </span>
                {item.label}
              </div>
            );
          })}
        </motion.div>

        <button
          aria-label="Scroll to about section"
          className="absolute bottom-0 right-0 hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 lg:flex"
          onClick={() => scrollToSection('#about')}
          type="button"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
