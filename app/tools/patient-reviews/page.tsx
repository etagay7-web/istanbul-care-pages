import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Before & After Reviews | Istanbul Care',
  description:
    'Real patient reviews and before / after photos from Istanbul Care Hair Clinic. Browse DHI, FUE and Sapphire FUE results.'
};

const reviews = [
  {
    slug: 'michael-r-sapphire-fue-3800',
    name: 'Michael R.',
    country: 'United Kingdom',
    age: 34,
    technique: 'Sapphire FUE',
    grafts: 3800,
    months: 12,
    rating: 5,
    quote:
      'Twelve months in and the density is incredible. The team kept me informed at every step — felt completely safe.',
    before: 'https://picsum.photos/seed/m-r-before/600/600',
    after: 'https://picsum.photos/seed/m-r-after/600/600'
  },
  {
    slug: 'daniel-k-dhi-3200',
    name: 'Daniel K.',
    country: 'Germany',
    age: 41,
    technique: 'DHI',
    grafts: 3200,
    months: 10,
    rating: 5,
    quote:
      'Hairline is exactly what I asked for. Friends say it looks like I never lost any hair. Worth every euro.',
    before: 'https://picsum.photos/seed/d-k-before/600/600',
    after: 'https://picsum.photos/seed/d-k-after/600/600'
  },
  {
    slug: 'sofia-l-dhi-women-2100',
    name: 'Sofia L.',
    country: 'Italy',
    age: 38,
    technique: 'DHI Women',
    grafts: 2100,
    months: 8,
    rating: 5,
    quote:
      'Being a woman, I was nervous. The team was caring and discreet. My parting line finally looks natural.',
    before: 'https://picsum.photos/seed/s-l-before/600/600',
    after: 'https://picsum.photos/seed/s-l-after/600/600'
  },
  {
    slug: 'adam-t-fue-2900',
    name: 'Adam T.',
    country: 'Poland',
    age: 29,
    technique: 'FUE',
    grafts: 2900,
    months: 9,
    rating: 5,
    quote:
      'Quick recovery and the all-inclusive package made the trip simple. Hotel, transfers, surgeon — all sorted.',
    before: 'https://picsum.photos/seed/a-t-before/600/600',
    after: 'https://picsum.photos/seed/a-t-after/600/600'
  },
  {
    slug: 'carlos-m-sapphire-fue-4500',
    name: 'Carlos M.',
    country: 'Spain',
    age: 45,
    technique: 'Sapphire FUE',
    grafts: 4500,
    months: 14,
    rating: 5,
    quote:
      'Mega session in one day, healed quickly. The before/after still shocks me. Highly recommended.',
    before: 'https://picsum.photos/seed/c-m-before/600/600',
    after: 'https://picsum.photos/seed/c-m-after/600/600'
  },
  {
    slug: 'henri-p-beard-transplant-1600',
    name: 'Henri P.',
    country: 'France',
    age: 36,
    technique: 'Beard Transplant',
    grafts: 1600,
    months: 7,
    rating: 5,
    quote:
      'Filled my patchy areas perfectly. Looks completely natural and grows like the rest of my beard.',
    before: 'https://picsum.photos/seed/h-p-before/600/600',
    after: 'https://picsum.photos/seed/h-p-after/600/600'
  }
];

const stars = (n: number) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < n ? 'text-accent' : 'text-soft'}>
      ★
    </span>
  ));

export default function PatientReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Stories"
        title="Before & After Reviews"
        subtitle="Real results from real patients. Browse before/after photos and read reviews from people who chose Istanbul Care."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-12 grid gap-6 md:grid-cols-3">
        {[
          { stat: '12,500+', label: 'Patients treated' },
          { stat: '98%', label: 'Would recommend us' },
          { stat: '50+', label: 'Countries served' }
        ].map((b) => (
          <div
            key={b.label}
            className="rounded-2xl bg-primary/5 border border-soft/40 p-6 text-center"
          >
            <div className="text-3xl font-bold text-primary">{b.stat}</div>
            <div className="text-sm text-primary/70 mt-1">{b.label}</div>
          </div>
        ))}
      </section>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((r) => (
            <Link
              key={r.slug}
              href={`/tools/patient-reviews/${r.slug}`}
              className="group block rounded-2xl overflow-hidden border border-soft/40 bg-white shadow-sm hover:shadow-xl hover:border-secondary transition-all"
            >
              <div className="grid grid-cols-2">
                <BeforeAfter src={r.before} label="Before" />
                <BeforeAfter src={r.after} label="After" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-primary group-hover:text-secondary">
                      {r.name}
                    </h3>
                    <p className="text-xs text-primary/60">
                      {r.country} · {r.age} yrs
                    </p>
                  </div>
                  <div className="text-sm leading-none">{stars(r.rating)}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>{r.technique}</Pill>
                  <Pill>{r.grafts.toLocaleString()} grafts</Pill>
                  <Pill>{r.months} months post-op</Pill>
                </div>

                <p className="mt-4 text-sm text-primary/80 leading-relaxed italic">
                  “{r.quote}”
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Read full case →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function BeforeAfter({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative aspect-square overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={label} className="h-full w-full object-cover" />
      <span className="absolute bottom-3 left-3 rounded-full bg-primary/85 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
        {label}
      </span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-secondary/10 text-primary text-xs font-medium px-3 py-1">
      {children}
    </span>
  );
}
