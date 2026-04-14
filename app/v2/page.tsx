import { V2Navbar } from '@/components/v2/navbar';
import { V2Hero } from '@/components/v2/hero';
import { V2Problem } from '@/components/v2/problem';
import { V2Solution } from '@/components/v2/solution';
import { V2Nature } from '@/components/v2/nature';
import { V2Impact } from '@/components/v2/impact';
import { V2Tech } from '@/components/v2/tech';
import { V2Cta } from '@/components/v2/cta';
import { V2Footer } from '@/components/v2/footer';
import '../v2.css';

export const metadata = {
  title: 'PhysaFlow — More AI Capacity. Same Hardware.',
  description:
    'PhysaFlow is a SaaS that helps data centers get more capacity out of what they already have. AI-powered real-time optimization for energy, cooling, and workload.',
};

export default function V2Page() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
        background: '#001f15',
        color: '#ffffff',
      }}
    >
      <V2Navbar />
      <V2Hero />
      <V2Problem />
      <V2Solution />
      <V2Nature />
      <V2Impact />
      <V2Tech />
      <V2Cta />
      <V2Footer />
    </div>
  );
}
