import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Istanbul Care Hair Clinic',
  description:
    'Explore patient reviews, hair transplant techniques and our medical blog — all in one place at Istanbul Care.'
};

const hubCards = [
  {
    href: '/tools/patient-reviews',
    title: 'Patient Reviews',
    description: 'Real before/after stories from our patients.',
    img: 'https://picsum.photos/seed/hub-reviews/1200/800',
    badge: 'Real stories'
  },
  {
    href: '/tools/hair-transplant',
    title: 'Hair Transplant',
    description: 'DHI, FUE, Sapphire FUE and all techniques.',
    img: 'https://picsum.photos/seed/hub-techniques/1200/800',
    badge: 'Techniques'
  },
  {
    href: '/tools/blog',
    title: 'Blog',
    description: 'Guides and aftercare tips from our medical team.',
    img: 'https://picsum.photos/seed/hub-blog/1200/800',
    badge: 'Insights'
  }
];

export default function ToolsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Istanbul Care"
        title="Everything you need to plan your hair transplant"
        subtitle="Three doors into our world — patient stories, technique deep-dives, and editorial guidance from the medical team."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {hubCards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative block overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4] shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-strong via-primary/60 to-primary/15" />

              <div className="relative h-full flex flex-col justify-end p-7 md:p-8 text-white">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                  {c.badge}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight drop-shadow">
                  {c.title}
                </h2>
                <p className="mt-3 text-white/90 max-w-md text-base leading-relaxed">
                  {c.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-all group-hover:gap-3">
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 border-t border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-14 grid gap-8 md:grid-cols-3 text-center">
          {[
            { stat: '12,500+', label: 'Patients treated' },
            { stat: '98%', label: 'Would recommend us' },
            { stat: '50+', label: 'Countries served' }
          ].map((b) => (
            <div key={b.label}>
              <div className="text-3xl font-bold text-primary">{b.stat}</div>
              <div className="text-sm text-primary/70 mt-1">{b.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
