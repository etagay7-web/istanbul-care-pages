import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hair Transplant in Turkey - Istanbul Care Hair Clinic',
  description:
    'Hair Transplant in Turkey and in Istanbul with Istanbul Care Clinic in 2026 — natural results, expert surgeons, and all-inclusive packages from $1,990.'
};

const techniques = [
  {
    href: '/hair-transplant/dhi',
    title: 'DHI Hair Transplant',
    description: 'Direct Hair Implantation with Choi pens — maximum density and natural direction.',
    badge: 'Most Popular',
    img: 'https://picsum.photos/seed/home-dhi/800/520'
  },
  {
    href: '/hair-transplant/fue',
    title: 'FUE Hair Transplant',
    description: 'The gold-standard follicle extraction technique with virtually no scarring.',
    badge: 'Gold Standard',
    img: 'https://picsum.photos/seed/home-fue/800/520'
  },
  {
    href: '/hair-transplant/sapphire-fue',
    title: 'Sapphire FUE',
    description: 'Sapphire-tipped blades for finer incisions, faster healing and denser packing.',
    badge: 'Advanced',
    img: 'https://picsum.photos/seed/home-sapphire/800/520'
  },
  {
    href: '/hair-transplant/woman',
    title: 'Woman Hair Transplant',
    description: 'No-shave DHI designed around your existing style, performed by our female team.',
    img: 'https://picsum.photos/seed/home-woman/800/520'
  },
  {
    href: '/hair-transplant/beard',
    title: 'Beard Transplant',
    description: 'Fill in patchy areas or design a full beard, moustache or sideburns.',
    img: 'https://picsum.photos/seed/home-beard/800/520'
  },
  {
    href: '/hair-transplant/eyebrow',
    title: 'Eyebrow Transplant',
    description: 'Permanent, natural eyebrow restoration designed individually for your face.',
    img: 'https://picsum.photos/seed/home-eyebrow/800/520'
  }
];

const featuredTools = [
  {
    href: '/tools/graft-calculator',
    title: 'Graft Calculator',
    description: 'Estimate how many grafts you may need based on your hair loss pattern.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    )
  },
  {
    href: '/tools/price-estimator',
    title: 'Price Estimator',
    description: 'Get an instant package quote — surgeon, technique, hotel and transfers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    href: '/tools/norwood-scale',
    title: 'Norwood Scale Tool',
    description: 'Identify your stage on the Norwood–Hamilton scale of hair loss.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    )
  }
];

const reasons = [
  {
    title: '2,000+ Operations',
    description: 'Board-certified surgeons since 2018.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    title: 'All-Inclusive from $1,990',
    description: 'Flights, hotel, transfers included.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    )
  },
  {
    title: 'Lifetime Aftercare',
    description: 'Support long after you leave Istanbul.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  },
  {
    title: '4.9★ Patient Rating',
    description: 'Verified across 40+ countries.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
      </svg>
    )
  }
];

const beforeAfter = [
  { grafts: 3800, months: 12, technique: 'Sapphire FUE' },
  { grafts: 3200, months: 10, technique: 'DHI' },
  { grafts: 2900, months: 9, technique: 'FUE' },
  { grafts: 4500, months: 14, technique: 'Sapphire FUE' }
];

const processSteps = [
  {
    n: 1,
    title: 'Free Consultation',
    description: 'Share your photos, get an honest assessment from our coordinators within 24 hours.'
  },
  {
    n: 2,
    title: 'Treatment Plan',
    description: 'Our surgeons design your procedure, graft count and recommend the best technique.'
  },
  {
    n: 3,
    title: 'Travel to Istanbul',
    description: 'We arrange airport pickup, your hotel and all transfers to and from the clinic.'
  },
  {
    n: 4,
    title: 'Hair Transplant',
    description: 'Your DHI, FUE or Sapphire FUE procedure with a specialist surgeon and full team.'
  },
  {
    n: 5,
    title: 'Recovery & Follow-up',
    description: 'Aftercare kit, scheduled clinic wash, and check-ins at 3, 6 and 12 months.'
  }
];

const blogPreview = [
  {
    slug: 'bald-mans-guide-to-modern-hair-restoration',
    title: "Bald Man's Guide to Modern Hair Restoration",
    excerpt: 'A complete look at the modern restoration options for men experiencing significant hair loss.',
    date: '2026-05-12',
    category: 'Hair Transplant',
    readingTime: 9,
    img: 'https://picsum.photos/seed/home-blog-1/800/520'
  },
  {
    slug: 'sapphire-fue-a-surgeons-honest-guide',
    title: "Sapphire FUE: A Surgeon's Honest Guide",
    excerpt: 'What sapphire blades actually change, how density compares, and when this technique is the right choice.',
    date: '2026-04-29',
    category: 'Hair Transplant',
    readingTime: 10,
    img: 'https://picsum.photos/seed/home-blog-2/800/520'
  },
  {
    slug: 'hair-transplant-aftercare-week-by-week',
    title: 'Hair Transplant Aftercare: Week by Week',
    excerpt: 'What to expect in days 1–7, weeks 2–4 and month-by-month from your hair transplant recovery.',
    date: '2026-04-20',
    category: 'Aftercare',
    readingTime: 7,
    img: 'https://picsum.photos/seed/home-blog-3/800/520'
  }
];

const trustBadges = [
  { label: 'Google Reviews', value: '4.9★' },
  { label: 'Trustpilot', value: '4.8★' },
  { label: 'Verified Clinic Badge', value: '' },
  { label: 'ISO Certified', value: '' },
  { label: '8+ Years Experience', value: '' },
  { label: 'Happy Patients', value: '2,000+' }
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export default function Home() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative isolate overflow-hidden text-white min-h-[640px] md:min-h-[720px] flex items-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/istanbul-care-clinic/1920/1080"
          alt="Istanbul Care Hair Clinic"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-strong/85 via-primary/70 to-primary-strong" />

        <div className="relative max-w-8xl mx-auto px-4 lg:px-12 pt-28 pb-10 md:pt-36 md:pb-16 w-full">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] border border-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
            Istanbul Care Hair Clinic
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl drop-shadow">
            Hair Transplant in Turkey
          </h1>
          <p className="mt-5 text-base md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Istanbul Care Clinic in 2026 offers natural results, expert surgeons, and all-inclusive
            packages from $1,990.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm md:text-base font-semibold text-white hover:bg-accent-strong transition-colors shadow-lg"
            >
              Get Free Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/review"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur px-6 py-3.5 text-sm md:text-base font-semibold text-white hover:bg-white/15 hover:border-white transition-colors"
            >
              View Patient Results
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl">
            {[
              { stat: '2,000+', label: 'Successful Operations' },
              { stat: '4.9★', label: 'Verified Rating' },
              { stat: '40+', label: 'Countries' },
              { stat: '$1,990', label: 'Packages from' }
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 px-4 py-4"
              >
                <div className="text-xl md:text-2xl font-bold">{s.stat}</div>
                <div className="text-xs md:text-sm text-white/85 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — TRUST LOGOS MARQUEE */}
      <section className="bg-white border-b border-soft/30 py-8">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track">
            {Array.from({ length: 2 }, (_, dup) => (
              <ul
                key={dup}
                aria-hidden={dup === 1}
                className="flex shrink-0 items-center gap-10 md:gap-14 pr-10 md:pr-14"
              >
                {trustBadges.map((b) => (
                  <li
                    key={`${dup}-${b.label}`}
                    className="inline-flex items-center gap-3 text-primary/80 whitespace-nowrap"
                  >
                    {b.value ? (
                      <span className="text-2xl font-bold text-accent-strong">{b.value}</span>
                    ) : (
                      <span
                        aria-hidden
                        className="h-9 w-9 rounded-full bg-primary/5 text-secondary inline-flex items-center justify-center"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <path d="M9 12l2 2 4-4" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      </span>
                    )}
                    <span className="text-sm md:text-base font-semibold text-primary">
                      {b.label}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — TECHNIQUES */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Surgical methods
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Hair Transplant Techniques
          </h2>
          <p className="mt-4 text-primary/75 leading-relaxed">
            From classic FUE to the latest DHI and Sapphire methods, our medical team will help you
            choose the right technique for your hair type, goals and lifestyle.
          </p>
        </div>

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
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
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
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4 — TOOLS */}
      <section className="bg-zinc-50 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Free Clinic Tools
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Plan your hair transplant with our free tools
            </h2>
            <p className="mt-4 text-primary/75 leading-relaxed">
              Estimate your graft count, check pricing, understand your hair loss stage — all in one
              place.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredTools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group rounded-2xl bg-white border border-soft/40 p-7 hover:shadow-xl hover:border-secondary hover:-translate-y-1 transition-all"
              >
                <div className="h-14 w-14 rounded-2xl brand-gradient text-white inline-flex items-center justify-center">
                  {t.icon}
                </div>
                <h3 className="mt-5 text-lg md:text-xl font-semibold text-primary">{t.title}</h3>
                <p className="mt-3 text-sm md:text-base text-primary/75 leading-relaxed">
                  {t.description}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Use Tool →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 text-sm md:text-base font-semibold hover:bg-primary-dark transition-colors"
            >
              View All 9 Free Tools
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5 — WHY ISTANBUL CARE */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Why us
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Why Istanbul Care?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg hover:border-secondary transition-all"
            >
              <div className="h-12 w-12 rounded-xl brand-gradient text-white flex items-center justify-center">
                {r.icon}
              </div>
              <h3 className="mt-5 text-base md:text-lg font-semibold text-primary leading-snug">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 — BEFORE & AFTER */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Patient results
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Real Patient Results
            </h2>
            <p className="mt-4 text-primary/75 leading-relaxed">
              Real before/after photos from people who chose Istanbul Care. Every case is followed
              at 3, 6 and 12 months.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {beforeAfter.map((c, i) => (
              <article
                key={i}
                className="rounded-2xl overflow-hidden bg-white border border-soft/40 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://picsum.photos/seed/home-ba-${i}-b/400/400`}
                      alt={`Before case ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-primary/85 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://picsum.photos/seed/home-ba-${i}-a/400/400`}
                      alt={`After case ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-accent text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center flex-wrap gap-2 text-xs text-primary/70">
                    <span className="inline-flex rounded-full bg-primary text-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                      {c.technique}
                    </span>
                    <span>{c.grafts.toLocaleString()} grafts</span>
                    <span aria-hidden>·</span>
                    <span>{c.months} months post-op</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/review"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 text-sm md:text-base font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Cases
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — HOW IT WORKS */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Patient journey
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            How It Works
          </h2>
        </div>

        <ol className="relative grid gap-8 md:grid-cols-5">
          <span
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-6 h-0.5 bg-soft/60"
          />
          {processSteps.map((s) => (
            <li key={s.n} className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 h-12 w-12 rounded-full brand-gradient text-white flex items-center justify-center font-bold text-lg ring-4 ring-white relative z-10">
                {s.n}
              </div>
              <h3 className="mt-5 text-base md:text-lg font-semibold text-primary leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{s.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 8 — BLOG PREVIEW */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Editorial
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Latest from Our Blog
            </h2>
            <p className="mt-4 text-primary/75 leading-relaxed">
              Guides, research and aftercare tips written by our medical team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogPreview.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-soft/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-primary text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-primary/60">
                    <time>{formatDate(post.date)}</time>
                    <span className="h-1 w-1 rounded-full bg-soft" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-primary group-hover:text-secondary leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary/75 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                    Read article →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 text-sm md:text-base font-semibold hover:bg-primary-dark transition-colors"
            >
              Read All Articles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 9 — CONTACT CTA */}
      <section
        id="contact"
        className="text-white scroll-mt-24"
        style={{ backgroundImage: 'linear-gradient(90deg, #22c55e 0%, #41758c 100%)' }}
      >
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20 grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Free consultation
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
              Get Your Free Consultation Today
            </h2>
            <p className="mt-4 text-white/90 max-w-xl leading-relaxed">
              Speak with our expert hair transplant specialists. We&apos;ll review your photos and
              respond with an honest, all-inclusive plan within 24 hours.
            </p>

            <form className="mt-8 grid gap-4 max-w-xl" method="post" action="/api/contact">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
              />

              <div className="flex gap-2">
                <div className="flex items-center gap-2 rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-3 py-3.5 text-white shrink-0">
                  <span aria-hidden>🇹🇷</span>
                  <span className="text-sm font-medium">+90</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="flex-1 rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
              />

              <select
                name="service"
                required
                defaultValue=""
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white focus:outline-none focus:border-white appearance-none"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1rem'
                }}
              >
                <option value="" disabled className="text-primary">
                  Service Category
                </option>
                {[
                  'Hair Transplant',
                  'DHI',
                  'FUE',
                  'Sapphire FUE',
                  'Beard Transplant',
                  'Eyebrow Transplant',
                  'Woman Hair Transplant'
                ].map((s) => (
                  <option key={s} value={s} className="text-primary">
                    {s}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary-strong hover:bg-primary-dark transition-colors px-6 py-4 text-base font-semibold text-white shadow-lg"
              >
                Send Now
              </button>
            </form>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: 'Free',
                desc: 'No payment, no card details. Our team reviews your case at no cost.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
                  </svg>
                )
              },
              {
                title: '24h Response',
                desc: 'Our coordinators reply with a personalised treatment plan within one business day.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                )
              },
              {
                title: 'No Obligation',
                desc: 'Use the assessment as a second opinion or compare with other clinics. Up to you.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                )
              }
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-5 flex items-start gap-4"
              >
                <div className="shrink-0 h-12 w-12 rounded-xl bg-white/15 inline-flex items-center justify-center">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-white/85 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
