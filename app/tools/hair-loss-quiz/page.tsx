import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Hair Loss Quiz | Istanbul Care',
  description: 'Identify the cause of your hair loss — male pattern, female pattern, alopecia areata, telogen effluvium and more.'
};

const causes = [
  {
    title: 'Male Pattern Hair Loss',
    desc: 'Androgenetic alopecia is the most common cause of hair loss in men, driven by a genetic sensitivity of follicles to dihydrotestosterone (DHT). It typically begins with temple recession and crown thinning between ages 20 and 50 and is progressive without treatment. Permanent restoration is possible through DHI or FUE surgery, often supported by finasteride and PRP.',
    treatable: 'Yes — medical and surgical'
  },
  {
    title: 'Female Pattern Hair Loss',
    desc: 'A hereditary, diffuse thinning along the parting line and the top of the scalp, usually preserving the front hairline. Often appears or accelerates around menopause. Treatment combines topical minoxidil, PRP and — in selected cases — surgical restoration with no-shave DHI.',
    treatable: 'Yes — medical and selective surgery'
  },
  {
    title: 'Alopecia Areata',
    desc: 'An autoimmune condition where the immune system attacks individual follicles, creating round, smooth bald patches. It can affect anyone and may resolve spontaneously, recur or progress to total scalp loss (alopecia totalis). Treatment is dermatological — surgery is not indicated while the disease is active.',
    treatable: 'Dermatology — not surgical'
  },
  {
    title: 'Telogen Effluvium',
    desc: 'A temporary diffuse shedding triggered by a stressor — childbirth, illness, severe diet, surgery, medication or major emotional stress. Hair shifts en masse into the resting phase and sheds about 3 months later. Almost always reversible once the trigger resolves; surgery is not appropriate.',
    treatable: 'Resolves on its own'
  },
  {
    title: 'Traction Alopecia',
    desc: 'Loss caused by long-term tension on follicles — tight braids, weaves, cornrows, ponytails or extensions. Initially reversible if tension is removed early, but persistent traction causes permanent follicle damage. Established traction alopecia can be restored with DHI or FUE once the original habit has stopped.',
    treatable: 'Yes — if habit stops; surgery for established cases'
  },
  {
    title: 'Nutritional Deficiency',
    desc: 'Iron deficiency, low ferritin, vitamin D deficiency, low protein intake or zinc deficiency can all cause diffuse shedding. A blood panel quickly identifies the cause. Correcting the deficiency typically restores normal hair growth within 6–12 months — surgery is not indicated.',
    treatable: 'Yes — diet and supplementation'
  }
];

const permanentSigns = [
  {
    title: 'Years of progressive thinning',
    body: 'If the same area has been thinning slowly for 3+ years and no medical condition explains it, the loss is most likely permanent androgenetic alopecia.'
  },
  {
    title: 'Family pattern matches',
    body: 'When your hair loss pattern mirrors that of your father, maternal grandfather or uncles, this strongly suggests genetic pattern hair loss.'
  },
  {
    title: 'Miniaturisation visible under magnification',
    body: 'Existing hairs becoming progressively finer and shorter — visible under trichoscope — is a hallmark of permanent pattern loss.'
  },
  {
    title: 'No regrowth despite stable conditions',
    body: 'Loss that persists when you are healthy, well-nourished, sleeping well and not under acute stress is unlikely to be temporary.'
  }
];

const treatments = [
  {
    name: 'Minoxidil',
    type: 'Topical',
    works: 'Improves blood flow and prolongs the growth phase. Maintains and modestly improves existing density.',
    bestFor: 'Early to moderate pattern loss; women and men.'
  },
  {
    name: 'Finasteride',
    type: 'Oral medication',
    works: 'Blocks the enzyme that converts testosterone to DHT, halting progression in the majority of male users.',
    bestFor: 'Men with active male pattern hair loss.'
  },
  {
    name: 'PRP (Platelet-Rich Plasma)',
    type: 'In-clinic injection',
    works: 'Concentrated growth factors from your own blood support follicle function and density of existing hair.',
    bestFor: 'Add-on to surgery or medical treatment; women.'
  },
  {
    name: 'Hair Transplant',
    type: 'Surgery',
    works: 'Moves DHT-resistant follicles from the donor area into thinning recipient areas. Permanent and natural-looking.',
    bestFor: 'Stable patterned loss with sufficient donor.'
  }
];

const faq = [
  { q: 'How can I tell if my hair loss is temporary or permanent?', a: 'Track changes over 6–12 months with consistent photos. Sudden, even shedding that improves on its own is usually temporary. Slow, patterned thinning at the temples or crown is usually permanent and may benefit from surgical restoration.' },
  { q: 'Will a blood test help diagnose my hair loss?', a: 'Yes. Ferritin, iron, vitamin D, B12, zinc, thyroid panel (TSH, T3, T4) and testosterone in women are the standard tests. Many cases of unexplained shedding are easily corrected once the deficiency is identified.' },
  { q: 'Can stress alone cause hair loss?', a: 'Major emotional or physical stress can trigger telogen effluvium — a diffuse shedding 2–3 months later. It almost always resolves on its own once the underlying stress eases.' },
  { q: 'Is alopecia areata permanent?', a: 'It can be unpredictable. Many patches regrow within 12 months. Dermatology treatment with topical or injected steroids can help. Surgery is not appropriate while the condition is active.' },
  { q: 'Do shampoos and supplements really help?', a: 'They have limited effect on genetic hair loss. Iron and vitamin D supplements help correct deficiencies but won\'t reverse pattern loss. Save your money for evidence-based options.' },
  { q: 'Can washing my hair too much cause loss?', a: 'No. Washing hair daily is fine — even helpful — for scalp health. Hair seen in the drain after washing is just hair already shed since the previous wash.' },
  { q: 'When should I see a specialist?', a: 'If you\'ve been losing hair noticeably for more than 3 months, if the pattern is not symmetrical, if scalp is itchy or red, or if you\'re a woman with sudden loss — see a specialist sooner rather than later.' },
  { q: 'Can I combine medication and a hair transplant?', a: 'Yes — and we recommend it for most patients. Finasteride or minoxidil protects your remaining native hair while surgery restores thinning areas. The two work together, not against each other.' }
];

export default function HairLossQuizPage() {
  return (
    <>
      <PageHero
        eyebrow="Free clinic tool"
        title="What's Causing Your Hair Loss?"
        subtitle="Identify the type of hair loss you're dealing with — and the treatment that's most likely to actually help."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Causes
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            The six most common causes of hair loss
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg hover:border-secondary transition-all"
            >
              <h3 className="text-lg font-semibold text-primary">{c.title}</h3>
              <p className="mt-3 text-sm text-primary/75 leading-relaxed">{c.desc}</p>
              <div className="mt-5 inline-flex rounded-full bg-secondary/10 text-primary text-xs font-semibold px-3 py-1.5">
                {c.treatable}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Permanence
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Four signs your hair loss is permanent
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {permanentSigns.map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-white border border-soft/40 p-6">
                <div className="text-3xl font-extrabold text-secondary/30">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-2 text-base font-semibold text-primary leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-primary/75 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Treatment options
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            What works for what
          </h2>
        </div>
        <div className="rounded-2xl bg-white border border-soft/40 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-5 py-3 uppercase tracking-wider">Treatment</th>
                <th className="px-5 py-3 uppercase tracking-wider hidden md:table-cell">Type</th>
                <th className="px-5 py-3 uppercase tracking-wider">How it works</th>
                <th className="px-5 py-3 uppercase tracking-wider hidden md:table-cell">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-soft/40">
              {treatments.map((t) => (
                <tr key={t.name}>
                  <td className="px-5 py-4 font-semibold text-primary">{t.name}</td>
                  <td className="px-5 py-4 text-primary/70 hidden md:table-cell">{t.type}</td>
                  <td className="px-5 py-4 text-primary/80">{t.works}</td>
                  <td className="px-5 py-4 text-primary/70 hidden md:table-cell">{t.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <FAQAccordion items={faq} eyebrow="Hair loss FAQ" title="Common questions about hair loss" />

      <ContactCTA
        heading="Get a proper diagnosis"
        subtitle="Our team will review your photos, family history and symptoms and tell you exactly what's going on."
        showMessage
      />
    </>
  );
}
