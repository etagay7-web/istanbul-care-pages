import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Hair Transplant Tools | Istanbul Care',
  description:
    'Free calculators and tools to plan your hair transplant: graft calculator, Norwood scale, hair density estimator, price estimator and more.'
};

const tools = [
  {
    href: '/tools/graft-calculator',
    title: 'Graft Calculator',
    description:
      'Estimate how many grafts you may need based on your hair loss pattern and goals.',
    img: 'https://picsum.photos/seed/graft/640/400',
    tag: 'Planning'
  },
  {
    href: '/tools/norwood-scale',
    title: 'Norwood Scale Tool',
    description:
      'Identify your stage on the Norwood–Hamilton scale to understand your hair loss level.',
    img: 'https://picsum.photos/seed/norwood/640/400',
    tag: 'Diagnosis'
  },
  {
    href: '/tools/hair-density',
    title: 'Hair Density Estimator',
    description:
      'Calculate the density needed in donor and recipient areas for natural results.',
    img: 'https://picsum.photos/seed/density/640/400',
    tag: 'Diagnosis'
  },
  {
    href: '/tools/price-estimator',
    title: 'Price Estimator',
    description:
      'Get an instant package quote — surgeon, technique, hotel, and transfers included.',
    img: 'https://picsum.photos/seed/price/640/400',
    tag: 'Pricing'
  },
  {
    href: '/tools/hair-loss-quiz',
    title: 'Hair Loss Quiz',
    description:
      'Answer a few questions to see which transplant technique fits you best.',
    img: 'https://picsum.photos/seed/quiz/640/400',
    tag: 'Diagnosis'
  },
  {
    href: '/tools/recovery-timeline',
    title: 'Recovery Timeline',
    description:
      'A day-by-day, week-by-week guide of what to expect after your operation.',
    img: 'https://picsum.photos/seed/recovery/640/400',
    tag: 'Aftercare'
  },
  {
    href: '/tools/beard-calculator',
    title: 'Beard Graft Calculator',
    description:
      'Plan the grafts required for full beard, moustache, sideburns, or goatee shaping.',
    img: 'https://picsum.photos/seed/beard/640/400',
    tag: 'Planning'
  },
  {
    href: '/tools/eyebrow-calculator',
    title: 'Eyebrow Graft Calculator',
    description:
      'Determine the right graft count for shaped, natural-looking eyebrows.',
    img: 'https://picsum.photos/seed/eyebrow/640/400',
    tag: 'Planning'
  },
  {
    href: '/tools/budget-planner',
    title: 'Travel & Budget Planner',
    description:
      'Compare prices across techniques and add up flights, hotel and extras.',
    img: 'https://picsum.photos/seed/budget/640/400',
    tag: 'Pricing'
  }
];

const countries = [
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇮🇹', name: 'Italy' },
  { flag: '🇪🇸', name: 'Spain' },
  { flag: '🇵🇱', name: 'Poland' },
  { flag: '🇷🇴', name: 'Romania' },
  { flag: '🇳🇱', name: 'Netherlands' },
  { flag: '🇧🇪', name: 'Belgium' },
  { flag: '🇦🇱', name: 'Albania' },
  { flag: '🇵🇹', name: 'Portugal' },
  { flag: '🇸🇪', name: 'Sweden' }
];

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hair Transplant Tools"
        title="Plan, price and prepare for your hair transplant"
        subtitle="A complete suite of free, clinic-grade tools — graft calculators, Norwood diagnostics, pricing estimators and aftercare planners — built by our medical team."
      />

      {/* Tools grid */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">All clinic tools</h2>
            <p className="mt-2 text-primary/70 max-w-2xl">
              Pick a tool to get started. Every result is private to your browser — we never store anything without your consent.
            </p>
          </div>
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            {tools.length} tools available
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-2xl overflow-hidden bg-white border border-soft/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.img}
                  alt={tool.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-accent text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                  {tool.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm text-primary/70 leading-relaxed">{tool.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Use Tool →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION A — Why Istanbul Care? */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Why us
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Why Istanbul Care?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: '2,000+ Successful Operations',
                desc: 'Performed by board-certified surgeons since 2018.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                )
              },
              {
                title: 'All-Inclusive Packages from $1,990',
                desc: 'Flights, hotel, transfers and aftercare included.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
                    <rect x="2" y="6" width="20" height="13" rx="2" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                )
              },
              {
                title: 'Lifetime Aftercare Support',
                desc: 'Our team stays with you long after you leave Istanbul.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                )
              },
              {
                title: '4.9★ Patient Rating',
                desc: 'Verified reviews from patients across 40+ countries.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
                    <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
                  </svg>
                )
              }
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg hover:border-secondary transition-all"
              >
                <div className="h-12 w-12 rounded-xl brand-gradient text-white flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-base md:text-lg font-semibold text-primary leading-snug">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-primary/75 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION B — How the process works */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Patient journey
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            How the process works
          </h2>
        </div>

        <ol className="relative grid gap-8 md:grid-cols-5">
          <span
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-6 h-0.5 bg-soft/60"
          />
          {[
            {
              n: 1,
              title: 'Free Online Consultation',
              desc: 'Share your photos, get an honest assessment within 24h.'
            },
            {
              n: 2,
              title: 'Personalised Treatment Plan',
              desc: 'Our surgeons design your procedure and graft count.'
            },
            {
              n: 3,
              title: 'Travel to Istanbul',
              desc: 'We handle airport pickup, hotel and clinic transfers.'
            },
            {
              n: 4,
              title: 'Your Hair Transplant',
              desc: 'DHI or FUE performed by specialist surgeons in our clinic.'
            },
            {
              n: 5,
              title: 'Recovery & Follow-up',
              desc: 'Aftercare kit, 12-month check-ins and lifetime support.'
            }
          ].map((s) => (
            <li key={s.n} className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 h-12 w-12 rounded-full brand-gradient text-white flex items-center justify-center font-bold text-lg ring-4 ring-white relative z-10">
                {s.n}
              </div>
              <h3 className="mt-5 text-base md:text-lg font-semibold text-primary leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SECTION C — Techniques we specialise in */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Surgical methods
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Techniques we specialise in
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'DHI Hair Transplant',
                desc: 'Pen-based implantation for maximum density and natural direction. Ideal for patients who want unshaven results.',
                href: '/hair-transplant/dhi',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                )
              },
              {
                title: 'FUE Hair Transplant',
                desc: 'Gold-standard follicle extraction with minimal scarring. Suitable for all hair types and loss patterns.',
                href: '/hair-transplant/fue',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                )
              },
              {
                title: 'Sapphire FUE',
                desc: 'Sapphire-tipped blades for finer incisions, faster healing and denser packing than classic FUE.',
                href: '/hair-transplant/sapphire-fue',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
                    <polygon points="6 3 18 3 22 9 12 22 2 9 6 3" />
                    <line x1="6" y1="3" x2="12" y2="22" />
                    <line x1="18" y1="3" x2="12" y2="22" />
                    <line x1="2" y1="9" x2="22" y2="9" />
                  </svg>
                )
              }
            ].map((t) => (
              <div
                key={t.title}
                className="rounded-2xl bg-white border border-soft/40 p-7 hover:shadow-xl hover:border-secondary transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-accent/10 text-accent-strong flex items-center justify-center">
                  {t.icon}
                </div>
                <h3 className="mt-5 text-lg md:text-xl font-semibold text-primary">{t.title}</h3>
                <p className="mt-3 text-sm md:text-base text-primary/75 leading-relaxed">{t.desc}</p>
                <Link
                  href={t.href}
                  className="mt-5 inline-flex text-sm font-semibold text-accent-strong hover:text-accent"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D — Trusted by patients */}
      <section className="bg-primary text-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-14 md:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
              International
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">
              Trusted by patients from across Europe
            </h2>
          </div>

          <div className="mt-10 marquee-mask overflow-hidden">
            <div className="marquee-track">
              {Array.from({ length: 2 }, (_, dup) => (
                <ul
                  key={dup}
                  aria-hidden={dup === 1}
                  className="flex shrink-0 items-center gap-3 pr-3"
                >
                  {countries.map((c) => (
                    <li
                      key={`${dup}-${c.name}`}
                      className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur border border-white/15 px-4 py-2 text-sm font-medium whitespace-nowrap"
                    >
                      <span className="text-base leading-none" aria-hidden>
                        {c.flag}
                      </span>
                      <span>{c.name}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
