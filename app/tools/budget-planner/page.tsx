import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Hair Transplant Travel & Budget Planner | Istanbul Care',
  description: 'Plan your total budget for a hair transplant in Istanbul — surgery package + flights + meals + extras.'
};

const breakdown = [
  { item: 'All-inclusive surgery package', detail: 'Silver / Gold / Platinum', cost: '$1,990 – $3,290' },
  { item: 'Round-trip flights to Istanbul', detail: 'From major European cities', cost: '$120 – $300' },
  { item: 'Meals outside the hotel', detail: '2–3 days of street food and restaurants', cost: '$60 – $120' },
  { item: 'Local transport (taxis, metro)', detail: 'Light personal use beyond included transfers', cost: '$20 – $40' },
  { item: 'Travel insurance', detail: 'Recommended; many cards include it', cost: '$15 – $40' },
  { item: 'Souvenirs and shopping', detail: 'Optional — Grand Bazaar etc.', cost: '$50 – $100' },
  { item: 'Comfort items (pillows, snacks)', detail: 'For the recovery hotel and flight home', cost: '$15 – $30' }
];

const totalLow = 1990 + 120 + 60 + 20 + 15 + 50 + 15;
const totalHigh = 3290 + 300 + 120 + 40 + 40 + 100 + 30;

const included = [
  'Surgery, surgeon and full medical team',
  'Local anaesthesia and medications',
  'Hotel accommodation (2 nights minimum)',
  'Airport ↔ hotel ↔ clinic transfers',
  'Pre-op blood tests at the clinic',
  'Aftercare kit (shampoo, lotion, saline spray)',
  'Post-op clinic wash next morning',
  'PRP session (Gold and Platinum)',
  '3, 6 and 12 month follow-up support'
];

const youArrange = [
  'Round-trip flights to Istanbul (IST or SAW)',
  'Travel insurance (recommended)',
  'Meals outside the hotel (breakfast is included)',
  'Personal spending money for souvenirs / sightseeing',
  'Visa (most European passports are visa-free for Turkey)',
  'Currency: bring USD/EUR cash or use cards',
  'Comfort items: travel pillow, headphones for the flight',
  'Loose-fitting button-up shirts for after surgery'
];

const tips = [
  { title: 'Fly into Sabiha Gökçen (SAW) if you can', body: 'The clinic is in Şişli — SAW is on the Asian side and is often a smoother taxi or transfer ride than IST during weekday rush hours.' },
  { title: 'Arrive the day before surgery', body: 'A full night\'s sleep before your operation matters. Don\'t book a redeye and head straight to the clinic.' },
  { title: 'Pack carry-on only if possible', body: 'A 3-night stay easily fits in cabin baggage. Avoid checked luggage delays — your surgery slot won\'t wait.' },
  { title: 'Wear a button-up shirt on travel days', body: 'You won\'t want to pull a t-shirt over freshly transplanted grafts. Button-up shirts spare the recipient area.' },
  { title: 'Keep your hotel snacks low-sodium', body: 'Lower salt intake in the first 3 days reduces post-op forehead swelling.' },
  { title: 'Don\'t cram in too much sightseeing', body: 'You can walk a little on day 2 — but plan to rest most of the time. The Bosphorus will still be there next visit.' },
  { title: 'Sleep at 45° for the first 3 nights', body: 'Use the travel pillow. Ask the hotel for extra cushions. It dramatically reduces swelling.' },
  { title: 'Bring USD or EUR cash for tips', body: 'Tips for the airport driver, hotel staff and any optional add-ons. $50 in small bills covers most of it.' }
];

const bestTime = [
  { season: 'Spring (April–May)', body: 'Mild weather (15–22°C), low humidity, perfect for short walks during recovery. Tourist density manageable.' },
  { season: 'Autumn (Sept–Oct)', body: 'Similar to spring with comfortable temperatures and clear days. Slightly cooler in late October.' },
  { season: 'Winter (Nov–Feb)', body: 'Cooler (5–12°C), occasional rain. Hotels and flights at their cheapest. Great if you don\'t plan to sightsee.' },
  { season: 'Summer (June–Aug)', body: 'Hot and humid (25–32°C). Less ideal for fresh post-op skin — direct sun must be avoided for 4 weeks. Plan accordingly.' }
];

const faq = [
  { q: 'What is the total cost of a hair transplant trip from Europe?', a: `Most patients budget $2,270–$2,690 total for a Silver package trip. Higher-tier packages bring this to $3,800–$4,100 total — still a fraction of UK or US prices.` },
  { q: 'Is the surgery package really all-inclusive?', a: 'Yes — surgery, hotel, transfers, aftercare and follow-up are all bundled. The only things you arrange are your flights and personal spending money.' },
  { q: 'Can I bring a companion?', a: 'Yes. Your hotel room is twin/double, so a companion stays at no extra cost in most packages. They join transfers and clinic visits with you.' },
  { q: 'What\'s the visa situation?', a: 'Most European passports are visa-free for Turkey for stays under 90 days. Always check current requirements 2–3 weeks before travel.' },
  { q: 'Is Istanbul safe for medical tourism?', a: 'Yes. Istanbul is a major international hub with millions of tourists annually. The Şişli district where the clinic is located is well-established and safe.' },
  { q: 'How do I pay for the package?', a: 'A small deposit secures your dates; the balance is paid on arrival in cash (USD, EUR, GBP) or by card. We accept all major card brands.' },
  { q: 'Are tips expected?', a: 'Optional. Tips for the airport driver and hotel staff are appreciated but not expected. $5–$10 USD per service is generous.' },
  { q: 'What if my flight is delayed?', a: 'Let your coordinator know as soon as possible. We rebook your transfer and adjust your surgery slot. Flexibility is built into the schedule.' }
];

export default function BudgetPlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="Free clinic tool"
        title="Travel & Budget Planner — Istanbul"
        subtitle="Plan your total cost — surgery package, flights, meals and extras — for your hair transplant trip to Istanbul."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Total breakdown
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Realistic cost of a 3-night trip
          </h2>
          <p className="mt-3 text-primary/70">
            Includes the all-inclusive surgery package plus everything you'll typically pay for
            personally. Range reflects budget vs comfort choices.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-soft/40 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-5 py-3 uppercase tracking-wider">Item</th>
                <th className="px-5 py-3 uppercase tracking-wider hidden md:table-cell">Detail</th>
                <th className="px-5 py-3 uppercase tracking-wider text-right">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-soft/40">
              {breakdown.map((row) => (
                <tr key={row.item}>
                  <td className="px-5 py-4 font-semibold text-primary">{row.item}</td>
                  <td className="px-5 py-4 text-primary/70 hidden md:table-cell">{row.detail}</td>
                  <td className="px-5 py-4 text-primary/85 text-right font-semibold">{row.cost}</td>
                </tr>
              ))}
              <tr className="bg-accent/10">
                <td className="px-5 py-4 font-bold text-primary">Estimated total</td>
                <td className="px-5 py-4 text-primary hidden md:table-cell">3-night Silver-package trip</td>
                <td className="px-5 py-4 text-right font-bold text-accent-strong">
                  ${totalLow.toLocaleString()} – ${totalHigh.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Inclusions vs your costs
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              What we cover · what you arrange
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-soft/40 p-6">
              <h3 className="text-lg font-semibold text-accent-strong">Included in package</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {included.map((it) => (
                  <li key={it} className="flex gap-2 text-primary/85">
                    <span className="text-accent">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-soft/40 p-6">
              <h3 className="text-lg font-semibold text-primary">You arrange</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {youArrange.map((it) => (
                  <li key={it} className="flex gap-2 text-primary/85">
                    <span className="text-secondary">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Local tips
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            8 Istanbul travel tips for transplant patients
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tips.map((t, i) => (
            <div key={t.title} className="rounded-2xl bg-white border border-soft/40 p-6">
              <div className="text-3xl font-extrabold text-secondary/30">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-2 text-base font-semibold text-primary leading-snug">{t.title}</h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Timing
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Best time to visit Istanbul
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {bestTime.map((b) => (
              <div key={b.season} className="rounded-2xl bg-white border border-soft/40 p-6">
                <h3 className="text-base font-semibold text-primary">{b.season}</h3>
                <p className="mt-2 text-sm text-primary/75 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={faq} eyebrow="Budget planner FAQ" title="Common questions about cost & travel" />

      <ContactCTA
        heading="Build your personal budget"
        subtitle="Share your travel dates and we'll send an exact total — surgery package, recommended flight ranges and any local extras."
        showMessage
      />
    </>
  );
}
