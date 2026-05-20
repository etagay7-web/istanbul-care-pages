import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Norwood Scale Tool | Istanbul Care',
  description: 'Identify your stage on the Norwood–Hamilton hair loss scale and see the recommended technique and graft range for each level.'
};

const stages = [
  { n: 'NW1', title: 'No visible hair loss', desc: 'A full, mature head of hair with no recession. No surgical intervention is needed at this stage.', technique: 'Maintain', grafts: '0' },
  { n: 'NW2', title: 'Slight temple recession', desc: 'Light recession of the hairline at the temples. Often the first sign of male pattern hair loss. Medical treatment is usually appropriate.', technique: 'FUE / DHI', grafts: '500–1,500' },
  { n: 'NW3', title: 'Pronounced recession', desc: 'Deep symmetrical recession at the temples forming an M, U or V shape. Surgery becomes a realistic option from this stage onwards.', technique: 'FUE / DHI', grafts: '1,500–2,500' },
  { n: 'NW4', title: 'Larger frontal loss + crown thinning', desc: 'Frontal recession increases and a balding spot may appear at the crown. A clear bridge of hair still separates the two areas.', technique: 'FUE / DHI', grafts: '2,500–3,500' },
  { n: 'NW5', title: 'Bridge narrows', desc: 'The hair bridge between front and crown thins markedly. Without intervention this band will eventually disappear.', technique: 'FUE / Sapphire FUE', grafts: '3,500–4,500' },
  { n: 'NW6', title: 'Front and crown merge', desc: 'The frontal balding and crown areas connect, leaving only the horseshoe band of donor hair. A single large surgical session is usually needed.', technique: 'Sapphire FUE / FUT', grafts: '4,500–5,500' },
  { n: 'NW7', title: 'Most advanced stage', desc: 'Only a narrow band of donor hair remains around the back and sides of the head. Surgery is possible but requires very careful donor planning.', technique: 'FUT or combined', grafts: '5,500–7,000' }
];

const tips = [
  { title: 'Check your hairline shape', body: 'Compare to NW2–NW4 illustrations: do you see clear temple recession or a maturing hairline?' },
  { title: 'Look at your crown', body: 'Use two mirrors or a phone selfie to check for thinning or a bald spot at the vertex.' },
  { title: 'Compare old photos', body: 'Photos from 5 and 10 years ago show progression clearly. Has your hairline moved back?' },
  { title: 'Assess density on top', body: 'Part your hair down the middle and look at scalp visibility. Thinner mid-scalp suggests NW3–NW4.' },
  { title: 'Track your family history', body: 'Look at your father, maternal grandfather and uncles. Family pattern often predicts your trajectory.' }
];

const faq = [
  { q: 'Who created the Norwood scale?', a: 'Dr O\'Tar Norwood refined the Hamilton scale in 1975 to create the modern 7-stage classification system used worldwide today.' },
  { q: 'Is the Norwood scale accurate for everyone?', a: 'It works well for typical male pattern hair loss. Diffuse thinners, women and unusual patterns (Type II Vertex) may not fit cleanly — we use additional tools in those cases.' },
  { q: 'What is a "Type A" variant?', a: 'Type A patterns recede front-to-back evenly without a bald crown spot. About 10% of men follow Type A rather than the classic pattern.' },
  { q: 'At what stage should I consider surgery?', a: 'Most surgeons recommend waiting until NW3 or higher with stable progression for at least a year. Operating too early risks looking unnatural later.' },
  { q: 'Can I stop progression with medication?', a: 'Finasteride and minoxidil can slow or pause progression in many patients. They\'re often used alongside surgery to protect remaining native hair.' },
  { q: 'What is the Ludwig scale?', a: 'The Ludwig scale is the female equivalent — 3 stages describing diffuse central thinning rather than patterned recession. We use it for our women patients.' },
  { q: 'Does scalp pigment affect what stage I appear to be?', a: 'Yes. Dark hair on pale scalp shows thinning earlier; very light hair on pale scalp can mask significant density loss. Photos under bright light are most accurate.' },
  { q: 'Can hair loss skip stages?', a: 'No — hair loss progresses sequentially. But the speed varies wildly: some men stay NW3 for decades while others reach NW6 in 5–10 years.' }
];

export default function NorwoodScalePage() {
  return (
    <>
      <PageHero
        eyebrow="Free clinic tool"
        title="The Norwood Scale — Understand Your Hair Loss Stage"
        subtitle="Identify where you are on the seven-stage Norwood–Hamilton scale to understand the right technique and graft range for your case."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Classification system
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            What is the Norwood–Hamilton scale?
          </h2>
          <div className="mt-6 space-y-5 text-primary/80 leading-relaxed">
            <p>
              The Norwood–Hamilton scale is the standard classification system surgeons use
              worldwide to describe male pattern hair loss. Hamilton introduced the original system
              in 1951 and Dr O&apos;Tar Norwood refined it in 1975 into the modern 7-stage scale.
            </p>
            <p>
              Each stage corresponds to a characteristic pattern of recession at the hairline and
              crown. The scale lets surgeons, dermatologists and patients communicate clearly about
              the level of hair loss, the typical treatment options and the realistic graft count
              required for surgical restoration.
            </p>
            <p>
              Importantly, the scale describes pattern, not speed. Two men at NW3 can be progressing
              at very different rates — which is why we combine the scale with photographic
              tracking, family history and donor assessment before recommending surgery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              The 7 stages
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Find your stage
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg hover:border-secondary transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-secondary">{s.n}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/60 px-2 py-1 rounded-full bg-primary/5">
                    Stage
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-primary leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-primary/75 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full bg-primary text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1">
                    {s.technique}
                  </span>
                  <span className="inline-flex rounded-full bg-accent/15 text-accent-strong text-xs font-semibold px-3 py-1">
                    {s.grafts} grafts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Self-assessment
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            How to identify your Norwood stage
          </h2>
        </div>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((t, i) => (
            <li key={t.title} className="rounded-2xl bg-white border border-soft/40 p-6">
              <div className="text-3xl font-extrabold text-secondary/30">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-primary">{t.title}</h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              For women
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              The Ludwig scale for female hair loss
            </h2>
            <p className="mt-4 text-primary/80 leading-relaxed">
              Female pattern hair loss usually appears as diffuse thinning along the parting line
              rather than receding from the temples. The Ludwig scale classifies this into three
              stages — mild (visible widening of the parting), moderate (clear scalp visibility on
              top), and severe (significant top thinning with hairline preserved).
            </p>
            <p className="mt-3 text-primary/80 leading-relaxed">
              At Istanbul Care we use the Ludwig scale alongside trichology assessment for every
              female patient and recommend the best approach — medical, surgical, or combined.
            </p>
          </div>
        </div>
      </section>

      <FAQAccordion items={faq} eyebrow="Norwood scale FAQ" title="Common questions about the Norwood scale" />

      <ContactCTA
        heading="Not sure what stage you're at?"
        subtitle="Send us photos from a few angles and we'll classify your stage and recommend a plan within 24 hours."
        showMessage
      />
    </>
  );
}
