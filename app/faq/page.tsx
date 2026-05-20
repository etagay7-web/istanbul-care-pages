import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Istanbul Care',
  description:
    'Everything you need to know about hair transplant in Turkey with Istanbul Care — procedure, recovery, cost and aftercare.'
};

type FAQItem = { q: string; a: string };

const categories: { title: string; items: FAQItem[] }[] = [
  {
    title: 'About Hair Transplant',
    items: [
      {
        q: 'What is a hair transplant?',
        a: 'A hair transplant is a surgical procedure that moves hair follicles from a donor area (usually the back and sides of the scalp) to a recipient area affected by hair loss. At Istanbul Care, we perform DHI and FUE techniques under local anaesthesia as a day procedure.'
      },
      {
        q: 'How does DHI differ from FUE?',
        a: 'FUE extracts follicles and opens channels separately before implanting. DHI uses a Choi pen to extract and implant in one step — no channel opening needed — giving more control over angle and direction.'
      },
      {
        q: 'Is a hair transplant permanent?',
        a: 'Yes. Transplanted follicles are taken from the DHT-resistant donor zone and retain this resistance after transplantation. The results are lifelong, though native hair may continue to thin over time.'
      },
      {
        q: 'At what age can I get a hair transplant?',
        a: 'We recommend waiting until at least 25–28 years old so that hair loss has stabilised. Operating too early risks the transplant looking unnatural as surrounding native hair continues to fall.'
      },
      {
        q: 'How many sessions will I need?',
        a: 'Most patients achieve their desired result in one session. Patients with advanced hair loss (Norwood 6–7) or those wanting maximum density may benefit from a second session 12–18 months later.'
      },
      {
        q: 'Can women get hair transplants?',
        a: 'Yes. We have a dedicated female hair transplant programme. Women typically experience diffuse thinning rather than patterned baldness, requiring a tailored approach with DHI or FUE and partial or no shaving.'
      },
      {
        q: 'Will anyone be able to tell I had a hair transplant?',
        a: 'With modern DHI and FUE techniques performed by experienced surgeons, results are completely natural. There are no linear scars, and the hairline is designed to match your facial structure.'
      },
      {
        q: 'What is the success rate?',
        a: 'Istanbul Care reports a graft survival rate of 95–98% when aftercare instructions are followed correctly.'
      }
    ]
  },
  {
    title: 'Before Your Procedure',
    items: [
      {
        q: "How do I know if I'm a good candidate?",
        a: 'Good candidates have stable hair loss, sufficient donor density, realistic expectations and good general health. We assess this during your free consultation using photos and a medical questionnaire.'
      },
      {
        q: 'What tests do I need before surgery?',
        a: 'We require a basic blood panel (CBC, clotting, blood sugar, hepatitis B/C, HIV). Your coordinator will send you the full list after booking.'
      },
      {
        q: 'Should I stop medications before surgery?',
        a: 'Blood thinners (aspirin, warfarin), finasteride and some supplements should be paused 5–7 days before surgery. Always inform us of all medications during consultation.'
      },
      {
        q: 'How do I choose between DHI and FUE?',
        a: 'DHI is preferred for maximum density, unshaven procedures and crown work. FUE is better for very large sessions or patients needing body hair grafts. Our surgeons will recommend the best option for your case.'
      },
      {
        q: 'How many grafts will I need?',
        a: 'Graft count depends on your Norwood stage, scalp laxity, donor density and target coverage. Use our Graft Calculator for an estimate, or share photos for a personalised assessment.'
      },
      {
        q: 'What should I avoid before surgery?',
        a: 'Avoid alcohol 1 week before, smoking 2 weeks before, blood-thinning medications 5 days before, and heavy exercise 3 days before surgery.'
      },
      {
        q: 'How long should I stay in Istanbul?',
        a: 'We recommend 3–4 nights. Surgery is on day 1, first wash on day 2, final check on day 3, and you can fly home on day 4.'
      }
    ]
  },
  {
    title: 'The Procedure',
    items: [
      {
        q: 'Is the procedure painful?',
        a: 'The local anaesthetic injections cause brief discomfort. Once numb, you feel no pain during surgery. Most patients watch films or sleep through the procedure.'
      },
      {
        q: 'How long does surgery take?',
        a: 'A 2,000–3,000 graft session takes 6–8 hours. Larger sessions of 4,000+ grafts may take 8–10 hours with a lunch break included.'
      },
      {
        q: 'Will I be awake during the procedure?',
        a: 'Yes, under local anaesthesia only. Many patients doze off during the implantation phase. General anaesthesia is not used or recommended for hair transplants.'
      },
      {
        q: 'What happens on surgery day?',
        a: 'You arrive at the clinic, meet your surgeon, design your hairline, complete consent forms, have photos taken, receive local anaesthesia and the procedure begins. Lunch and drinks are provided.'
      },
      {
        q: 'Can I listen to music or watch something during surgery?',
        a: 'Yes — bring headphones and your phone or tablet. Many patients watch films, listen to podcasts or video call family during the procedure.'
      }
    ]
  },
  {
    title: 'Recovery & Aftercare',
    items: [
      {
        q: 'When can I return to work?',
        a: 'Desk workers can return after 5–7 days. Physical or outdoor jobs may require 2 weeks off. We provide a medical certificate if needed.'
      },
      {
        q: 'When will the transplanted hair fall out?',
        a: 'Shock loss (temporary shedding of transplanted hairs) begins around week 2–4. This is completely normal. The follicles remain and regrowth begins at month 3–4.'
      },
      {
        q: 'Is shock loss normal?',
        a: 'Yes — up to 90% of transplanted hairs shed in the first month. This is not a sign of failure. The follicles are dormant and will produce new, permanent hair from month 3 onwards.'
      },
      {
        q: 'When will I see final results?',
        a: '80% of results are visible by month 10–12. Full final results including hair thickness and texture are achieved at 15–18 months post-surgery.'
      },
      {
        q: 'Can I exercise after surgery?',
        a: 'Light walking from day 5. Gym and cardio after 4 weeks. Swimming and contact sports after 6 weeks. Sweating before this can dislodge grafts.'
      },
      {
        q: 'What products should I use after surgery?',
        a: 'We provide a complete aftercare kit including specialised shampoo, lotion, saline spray and written instructions. No other products for the first 2 weeks.'
      }
    ]
  },
  {
    title: 'Cost & Packages',
    items: [
      {
        q: 'How much does a hair transplant cost in Turkey?',
        a: 'Istanbul Care packages start from $1,990 for the Silver all-inclusive package (up to 3,000 grafts). Gold is $2,490 and Platinum is $3,290 with unlimited grafts.'
      },
      {
        q: 'What is included in the all-inclusive package?',
        a: 'Hotel accommodation, airport and clinic transfers, surgery, anaesthesia, aftercare kit, medications, post-op check and lifetime support are all included.'
      },
      {
        q: 'Are there hidden costs?',
        a: 'No. Our quote is the final price. The only additional costs are your flights and personal spending money in Istanbul.'
      },
      {
        q: 'Why is Turkey cheaper than the UK or USA?',
        a: 'Lower operating costs, favourable exchange rates and a competitive medical tourism market allow Turkish clinics to offer world-class results at a fraction of Western prices — not lower quality.'
      },
      {
        q: 'Is it safe to have surgery abroad?',
        a: 'Istanbul Care is a licensed, JCI-accredited clinic with board-certified surgeons. Thousands of international patients are treated safely every year. We provide full aftercare support when you return home.'
      }
    ]
  },
  {
    title: 'Istanbul Care Specific',
    items: [
      {
        q: 'Where is Istanbul Care located?',
        a: 'Our clinic is located in the Şişli district of Istanbul — 30 minutes from Istanbul Airport and 20 minutes from Sabiha Gökçen Airport.'
      },
      {
        q: 'How do I book a consultation?',
        a: 'Click "Free Consultation" on any page, fill in the form or message us on WhatsApp. A coordinator will respond within 2 hours.'
      },
      {
        q: 'Do you provide an aftercare kit?',
        a: 'Yes — every patient receives a complete aftercare kit including specialised shampoo, lotion, saline spray, written instructions and a recovery guide.'
      },
      {
        q: 'What languages do your team speak?',
        a: 'Our coordinators speak English, German, French, Italian, Spanish, Polish, Romanian and Albanian. Surgery is performed by English-speaking surgeons.'
      },
      {
        q: "What happens if I'm not happy with my results?",
        a: 'We offer a 12-month review programme. If results are below expectation due to surgical factors, we discuss corrective options at no charge.'
      }
    ]
  }
];

const totalQuestions = categories.reduce((n, c) => n + c.items.length, 0);

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Help centre"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about hair transplant in Turkey with Istanbul Care."
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
          {totalQuestions} questions answered
        </span>
      </PageHero>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-12 md:py-16">
        <nav aria-label="FAQ categories" className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <a
              key={c.title}
              href={`#${slug(c.title)}`}
              className="inline-flex items-center rounded-full bg-primary/5 hover:bg-secondary hover:text-white text-primary text-sm font-semibold px-4 py-2 transition-colors"
            >
              {c.title}
            </a>
          ))}
        </nav>

        <div className="space-y-14">
          {categories.map((cat, ci) => (
            <section key={cat.title} id={slug(cat.title)} className="scroll-mt-28">
              <div className="mb-6 flex items-end justify-between gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-primary">{cat.title}</h2>
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {String(ci + 1).padStart(2, '0')} · {cat.items.length} questions
                </span>
              </div>
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-xl bg-white border border-soft/40 hover:border-secondary transition-colors overflow-hidden"
                  >
                    <summary className="list-none cursor-pointer select-none flex items-center justify-between gap-4 p-5 hover:bg-primary/5">
                      <h3 className="font-semibold text-primary text-base md:text-lg">{item.q}</h3>
                      <span
                        aria-hidden
                        className="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-full bg-primary/5 text-primary text-lg transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 -mt-1 text-sm md:text-base text-primary/80 leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <ContactCTA
        heading="Still have a question?"
        subtitle="Drop us a message and a coordinator will reply within 24 hours."
        showMessage
        messageLabel="Your question"
      />
    </>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
