import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Istanbul Care Hair Clinic',
  description:
    'Hair Transplant in Turkey and Istanbul with Istanbul Care Clinic. Natural results, expert surgeons, and all-inclusive packages.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 pt-[70px] md:pt-[80px] lg:pt-[90px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
