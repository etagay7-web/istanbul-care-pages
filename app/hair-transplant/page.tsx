import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Hair Transplant Techniques | Istanbul Care',
  description:
    'Explore every hair transplant technique we offer — DHI, FUE, Sapphire FUE, women, afro, beard and eyebrow transplants.'
};

const techniques = [
  {
    href: '/hair-transplant/dhi',
    title: 'DHI Hair Transplant',
    description:
      'Direct Hair Implantation with Choi pens — no incisions, faster healing, dense packing for natural results.',
    img: 'https://picsum.photos/seed/dhi/800/520',
    badge: 'Most Popular',
    duration: '6–8 hours',
    recovery: '7–10 days'
  },
  {
    href: '/hair-transplant/fue',
    title: 'FUE Hair Transplant',
    description:
      'The gold-standard Follicular Unit Extraction. Minimally invasive with virtually no scarring.',
    img: 'https://picsum.photos/seed/fue/800/520',
    badge: 'Gold Standard',
    duration: '6–8 hours',
    recovery: '7–10 days'
  },
  {
    href: '/hair-transplant/sapphire-fue',
    title: 'Sapphire FUE',
    description:
      'FUE upgraded with sapphire blades for smaller incisions, denser placement, and faster healing.',
    img: 'https://picsum.photos/seed/sapphire/800/520',
    badge: 'Advanced',
    duration: '7–9 hours',
    recovery: '7–10 days'
  },
  {
    href: '/hair-transplant/woman',
    title: 'Woman Hair Transplant',
    description:
      'Tailored to female hair loss patterns — no shaving required for many cases, completely discreet.',
    img: 'https://picsum.photos/seed/woman/800/520',
    duration: '6–8 hours',
    recovery: '7–10 days'
  },
  {
    href: '/hair-transplant/afro',
    title: 'Afro Hair Transplant',
    description:
      'Specialised techniques for curly hair follicles, handled by surgeons trained on afro-textured hair.',
    img: 'https://picsum.photos/seed/afro/800/520',
    duration: '7–9 hours',
    recovery: '10–14 days'
  },
  {
    href: '/hair-transplant/beard',
    title: 'Beard Transplant',
    description:
      'Fill in patchy areas or design a full new beard, moustache, sideburns or goatee.',
    img: 'https://picsum.photos/seed/beard-t/800/520',
    duration: '4–6 hours',
    recovery: '5–7 days'
  },
  {
    href: '/hair-transplant/eyebrow',
    title: 'Eyebrow Transplant',
    description:
      'Restore shape and density with permanent, naturally growing eyebrow hairs.',
    img: 'https://picsum.photos/seed/eyebrow-t/800/520',
    duration: '2–4 hours',
    recovery: '5–7 days'
  },
  {
    href: '/hair-transplant/unshaven',
    title: 'Unshaven Hair Transplant',
    description:
      'Return to work the next day — undergo the procedure with little to no shaving of your hair.',
    img: 'https://picsum.photos/seed/unshaven/800/520',
    badge: 'Discreet',
    duration: '7–9 hours',
    recovery: '5–7 days'
  }
];

export default function HairTransplantPage() {
  return (
    <>
      <PageHero
        eyebrow="Hair Transplant"
        title="Hair Transplant Techniques"
        subtitle="From classic FUE to the latest DHI and Sapphire methods — choose the right technique for your goals, hair type and lifestyle."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techniques.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group relative rounded-2xl overflow-hidden bg-white border border-soft/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
                {t.badge ? (
                  <span className="absolute top-3 right-3 rounded-full bg-accent text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                    {t.badge}
                  </span>
                ) : null}
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-xl font-bold text-white drop-shadow">{t.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-primary/75 leading-relaxed">{t.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-primary/70">
                  <div className="rounded-lg bg-primary/5 px-3 py-2">
                    <div className="uppercase tracking-wider text-[10px] text-secondary font-semibold">
                      Duration
                    </div>
                    <div className="font-semibold text-primary mt-0.5">{t.duration}</div>
                  </div>
                  <div className="rounded-lg bg-primary/5 px-3 py-2">
                    <div className="uppercase tracking-wider text-[10px] text-secondary font-semibold">
                      Recovery
                    </div>
                    <div className="font-semibold text-primary mt-0.5">{t.recovery}</div>
                  </div>
                </div>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 grid gap-10 md:grid-cols-3 items-start">
          {[
            {
              title: 'Surgeon-led care',
              desc: 'Every operation is led by a board-certified specialist, not a technician.'
            },
            {
              title: 'All-inclusive packages',
              desc: 'Surgery, hotel, transfers, PRP and aftercare bundled — from $1,990.'
            },
            {
              title: 'Lifetime support',
              desc: 'Photo follow-ups at 3, 6 and 12 months and beyond.'
            }
          ].map((f) => (
            <div key={f.title}>
              <div className="h-10 w-10 rounded-lg brand-gradient mb-4" />
              <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-primary/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
