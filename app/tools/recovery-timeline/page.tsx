import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Hair Transplant Recovery — Week by Week | Istanbul Care',
  description: 'A complete recovery timeline from day 0 to month 18 — what to expect at every stage of healing after a hair transplant.'
};

const timeline = [
  { phase: 'Day 0', title: 'Surgery day', body: 'Anaesthesia, extraction and implantation are complete. The recipient area looks dotted with tiny implant marks. Mild forehead tightness is normal. You leave with a protective headband and the aftercare kit.' },
  { phase: 'Day 1–3', title: 'Initial scabbing and swelling', body: 'Small scabs form around every implanted graft. Mild forehead swelling appears on day 2–3 and resolves by day 5. Sleep at a 45° angle for the first 3 nights to control swelling.' },
  { phase: 'Day 4–7', title: 'First wash and scabs softening', body: 'A scheduled clinic wash the morning after surgery starts the cleaning routine. By day 7, most scabs are softening and falling off. Pinkness in the recipient area is normal at this stage.' },
  { phase: 'Week 2', title: 'Return to work', body: 'Most desk workers are presentable from day 7–10. Recipient pinkness fades. Donor area is virtually invisible to others. Avoid hats with tight bands for now.' },
  { phase: 'Week 3–4', title: 'Shock loss begins', body: 'Transplanted hairs start to shed — completely normal and expected. The follicles remain intact under the skin. This phase can be psychologically tough; trust the process.' },
  { phase: 'Month 2–3', title: 'Dormant phase', body: 'Little visible change. Below the surface, follicles are preparing to regrow. Light gym sessions can resume. Avoid swimming and saunas until at least week 6.' },
  { phase: 'Month 4–6', title: 'New growth visible', body: 'New hairs start to push through around month 4. By month 6, you see clear coverage although new hairs are still fine and lighter than mature hair. The hairline shape becomes recognisable.' },
  { phase: 'Month 7–9', title: 'Density builds', body: 'Hairs thicken and darken progressively. Patients typically take their first proud progress photos around month 7–8.' },
  { phase: 'Month 10–12', title: 'Approaching final result', body: 'Around 80–90% of your final density is in place by month 12. The hairline matures and looks completely natural. Most patients consider this the milestone moment.' },
  { phase: 'Month 12–18', title: 'Final maturation', body: 'Hairs continue to thicken and gain pigmentation until month 15–18. From this point, your transplanted hair behaves and ages exactly like the rest of your hair.' }
];

const dos = [
  'Sleep at 45° for the first 3 nights',
  'Use the saline spray every hour while awake on day 1',
  'Wash exactly as instructed from day 2',
  'Take your prescribed antibiotics for the full course',
  'Drink plenty of water during the first week',
  'Wear loose, button-up shirts (no over-the-head)',
  'Walk daily — short, gentle walks from day 2',
  'Apply moisturiser to scabs from day 4',
  'Photograph progress monthly for your reference',
  'Reach out to the team with any concerns'
];

const donts = [
  'Don\'t touch or pick scabs',
  'Don\'t sleep flat or face-down for 7 days',
  'Don\'t drink alcohol for 7 days',
  'Don\'t smoke for 14 days minimum',
  'Don\'t wear hats with elastic bands for 2 weeks',
  'Don\'t do heavy exercise for 4 weeks',
  'Don\'t swim or use saunas for 6 weeks',
  'Don\'t expose recipient area to direct sun for 4 weeks',
  'Don\'t use regular shampoo for the first 2 weeks',
  'Don\'t panic during shock loss — it\'s normal'
];

const packList = [
  'Loose, button-up shirts (4–5 pieces)',
  'Travel pillow for in-flight comfort',
  'Soft hat (loose-fitting) for after week 2',
  'Sunglasses',
  'Comfortable walking shoes',
  'Phone charger and travel adapter',
  'Headphones and entertainment for surgery day',
  'Light snacks for the hotel',
  'A copy of your medical records',
  'Travel insurance documents'
];

const faq = [
  { q: 'When can I sleep normally?', a: 'Return to your usual sleeping position from day 7–10, once forehead swelling has resolved completely.' },
  { q: 'When can I wash my hair normally?', a: 'Two weeks after surgery you can switch from the specialised clinic shampoo to your usual one. Stick to gentle products with no strong fragrances.' },
  { q: 'When can I dye or cut my hair?', a: 'Haircuts: scissors only at week 3, electric trimmer at week 6, full barber shave at month 3. Hair dye: 6 months minimum to be safe.' },
  { q: 'When can I exercise again?', a: 'Walking from day 2, light gym from week 4, full gym and sports from week 6, contact sports from week 8.' },
  { q: 'When can I fly home?', a: 'Most patients fly home on day 2–3 after their first clinic wash. Long-haul flights are fine — just hydrate and avoid alcohol on board.' },
  { q: 'Will I have visible swelling?', a: 'Mild forehead swelling is common on day 3–4 and resolves by day 5–6. It does not affect your final result.' },
  { q: 'Can I work from home during recovery?', a: 'Yes. Most patients work from home from day 3 onwards. Video calls from day 5–7 are usually fine.' },
  { q: 'What if something looks wrong during recovery?', a: 'Message your coordinator immediately. We respond on WhatsApp within 2 hours during business hours and 24/7 in case of emergency.' }
];

export default function RecoveryTimelinePage() {
  return (
    <>
      <PageHero
        eyebrow="Free clinic tool"
        title="Hair Transplant Recovery — Week by Week"
        subtitle="A complete recovery timeline from day 0 through month 18, with what to do, what to avoid and what to expect at every stage."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Timeline
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Your full recovery, stage by stage
          </h2>
        </div>

        <ol className="relative">
          <span aria-hidden className="absolute left-4 md:left-6 top-2 bottom-2 w-0.5 bg-soft/60" />
          {timeline.map((t, i) => (
            <li key={i} className="relative pl-14 md:pl-20 pb-8 last:pb-0">
              <span className="absolute left-0 top-0 h-9 w-9 md:h-12 md:w-12 rounded-full brand-gradient text-white inline-flex items-center justify-center text-xs md:text-sm font-bold ring-4 ring-white shadow">
                {i + 1}
              </span>
              <div className="rounded-2xl bg-white border border-soft/40 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-strong">
                  {t.phase}
                </span>
                <h3 className="mt-1 text-lg md:text-xl font-bold text-primary">{t.title}</h3>
                <p className="mt-2 text-sm md:text-base text-primary/75 leading-relaxed">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Rules
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Do's and Don'ts
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-soft/40 p-6">
              <h3 className="text-lg font-semibold text-accent-strong inline-flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-accent text-white inline-flex items-center justify-center text-sm">✓</span>
                Do
              </h3>
              <ul className="mt-4 space-y-2.5">
                {dos.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-primary/85">
                    <span className="text-accent shrink-0">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-soft/40 p-6">
              <h3 className="text-lg font-semibold text-primary-dark inline-flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-primary-dark text-white inline-flex items-center justify-center text-sm">×</span>
                Don't
              </h3>
              <ul className="mt-4 space-y-2.5">
                {donts.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-primary/85">
                    <span className="text-primary-dark shrink-0">×</span>
                    <span>{d}</span>
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
            Travel
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            What to pack for Istanbul
          </h2>
          <p className="mt-3 text-primary/70">
            Pack light. Most patients travel with carry-on only for a 3-night stay.
          </p>
        </div>
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {packList.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl bg-white border border-soft/40 p-4 text-sm text-primary/85"
            >
              <span className="shrink-0 h-6 w-6 rounded-full bg-accent text-white inline-flex items-center justify-center text-xs">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <FAQAccordion items={faq} eyebrow="Recovery FAQ" title="Common recovery questions" />

      <ContactCTA
        heading="Plan your recovery with our team"
        subtitle="Tell us your travel dates and lifestyle needs and we'll build a recovery plan around them."
        showMessage
      />
    </>
  );
}
