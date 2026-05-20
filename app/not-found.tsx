import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Istanbul Care',
  description:
    "The page you're looking for has moved, been removed, or never existed — let's get you back on track."
};

export default function NotFound() {
  return (
    <section
      className="min-h-[calc(100vh-90px)] flex items-center justify-center px-4 py-16 md:py-24"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #e6f0f6 0%, #f5fafd 45%, #ffffff 100%)'
      }}
    >
      <div className="w-full max-w-3xl text-center">
        <h1
          className="font-extrabold leading-none tracking-tight text-primary"
          style={{ fontSize: 'clamp(7rem, 18vw, 14rem)' }}
        >
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-primary leading-tight">
          This page didn&apos;t make it to the clinic.
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-primary/75 leading-relaxed">
          The page you&apos;re looking for has moved, been removed, or never existed. Let&apos;s
          get you back on track — our team is here to help.
        </p>

        {/* Primary action row */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-dark transition-colors px-6 md:px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg"
          >
            <span aria-hidden>🏠</span>
            Back to Homepage
          </Link>

          <a
            href="https://wa.me/905320000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-strong transition-colors px-6 md:px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg"
          >
            <span aria-hidden>💬</span>
            WhatsApp
          </a>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 md:px-7 py-3.5 text-sm md:text-base font-semibold shadow-sm"
          >
            Free Consultation
          </Link>
        </div>

        {/* Secondary outline row */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
          <Link
            href="/hair-transplant"
            className="inline-flex rounded-full border border-primary/60 text-primary hover:bg-primary hover:text-white transition-colors px-5 py-2 text-sm font-semibold"
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="inline-flex rounded-full border border-primary/60 text-primary hover:bg-primary hover:text-white transition-colors px-5 py-2 text-sm font-semibold"
          >
            Pricing
          </Link>
          <Link
            href="/review"
            className="inline-flex rounded-full border border-primary/60 text-primary hover:bg-primary hover:text-white transition-colors px-5 py-2 text-sm font-semibold"
          >
            Patient Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
