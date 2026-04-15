import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'PhysaFlow — More Capacity From What You Already Have',
  description:
    'PhysaFlow is a SaaS that helps data centers get more capacity out of what they already have. AI-powered real-time optimization for energy, cooling, and workload.',
  icons: {
    icon: '/logo png.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} min-h-screen antialiased`}
        style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
