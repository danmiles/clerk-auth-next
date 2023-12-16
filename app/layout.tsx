import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// NavbarDropdown
import NavbarDropdown from '@/components/NavbarDropdown';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clerk auth with Next.js 14',
  description: 'Clerk auth with Next.js 14',
  openGraph: {
    title: 'Clerk auth with Next.js 14',
    description:
      'Clerk auth with Next.js 14 open graph descriptions for social media',
    images: [
      {
        url: '/images/og-meta-img.jpg',
        width: 1280,
        height: 720,
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavbarDropdown />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
