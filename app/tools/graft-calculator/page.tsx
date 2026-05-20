import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Graft Calculator | Istanbul Care',
  description: 'Estimate how many hair transplant grafts you need based on Norwood stage, coverage area and hair characteristics.'
};

const norwoodTable = [
  { stage: 'NW2', range: '500–1,500' },
  { stage: 'NW3', range: '1,500–2,500' },
  { stage: 'NW4', range: '2,500–3,500' },
  { stage: 'NW5', range: '3,500–4,500' },
  { stage: 'NW6', range: '4,500–5,500' },
  { stage: 'NW7', range: '5,500–7,000' }
];

const areaTable = [
  { area: 'Frontal hairline', range: '1,000–2,000 grafts' },
  { area: 'Crown / vertex', range: '1,500–2,500 grafts' },
  { area: 'Temples', range: '300–600 grafts' },
  { area: 'Mid-scalp', range: '800–1,500 grafts' }
];

const factors = [
  {
    title: 'Hair thickness',
    body: 'Thicker individual hair shafts cover more scalp per graft and need fewer total grafts for the same look.'
  },
  {
    title: 'Scalp laxity',
    body: 'Loose, mobile scalp tissue makes extraction and implantation easier and supports higher graft counts.'
  },
  {
    title: 'Donor density',
    body: 'Higher follicles-per-cm² in the safe donor zone means more grafts can be safely harvested in one session.'
  },
  {
    title: 'Coverage area',
    body: 'A larger thinning area obviously needs more grafts. Hairline alone vs full coverage to the crown differ by thousands.'
  },
  {
    title: 'Hair curl',
    body: 'Curlier hair visually covers more scalp, so curly-haired patients often need fewer grafts than straight-haired ones for similar coverage.'
  }
];

const faq = [
  { q: 'What is a follicular unit graft?', a: 'A graft is a tiny tissue unit containing 1–4 hairs that naturally grow together. We harvest grafts one at a time during FUE/DHI and place them into the recipient area.' },
  { q: 'How many grafts can be extracted in one day?', a: 'Most patients comfortably accept 3,000–4,500 grafts in one session. Mega-sessions of 5,000+ grafts are possible with FUT or combined techniques but require careful donor planning.' },
  { q: 'Will I lose existing hairs after the transplant?', a: 'Temporary shock loss of native hairs around the recipient area can happen but is reversible — they regrow over 3–6 months.' },
  { q: 'Do I need a second session?', a: 'Most patients are satisfied with one session. Patients with Norwood VI–VII or those seeking maximum density may benefit from a top-up at 12–18 months.' },
  { q: 'Are graft counts reliable?', a: 'A good clinic counts every extracted graft and shares the final number with you. We provide an itemised breakdown after each session.' },
  { q: 'What if I need more grafts than my donor can safely supply?', a: 'We never overharvest. If your donor reserve is limited, we set realistic expectations and may suggest a staged approach over two sessions, or body hair FUE as an alternative.' },
  { q: 'How does graft count affect cost?', a: 'Our all-inclusive packages are priced per session, not per graft. Silver, Gold and Platinum packages cover increasing graft counts and complexity.' },
  { q: 'What is the difference between grafts and hairs?', a: 'Grafts are the follicular units, hairs are the individual strands. A 3,000-graft session typically delivers 6,000–7,500 actual hairs.' }
];

export default function GraftCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free clinic tool"
        title="Graft Calculator — How Many Grafts Do You Need?"
        subtitle="Estimate your required graft count by Norwood stage, coverage area and hair characteristics. The single most-asked question, answered."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Basics
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              What is a hair graft?
            </h2>
            <div className="mt-6 space-y-5 text-primary/80 leading-relaxed">
              <p>
                A graft is a follicular unit containing 1–4 hairs that grow together naturally on
                the scalp. The average scalp has 80–100 follicular units per square centimetre,
                varying with ethnicity and individual genetics.
              </p>
              <p>
                During a hair transplant, grafts are harvested one at a time from the donor zone at
                the back and sides of the scalp and implanted into thinning areas. The total number
                of grafts needed depends on your hair loss stage, donor density and the coverage
                goal you and the surgeon agree on.
              </p>
              <p>
                Most patients need between 1,500 and 5,000 grafts. A session of 3,000 grafts
                typically takes 6–8 hours, with anaesthesia, extraction, implantation and lunch
                breaks built into the day.
              </p>
            </div>
          </div>

          <aside className="self-start lg:sticky lg:top-28 rounded-2xl bg-primary text-white p-6 md:p-7 shadow-xl">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
              Quick estimate
            </h3>
            <p className="mt-4 text-white/85 text-sm">Average grafts needed</p>
            <p className="text-4xl font-bold mt-1">2,500 – 4,000</p>
            <p className="mt-3 text-xs text-white/75 leading-relaxed">
              For a typical Norwood 3–4 case. Use the tables below to refine your estimate.
            </p>
            <a
              href="#contact"
              className="mt-6 block w-full text-center rounded-full bg-accent hover:bg-accent-strong transition-colors px-5 py-3 text-sm font-semibold"
            >
              Get a personalised count
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              By Norwood stage
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Grafts by hair loss level
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {norwoodTable.map((row) => (
              <div
                key={row.stage}
                className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Norwood
                </div>
                <div className="mt-1 text-3xl font-bold text-primary">{row.stage}</div>
                <div className="mt-4 text-sm text-primary/75">Recommended grafts</div>
                <div className="text-xl font-semibold text-accent-strong">{row.range}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Variables
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Factors affecting your graft count
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {factors.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white border border-soft/40 p-6">
              <div className="h-10 w-10 rounded-lg brand-gradient" />
              <h3 className="mt-4 text-lg font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              By region
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Graft count by scalp area
            </h2>
          </div>
          <div className="rounded-2xl bg-white border border-soft/40 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-3 text-sm font-semibold uppercase tracking-wider">Area</th>
                  <th className="px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Typical graft range
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-soft/40">
                {areaTable.map((row) => (
                  <tr key={row.area}>
                    <td className="px-5 py-4 text-primary font-semibold">{row.area}</td>
                    <td className="px-5 py-4 text-primary/80">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQAccordion items={faq} eyebrow="Graft calculator FAQ" title="Common questions about graft count" />

      <ContactCTA
        heading="Want a precise graft estimate from a surgeon?"
        subtitle="Send us your photos and our team will give you an exact count, technique recommendation and price within 24 hours."
        showMessage
        messageLabel="Anything we should know? (optional)"
      />
    </>
  );
}
