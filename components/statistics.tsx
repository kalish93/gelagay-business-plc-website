'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { stats } from '@/components/landing-data';

function AnimatedNumber({ target, symbol }: { target: number; symbol: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let frame: number;
    const duration = 1200;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {symbol}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="bg-[#0A2342] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-semibold uppercase text-secondary">By the numbers</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Chemical distribution with measurable reach.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/75">
              These placeholder metrics are structured for quick replacement with verified
              operational data before launch.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                className="rounded-lg border border-white/10 bg-white/10 p-5 text-center backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                key={stat.label}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <p className="text-4xl font-bold text-secondary sm:text-5xl">
                  <AnimatedNumber symbol={stat.symbol} target={stat.value} />
                </p>
                <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
