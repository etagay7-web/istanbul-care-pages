import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Hair Transplant Cost in Turkey 2026 | Istanbul Care',
  description: 'Transparent hair transplant pricing in Turkey for 2026 — Silver $1,990, Gold $2,490, Platinum $3,290 all-inclusive packages.'
};

const packages = [
  {
    name: 'Silver',
    price: '$1,990',
    blurb: 'Best for hairline or smaller cases up to 3,000 grafts.',
    features: [
      'FUE technique',
      'Up to 3,000 grafts',
      '2 nights 4★ hotel near the clinic',
      'All airport ↔ hotel ↔ clinic transfers',
      'Surgery, anaesthesia, medications',
      'Standard aftercare kit',
      'Post-op clinic wash next morning',
      '12-month follow-up'
    ],
    highlight: false
  },
  {
    name: 'Gold',
    price: '$2,490',
    blurb: 'Our most popular package — covers most Norwood IV–V cases.',
    features: [
      'DHI or Sapphire FUE technique',
      'Up to 4,500 grafts',
      '2 nights 5★ hotel near the clinic',
      'All airport ↔ hotel ↔ clinic transfers',
      'Surgery, anaesthesia, medications',
      'Premium aftercare kit',
      'PRP session included',
      '3, 6 and 12 month follow-up'
    ],
    highlight: true
  },
  {
    name: 'Platinum',
    price: '$3,290',
    blurb: 'Unlimited grafts and concierge care for advanced cases.',
    features: [
      'DHI, Sapphire FUE or combined',
      'Unlimited grafts (mega-session)',
      '3 nights 5★ hotel + private suite',
      'Private driver throughout your stay',
      'Surgery, anaesthesia, medications',
      'Premium aftercare kit + travel kit',
      'Two PRP sessions',
      'Lifetime follow-up programme'
    ],
    highlight: false
  }
];

const comparison = [
  { country: 'Turkey (Istanbul Care)', price: '$1,990–$3,290' },
  { country: 'United Kingdom', price: '£8,000–£15,000' },
  { country: 'United States', price: '$12,000–$20,000' },
  { country: 'Germany', price: '€6,000–€12,000' },
  { country: 'Spain', price: '€4,000–€8,000' }
];

const included = [
  'Pre-op consultation with a board-certified surgeon',
  'Pre-op blood tests at the clinic',
  'Local anaesthesia and sedation if needed',
  'FUE, DHI or Sapphire FUE procedure',
  'Hotel accommodation near the clinic',
  'VIP airport pickup on arrival',
  'All clinic transfers throughout stay',
  'Post-op clinic wash and dressing change',
  'Complete aftercare kit (shampoo, lotion, saline spray)',
  'Post-op medications (antibiotics, painkillers)',
  'Personal coordinator in your language',
  'Follow-up at 3, 6 and 12 months'
];

const faq = [
  { q: 'Why does Turkey offer cheaper hair transplants?', a: 'Lower operating costs, favourable exchange rates and a competitive medical tourism market allow Turkish clinics to offer the same world-class results at a fraction of Western prices — not lower quality.' },
  { q: 'Are flights included in the package?', a: 'No. Flights to Istanbul are arranged separately by you. Round-trip flights from most European cities range from €100–€300 depending on season and route.' },
  { q: 'Can I pay in instalments?', a: 'Yes. We offer split payment plans — 20% deposit on booking, balance due on arrival. Talk to your coordinator about flexible options.' },
  { q: 'What currencies do you accept?', a: 'USD, EUR, GBP cash, and major credit and debit cards (Visa, Mastercard, AmEx). Card payments include a small processing fee.' },
  { q: 'Are there cheaper options than Silver?', a: 'Silver is our entry-level fully-inclusive package. We don\'t recommend going lower because corner-cutting on hotel quality or aftercare directly affects the experience.' },
  { q: 'Are upgrades available on arrival?', a: 'Yes — you can upgrade your hotel, request a private driver or add extra PRP sessions on arrival. Prices are transparent and discussed before any add-on.' },
  { q: 'Is the price per session or per graft?', a: 'Per all-inclusive session. Within each package, the surgeon delivers whatever graft count your case needs (up to the package cap) — no per-graft surprise charges.' },
  { q: 'Can I get a refund if I cancel?', a: 'Yes. Deposits are refundable up to 7 days before surgery. Cancellations inside 7 days forfeit the deposit but balance payments are not taken until you arrive.' }
];

export default function PriceEstimatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free clinic tool"
        title="Hair Transplant Cost in Turkey 2026"
        subtitle="Transparent, all-inclusive pricing for FUE, DHI and Sapphire FUE — surgeon, hotel, transfers and aftercare bundled into one fixed price."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Why Turkey
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Why hair transplants cost less in Turkey
          </h2>
          <div className="mt-6 space-y-5 text-primary/80 leading-relaxed">
            <p>
              The same DHI or FUE procedure that costs £10,000+ in London or $15,000+ in New York
              is routinely delivered in Istanbul for one third to one fifth of the price. This is
              not because Turkish clinics use lower-quality techniques or instruments — many use
              the same brands of equipment and the same consumables as Western clinics.
            </p>
            <p>
              The difference is structural. Lower facility rent, lower staff wages relative to
              Western markets, favourable exchange rates and a competitive medical tourism sector
              all combine to produce real cost savings that flow through to the patient.
            </p>
            <p>
              At Istanbul Care, the all-inclusive model means the price quoted is the price paid.
              Hotel, transfers, surgery, anaesthesia, aftercare kit and follow-up are bundled into
              a single fixed package — no per-graft surprises and no add-on charges after arrival.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              All-inclusive packages
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Choose your package
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={
                  'rounded-3xl p-7 transition-all ' +
                  (p.highlight
                    ? 'bg-primary text-white shadow-2xl scale-105 lg:-translate-y-2 border border-primary'
                    : 'bg-white border border-soft/40 hover:shadow-xl')
                }
              >
                {p.highlight ? (
                  <span className="inline-flex rounded-full bg-accent text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1">
                    Most Popular
                  </span>
                ) : null}
                <h3
                  className={
                    'mt-4 text-2xl font-bold ' + (p.highlight ? 'text-white' : 'text-primary')
                  }
                >
                  {p.name}
                </h3>
                <div className="mt-2 text-4xl font-extrabold">{p.price}</div>
                <p className={'mt-3 text-sm ' + (p.highlight ? 'text-white/85' : 'text-primary/70')}>
                  {p.blurb}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className={p.highlight ? 'text-accent-light' : 'text-accent'}>✓</span>
                      <span className={p.highlight ? 'text-white/90' : 'text-primary/80'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={
                    'mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ' +
                    (p.highlight
                      ? 'bg-accent text-white hover:bg-accent-strong'
                      : 'bg-primary text-white hover:bg-primary-dark')
                  }
                >
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Country comparison
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            How prices compare globally
          </h2>
        </div>
        <div className="rounded-2xl bg-white border border-soft/40 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-5 py-3 text-sm font-semibold uppercase tracking-wider">Country</th>
                <th className="px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                  Typical price range
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-soft/40">
              {comparison.map((row) => (
                <tr
                  key={row.country}
                  className={
                    row.country.startsWith('Turkey')
                      ? 'bg-accent/10 font-semibold'
                      : ''
                  }
                >
                  <td className="px-5 py-4 text-primary">{row.country}</td>
                  <td className="px-5 py-4 text-primary">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Inclusions
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              What's included in every package
            </h2>
          </div>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl bg-white border border-soft/40 p-4"
              >
                <span className="shrink-0 h-6 w-6 rounded-full bg-accent text-white inline-flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm text-primary/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQAccordion items={faq} eyebrow="Pricing FAQ" title="Common questions about cost" />

      <ContactCTA
        heading="Get your personal quote"
        subtitle="Tell us your graft estimate or share photos and we'll send you an exact, all-inclusive price within 24 hours."
        showMessage
      />
    </>
  );
}
