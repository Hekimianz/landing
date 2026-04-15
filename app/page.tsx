import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Problem } from '@/components/problem';
import { HowItWorks } from '@/components/how-it-works';
import { Nature } from '@/components/nature';
import { Metrics } from '@/components/metrics';
import { Features } from '@/components/features';
import { Cta } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div
      className="min-h-screen antialiased lg:pt-8"
      style={{
        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
        background: '#003a27',
        color: '#ffffff',
      }}
    >
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Nature />
      <Metrics />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
