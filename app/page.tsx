import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hair Transplant in Turkey - Istanbul Care Hair Clinic',
  description:
    'Hair Transplant in Turkey and in Istanbul with Istanbul Care Clinic in 2026 — natural results, expert surgeons, and all-inclusive packages from $1,990.'
};

/* — — — DATA — — — */

const hairTransplantServices = [
  {
    href: '/hair-transplant/dhi',
    title: 'DHI Hair Transplant',
    blurb: 'Choi-pen direct implantation for maximum density.',
    img: 'https://picsum.photos/seed/svc-dhi/800/520',
    badge: 'Most Popular'
  },
  {
    href: '/hair-transplant/fue',
    title: 'FUE Hair Transplant',
    blurb: 'Gold-standard follicle extraction with no linear scar.',
    img: 'https://picsum.photos/seed/svc-fue/800/520',
    badge: 'Gold Standard'
  },
  {
    href: '/hair-transplant/sapphire-fue',
    title: 'Sapphire FUE',
    blurb: 'Sapphire-tipped blades for finer channels.',
    img: 'https://picsum.photos/seed/svc-sapphire/800/520',
    badge: 'Advanced'
  },
  {
    href: '/hair-transplant/woman',
    title: 'Woman Hair Transplant',
    blurb: 'No-shave DHI designed around your hairstyle.',
    img: 'https://picsum.photos/seed/svc-woman/800/520'
  },
  {
    href: '/hair-transplant/beard',
    title: 'Beard Transplant',
    blurb: 'Reshape, fill in or design a full new beard.',
    img: 'https://picsum.photos/seed/svc-beard/800/520'
  },
  {
    href: '/hair-transplant/eyebrow',
    title: 'Eyebrow Transplant',
    blurb: 'Permanent, naturally growing eyebrow restoration.',
    img: 'https://picsum.photos/seed/svc-eyebrow/800/520'
  }
];

const aestheticCategories = [
  { label: 'Rhinoplasty', href: '/services/rhinoplasty' },
  { label: 'Facelift', href: '/services/facelift' },
  { label: 'Mega Liposuction', href: '/services/mega-liposuction' },
  { label: 'Breast Augmentation', href: '/services/breast-augmentation' },
  { label: 'Breast Lift', href: '/services/breast-lift' },
  { label: 'Breast Reduction', href: '/services/breast-reduction' },
  { label: 'Brazilian Butt Lift', href: '/services/bbl' },
  { label: 'Sleeve Gastrectomy', href: '/services/sleeve-gastrectomy' },
  { label: 'Gastric Bypass', href: '/services/gastric-bypass' },
  { label: 'Gastric Balloon', href: '/services/gastric-balloon' },
  { label: 'Hollywood Smile', href: '/services/hollywood-smile' },
  { label: 'Dental Implants', href: '/services/implants' }
];

const featuredTools = [
  {
    href: '/tools/graft-calculator',
    title: 'Graft Calculator',
    description: 'Estimate how many grafts your case may need.',
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
    description: 'Get an instant all-inclusive package quote.',
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
    description: 'Identify your stage on the Norwood–Hamilton scale.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    )
  }
];

const clinicStats = [
  { stat: '2,000+', label: 'Successful Operations' },
  { stat: '4.9★', label: 'Verified Patient Rating' },
  { stat: '40+', label: 'Countries Served' },
  { stat: '$1,990', label: 'Packages From' }
];

const roadmap = [
  {
    n: 1,
    title: 'Day of Surgery',
    body: 'Anaesthesia, extraction and implantation. You leave the clinic with the procedure complete and aftercare in hand.'
  },
  {
    n: 2,
    title: 'Days 1–7',
    body: 'Healing scabs form and fall off. Forehead swelling, if any, resolves by day 6. First clinic wash the morning after.'
  },
  {
    n: 3,
    title: 'Weeks 2–6',
    body: 'Transplanted hairs shed — normal and expected. The donor area heals invisibly. Return to work within 5–7 days.'
  },
  {
    n: 4,
    title: 'Months 3–6',
    body: 'New growth begins around month 4. By month 6 you have visible, building coverage with finer new hairs.'
  },
  {
    n: 5,
    title: 'Month 12+',
    body: 'Around 90% of final density by month 12. Hairs continue to thicken until month 15. Photos at 3, 6 and 12 months.'
  }
];

const reviews = [
  {
    name: 'Michael R.',
    country: 'United Kingdom',
    technique: 'Sapphire FUE',
    quote:
      'Twelve months in and the density is incredible. The team kept me informed at every step — felt completely safe.'
  },
  {
    name: 'Daniel K.',
    country: 'Germany',
    technique: 'DHI',
    quote:
      'Hairline is exactly what I asked for. Friends say it looks like I never lost any hair. Worth every euro.'
  },
  {
    name: 'Sofia L.',
    country: 'Italy',
    technique: 'DHI for Women',
    quote:
      'Being a woman, I was nervous. The team was caring and discreet. My parting line finally looks natural.'
  }
];

const whyUs = [
  {
    title: 'Surgeon-led care',
    body: 'Every operation is led by a board-certified specialist, not a technician. You meet your surgeon before you sign anything.'
  },
  {
    title: 'All-inclusive packages',
    body: 'Surgery, hotel, transfers, PRP and aftercare bundled — from $1,990. No surprise add-ons after you arrive.'
  },
  {
    title: 'Lifetime aftercare',
    body: 'Photo follow-ups at 3, 6 and 12 months and beyond. The team stays with you long after you leave Istanbul.'
  },
  {
    title: 'International patient team',
    body: 'Coordinators speak English, German, French, Spanish, Italian, Polish, Romanian and Albanian. We are used to long-distance care.'
  }
];

const faq = [
  {
    q: 'How much does a hair transplant in Turkey cost at Istanbul Care?',
    a: 'All-inclusive packages start from $1,990, depending on the technique (FUE, DHI or Sapphire FUE) and the number of grafts required. The price includes the surgery itself, the surgeon’s fee, hotel accommodation, airport and clinic transfers, PRP, the aftercare kit and follow-up sessions at 3, 6 and 12 months.'
  },
  {
    q: 'How long do I need to stay in Istanbul?',
    a: 'Most patients travel for two nights. You arrive the day before surgery, have your operation the next day, return the morning after for your first clinic wash, and fly home the same evening or the day after. For larger or unshaven sessions, we recommend an extra night.'
  },
  {
    q: 'Which technique is right for me?',
    a: 'It depends on your hair loss stage, donor density, lifestyle and budget. Our coordinators will review your photos and recommend the best fit — usually FUE, DHI or Sapphire FUE. You can use our Norwood Scale Tool and Graft Calculator first to get a sense of where you stand.'
  },
  {
    q: 'Is the result permanent?',
    a: 'Yes. The transplanted follicles come from the back and sides of your scalp, which is genetically resistant to the hormonal causes of male pattern baldness. Once they take root in the recipient area, they grow for life.'
  },
  {
    q: 'When will I see my final results?',
    a: 'New growth typically appears around month 4. By month 6, coverage is clearly visible. Around month 12, approximately 90% of your final density is in place, with continued thickening up to month 15.'
  }
];

const blogPreview = [
  {
    slug: 'bald-mans-guide-to-modern-hair-restoration',
    title: "Bald Man's Guide to Modern Hair Restoration",
    excerpt:
      'A complete look at the modern restoration options for men experiencing significant hair loss.',
    date: '2026-05-12',
    category: 'Hair Transplant',
    readingTime: 9,
    img: 'https://picsum.photos/seed/home-blog-1/800/520'
  },
  {
    slug: 'sapphire-fue-a-surgeons-honest-guide',
    title: "Sapphire FUE: A Surgeon's Honest Guide",
    excerpt:
      'What sapphire blades actually change, how density compares, and when this technique is the right choice.',
    date: '2026-04-29',
    category: 'Hair Transplant',
    readingTime: 10,
    img: 'https://picsum.photos/seed/home-blog-2/800/520'
  },
  {
    slug: 'hair-transplant-aftercare-week-by-week',
    title: 'Hair Transplant Aftercare: Week by Week',
    excerpt:
      'What to expect in days 1–7, weeks 2–4 and month-by-month from your hair transplant recovery.',
    date: '2026-04-20',
    category: 'Aftercare',
    readingTime: 7,
    img: 'https://picsum.photos/seed/home-blog-3/800/520'
  }
];

const trustItems = [
  { value: '4.9★', label: 'Google Reviews' },
  { value: '4.8★', label: 'Trustpilot' },
  { label: 'Verified Clinic Badge' },
  { label: 'ISO Certified' },
  { label: '8+ Years Experience' },
  { value: '2,000+', label: 'Happy Patients' }
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

/* — — — PAGE — — — */

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
            Hair Transplant in Turkey at Istanbul Care
          </h1>
          <p className="mt-5 text-base md:text-xl text-white/90 leading-relaxed max-w-3xl">
            Natural results, expert surgeons, and all-inclusive packages from $1,990 — performed in
            our modern Istanbul clinic by a board-certified medical team trusted by patients from
            more than 40 countries.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm md:text-base font-semibold text-white hover:bg-accent-strong transition-colors shadow-lg"
            >
              Get Free Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
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
            {clinicStats.map((s) => (
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

      {/* 2 — TRUST MARQUEE */}
      <section className="bg-white border-b border-soft/30 py-8">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track">
            {Array.from({ length: 2 }, (_, dup) => (
              <ul
                key={dup}
                aria-hidden={dup === 1}
                className="flex shrink-0 items-center gap-10 md:gap-14 pr-10 md:pr-14"
              >
                {trustItems.map((b, i) => (
                  <li
                    key={`${dup}-${i}-${b.label}`}
                    className="inline-flex items-center gap-3 text-primary/80 whitespace-nowrap"
                  >
                    {b.value ? (
                      <span className="text-2xl font-bold text-accent-strong">{b.value}</span>
                    ) : (
                      <span
                        aria-hidden
                        className="h-9 w-9 rounded-full bg-primary/5 text-secondary inline-flex items-center justify-center"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
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

      {/* 3 — OUR SERVICES (Hair Transplant Techniques) */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Our Services
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Hair Transplant Techniques at Istanbul Care
          </h2>
          <p className="mt-4 text-primary/75 leading-relaxed">
            From classic FUE to the latest DHI and Sapphire methods, our medical team helps you
            choose the right technique for your hair type, goals and lifestyle.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hairTransplantServices.map((t) => (
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
                <p className="text-sm text-primary/75 leading-relaxed">{t.blurb}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4 — FREE HAIR TRANSPLANT TOOLS (new section, requested copy) */}
      <section style={{ backgroundColor: '#f8f9fa' }} className="border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Free Clinic Tools
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Plan your hair transplant for free
            </h2>
            <p className="mt-4 text-primary/75 leading-relaxed">
              Our medical team built these tools to help you estimate grafts, understand your hair
              loss stage and plan your budget — before you even speak to a surgeon.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredTools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group rounded-2xl bg-white border border-soft/40 p-7 hover:shadow-xl hover:border-secondary hover:-translate-y-1 transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-accent/10 text-accent-strong inline-flex items-center justify-center">
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
              Explore All 9 Free Tools
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5 — PREMIUM CLINIC INTRO */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl ring-1 ring-soft/40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/seed/modern-clinic/900/700"
            alt="Istanbul Care modern clinic"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Premium care
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Premium Hair Transplant in Turkey at Modern Clinics
          </h2>
          <p className="mt-4 text-primary/75 leading-relaxed">
            Istanbul Care operates from a fully accredited Istanbul facility built around
            international patient care. Every procedure is performed by a board-certified surgeon,
            supported by a trained medical team that has handled over 2,000 successful operations
            since 2018.
          </p>
          <p className="mt-4 text-primary/75 leading-relaxed">
            Our packages bundle surgery, hotel, transfers and aftercare so there are no surprises
            after you arrive. Coordinators speak nine languages and stay with you long after you
            leave Istanbul.
          </p>
          <div className="mt-8 grid gap-3 grid-cols-2 max-w-md">
            {[
              { stat: '2,000+', label: 'Operations' },
              { stat: 'Since 2018', label: 'In Istanbul' },
              { stat: '9 languages', label: 'Patient support' },
              { stat: '4.9★', label: 'Patient rating' }
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-primary/5 border border-soft/40 p-4">
                <div className="text-xl font-bold text-primary">{s.stat}</div>
                <div className="text-xs text-primary/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — HIGH QUALITY AESTHETIC SURGERY */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Beyond hair
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              High Quality Aesthetic Surgery in Turkey
            </h2>
            <p className="mt-4 text-primary/75 leading-relaxed">
              Our specialist partner surgeons deliver the same all-inclusive standard across
              aesthetic, bariatric and dental procedures. Click any category to learn more.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {aestheticCategories.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-soft/40 text-primary px-5 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
              >
                {c.label}
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — ROADMAP / TIMELINE */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Patient journey
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Hair Transplant Roadmap of Recovery
          </h2>
          <p className="mt-4 text-primary/75 leading-relaxed">
            What to expect from the day of your operation through to mature results at twelve
            months.
          </p>
        </div>

        <ol className="relative grid gap-8 md:grid-cols-5">
          <span
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-6 h-0.5 bg-soft/60"
          />
          {roadmap.map((s) => (
            <li key={s.n} className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 h-12 w-12 rounded-full brand-gradient text-white flex items-center justify-center font-bold text-lg ring-4 ring-white relative z-10">
                {s.n}
              </div>
              <h3 className="mt-5 text-base md:text-lg font-semibold text-primary leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 8 — REVIEWS */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Patient stories
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Reviews from Real Patients
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="rounded-2xl bg-white border border-soft/40 p-7 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 text-accent text-lg" aria-hidden>
                  ★★★★★
                </div>
                <p className="mt-4 text-primary/85 leading-relaxed italic">“{r.quote}”</p>
                <div className="mt-6 pt-5 border-t border-soft/40 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-primary">{r.name}</div>
                    <div className="text-xs text-primary/60">{r.country}</div>
                  </div>
                  <span className="inline-flex rounded-full bg-secondary/10 text-primary text-xs font-semibold px-3 py-1">
                    {r.technique}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/review"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 text-sm md:text-base font-semibold hover:bg-primary-dark transition-colors"
            >
              View all patient results
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 9 — WHY ISTANBUL CARE */}
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
          {whyUs.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg hover:border-secondary transition-all"
            >
              <div className="h-10 w-10 rounded-lg brand-gradient" />
              <h3 className="mt-5 text-base md:text-lg font-semibold text-primary leading-snug">
                {w.title}
              </h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10 — MEDICAL TOURISM */}
      <section className="relative isolate overflow-hidden text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/istanbul-bosphorus/1920/900"
          alt="Istanbul Bosphorus skyline"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-strong/90 via-primary/75 to-primary-strong/60" />

        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-24 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
              Medical tourism
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold leading-tight">
              Experience the splendor of medical tourism
            </h2>
            <p className="mt-4 text-white/90 leading-relaxed max-w-xl">
              Istanbul is one of the world&apos;s great cities — and one of its busiest hubs for
              medical travel. Our patients combine world-class hair restoration with two nights in
              a comfortable hotel near the clinic, all transfers handled, and time to explore the
              city if they wish.
            </p>
            <ul className="mt-6 grid gap-3 max-w-xl">
              {[
                'Airport pickup and clinic transfers included',
                'Hotel selected for proximity to the clinic and English-speaking staff',
                'Coordinators available 24/7 in your language',
                'PRP, aftercare kit and post-op clinic wash included'
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm md:text-base">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white shrink-0"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-white/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold">All-inclusive package</h3>
            <p className="mt-2 text-white/80 text-sm">From</p>
            <p className="text-5xl md:text-6xl font-bold mt-1">$1,990</p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                'Surgeon-led FUE / DHI / Sapphire FUE',
                'Two nights hotel near the clinic',
                'All transfers airport ↔ hotel ↔ clinic',
                'PRP and aftercare kit',
                'Follow-up at 3, 6 and 12 months'
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-accent-light">✓</span>
                  <span className="text-white/90">{line}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-7 block text-center rounded-full bg-accent hover:bg-accent-strong transition-colors px-5 py-3 text-sm font-semibold"
            >
              Get my personal quote
            </Link>
          </div>
        </div>
      </section>

      {/* 11 — FAQ */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Frequently asked questions
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Common questions about hair transplant in Turkey
          </h2>
        </div>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <details
              key={i}
              open={i === 0}
              className="group rounded-xl bg-white border border-soft/40 hover:border-secondary transition-colors overflow-hidden"
            >
              <summary className="list-none cursor-pointer select-none flex items-center justify-between gap-4 p-5 hover:bg-primary/5">
                <h3 className="font-semibold text-primary text-base md:text-lg">{item.q}</h3>
                <span
                  aria-hidden
                  className="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-full bg-primary/5 text-primary text-lg transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 -mt-1 text-sm md:text-base text-primary/80 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 12 — OUR BLOG */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Editorial
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Our Blog
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
              Read all articles
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 13 — REACH US NOW (Contact form) */}
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
            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">Reach Us Now</h2>
            <p className="mt-4 text-white/90 max-w-xl leading-relaxed">
              Speak with our expert hair transplant specialists. Share your photos and goals and
              we&apos;ll respond with an honest, all-inclusive plan within 24 hours.
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
