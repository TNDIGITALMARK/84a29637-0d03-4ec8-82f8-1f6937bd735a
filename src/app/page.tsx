import { Navigation } from '@/components/pr-website/navigation';
import { Hero } from '@/components/pr-website/hero';
import { About } from '@/components/pr-website/about';
import { Services } from '@/components/pr-website/services';
import { CaseStudies } from '@/components/pr-website/case-studies';
import { Testimonials } from '@/components/pr-website/testimonials';
import { Contact } from '@/components/pr-website/contact';
import { Footer } from '@/components/pr-website/footer';

export const dynamic = 'force-dynamic';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}