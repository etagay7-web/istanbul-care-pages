import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Beard Graft Calculator | Istanbul Care',
  description: 'Plan the grafts needed for a full beard, moustache, sideburns or goatee. Zone-by-zone estimates with realistic ranges.'
};

const zones = [
  { zone: 'Full beard build', range: '2,500–3,500 grafts', desc: 'Starting from sparse or no beard hair, designing a complete beard from cheek to chin.' },
  { zone: 'Cheek and jawline fill', range: '1,200–2,000 grafts', desc: 'Filling in cheek and jawline for connected, fuller coverage where genetic growth is patchy.' },
  { zone: 'Moustache', range: '300–700 grafts', desc: 'Adding density and shape to the upper lip area. Hairs are placed at very flat angles.' },
  { zone: 'Goatee and chin', range: '600–1,200 grafts', desc: 'Creating or thickening the chin and goatee zone. A common patchy area for many men.' },
  { zone: 'Sideburns', range: '300–500 grafts per side', desc: 'Restoring or reshaping sideburns to match desired face frame.' },
  { zone: 'Scar camouflage', range: '150–500 grafts', desc: 'Filling in acne scars, surgery scars or traumatic scars in the beard area.' }
];

const process = [
  {
    n: 1,
    title: 'Beard design',
    body: 'You and the surgeon agree on shape, density and growth direction. Stencils mark each zone before any cutting begins.'
  },
  {
    n: 2,
    title: 'Donor and graft selection',
    body: 'Single-hair grafts are selected from the scalp donor zone for natural, fine beard appearance. Multi-hair units are excluded.'
  },
  {
    n: 3,
    title: 'Implantation',
    body: 'Each single-hair graft is placed at the nearly-flat angle of natural beard growth. The surgeon supervises angle continuously.'
  },
  {
    n: 4,
    title: 'Aftercare',
    body: 'Saline mist and gentle moisturising during the first week. No shaving for 4 weeks; trim only with scissors at week 4–6.'
  }
];

const candidates = [
  { tone: 'accent', title: 'Perfect candidate', items: ['Genetically patchy beard with stable donor scalp', 'Acne or surgical scarring in beard area', 'Wants reshaping or density rather than complete new beard', 'Realistic expectations about growth speed and shape'] },
  { tone: 'secondary', title: 'May need alternative', items: ['Very limited scalp donor density', 'Active acne in beard zone — settle medically first', 'Wants a beard volume the donor cannot support'] },
  { tone: 'primaryDark', title: 'Not suitable', items: ['Active facial skin infections or untreated dermatitis', 'Severe medical conditions contraindicating elective surgery', 'Unrealistic expectations about a 5,000-graft beard from limited donor'] }
];

const faq = [
  { q: 'How many grafts does a beard transplant need?', a: 'It depends on your goal: 800–1,500 for light filling, 1,500–2,500 for jawline and cheek density, and 2,500–3,500 for a complete new beard design.' },
  { q: 'Will my beard look natural?', a: 'Yes — when single-graft FUE is used with correct angles and density variation. Most patients\' barbers cannot tell. The key is single grafts and irregular natural-looking density distribution.' },
  { q: 'How long is the procedure?', a: 'Typically 4–6 hours, depending on graft count. Most patients fly in the evening before, have surgery the next day, and fly home 24–48 hours later.' },
  { q: 'When can I shave again?', a: 'No shaving in the beard area for 4 weeks minimum. Electric trimmer from week 4. Wet shaving from month 3.' },
  { q: 'Will transplanted beard hairs grow grey?', a: 'They follow your natural ageing pattern. If your beard would have gone grey, the transplanted hairs will too — on the same timeline.' },
  { q: 'Is the result permanent?', a: 'Yes. Once transplanted, beard follicles grow continuously for life like any other beard hair. They will need regular trimming.' },
  { q: 'Can I have a beard transplant if I\'m bald?', a: 'Yes — provided your remaining donor at the back and sides of the scalp has enough density to support the graft count needed.' },
  { q: 'What is the success rate?', a: 'In experienced hands, beard transplant has a 94–97% follicle survival rate. Outcomes below expected at month 12 are covered by our touch-up guarantee.' }
];

const toneClass: Record<string, { bg: string; text: string }> = {
  accent: { bg: 'bg-accent', text: 'text-accent-strong' },
  secondary: { bg: 'bg-secondary', text: 'text-secondary' },
  primaryDark: { bg: 'bg-primary-dark', text: 'text-primary-dark' }
};

export default function BeardCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free clinic tool"
        title="Beard Graft Calculator"
        subtitle="Plan the grafts you need for a beard build, jawline fill, moustache or goatee. Zone-by-zone realistic ranges."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            About beard transplants
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            What a beard transplant actually involves
          </h2>
          <div className="mt-6 space-y-5 text-primary/80 leading-relaxed">
            <p>
              A beard transplant moves single-hair follicles from the back and sides of the scalp
              into the beard area: cheeks, jawline, chin, moustache and sideburns. The technique
              is FUE, the same as a scalp transplant, but with critical differences in graft
              selection, placement angle and density planning.
            </p>
            <p>
              Almost all beard transplants use single-hair grafts only. Multi-hair follicular
              units that look natural on the scalp would look unnatural and doll-like in a beard.
              Each graft is hand-sorted to select singles and placed individually at the precise
              angle of natural growth — typically nearly parallel to the skin surface.
            </p>
            <p>
              Reasons men seek beard transplants vary widely: genetically patchy growth, acne or
              surgical scarring, beard area trauma, or simply wanting a fuller, more structured
              beard than they were born with. All are valid and all are routinely treatable.
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
              Graft estimates by beard zone
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
            Procedure
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            How a beard transplant works
          </h2>
        </div>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((s) => (
            <li key={s.n} className="rounded-2xl bg-white border border-soft/40 p-6">
              <div className="text-3xl font-extrabold text-secondary/30">
                {String(s.n).padStart(2, '0')}
              </div>
              <h3 className="mt-2 text-base font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
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

      <FAQAccordion items={faq} eyebrow="Beard transplant FAQ" title="Common questions about beard transplants" />

      <ContactCTA
        heading="Get a beard plan from our team"
        subtitle="Send us photos of your current beard and describe your goals. We'll send a graft estimate and design proposal."
        showMessage
        defaultService="Beard Transplant"
      />
    </>
  );
}
