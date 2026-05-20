import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Istanbul Care',
  description:
    "The page you're looking for may have moved or never existed — here's where we can help instead."
};

type Card = {
  title: string;
  icon: React.ReactNode;
  links: { label: string; href: string }[];
  footer: { label: string; href: string };
};

const cards: Card[] = [
  {
    title: 'Our Services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    links: [
      { label: 'DHI Hair Transplant', href: '/hair-transplant/dhi' },
      { label: 'FUE Hair Transplant', href: '/hair-transplant/fue' },
      { label: 'Sapphire FUE', href: '/hair-transplant/sapphire-fue' },
      { label: 'Woman Hair Transplant', href: '/hair-transplant/woman' },
      { label: 'Beard Transplant', href: '/hair-transplant/beard' },
      { label: 'Eyebrow Transplant', href: '/hair-transplant/eyebrow' }
    ],
    footer: { label: 'View All Techniques →', href: '/hair-transplant' }
  },
  {
    title: 'Packages & Pricing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    links: [
      { label: 'Silver Package — $1,990', href: '/pricing' },
      { label: 'Gold Package — $2,490', href: '/pricing' },
      { label: 'Platinum Package — $3,290', href: '/pricing' },
      { label: 'Price Estimator Tool', href: '/tools/price-estimator' },
      { label: 'Travel & Budget Planner', href: '/tools/budget-planner' }
    ],
    footer: { label: 'View All Pricing →', href: '/pricing' }
  },
  {
    title: 'About Istanbul Care',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1" />
      </svg>
    ),
    links: [
      { label: 'Our Story', href: '/about-us' },
      { label: 'Our Surgeons', href: '/about-us' },
      { label: 'Patient Reviews', href: '/review' },
      { label: 'Before & After Results', href: '/review' },
      { label: 'Celebrity Cases', href: '/celebrity-hair-transplant' }
    ],
    footer: { label: 'Learn About Us →', href: '/about-us' }
  }
];

export default function NotFound() {
  return (
    <>
      {/* SECTION 1 — 404 Hero */}
      <section className="relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 -z-10 brand-gradient" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25),transparent_60%)]"
        />

        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] border border-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
            Page not found
          </span>

          <h2 className="mt-8 text-[8rem] md:text-[12rem] font-extrabold leading-none tracking-tight text-accent drop-shadow-2xl">
            404
          </h2>

          <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
            Oops — this page doesn&apos;t exist
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-white/85 leading-relaxed">
            The page you&apos;re looking for may have moved or never existed. Here&apos;s what we can
            help you with:
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm md:text-base font-semibold text-white hover:bg-accent-strong transition-colors shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-4 w-4"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — You might be looking for... */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Quick links
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            You might be looking for...
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white border border-soft/40 p-7 hover:shadow-xl hover:border-secondary transition-all"
            >
              <div className="h-12 w-12 rounded-xl brand-gradient text-white inline-flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-bold text-primary">{card.title}</h3>

              <ul className="mt-5 space-y-2.5">
                {card.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-accent-strong hover:text-accent hover:underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={card.footer.href}
                className="mt-6 inline-flex text-sm font-bold text-primary hover:text-secondary transition-colors"
              >
                {card.footer.label}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
