import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Hair Density Estimator | Istanbul Care',
  description: 'Understand hair density, follicular units per cm², and how donor density affects your hair transplant planning.'
};

const categories = [
  { range: '< 60', label: 'Low', desc: 'Fewer than 60 follicular units per cm² is considered low density. Transplant planning is conservative; the surgeon may suggest staged sessions or alternative techniques.', tone: 'primaryDark' },
  { range: '60–80', label: 'Average', desc: 'The typical range for adult scalps. Provides a comfortable donor reserve for most Norwood III–V cases.', tone: 'secondary' },
  { range: '80–100', label: 'High', desc: 'Above-average donor density. Allows for larger sessions and more aggressive coverage planning.', tone: 'accent' },
  { range: '100+', label: 'Very High', desc: 'Exceptional density. Patients with this profile can comfortably support 5,000+ graft sessions with minimal visible donor thinning.', tone: 'accent' }
];

const factors = [
  { title: 'Recipient density target', body: 'How dense the result should look — 40 grafts/cm² for natural, 50–55 for cosmetic density at the hairline.' },
  { title: 'Donor density reserve', body: 'How many follicles you can spare without thinning the donor visibly. Maximum safe extraction is around 25% of donor follicles.' },
  { title: 'Hair thickness', body: 'Thick individual shafts create the impression of higher density. Two patients with identical FU/cm² can look very different if one has thicker hair.' },
  { title: 'Scalp colour contrast', body: 'High contrast between hair colour and scalp colour makes thinning more visible and changes the density needed for natural-looking coverage.' }
];

const ethnicity = [
  { group: 'Asian', average: '90 FU/cm²' },
  { group: 'Caucasian', average: '75 FU/cm²' },
  { group: 'Afro-Caribbean', average: '60 FU/cm²' },
  { group: 'Mediterranean', average: '85 FU/cm²' }
];

const faq = [
  { q: 'What is "follicular unit density"?', a: 'It\'s the number of natural follicular units (groups of 1–4 hairs) per square centimetre of scalp. It\'s a more accurate measure than counting individual hairs.' },
  { q: 'Can I measure my own density?', a: 'Not accurately at home. Clinics use trichoscopic magnification to count FU/cm² in multiple zones — front, mid, crown and donor — for an honest baseline.' },
  { q: 'How does density affect the result?', a: 'A higher donor density gives the surgeon more grafts to work with. A higher recipient density target gives a fuller-looking result.' },
  { q: 'Is low donor density a deal-breaker?', a: 'Not always. Smaller sessions, careful planning and possibly body hair FUE can still deliver good outcomes for low-density patients.' },
  { q: 'Does density change with age?', a: 'Hair density gradually decreases with age. Most donor zones remain stable, but mid-scalp and crown density can fall significantly over decades.' },
  { q: 'Can PRP increase density?', a: 'PRP can support follicle activity in existing thinning areas and may increase visible density modestly, but it doesn\'t create new follicles.' },
  { q: 'What is "miniaturisation"?', a: 'It\'s the gradual thinning of individual hair shafts before they fall out completely — an early sign of pattern hair loss visible under magnification.' },
  { q: 'How does the surgeon decide density per cm² for me?', a: 'Based on your donor reserve, the size of the recipient area, and the goal: natural coverage (40 FU/cm²) vs cosmetic density (50–55 FU/cm²).' }
];

const toneClass: Record<string, string> = {
  primaryDark: 'bg-primary-dark text-white',
  secondary: 'bg-secondary text-white',
  accent: 'bg-accent text-white'
};

export default function HairDensityPage() {
  return (
    <>
      <PageHero
        eyebrow="Free clinic tool"
        title="Hair Density Estimator"
        subtitle="Understand follicular unit density, why it matters for your hair transplant, and where your own scalp likely falls."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Basics
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            What is hair density?
          </h2>
          <div className="mt-6 space-y-5 text-primary/80 leading-relaxed">
            <p>
              Hair density refers to the number of follicular units (FU) per square centimetre of
              scalp. The typical adult scalp has 60–100 FU/cm², with significant variation between
              individuals and across different parts of the head.
            </p>
            <p>
              For hair transplant planning, density matters in two places: the donor area
              (how many grafts can be safely extracted) and the recipient area (how many can be
              implanted to create a natural-looking result).
            </p>
            <p>
              The surgeon balances these two figures. Over-harvest the donor and you create visible
              thinning at the back of the head. Plan recipient density too low and the result looks
              wispy. Plan it too high and follicles compete for blood supply and survival rates fall.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Categories
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Density classification
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg transition-shadow"
              >
                <span
                  className={
                    'inline-flex text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ' +
                    toneClass[c.tone]
                  }
                >
                  {c.label}
                </span>
                <div className="mt-3 text-3xl font-bold text-primary">{c.range}</div>
                <div className="text-xs text-primary/60 mt-1">FU per cm²</div>
                <p className="mt-4 text-sm text-primary/75 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Planning
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            How density affects your treatment plan
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {factors.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white border border-soft/40 p-6">
              <div className="h-10 w-10 rounded-lg brand-gradient" />
              <h3 className="mt-4 text-base font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Reference data
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Average density by ethnicity
            </h2>
            <p className="mt-3 text-primary/70">
              Approximate population averages. Individual variation is significant.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-soft/40 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-3 text-sm font-semibold uppercase tracking-wider">Group</th>
                  <th className="px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Average donor density
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-soft/40">
                {ethnicity.map((row) => (
                  <tr key={row.group}>
                    <td className="px-5 py-4 text-primary font-semibold">{row.group}</td>
                    <td className="px-5 py-4 text-primary/80">{row.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQAccordion items={faq} eyebrow="Hair density FAQ" title="Common questions about hair density" />

      <ContactCTA
        heading="Want your own density measured?"
        subtitle="Send us close-up photos of your scalp and our team will estimate your donor density and graft potential."
        showMessage
      />
    </>
  );
}
