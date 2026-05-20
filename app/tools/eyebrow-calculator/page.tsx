import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Eyebrow Graft Calculator | Istanbul Care',
  description: 'Plan the grafts needed for natural-looking, permanent eyebrow restoration. Zone-by-zone estimates.'
};

const zones = [
  { zone: 'Head of the brow', range: '50–100 grafts', desc: 'The inner portion above the bridge of the nose. Hairs are placed pointing upward.' },
  { zone: 'Body of the brow', range: '120–180 grafts', desc: 'The main horizontal portion. Density is highest here. Hairs slope outward at increasing angles.' },
  { zone: 'Arch and tail', range: '60–100 grafts', desc: 'The outer half of the brow, tapering as it approaches the temple. Hairs sweep downward.' },
  { zone: 'Full new brow design', range: '300–400 grafts per side', desc: 'When building a completely new brow shape — for example after years of over-plucking or permanent loss.' }
];

const differences = [
  {
    title: 'Single grafts only',
    body: 'Every eyebrow graft must be a single hair. Multi-hair units would look unnatural — eyebrows naturally consist of individual hairs in different directions.'
  },
  {
    title: 'Nearly flat angles',
    body: 'Eyebrow hairs grow at angles almost parallel to the skin. The surgeon places each graft at the correct exit angle for natural-looking direction.'
  },
  {
    title: 'Direction varies by zone',
    body: 'Head: upward. Body: outward and slightly down. Tail: downward toward the temple. Getting these transitions right is what separates good results from bad.'
  },
  {
    title: 'Hair grows faster than native brow hair',
    body: 'Transplanted hairs retain scalp characteristics — they grow continuously and need trimming every 2–4 weeks. Many patients consider this an acceptable trade-off for permanence.'
  }
];

const candidates = [
  { tone: 'accent', title: 'Perfect candidate', items: ['Years of over-plucking that has damaged follicles', 'Permanent loss from scarring, trauma or alopecia', 'Dissatisfied with microblading\'s 12–18 month fade', 'Stable hair loss in eyebrow area (not actively progressing)'] },
  { tone: 'secondary', title: 'May need alternative', items: ['Active alopecia areata in brow area — settle first', 'Very thin native scalp hair — texture may not match well', 'Borderline scalp donor — assess feasibility first'] },
  { tone: 'primaryDark', title: 'Not suitable', items: ['Active skin conditions in the brow area', 'Body dysmorphic concerns where realistic results won\'t satisfy', 'Actively progressing autoimmune hair loss'] }
];

const faq = [
  { q: 'How long does an eyebrow transplant take?', a: 'Typically 2–4 hours, depending on graft count. Most patients fly in the evening before, have surgery the next morning, and fly home the same evening or the day after.' },
  { q: 'How many grafts will I need?', a: 'Light filling: 150–250 grafts per brow. Substantial restoration: 250–350 per brow. Complete new brow: 350–400+ per brow.' },
  { q: 'Will it look natural?', a: 'Yes — when single-graft FUE is performed with correct angles and density variation. Properly designed transplanted brows are indistinguishable from natural ones.' },
  { q: 'How often will I need to trim them?', a: 'Every 2–4 weeks. Transplanted brow hairs retain scalp-hair growth speed, slightly faster than natural brow hair. Light trimming with small scissors keeps the shape.' },
  { q: 'Is it permanent?', a: 'Yes — unlike microblading (12–18 months) or tattooing (which discolours), transplanted brows last a lifetime.' },
  { q: 'Can I have microblading first then transplant?', a: 'Yes. Pigment from previous microblading does not affect transplant outcomes. Many patients transition from microblading to transplant for permanence.' },
  { q: 'When can I wear makeup again?', a: 'No makeup on brows for the first 10 days. From week 2 onwards, gentle makeup elsewhere is fine. Brow pencilling can resume from week 3 if needed.' },
  { q: 'What is the success rate?', a: 'In experienced hands, 92–96% of grafts survive and grow. Outcomes below expectation at month 12 are covered by our touch-up policy.' }
];

const toneClass: Record<string, { bg: string; text: string }> = {
  accent: { bg: 'bg-accent', text: 'text-accent-strong' },
  secondary: { bg: 'bg-secondary', text: 'text-secondary' },
  primaryDark: { bg: 'bg-primary-dark', text: 'text-primary-dark' }
};

export default function EyebrowCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free clinic tool"
        title="Eyebrow Graft Calculator"
        subtitle="Permanent, natural eyebrow restoration with single-graft FUE. Estimate the grafts your case needs, zone by zone."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            About eyebrow transplants
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            What an eyebrow transplant actually involves
          </h2>
          <div className="mt-6 space-y-5 text-primary/80 leading-relaxed">
            <p>
              An eyebrow transplant is a precision FUE procedure that moves single-hair follicles
              from the back of the scalp into the eyebrows. The technique is the same as a beard
              transplant — single grafts placed one by one at the precise angle of natural
              growth — but applied to one of the most visible and detailed parts of the face.
            </p>
            <p>
              Every graft must be a single hair. Even a small multi-hair follicle would look
              artificial in an eyebrow. Each graft is hand-sorted under magnification, then
              placed at an angle nearly parallel to the skin, in the direction the surrounding
              eyebrow hair grows.
            </p>
            <p>
              Common reasons for eyebrow restoration include years of over-plucking that has
              damaged follicles, scarring from trauma or surgery, alopecia areata once
              stabilised, and congenital sparse eyebrows. Some patients also seek thicker or more
              defined brows as a purely cosmetic procedure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Zones
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Graft estimates by brow zone
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {zones.map((z) => (
              <div
                key={z.zone}
                className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-base font-semibold text-primary">{z.zone}</h3>
                <div className="mt-3 text-xl font-bold text-accent-strong">{z.range}</div>
                <p className="mt-3 text-sm text-primary/75 leading-relaxed">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            What makes it different
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Why eyebrow transplants need special technique
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {differences.map((d) => (
            <div key={d.title} className="rounded-2xl bg-white border border-soft/40 p-6">
              <div className="h-10 w-10 rounded-lg brand-gradient" />
              <h3 className="mt-4 text-base font-semibold text-primary">{d.title}</h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Suitability
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Who is a good candidate?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {candidates.map((c) => {
              const t = toneClass[c.tone];
              return (
                <div key={c.title} className="rounded-2xl bg-white border border-soft/40 p-6">
                  <div className={`h-12 w-12 rounded-xl ${t.bg} text-white inline-flex items-center justify-center`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className={`mt-4 text-lg font-semibold ${t.text}`}>{c.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-primary/80">
                    {c.items.map((it) => (
                      <li key={it} className="flex gap-2 leading-relaxed">
                        <span className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${t.bg}`} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQAccordion items={faq} eyebrow="Eyebrow transplant FAQ" title="Common questions about eyebrow transplants" />

      <ContactCTA
        heading="Get an eyebrow design from our team"
        subtitle="Send us photos and inspiration images. We'll send a graft estimate and personalised design proposal."
        showMessage
        defaultService="Eyebrow Transplant"
      />
    </>
  );
}
