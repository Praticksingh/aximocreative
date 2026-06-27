import type { Metadata } from 'next';
import { Space_Grotesk, Sora } from 'next/font/google';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const body = Sora({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AXIMO | Cinematic creative media startup',
  description: 'AXIMO is a premium creative media and marketing startup from Gorakhpur building cinematic brand systems, social media, branding, reels, and campaigns.',
  metadataBase: new URL('https://aximo.studio'),
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'AXIMO | Cinematic creative media startup',
    description: 'Modern branding, strategy, and content for ambitious local businesses with global taste.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body bg-ink text-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
