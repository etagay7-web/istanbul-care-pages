import Link from 'next/link';

export type TechniqueData = {
  slug: string;
  name: string;
  shortName: string;
  hero: {
    title: string;
    subtitle: string;
    stats: { label: string; value: string }[];
  };
  whatIsIt: {
    paragraphs: string[];
    specs: { label: string; value: string }[];
  };
  howItWorks: { n: number; title: string; description: string }[];
  advantages: { title: string; description: string }[];
  disadvantages: { title: string; description: string }[];
  candidates: {
    perfect: string[];
    mayNeedAlternative: string[];
    notSuitable: string[];
  };
  timeline: { stage: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export default function TechniquePage({ data }: { data: TechniqueData }) {
  const techniques = [
    'DHI Hair Transplant',
    'FUE Hair Transplant',
    'Sapphire FUE',
    'FUT Hair Transplant',
    'Woman Hair Transplant',
    'Afro Hair Transplant',
    'Beard Transplant',
    'Eyebrow Transplant',
    'Unshaven Hair Transplant'
  ];

  return (
    <>
      {/* 1 — HERO */}
      <section className="brand-gradient text-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-24">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-white/80">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/hair-transplant" className="hover:text-white">
              Hair Transplant
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white font-medium">{data.shortName}</span>
          </nav>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            {data.hero.title}
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
            {data.hero.subtitle}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl">
            {data.hero.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 px-5 py-4"
              >
                <div className="text-xs uppercase tracking-wider text-white/75 font-semibold">
                  {s.label}
                </div>
                <div className="mt-1 text-lg md:text-xl font-bold">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — WHAT IS IT */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Overview
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              What is {data.shortName}?
            </h2>
            <div className="mt-6 space-y-5 text-primary/80 leading-relaxed">
              {data.whatIsIt.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="self-start lg:sticky lg:top-28">
            <div className="rounded-2xl bg-primary text-white p-6 md:p-7 shadow-xl">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
                Procedure overview
              </h3>
              <dl className="mt-5 divide-y divide-white/15">
                {data.whatIsIt.specs.map((s) => (
                  <div key={s.label} className="grid grid-cols-2 gap-3 py-3">
                    <dt className="text-sm text-white/75">{s.label}</dt>
                    <dd className="text-sm font-semibold text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="#contact"
                className="mt-6 block w-full text-center rounded-full bg-accent hover:bg-accent-strong transition-colors px-5 py-3 text-sm font-semibold"
              >
                Get a Free Quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* 3 — HOW IT WORKS */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              The procedure
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              How {data.shortName} Works
            </h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.howItWorks.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-secondary/30 leading-none">
                    {String(step.n).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-primary leading-snug">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm text-primary/75 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 — ADVANTAGES & DISADVANTAGES */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-strong">
              Advantages
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-primary leading-tight">
              Why patients choose {data.shortName}
            </h2>
            <ul className="mt-6 space-y-4">
              {data.advantages.map((a) => (
                <li key={a.title} className="flex gap-4">
                  <span
                    className="shrink-0 mt-0.5 h-7 w-7 rounded-full bg-accent text-white inline-flex items-center justify-center"
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{a.title}</h3>
                    <p className="mt-1 text-sm text-primary/75 leading-relaxed">{a.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Honest limitations
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-primary leading-tight">
              Things to consider
            </h2>
            <ul className="mt-6 space-y-4">
              {data.disadvantages.map((d) => (
                <li key={d.title} className="rounded-2xl bg-soft/15 border border-soft/40 p-5">
                  <h3 className="font-semibold text-primary">{d.title}</h3>
                  <p className="mt-1 text-sm text-primary/75 leading-relaxed">{d.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 — CANDIDATES */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Suitability
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Are you a good candidate for {data.shortName}?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <CandidateCard
              tone="accent"
              title="Perfect Candidate"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              }
              items={data.candidates.perfect}
            />
            <CandidateCard
              tone="secondary"
              title="May Need Alternative"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              }
              items={data.candidates.mayNeedAlternative}
            />
            <CandidateCard
              tone="primaryDark"
              title="Not Suitable"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              }
              items={data.candidates.notSuitable}
            />
          </div>
        </div>
      </section>

      {/* 6 — RESULTS TIMELINE */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            What to expect
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Your results timeline
          </h2>
        </div>

        <ol className="relative">
          <span
            aria-hidden
            className="absolute left-4 md:left-6 top-2 bottom-2 w-0.5 bg-soft/60"
          />
          {data.timeline.map((t, i) => (
            <li key={i} className="relative pl-14 md:pl-20 pb-10 last:pb-0">
              <span className="absolute left-0 top-0 h-9 w-9 md:h-12 md:w-12 rounded-full brand-gradient text-white inline-flex items-center justify-center text-xs md:text-sm font-bold ring-4 ring-white shadow">
                {i + 1}
              </span>
              <div className="rounded-2xl bg-white border border-soft/40 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-strong">
                  {t.stage}
                </span>
                <h3 className="mt-1 text-lg md:text-xl font-bold text-primary">{t.title}</h3>
                <p className="mt-2 text-sm md:text-base text-primary/75 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 7 — BEFORE & AFTER */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Patient results
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Real Patient Results
            </h2>
            <p className="mt-3 text-primary/70">
              A small selection of recent {data.shortName} results from our clinic. Every case is
              followed at 3, 6 and 12 months.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { grafts: 2400, months: 9 },
              { grafts: 3100, months: 12 },
              { grafts: 2800, months: 8 },
              { grafts: 3600, months: 10 }
            ].map((c, i) => (
              <article
                key={i}
                className="rounded-2xl overflow-hidden bg-white border border-soft/40 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://picsum.photos/seed/${data.slug}-${i}-b/400/400`}
                      alt={`Before ${data.shortName} case ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-primary/85 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://picsum.photos/seed/${data.slug}-${i}-a/400/400`}
                      alt={`After ${data.shortName} case ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-accent text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 flex-wrap text-xs text-primary/70">
                    <span className="inline-flex rounded-full bg-primary text-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                      {data.shortName}
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
              className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              See all patient reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* 8 — FAQ */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Frequently asked questions
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            {data.shortName} FAQ
          </h2>
          <p className="mt-3 text-primary/70">
            Common questions about {data.shortName}, answered by our medical team.
          </p>
        </div>

        <div className="space-y-3">
          {data.faq.map((q, i) => (
            <details
              key={i}
              className="group rounded-xl bg-white border border-soft/40 hover:border-secondary transition-colors overflow-hidden"
            >
              <summary className="list-none cursor-pointer select-none flex items-center justify-between gap-4 p-5 hover:bg-primary/5">
                <h3 className="font-semibold text-primary text-base md:text-lg">{q.question}</h3>
                <span
                  aria-hidden
                  className="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-full bg-primary/5 text-primary text-lg transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 -mt-1 text-sm md:text-base text-primary/80 leading-relaxed">
                {q.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 9 — CONTACT FORM */}
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
              Get a Free {data.shortName} Consultation
            </h2>
            <p className="mt-4 text-white/90 max-w-xl leading-relaxed">
              Share your photos and goals with our coordinators. We&apos;ll review your case with a
              specialist surgeon and respond within 24 hours — no obligation, no payment required.
            </p>

            <form
              className="mt-8 grid gap-4 max-w-xl"
              method="post"
              action="/api/contact"
            >
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
                name="stage"
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
                  Your Hair Loss Stage
                </option>
                <option value="early" className="text-primary">
                  Early — slight recession or thinning
                </option>
                <option value="moderate" className="text-primary">
                  Moderate — visible hairline loss
                </option>
                <option value="advanced" className="text-primary">
                  Advanced — significant crown/temple loss
                </option>
                <option value="severe" className="text-primary">
                  Severe — large bald areas
                </option>
              </select>

              <select
                name="technique"
                required
                defaultValue={data.name}
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white focus:outline-none focus:border-white appearance-none"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1rem'
                }}
              >
                {techniques.map((t) => (
                  <option key={t} value={t} className="text-primary">
                    {t}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your goals (optional)"
                rows={4}
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white resize-y"
              />

              <label className="flex items-start gap-3 text-sm text-white/90 mt-1">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-white/40 accent-white"
                />
                <span>
                  I have read and accepted the{' '}
                  <Link href="/privacy-policy" className="underline hover:text-white">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>

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
                title: 'Free Consultation',
                desc: 'No payment, no card details. Our team reviews your case at no cost.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
                  </svg>
                )
              },
              {
                title: 'Results in 24h',
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

function CandidateCard({
  tone,
  title,
  icon,
  items
}: {
  tone: 'accent' | 'secondary' | 'primaryDark';
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  const toneClass: Record<typeof tone, { bg: string; text: string; ring: string }> = {
    accent: { bg: 'bg-accent', text: 'text-accent-strong', ring: 'ring-accent/20' },
    secondary: { bg: 'bg-secondary', text: 'text-secondary', ring: 'ring-secondary/20' },
    primaryDark: { bg: 'bg-primary-dark', text: 'text-primary-dark', ring: 'ring-primary/20' }
  };
  const t = toneClass[tone];
  return (
    <div className={`rounded-2xl bg-white border border-soft/40 p-6 ring-1 ${t.ring}`}>
      <div className={`h-12 w-12 rounded-xl ${t.bg} text-white inline-flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className={`mt-4 text-lg font-semibold ${t.text}`}>{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-primary/80">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 leading-relaxed">
            <span className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${t.bg}`} aria-hidden />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
