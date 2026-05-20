import type { Metadata } from 'next';
import TechniquePage, { type TechniqueData } from '@/components/TechniquePage';

export const metadata: Metadata = {
  title: 'DHI Hair Transplant in Turkey | Istanbul Care',
  description:
    'DHI (Direct Hair Implantation) at Istanbul Care — Choi pen-based technique for maximum density and natural results. All-inclusive packages from $1,990.'
};

const data: TechniqueData = {
  slug: 'dhi',
  name: 'DHI Hair Transplant',
  shortName: 'DHI',
  hero: {
    title: 'DHI Hair Transplant — Direct, Dense, Natural',
    subtitle:
      'Direct Hair Implantation uses specialised Choi pens to extract and implant follicles in a single motion, with no pre-made incisions. The result is some of the densest, most natural-looking transplants available today.',
    stats: [
      { label: 'Graft range', value: '2,000–4,500' },
      { label: 'Duration', value: '6–9 hours' },
      { label: 'Recovery', value: '7–10 days' }
    ]
  },
  whatIsIt: {
    paragraphs: [
      'DHI, or Direct Hair Implantation, is a refinement of the FUE method developed in the late 1990s by the DHI Global Medical Group. Unlike traditional FUE, where the surgeon first creates incisions in the recipient area and then places extracted grafts into those incisions, DHI uses a single hollow-tipped instrument — the Choi implanter pen — to load, position and implant each follicle in one continuous step.',
      'This single-step approach has two important consequences. First, the time each graft spends outside the body is dramatically shorter, which is associated with higher follicle survival rates. Second, the surgeon has direct, real-time control over the angle, direction and depth of every implanted hair, producing a hairline that follows the natural growth pattern of your existing hair.',
      'DHI is particularly well-suited to patients who want maximum density per square centimetre, those who need precise hairline reconstruction, and women who prefer not to shave the recipient area. Because the Choi pen creates a small puncture that the graft fills immediately, surrounding healthy hairs are usually undisturbed during implantation.',
      'At Istanbul Care, every DHI procedure is performed under the direct supervision of a board-certified surgeon. Sessions are limited to a maximum of 4,500 grafts in a single day to preserve graft viability, and we typically deploy 4–6 Choi pens in rotation throughout the surgery to maintain a steady, controlled implantation rhythm.',
      'DHI is a permanent solution: transplanted follicles are extracted from the donor area at the back and sides of the scalp, which is genetically resistant to the hormonal causes of male pattern baldness. Once these follicles take root in the recipient area, they grow for life.'
    ],
    specs: [
      { label: 'Technique', value: 'Choi implanter pens' },
      { label: 'Ideal Candidate', value: 'Norwood II–V' },
      { label: 'Graft Range', value: '2,000–4,500' },
      { label: 'Duration', value: '6–9 hours' },
      { label: 'Anaesthesia', value: 'Local + sedation' },
      { label: 'Recovery', value: '7–10 days' },
      { label: 'Scarring', value: 'Virtually invisible' },
      { label: 'Success Rate', value: '95–98%' },
      { label: 'Price From', value: '$2,190' }
    ]
  },
  howItWorks: [
    {
      n: 1,
      title: 'Consultation & hairline design',
      description:
        'On the morning of surgery, your surgeon photographs and measures your scalp, agrees the new hairline shape and density goals with you, and marks the recipient area in detail.'
    },
    {
      n: 2,
      title: 'Donor area preparation',
      description:
        'The donor strip at the back of the scalp is shaved and cleaned. Local anaesthetic is administered, after which you should feel only pressure, never sharp pain.'
    },
    {
      n: 3,
      title: 'Follicle extraction',
      description:
        'Using a sub-1mm micromotor punch, the surgeon extracts individual follicular units one by one. Each graft is inspected under magnification and sorted by the number of hairs it contains.'
    },
    {
      n: 4,
      title: 'Choi pen loading',
      description:
        'Specialist technicians load each follicle into the hollow needle of a Choi pen. Pen tip diameters range from 0.6mm to 1.0mm depending on the size of the graft.'
    },
    {
      n: 5,
      title: 'Direct implantation',
      description:
        'The surgeon implants each follicle at a precisely chosen angle, direction and depth in a single motion. Single-hair grafts are placed at the hairline; thicker 2–3 hair grafts go behind for density.'
    },
    {
      n: 6,
      title: 'Aftercare & dressing',
      description:
        'Antiseptic solution and a protective headband are applied. You receive your aftercare kit, written instructions and the team’s direct WhatsApp line for follow-up.'
    }
  ],
  advantages: [
    {
      title: 'Maximum density per cm²',
      description:
        'DHI consistently achieves the highest density implantation — up to 60 grafts/cm² in the hairline zone — which translates to a fuller, more natural look from the front.'
    },
    {
      title: 'No pre-made incisions',
      description:
        'Because the Choi pen makes the channel and implants the graft simultaneously, there is no separate "slit" stage. Surrounding hairs are less disturbed.'
    },
    {
      title: 'Precise angle and direction',
      description:
        'The surgeon controls the exit angle of every implanted follicle, which is critical for designing a hairline that grows in the right direction.'
    },
    {
      title: 'Minimal trauma to existing hair',
      description:
        'DHI is the preferred method when transplanting between existing hairs — useful for unshaven sessions and for women who do not want to shave.'
    },
    {
      title: 'Shorter time outside the body',
      description:
        'Each graft spends less time outside the scalp compared to traditional FUE, which is associated with higher follicle survival.'
    },
    {
      title: 'Faster healing of recipient site',
      description:
        'Smaller channel size means quicker scabbing, faster scab fall-off, and less visible redness in the first two weeks.'
    }
  ],
  disadvantages: [
    {
      title: 'Longer operative time',
      description:
        'DHI takes longer than classic FUE for the same graft count, because every implantation step is hand-controlled. A 3,500-graft DHI typically takes 8–9 hours.'
    },
    {
      title: 'Higher price than FUE',
      description:
        'DHI requires more surgical time and a larger trained team, so packages are typically 15–25% more expensive than equivalent FUE sessions.'
    },
    {
      title: 'Donor area still shaved',
      description:
        'Although the recipient area can be left unshaven, the donor zone at the back of the head must be trimmed for extraction. This regrows in 2–4 weeks.'
    },
    {
      title: 'Limited for very high graft counts',
      description:
        'Because of the time required per graft, mega-sessions above 4,500 grafts may be better handled with FUE or Sapphire FUE.'
    }
  ],
  candidates: {
    perfect: [
      'Men with Norwood stage II–V hair loss with a stable donor area',
      'Women with diffuse thinning who want to avoid shaving the recipient zone',
      'Patients who prioritise maximum density in the front and mid-scalp',
      'Anyone with realistic expectations and good general health',
      'Patients aged 25–65 with at least one year of stable hair loss'
    ],
    mayNeedAlternative: [
      'Advanced Norwood VI–VII with very limited donor supply — FUE may be more efficient',
      'Patients needing 5,000+ grafts in one session — may need to split into stages',
      'Patients with significant medical conditions that limit long surgeries'
    ],
    notSuitable: [
      'Active scalp infection or untreated dermatological conditions',
      'Patients under 22 with progressing hair loss not yet stabilised',
      'Unrealistic expectations of teenage-level density at any age'
    ]
  },
  timeline: [
    {
      stage: 'Day 1–7',
      title: 'Initial healing — scabs and swelling',
      description:
        'Small scabs form around every implanted graft in 24–48 hours. Mild forehead swelling can appear on day 3–4 and resolves by day 7. You will be using a gentle saline spray and the specialised shampoo from your aftercare kit.'
    },
    {
      stage: 'Week 2–4',
      title: 'Shock loss — temporary shedding',
      description:
        'Transplanted hair shafts shed between week 2 and week 6. This is normal and expected — the follicle itself remains in place under the skin and will produce a new hair from month 3 onwards. The recipient area looks smoother during this phase.'
    },
    {
      stage: 'Month 1–3',
      title: 'Dormant phase',
      description:
        'Most patients see little visible change in this period. New hairs are forming inside the follicle but have not yet broken the surface. Resist the temptation to compare yourself to month-12 photos — your timeline is just beginning.'
    },
    {
      stage: 'Month 4–6',
      title: 'New growth becomes visible',
      description:
        'The first new hairs start to appear by month 4. By month 6, you should see noticeable coverage, although the new hairs are still fine and may look wispy. The hairline shape becomes recognisable in this period.'
    },
    {
      stage: 'Month 12+',
      title: 'Final results',
      description:
        'By month 12, approximately 90% of your final density is in place. Final results — including thickening, full pigmentation and density maturation — are typically photographed at month 12–15. From this point, transplanted hairs grow and age like the rest of your hair.'
    }
  ],
  faq: [
    {
      question: 'Does DHI hurt?',
      answer:
        'During the operation, no. Local anaesthesia is administered to both donor and recipient zones at the start, after which you should feel only pressure or vibration. After the anaesthesia wears off, expect mild soreness similar to a sunburn for 24–48 hours, well-controlled by simple oral painkillers.'
    },
    {
      question: 'How many grafts do I need?',
      answer:
        'It depends on your Norwood stage, donor density and the area you want to cover. As a rough guide: 1,500–2,000 grafts for hairline reconstruction, 2,500–3,500 grafts for front and mid-scalp, and 3,500–4,500 for full restoration up to the crown. Our coordinators will give you an exact estimate from your photos.'
    },
    {
      question: 'Can I combine DHI with PRP?',
      answer:
        'Yes — and we recommend it. Platelet-Rich Plasma is offered as part of every Istanbul Care DHI package. PRP delivered immediately after surgery and again at month 1 has been shown to support healing and accelerate follicle activation.'
    },
    {
      question: 'When can I return to work?',
      answer:
        'Most patients return to a desk-based job within 5–7 days. By that time, scabs are starting to fall off and any forehead swelling has resolved. We recommend two weeks before resuming gym sessions, swimming or any activity that involves heavy sweating or sun exposure.'
    },
    {
      question: 'Is DHI permanent?',
      answer:
        'Yes. The transplanted follicles come from the back and sides of your scalp, which is genetically resistant to the androgens that cause male pattern baldness. Once they take root in the recipient area, they typically grow for life.'
    },
    {
      question: 'What is the success rate of DHI?',
      answer:
        'In experienced hands, DHI has a graft survival rate of 95–98%. The remaining 2–5% is normal physiological loss and is already factored into the planning. We photograph at 3, 6 and 12 months — if your result falls below expectations, our touch-up policy covers a corrective session.'
    },
    {
      question: 'How is DHI different from FUE?',
      answer:
        'Both methods extract follicles the same way. The difference is in implantation: FUE requires the surgeon to first cut channels and then place grafts; DHI does both steps simultaneously using a Choi pen. DHI offers tighter density and better angle control; FUE is faster and slightly cheaper for the same graft count.'
    },
    {
      question: 'Do I need to shave my head?',
      answer:
        'The donor area at the back must be shaved short for extraction — this regrows in 2–4 weeks. The recipient area can often be left unshaven for DHI sessions of up to ~2,500 grafts, which is one of DHI’s biggest advantages. For larger sessions, partial shaving is usually needed.'
    },
    {
      question: 'What happens if grafts don’t take?',
      answer:
        'A small percentage of follicles is always lost — this is normal biology. If your overall result is significantly below the expected density at month 12, Istanbul Care’s touch-up guarantee covers a corrective DHI session at no extra surgical cost.'
    },
    {
      question: 'Can women have DHI?',
      answer:
        'Yes. DHI is in fact the preferred technique for many women because the recipient area does not need to be shaved. We design every female case with a dedicated team trained in female pattern hair loss and natural hairline aesthetics.'
    }
  ]
};

export default function Page() {
  return <TechniquePage data={data} />;
}
