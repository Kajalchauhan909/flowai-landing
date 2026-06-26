import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const headingFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-heading',
});

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
export const metadata = {
    title: 'FlowAI — Automate Your Data Pipelines',
    description: 'AI-driven data automation platform for modern teams.',
    openGraph: {
      title: 'FlowAI — Automate Your Data Pipelines',
      description: 'AI-driven data automation platform for modern teams.',
      images: ['/og-image.png'], // create a simple 1200x630 png, drop in /public
      type: 'website',
    },
    metadataBase: new URL('https://your-vercel-url.vercel.app'),
  };