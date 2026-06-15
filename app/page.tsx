import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Products } from '@/components/products';
import { WhyUs } from '@/components/why-us';
import { Industries } from '@/components/industries';
import { SafetyCompliance } from '@/components/safety-compliance';
import { Testimonials } from '@/components/testimonials';
import { Statistics } from '@/components/statistics';
import { FaqNewsletter } from '@/components/faq-newsletter';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';

export const metadata = {
  title: 'Gelagay Business PLC | Business Supply, Distribution & Advisory',
  description:
    'Business supply, sourcing, distribution, and advisory services across Ethiopia, with current specialization in chemical supply and chemical-use consultation.',
  keywords:
    'business supply Ethiopia, distribution services Ethiopia, chemical consultation, industrial chemicals, agricultural chemicals, laboratory chemicals, Ethiopia',
};

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Industries />
      <SafetyCompliance />
      <Testimonials />
      <Statistics />
      <FaqNewsletter />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
