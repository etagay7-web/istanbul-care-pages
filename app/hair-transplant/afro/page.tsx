import type { Metadata } from 'next';
import TechniquePage, { type TechniqueData } from '@/components/TechniquePage';

export const metadata: Metadata = {
  title: 'Afro Hair Transplant in Turkey | Istanbul Care',
  description:
    'Afro hair transplant at Istanbul Care — specialised punches and surgeons trained in afro-textured hair for natural-looking, high-yield results.'
};

const data: TechniqueData = {
  slug: 'afro',
  name: 'Afro Hair Transplant',
  shortName: 'Afro Hair Transplant',
  hero: {
    title: 'Afro Hair Transplant — Curl-Specific Surgery for Curl-Specific Hair',
    subtitle:
      'Afro-textured follicles curl below the skin, not just above it. Our specialist team uses larger-diameter punches, slower extraction rhythms and surgeons trained in textured hair to deliver high graft yields with no compromise on naturalness.',
    stats: [
      { label: 'Graft range', value: '2,500–5,000' },
      { label: 'Duration', value: '7–9 hours' },
      { label: 'Recovery', value: '10–14 days' }
    ]
  },
  whatIsIt: {
    paragraphs: [
      'Afro-textured hair presents a specific surgical challenge that is often underestimated by general hair transplant clinics. Below the surface of the skin, the follicle continues to curl rather than running straight down — meaning a standard 0.8mm punch aligned on the visible hair direction will frequently miss the actual follicle path, transecting grafts and reducing yield.',
      'For this reason, Afro hair transplantation requires specifically adapted instruments and technique. At Istanbul Care, Afro cases are performed with larger-diameter punches (typically 1.0–1.2mm rather than 0.7–0.9mm), a slower extraction rhythm and direct surgeon involvement during every extraction — not just supervision.',
      'The benefits of correctly performed Afro FUE or DHI are substantial. Afro hair has extremely high coverage power per graft — the spiral curl creates the visual impression of much more hair than the underlying graft count. A 2,500-graft Afro session can produce coverage equivalent to a 3,500-graft straight-hair session.',
      'Common reasons our patients seek Afro hair restoration include traction alopecia from braids, weaves or tight cornrows; central centrifugal cicatricial alopecia (in selected non-active cases); receding temples; and standard male pattern baldness. Each requires a different assessment, and not every cause is suitable for surgery.',
      'Pre-operative assessment is critical for textured hair. We confirm donor density, evaluate any history of keloid scarring (more common in some patients), assess curl type and follicle geometry from close-up photos, and rule out active scarring alopecias that contraindicate surgery. Honest screening protects long-term outcomes.'
    ],
    specs: [
      { label: 'Technique', value: 'Curl-adapted FUE / DHI' },
      { label: 'Ideal Candidate', value: 'Stable hair loss, no keloids' },
      { label: 'Graft Range', value: '2,500–5,000' },
      { label: 'Duration', value: '7–9 hours' },
      { label: 'Anaesthesia', value: 'Local + sedation' },
      { label: 'Recovery', value: '10–14 days' },
      { label: 'Scarring', value: 'Minimal (keloid risk reviewed)' },
      { label: 'Success Rate', value: '90–95%' },
      { label: 'Price From', value: '$2,490' }
    ]
  },
  howItWorks: [
    {
      n: 1,
      title: 'Curl assessment',
      description:
        'High-resolution photos of donor and recipient zones, combined with a microscopic donor scan, let the surgeon estimate follicle curl angle below the skin before any cutting takes place.'
    },
    {
      n: 2,
      title: 'Keloid and skin review',
      description:
        'We review history of keloid scarring, prior procedures and skin reactivity. Test punches may be taken before surgery if your history requires it.'
    },
    {
      n: 3,
      title: 'Larger-punch extraction',
      description:
        'Surgeons use 1.0–1.2mm punches with slower rotation and shorter cycles to follow the natural curl of each follicle, minimising transection.'
    },
    {
      n: 4,
      title: 'Microscopic sorting',
      description:
        'Every graft is inspected under magnification. Damaged grafts are flagged and not implanted. This protects density and survival.'
    },
    {
      n: 5,
      title: 'Channel or DHI placement',
      description:
        'Hairline channels are opened at the precise angle of natural curl. For DHI, Choi pens implant directly. Single hairs line the front; double and triple hairs build density behind.'
    },
    {
      n: 6,
      title: 'Extended aftercare',
      description:
        'Afro skin sometimes shows pigmentation changes during healing. Our aftercare kit includes a vitamin E and panthenol regimen to support even skin recovery alongside the standard saline protocol.'
    }
  ],
  advantages: [
    {
      title: 'High coverage power per graft',
      description:
        'Curl creates visual coverage that straight hair simply cannot match. Afro patients often need fewer grafts than equivalent straight-hair Norwood stages for the same visual outcome.'
    },
    {
      title: 'Specialist surgical team',
      description:
        'Surgeons trained specifically on textured hair manage every Afro case. This is not a delegated procedure — surgeon involvement is direct from extraction to implantation.'
    },
    {
      title: 'Excellent for traction alopecia',
      description:
        'When the underlying habit (braids, weaves, cornrows) has been corrected and the alopecia has stabilised, results in traction alopecia restoration are often outstanding.'
    },
    {
      title: 'No linear scar',
      description:
        'Afro FUE leaves only pinpoint marks in the donor that fade within weeks. Sapphire blades may be used for the recipient channels for the same density benefits as classic Sapphire FUE.'
    },
    {
      title: 'Strong donor reserve',
      description:
        'Most Afro patients have excellent donor density at the back of the scalp, which provides large reserves for both initial surgery and any future maintenance.'
    },
    {
      title: 'Permanent result',
      description:
        'Once Afro grafts take root, they grow for life with their original texture and curl pattern intact.'
    }
  ],
  disadvantages: [
    {
      title: 'Slightly lower survival vs straight hair',
      description:
        'Even with curl-adapted technique, follicle survival is 2–4% lower than equivalent straight-hair FUE on average, due to the geometry challenges of curl extraction.'
    },
    {
      title: 'Longer operative time',
      description:
        'Slower extraction rhythm means total surgical time is longer than equivalent straight-hair cases. Expect 7–9 hours for 3,000 grafts.'
    },
    {
      title: 'Keloid scarring risk',
      description:
        'A small percentage of patients are predisposed to keloid scarring. We screen for this before surgery and may decline cases where the risk is unacceptably high.'
    },
    {
      title: 'Limited choice of clinics globally',
      description:
        'Many transplant clinics — including some "advertised" Afro clinics — do not actually have surgeons trained in textured hair. Vet every choice carefully.'
    }
  ],
  candidates: {
    perfect: [
      'Stable male/female pattern hair loss with strong Afro donor density',
      'Stabilised traction alopecia where the causal habit has been corrected',
      'Receding temples and frontal hairline reconstruction',
      'No history of keloid scarring after minor cuts or piercings',
      'Healthy adults aged 25–60 with realistic expectations'
    ],
    mayNeedAlternative: [
      'Active early-stage scarring alopecia — settle medically first then re-assess',
      'Borderline donor density — body hair FUE assessment first',
      'History of small keloids — test punch before commitment'
    ],
    notSuitable: [
      'Active scarring alopecia (CCCA still progressing, LPP, FFA)',
      'Strong history of large keloid scarring after minor trauma',
      'Active scalp infection or untreated dermatological conditions'
    ]
  },
  timeline: [
    {
      stage: 'Day 1–7',
      title: 'Initial healing',
      description:
        'Recipient scabs form within 48 hours. Donor extraction sites heal over 5–7 days. Some patients see mild post-inflammatory pigmentation, which is normal and resolves over the following weeks.'
    },
    {
      stage: 'Week 2–4',
      title: 'Shock loss',
      description:
        'Transplanted hair shafts shed between week 2 and week 6 — this is expected. Any post-inflammatory pigmentation in the donor or recipient continues to fade.'
    },
    {
      stage: 'Month 1–3',
      title: 'Quiet phase',
      description:
        'Little visible change. Below the skin, follicles are regenerating with their curl pattern intact. Avoid heavy braids, weaves and tight head coverings for the full 3 months.'
    },
    {
      stage: 'Month 4–6',
      title: 'Curls emerge',
      description:
        'New hairs emerge around month 4. By month 6, the curl pattern starts to develop and coverage looks fuller than the graft count suggests — the visual power of Afro hair becomes apparent.'
    },
    {
      stage: 'Month 12+',
      title: 'Full density and curl',
      description:
        'By month 12, final coverage is visible and the curl pattern matches your native hair. From here, the result behaves and ages exactly like the rest of your hair.'
    }
  ],
  faq: [
    {
      question: 'Why does Afro hair need a different technique?',
      answer:
        'Below the skin surface, Afro follicles continue to curl rather than running straight down. A standard punch aligned with the visible hair direction will miss the actual follicle path. Larger-diameter punches and slower extraction follow the curl and protect graft integrity.'
    },
    {
      question: 'Will my keloid history affect surgery?',
      answer:
        'It depends on the size and severity of prior keloids. We screen every Afro patient for keloid history. In borderline cases, a test punch is performed before committing to the full procedure. Significant keloid risk may make us decline surgery — we will be honest.'
    },
    {
      question: 'How many grafts will I need?',
      answer:
        'Afro patients often need 15–25% fewer grafts than equivalent straight-hair stages because curl provides natural coverage. Hairline restoration: 1,800–2,500 grafts. Full coverage: 3,000–4,500 grafts.'
    },
    {
      question: 'Will my hair still curl after transplant?',
      answer:
        'Yes. The follicle keeps its native characteristics — including curl, pigment and growth direction. Transplanted hairs grow with your natural curl pattern intact.'
    },
    {
      question: 'Can traction alopecia be reversed with surgery?',
      answer:
        'In many cases yes — provided the causal habit (braids, weaves, tight cornrows) has been corrected and the alopecia has stabilised. We assess each case individually before recommending surgery.'
    },
    {
      question: 'Does Afro hair transplant hurt?',
      answer:
        'During surgery, no. Local anaesthesia eliminates sharp pain. Post-op, expect mild soreness for 48 hours, well-managed by simple painkillers.'
    },
    {
      question: 'Will I need to shave my head?',
      answer:
        'The donor area must be shaved. For larger sessions, the recipient is also shaved. For unshaven results, our team can perform smaller (~2,000 graft) sessions without recipient shaving in selected cases.'
    },
    {
      question: 'Is the result permanent?',
      answer:
        'Yes. Transplanted follicles retain their genetic resistance and grow for life with their original texture.'
    },
    {
      question: 'When can I braid my hair again?',
      answer:
        'Loose braiding is fine from month 4. Tight braids, weaves and cornrows should wait until month 6 minimum. If traction alopecia was the original cause, avoid these styles permanently to preserve the result.'
    },
    {
      question: 'How long until I see results?',
      answer:
        'First curls emerge at month 4. Significant coverage by month 6. Full density and curl pattern at month 12–15.'
    }
  ]
};

export default function Page() {
  return <TechniquePage data={data} />;
}
