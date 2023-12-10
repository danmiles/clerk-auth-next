import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// NavbarDropdown
import NavbarDropdown from '@/components/NavbarDropdown';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clerk authentication with Next.js',
  description: 'Clerk authentication with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarDropdown />
        {children}
      </body>
    </html>
  );
}
