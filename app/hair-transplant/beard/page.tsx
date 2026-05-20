import type { Metadata } from 'next';
import TechniquePage, { type TechniqueData } from '@/components/TechniquePage';

export const metadata: Metadata = {
  title: 'Beard Transplant in Turkey | Istanbul Care',
  description:
    'Beard transplant at Istanbul Care — design or fill in a full, natural beard, moustache, sideburns or goatee using single-graft FUE for absolute precision.'
};

const data: TechniqueData = {
  slug: 'beard',
  name: 'Beard Transplant',
  shortName: 'Beard Transplant',
  hero: {
    title: 'Beard Transplant — Design the Beard You Could Never Grow',
    subtitle:
      'Whether you want to fill in patchy areas, restore a beard lost to scarring, or design a full beard from scratch — single-graft FUE delivers a result that looks natural, grows continuously, and is permanent.',
    stats: [
      { label: 'Graft range', value: '1,000–3,000' },
      { label: 'Duration', value: '4–6 hours' },
      { label: 'Recovery', value: '5–7 days' }
    ]
  },
  whatIsIt: {
    paragraphs: [
      'Beard transplantation moves hair follicles from the back and sides of the scalp into the beard area: cheeks, jawline, chin, moustache and sideburns. The technique is FUE, the same as a scalp transplant, but with crucial differences in graft selection, placement angle and density planning. Done correctly, the result is indistinguishable from a naturally grown beard.',
      'Beard hair behaves slightly differently from scalp hair. It is typically thicker, grows in irregular directions and forms whorls and growth patterns unique to each man. A successful beard transplant requires careful study of the patient’s existing growth, face shape and beard style preference. The surgeon then designs a graft distribution that matches both.',
      'Almost all beard transplants are performed using single-hair grafts. Multi-hair follicular units that look natural on the scalp would look unnatural and "doll-like" in a beard. Each graft is hand-sorted to select singles, and the surgeon places them one at a time at the precise angle of natural growth — typically nearly parallel to the skin surface.',
      'Beard hair, once transplanted, behaves like beard hair. It grows continuously and needs trimming. It may go through a small shedding phase between week 2 and week 6 like all transplants — but new growth begins by month 3, with mature density visible by month 6. Final results show at month 9–12.',
      'Reasons men seek beard transplants vary widely. Some have genetically patchy beards from birth. Others have scarring from acne, surgery or burns. Some lost their beard to trauma. And many simply want a fuller, more structured beard than they were born with. All of these are valid reasons — and all are routinely treatable.'
    ],
    specs: [
      { label: 'Technique', value: 'Single-graft FUE' },
      { label: 'Ideal Candidate', value: 'Patchy or sparse beard' },
      { label: 'Graft Range', value: '1,000–3,000' },
      { label: 'Duration', value: '4–6 hours' },
      { label: 'Anaesthesia', value: 'Local' },
      { label: 'Recovery', value: '5–7 days' },
      { label: 'Scarring', value: 'No visible scar' },
      { label: 'Success Rate', value: '94–97%' },
      { label: 'Price From', value: '$1,790' }
    ]
  },
  howItWorks: [
    {
      n: 1,
      title: 'Beard design',
      description:
        'You and the surgeon agree on the target beard shape, density and growth direction. Photos from multiple angles inform the plan. Subtle reshaping or full beard design — both start here.'
    },
    {
      n: 2,
      title: 'Donor preparation',
      description:
        'A narrow donor strip at the back of the scalp is shaved. Local anaesthesia is administered to both donor and recipient zones using vibration-assisted delivery to minimise the initial prick.'
    },
    {
      n: 3,
      title: 'Single-graft sorting',
      description:
        'Follicles are extracted with a sub-1mm punch and inspected under magnification. Only single-hair grafts are selected for beard work — multi-hair units are reserved or used in deeper layers.'
    },
    {
      n: 4,
      title: 'Channel creation',
      description:
        'Recipient channels are opened in the beard area at the natural growth angle, which is nearly parallel to the skin. Density is varied across cheeks, jawline and moustache for natural irregularity.'
    },
    {
      n: 5,
      title: 'Single-graft placement',
      description:
        'Each single-hair graft is placed individually by trained technicians. The surgeon supervises directionality throughout to ensure the new beard grows in a coherent, natural pattern.'
    },
    {
      n: 6,
      title: 'Aftercare',
      description:
        'Discreet bandaging covers the donor strip; the beard area itself needs only saline care for the first week. You receive your aftercare kit and direct WhatsApp contact for follow-up.'
    }
  ],
  advantages: [
    {
      title: 'Fully natural appearance',
      description:
        'Single-graft FUE produces a beard indistinguishable from naturally grown hair. With correct angle planning, even experienced barbers cannot tell.'
    },
    {
      title: 'Permanent solution',
      description:
        'Once transplanted, beard follicles grow continuously like any other beard hair. No top-up sessions or maintenance medications are needed.'
    },
    {
      title: 'Short operative time',
      description:
        'Beard sessions typically run 4–6 hours, shorter than most scalp transplants. Many patients fly in and out within two days.'
    },
    {
      title: 'Fast recovery',
      description:
        'Most patients are presentable within 5–7 days. Scabs in the beard area fall off cleanly with daily saline washes and gentle moisturising.'
    },
    {
      title: 'Restores acne and surgery scars',
      description:
        'Beard transplantation can effectively camouflage acne scars, surgical scars and traumatic scars in the beard area, restoring a uniform appearance.'
    },
    {
      title: 'No linear scar in donor',
      description:
        'FUE in the donor strip leaves only pinpoint marks. With normal beard length, even short scalp hair shows no visible donor signs after week 3.'
    }
  ],
  disadvantages: [
    {
      title: 'Recipient redness for a week',
      description:
        'The beard area looks visibly red and dotted for the first 5–7 days. Plan to limit social events in that first week if appearance matters to you.'
    },
    {
      title: 'Same shock loss as scalp transplants',
      description:
        'Transplanted beard hairs shed between weeks 2 and 6. Final growth starts at month 3 and matures by month 6–9.'
    },
    {
      title: 'Donor area must be shaved',
      description:
        'A narrow horizontal strip at the back of the scalp is shaved. If you wear hair very short there, it will be visible for 2–3 weeks.'
    },
    {
      title: 'Density limits',
      description:
        'Maximum density per cm² in the beard is lower than the scalp due to the angles involved. We design realistic densities that look full but natural.'
    }
  ],
  candidates: {
    perfect: [
      'Men with genetically patchy or sparse beard growth',
      'Patients with beard area scarring from acne, surgery or trauma',
      'Men seeking to reshape or thicken existing beard',
      'Strong scalp donor density supporting 1,000+ grafts',
      'Healthy adults aged 20–60 with realistic expectations'
    ],
    mayNeedAlternative: [
      'Patients with no facial hair at all — surgery is possible but density may be limited',
      'Active acne in the beard area — settle medically first',
      'Limited scalp donor — consider body hair FUE assessment'
    ],
    notSuitable: [
      'Active beard skin infections (folliculitis, untreated dermatitis)',
      'Bleeding disorders or impaired wound healing',
      'Severe medical conditions that contraindicate elective surgery'
    ]
  },
  timeline: [
    {
      stage: 'Day 1–7',
      title: 'Red and scabby phase',
      description:
        'The beard area looks visibly red with tiny scabs at every graft for the first 5–7 days. Scabs fall off naturally during saline wash. No shaving or trimming during this period.'
    },
    {
      stage: 'Week 2–4',
      title: 'Shock loss',
      description:
        'Transplanted hairs shed between week 2 and week 6 — expected and temporary. The beard area looks smooth and back to "pre-surgery" appearance.'
    },
    {
      stage: 'Month 1–3',
      title: 'Quiet phase',
      description:
        'Little visible change. Below the surface, follicles are preparing to grow. You can shave or trim the beard area normally from month 1 onwards.'
    },
    {
      stage: 'Month 4–6',
      title: 'Beard fills in',
      description:
        'New hairs emerge around month 3–4. By month 6, the beard looks noticeably fuller. Continued thickening over the next 3–6 months.'
    },
    {
      stage: 'Month 9–12',
      title: 'Final beard',
      description:
        'Mature density and length develop by month 9–12. The transplanted beard now grows continuously and behaves identically to native beard hair — including needing regular trimming.'
    }
  ],
  faq: [
    {
      question: 'Does beard transplant hurt?',
      answer:
        'During surgery, no — local anaesthesia eliminates sharp pain. Post-op, mild tenderness in the donor strip and tightness in the beard area lasts 24–48 hours, well-managed by simple painkillers.'
    },
    {
      question: 'Will my beard look natural?',
      answer:
        'Yes. Single-graft FUE with correct angle and density planning produces a result that is indistinguishable from naturally grown beard hair. Even experienced barbers typically cannot tell.'
    },
    {
      question: 'How many grafts will I need?',
      answer:
        'Patchy filling: 800–1,500 grafts. Cheek and jawline density: 1,500–2,500. Full new beard design: 2,500–3,500 grafts. Your coordinator gives a tailored estimate from your photos.'
    },
    {
      question: 'When can I shave again?',
      answer:
        'No shaving in the beard area for at least 4 weeks. After that, electric trimmer is preferable to wet shaving for the first 3 months. Wet shaving is fine from month 3 onwards.'
    },
    {
      question: 'Is the result permanent?',
      answer:
        'Yes. Once transplanted, the follicles grow continuously for life like any other beard hair. They will go grey at the same time the rest of your hair does.'
    },
    {
      question: 'Will I have a scar?',
      answer:
        'No visible scarring in the beard area itself. The donor strip at the back of the scalp leaves only pinpoint FUE marks that fade within weeks.'
    },
    {
      question: 'Can I have a beard transplant if I’m bald?',
      answer:
        'Yes — provided your remaining donor at the back and sides of the scalp has enough density to support the requested graft count. We assess this individually.'
    },
    {
      question: 'How long does the procedure take?',
      answer:
        'Typically 4–6 hours, depending on graft count. Most patients fly in the evening before, have surgery the next day, and fly home 24–48 hours later.'
    },
    {
      question: 'What is the success rate?',
      answer:
        'In experienced hands, beard transplant has a 94–97% follicle survival rate. Outcomes below expected at month 12 are covered by our touch-up guarantee.'
    },
    {
      question: 'Do transplanted beard hairs grow grey?',
      answer:
        'They follow your natural ageing pattern. If your beard would have naturally gone grey, the transplanted hairs will too — over the same timeline as the rest of your beard.'
    }
  ]
};

export default function Page() {
  return <TechniquePage data={data} />;
}
