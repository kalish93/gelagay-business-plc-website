import { Mail, MapPin, MessageCircle, Phone, Send, Share2 } from 'lucide-react';
import Image from 'next/image';

import { navItems, products } from '@/components/landing-data';

const socialLinks = [
  { label: 'Company profile', icon: Share2, href: '#about' },
  { label: 'Customer chat', icon: MessageCircle, href: '#contact' },
  { label: 'Telegram', icon: Send, href: 'https://t.me/Rossel120' },
];

export function Footer() {
  return (
    <footer className="bg-[#0A2342] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white">
                <Image alt="Gelagay Business PLC logo" className="object-contain p-1" fill src="/logo.png" />
              </span>
              <div>
                <p className="font-bold">Gelagay Business PLC</p>
                <p className="text-xs text-white/70">Building Value. Creating Opportunities.</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/75">
              Water testing, laboratory equipment, reagents, testing kits, training, and
              technical services for Ethiopian facilities and laboratories.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white transition hover:border-secondary hover:bg-secondary hover:text-primary"
                    href={social.href}
                    key={social.label}
                    rel={social.href.startsWith('https') ? 'noreferrer' : undefined}
                    target={social.href.startsWith('https') ? '_blank' : undefined}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-secondary">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a className="text-white/70 transition hover:text-secondary" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {products.slice(0, 5).map((product) => (
                <li key={product.title}>
                  <a className="text-white/70 transition hover:text-secondary" href="#products">
                    {product.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span className="grid gap-1">
                  <a className="transition hover:text-secondary" href="tel:+251940301838">
                    +251 94 030 1838
                  </a>
                  <a className="transition hover:text-secondary" href="tel:+251961063629">
                    +251 961 063 629
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span className="grid gap-1">
                  <a className="transition hover:text-secondary" href="mailto:info@gelagay.com">
                    info@gelagay.com
                  </a>
                  <a className="transition hover:text-secondary" href="mailto:sales@gelagay.com">
                    sales@gelagay.com
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <a
                  className="transition hover:text-secondary"
                  href="https://www.google.com/maps/search/?api=1&query=9.063917%2C38.761056"
                  rel="noreferrer"
                  target="_blank"
                >
                  Addis Ababa, Ethiopia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Gelagay Business PLC. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="transition hover:text-secondary" href="#about">
              Company Info
            </a>
            <a className="transition hover:text-secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
