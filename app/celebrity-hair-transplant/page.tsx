import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Celebrity Hair Transplants: Real Cases Analysed | Istanbul Care',
  description:
    'Our surgeons analyse famous hair transplant cases — Wayne Rooney, Elon Musk, LeBron James, David Beckham and more. Suspected techniques, timelines and results.'
};

type Celebrity = {
  slug: string;
  name: string;
  technique: 'FUE' | 'DHI' | 'FUT' | 'Combined';
  year: number;
  estGrafts: string;
  description: string;
  img: string;
};

const celebrities: Celebrity[] = [
  {
    slug: 'wayne-rooney',
    name: 'Wayne Rooney',
    technique: 'FUE',
    year: 2011,
    estGrafts: '~2,500',
    description:
      'One of the first high-profile footballers to openly discuss his FUE procedure. Two sessions restored a recessed hairline at the temples.'
  },
  {
    slug: 'elon-musk',
    name: 'Elon Musk',
    technique: 'Combined',
    year: 2000,
    estGrafts: '~3,500',
    description:
      'Famously transformed from a clearly thinning crown in the late 90s to a full head of hair in the 2000s — likely multiple sessions with PRP support.'
  },
  {
    slug: 'lebron-james',
    name: 'LeBron James',
    technique: 'FUE',
    year: 2019,
    estGrafts: '~2,200',
    description:
      'Subtle hairline reconstruction restoring the front-temple region. A textbook example of natural, conservative density planning.'
  },
  {
    slug: 'tristan-tate',
    name: 'Tristan Tate',
    technique: 'DHI',
    year: 2022,
    estGrafts: '~3,000',
    description:
      'Tristan Tate has discussed his procedure publicly. We analyse the hairline shape, density and likely DHI implantation pattern.'
  },
  {
    slug: 'joel-mchale',
    name: 'Joel McHale',
    technique: 'FUE',
    year: 2015,
    estGrafts: '~2,800',
    description:
      'A great case study in lowering and reshaping an aged hairline without overdoing density — keeping the look age-appropriate.'
  },
  {
    slug: 'david-beckham',
    name: 'David Beckham',
    technique: 'FUE',
    year: 2018,
    estGrafts: '~2,000',
    description:
      'Subtle temple and crown reinforcement. Beckham’s case is widely studied as an example of careful, minimally invasive restoration.'
  },
  {
    slug: 'matthew-mcconaughey',
    name: 'Matthew McConaughey',
    technique: 'Combined',
    year: 2008,
    estGrafts: '~2,500',
    description:
      'McConaughey credits a topical regimen, but the photographic evidence also suggests surgical reinforcement of the frontal hairline.'
  },
  {
    slug: 'jude-law',
    name: 'Jude Law',
    technique: 'FUE',
    year: 2014,
    estGrafts: '~1,800',
    description:
      'A discreet hairline restoration that preserved his characteristic widow’s peak and kept the recession appropriate to his age.'
  }
];

const techniqueStyle: Record<Celebrity['technique'], string> = {
  FUE: 'bg-primary text-white',
  DHI: 'bg-accent text-white',
  FUT: 'bg-secondary text-white',
  Combined: 'bg-primary-dark text-white'
};

export default function CelebrityHairTransplantPage() {
  return (
    <>
      <PageHero
        eyebrow="Celebrity Hair Transplants"
        title="Celebrity Hair Transplants: Real Cases Analysed by Our Surgeons"
        subtitle="Our medical team breaks down famous hair transplant cases — suspected techniques, graft counts, results timelines and what we can learn from each."
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
          {celebrities.length} cases analysed
        </span>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-strong transition-colors"
        >
          Book Your Free Consultation
        </Link>
      </PageHero>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Editorial analysis
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-primary leading-tight">
            Famous before / after cases
          </h2>
          <p className="mt-3 text-primary/70 leading-relaxed">
            None of the celebrities below are patients of Istanbul Care. Our surgeons base each
            analysis on publicly available photography and timelines.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {celebrities.map((c) => (
            <Link
              key={c.slug}
              href={`/celebrity-hair-transplant/${c.slug}`}
              className="group rounded-2xl overflow-hidden bg-white border border-soft/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
            >
              <div className="relative grid grid-cols-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${c.slug}-before/600/600`}
                  alt={`${c.name} before hair transplant`}
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${c.slug}-after/600/600`}
                  alt={`${c.name} after hair transplant`}
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-primary/85 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                  Before
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-accent text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                  After
                </span>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Hair Transplant Analysis
                </span>
                <h3 className="mt-2 text-xl font-bold text-primary group-hover:text-secondary">
                  {c.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className={
                      'inline-flex items-center rounded-full text-[11px] font-semibold uppercase tracking-wider px-3 py-1 ' +
                      techniqueStyle[c.technique]
                    }
                  >
                    {c.technique}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-secondary/10 text-primary text-xs font-medium px-3 py-1">
                    {c.year}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-secondary/10 text-primary text-xs font-medium px-3 py-1">
                    {c.estGrafts} grafts
                  </span>
                </div>

                <p className="mt-4 text-sm text-primary/75 leading-relaxed line-clamp-3">
                  {c.description}
                </p>

                <span className="mt-5 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Read Analysis →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-14 md:py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
              Want results like these?
            </span>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold leading-tight">
              Get the same surgical-grade analysis on your own case.
            </h2>
            <p className="mt-4 text-white/85 max-w-xl leading-relaxed">
              Share your photos with our medical coordinators and receive an honest, all-inclusive
              treatment plan in under 24 hours.
            </p>
          </div>
          <div className="flex md:justify-end gap-4 flex-wrap">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-strong transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/hair-transplant"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors border border-white/30"
            >
              Explore Techniques
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
