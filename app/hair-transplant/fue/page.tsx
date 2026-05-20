import type { Metadata } from 'next';
import TechniquePage, { type TechniqueData } from '@/components/TechniquePage';

export const metadata: Metadata = {
  title: 'FUE Hair Transplant in Turkey | Istanbul Care',
  description:
    'FUE (Follicular Unit Extraction) at Istanbul Care — the gold-standard minimally invasive hair transplant technique. All-inclusive packages from $1,990.'
};

const data: TechniqueData = {
  slug: 'fue',
  name: 'FUE Hair Transplant',
  shortName: 'FUE',
  hero: {
    title: 'FUE Hair Transplant — The Gold Standard, Refined',
    subtitle:
      'Follicular Unit Extraction is the most performed hair restoration procedure in the world. Individual follicles are extracted from the donor area with a micro-punch and placed exactly where they are needed — no linear scar, no stitches, minimal downtime.',
    stats: [
      { label: 'Graft range', value: '2,500–5,500' },
      { label: 'Duration', value: '6–8 hours' },
      { label: 'Recovery', value: '7–10 days' }
    ]
  },
  whatIsIt: {
    paragraphs: [
      'Follicular Unit Extraction, or FUE, is a minimally invasive surgical hair restoration technique introduced into mainstream practice in the early 2000s. The procedure removes individual hair follicles from the donor area at the back and sides of the scalp using a circular punch under 1mm in diameter, then implants those follicles into the recipient area in a carefully designed pattern.',
      'FUE replaced the older FUT "strip" method as the standard of care for a clear reason: it leaves no linear scar. Instead of cutting and removing a strip of scalp, FUE creates thousands of pinpoint micro-extractions across a wide donor zone. Once these heal — typically within 7 days — they become virtually undetectable, even with the hair clipped short.',
      'In experienced hands, FUE offers one of the highest follicle survival rates of any restoration method. At Istanbul Care, we use modern motorised punches with controlled depth and rotation, paired with chilled holding solution that preserves grafts between extraction and implantation. Surgeons inspect every follicle under magnification before it is placed.',
      'A single FUE session can comfortably restore 4,000–5,500 grafts in one day. This makes FUE particularly well-suited to patients with moderate to advanced hair loss who want significant coverage in one trip. Smaller sessions are equally feasible for targeted hairline work, scar camouflage or eyebrow restoration.',
      'Like all transplant techniques, FUE relies on the principle of donor dominance: follicles taken from the genetically stable rim of the scalp retain their resistance to male pattern baldness when moved into the recipient area. Properly performed, FUE is a permanent solution.'
    ],
    specs: [
      { label: 'Technique', value: 'Micro-punch extraction' },
      { label: 'Ideal Candidate', value: 'Norwood II–VI' },
      { label: 'Graft Range', value: '2,500–5,500' },
      { label: 'Duration', value: '6–8 hours' },
      { label: 'Anaesthesia', value: 'Local + sedation' },
      { label: 'Recovery', value: '7–10 days' },
      { label: 'Scarring', value: 'No linear scar' },
      { label: 'Success Rate', value: '95–98%' },
      { label: 'Price From', value: '$1,990' }
    ]
  },
  howItWorks: [
    {
      n: 1,
      title: 'Surgical planning',
      description:
        'On arrival, your surgeon analyses donor density, recipient area and Norwood stage. The hairline is drawn and you approve it before any cutting takes place.'
    },
    {
      n: 2,
      title: 'Donor preparation',
      description:
        'The donor area is shaved to ~1mm and disinfected. Local anaesthetic is delivered with a vibration tool that dampens the initial pricks. The numbed area extends ear to ear.'
    },
    {
      n: 3,
      title: 'Follicle extraction',
      description:
        'A motorised punch under 1mm in diameter cores around each follicular unit, which is then lifted out with fine forceps. Extractions are spread evenly across the donor to avoid visible thinning.'
    },
    {
      n: 4,
      title: 'Channel creation',
      description:
        'Once enough grafts are harvested, the surgeon opens micro-channels in the recipient area at the chosen density, angle and direction. This is where the hairline design comes to life.'
    },
    {
      n: 5,
      title: 'Graft placement',
      description:
        'Trained technicians implant each follicle into a pre-made channel using jeweller forceps. Single-hair grafts go at the hairline; multi-hair units sit behind for fullness.'
    },
    {
      n: 6,
      title: 'Aftercare handover',
      description:
        'A protective headband is fitted and you receive your aftercare kit, written instructions and the team’s WhatsApp number. A scheduled wash is performed the next morning at the clinic.'
    }
  ],
  advantages: [
    {
      title: 'No linear scar',
      description:
        'Unlike FUT, FUE leaves only pinpoint marks across the donor that fade within weeks. You can wear hair very short without visible scarring.'
    },
    {
      title: 'High graft survival',
      description:
        'When performed by experienced surgeons with proper instrumentation, FUE achieves 95–98% follicle survival — comparable to DHI for most cases.'
    },
    {
      title: 'Suitable for large sessions',
      description:
        'FUE handles 4,000–5,500 grafts in one day comfortably — ideal for patients flying in for a single comprehensive procedure.'
    },
    {
      title: 'Fast donor recovery',
      description:
        'Micro-extraction sites heal within 7 days. Most patients return to work in under a week, with the donor area effectively undetectable.'
    },
    {
      title: 'Works for many hair types',
      description:
        'FUE has been refined for straight, wavy, coarse and curly hair. With the correct punch geometry, it works well for Afro-Caribbean and Asian hair.'
    },
    {
      title: 'Lower cost than DHI',
      description:
        'For the same graft count, FUE is typically 15–25% less expensive than DHI because the procedure is faster and requires a slightly smaller team.'
    }
  ],
  disadvantages: [
    {
      title: 'Recipient area must be shaved',
      description:
        'For sessions over ~2,500 grafts, the recipient area is shaved. This is cosmetically inconvenient for some patients during the first 2–3 weeks.'
    },
    {
      title: 'Operator skill matters',
      description:
        'FUE results vary significantly between clinics. A skilled surgeon and properly trained team are essential — beware of "clinics" where unqualified technicians do everything.'
    },
    {
      title: 'Limited unshaven sessions',
      description:
        'Unshaven FUE is possible up to ~2,000 grafts but slower and more expensive. For larger sessions, shaving is the realistic option.'
    },
    {
      title: 'Donor depletion risk',
      description:
        'Aggressive over-harvesting can thin the donor visibly. Reputable clinics extract well below the safe limit (no more than ~25% of donor follicles).'
    }
  ],
  candidates: {
    perfect: [
      'Men with Norwood II–VI hair loss and a healthy donor area',
      'Patients wanting moderate to large coverage in one session',
      'Anyone who plans to wear their hair short and wants no linear scar',
      'Patients with realistic expectations who understand the 12-month timeline',
      'Healthy adults aged 25–70 with stable hair loss'
    ],
    mayNeedAlternative: [
      'Patients prioritising maximum density per cm² — DHI may serve better',
      'Women who want to avoid any shaving — consider unshaven DHI',
      'Very advanced Norwood VII with depleted donor — body hair FUE assessment first'
    ],
    notSuitable: [
      'Active scalp infections or untreated dermatological conditions',
      'Patients under 22 with unstable, ongoing hair loss',
      'Severe medical conditions that contraindicate elective surgery'
    ]
  },
  timeline: [
    {
      stage: 'Day 1–7',
      title: 'Healing and scabbing',
      description:
        'Tiny scabs form at every extraction and implantation site. The first wash is performed at the clinic on day 2. Mild swelling around the forehead is normal between day 3 and day 5 and resolves by day 7.'
    },
    {
      stage: 'Week 2–4',
      title: 'Shock loss begins',
      description:
        'Transplanted hair shafts shed between weeks 2 and 6 — this is normal and expected. The follicle itself remains intact under the skin. The donor area becomes virtually invisible by the end of week 3.'
    },
    {
      stage: 'Month 1–3',
      title: 'Quiet phase',
      description:
        'There is little visible activity in the recipient area during this period. Follicles are regenerating below the surface. Many patients find this phase the most psychologically challenging — patience pays off.'
    },
    {
      stage: 'Month 4–6',
      title: 'Visible new growth',
      description:
        'By month 4, new hairs start to emerge. By month 6, you should see clear coverage although new hairs are still fine and lighter than mature hair. Density continues to build week by week.'
    },
    {
      stage: 'Month 12+',
      title: 'Final density',
      description:
        'Around month 12, approximately 90% of your final result is in place. Hairs continue to thicken and darken until month 15–18. From here, your transplanted hair behaves and ages exactly like the rest of your hair.'
    }
  ],
  faq: [
    {
      question: 'Does FUE hurt?',
      answer:
        'During the procedure, no. Local anaesthesia eliminates sharp pain — you may feel pressure, vibration or a "tugging" sensation. After the anaesthesia wears off, mild soreness lasts 24–48 hours and is easily managed with paracetamol or ibuprofen.'
    },
    {
      question: 'How many grafts will I need?',
      answer:
        'Most male patients need between 2,500 and 4,500 grafts. Hairline-only restoration may need 1,800–2,500; full coverage to the crown often requires 4,000–5,500. Our coordinators give you a tailored estimate from your photos.'
    },
    {
      question: 'Is FUE permanent?',
      answer:
        'Yes. Follicles transplanted from the back and sides of the scalp retain their genetic resistance to male pattern baldness. Once they take root in the recipient area, they grow for life.'
    },
    {
      question: 'When can I return to work?',
      answer:
        'Office work: 5–7 days. By that point, the donor is largely healed and the recipient scabs are falling off. Physically demanding jobs and gym sessions: at least two weeks. Swimming and saunas: four weeks.'
    },
    {
      question: 'Will I have a scar?',
      answer:
        'No linear scar. FUE leaves only sub-millimetre pinpoint marks that fade within 2–4 weeks. After healing, the donor area is virtually undetectable even at very short hair lengths.'
    },
    {
      question: 'How is FUE different from DHI?',
      answer:
        'Both extract follicles identically. The difference is implantation: FUE creates channels first, then technicians place grafts; DHI does both steps with a Choi pen in one motion. DHI offers tighter density and better unshaven options; FUE is faster and slightly cheaper for the same graft count.'
    },
    {
      question: 'Can I combine FUE with PRP?',
      answer:
        'Yes. PRP is included in every Istanbul Care FUE package and is applied immediately after the procedure. A follow-up PRP session at month 1 helps support healing and graft activation.'
    },
    {
      question: 'What is the success rate?',
      answer:
        'In experienced hands, follicle survival is 95–98%. Outcomes that fall significantly below expected density at month 12 are covered by our touch-up guarantee at no surgical cost.'
    },
    {
      question: 'Do I need to shave my head?',
      answer:
        'For sessions over ~2,500 grafts, full shaving is standard. For smaller sessions, partial shaving or unshaven approaches are possible — discuss with your coordinator. Donor area shaving is always required.'
    },
    {
      question: 'How long do FUE results take to show?',
      answer:
        'Visible growth starts around month 4. By month 6 you have significant coverage. Around month 12, you reach about 90% of final density, with continued thickening up to month 15–18.'
    }
  ]
};

export default function Page() {
  return <TechniquePage data={data} />;
}
