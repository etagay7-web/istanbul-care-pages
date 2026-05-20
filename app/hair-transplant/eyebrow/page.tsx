import type { Metadata } from 'next';
import TechniquePage, { type TechniqueData } from '@/components/TechniquePage';

export const metadata: Metadata = {
  title: 'Eyebrow Transplant in Turkey | Istanbul Care',
  description:
    'Eyebrow transplant at Istanbul Care — single-graft FUE for natural, permanent eyebrow restoration. Designed individually for face shape and gender.'
};

const data: TechniqueData = {
  slug: 'eyebrow',
  name: 'Eyebrow Transplant',
  shortName: 'Eyebrow Transplant',
  hero: {
    title: 'Eyebrow Transplant — Permanent, Natural Brows',
    subtitle:
      'Over-plucking, scarring, alopecia or simply genetics can leave brows sparse or absent. Single-graft FUE eyebrow transplantation restores fully natural, permanent brows that grow continuously and never need pencil or microblading touch-ups.',
    stats: [
      { label: 'Graft range', value: '150–400 per brow' },
      { label: 'Duration', value: '2–4 hours' },
      { label: 'Recovery', value: '5–7 days' }
    ]
  },
  whatIsIt: {
    paragraphs: [
      'Eyebrow transplantation is a precision FUE procedure that moves single-hair follicles from the back of the scalp into the eyebrows. The technique is the same as a beard transplant — single grafts placed one by one at the exact angle of natural growth — but applied to one of the most visible and detailed parts of the face.',
      'Eyebrow grafts must be selected exclusively as singles. Even a tiny multi-hair follicle would look unnatural in an eyebrow. Each graft is hand-sorted under magnification, and the surgeon places it at an angle nearly flat to the skin, in the direction the surrounding eyebrow hair grows. Density is varied across head, body and tail of the brow for natural irregularity.',
      'Eyebrow transplants are permanent. Once the follicles take root, they grow continuously like any other hair from the scalp donor area. Because they retain their original scalp-hair characteristics, they grow slightly faster than natural eyebrow hair and need trimming every 2–4 weeks. Many patients consider this an acceptable trade-off for permanence.',
      'Common reasons for eyebrow restoration include years of over-plucking that have damaged the follicles, scarring from trauma or surgery, alopecia areata once stabilised, and congenital sparse or absent eyebrows. Some patients also seek thicker or more defined brows as a purely cosmetic procedure.',
      'Eyebrow surgery requires a particularly artistic eye. We share dozens of design references during your consultation, photograph your face from multiple angles, and design each brow individually to complement your bone structure and existing facial features. Symmetry is important but exact mirroring would look artificial — natural brows have intentional asymmetries.'
    ],
    specs: [
      { label: 'Technique', value: 'Single-graft FUE' },
      { label: 'Ideal Candidate', value: 'Sparse or absent brows' },
      { label: 'Graft Range', value: '150–400 per brow' },
      { label: 'Duration', value: '2–4 hours' },
      { label: 'Anaesthesia', value: 'Local' },
      { label: 'Recovery', value: '5–7 days' },
      { label: 'Scarring', value: 'None visible' },
      { label: 'Success Rate', value: '92–96%' },
      { label: 'Price From', value: '$1,290' }
    ]
  },
  howItWorks: [
    {
      n: 1,
      title: 'Eyebrow design',
      description:
        'Using photos and design references, you and the surgeon agree the new brow shape, density and detailing. Stencils or markers map the design on your skin before any cutting begins.'
    },
    {
      n: 2,
      title: 'Donor preparation',
      description:
        'A small donor zone at the back of the scalp is trimmed (often only ~30–50 cm² is needed). Local anaesthesia is administered to donor and recipient with minimal discomfort.'
    },
    {
      n: 3,
      title: 'Single-graft selection',
      description:
        'Follicles are extracted using a sub-1mm punch. Under magnification, only single-hair grafts are selected — typically the finest singles available, to match brow hair calibre.'
    },
    {
      n: 4,
      title: 'Channel creation',
      description:
        'Recipient channels are opened at extremely flat angles (almost parallel to the skin), in the natural direction of brow growth across head, body and tail of each brow.'
    },
    {
      n: 5,
      title: 'Graft placement',
      description:
        'Each single-hair graft is placed individually. The surgeon supervises direction continuously. Singles at the front of the brow follow a specific orientation, mid-brow follows another, and the tail tapers downward.'
    },
    {
      n: 6,
      title: 'Aftercare',
      description:
        'You receive specialist eyebrow aftercare instructions. Saline mist is used four times daily. Avoid touching, rubbing or makeup on the brows for the first 10 days.'
    }
  ],
  advantages: [
    {
      title: 'Permanent and natural',
      description:
        'Unlike microblading, which fades within 12–18 months, an eyebrow transplant is permanent. Once the follicles take root, they grow for life.'
    },
    {
      title: 'Designed to your face',
      description:
        'Each brow is designed individually around your bone structure, facial features and preferred style. No two procedures look identical.'
    },
    {
      title: 'Restores any sparse area',
      description:
        'Whether the issue is over-plucking, scarring, alopecia or congenital sparseness, single-graft transplantation can fill any sparse area precisely.'
    },
    {
      title: 'No more daily makeup',
      description:
        'Patients no longer need to pencil, microblade or otherwise enhance the brow shape — the result wakes up looking the same every morning.'
    },
    {
      title: 'Short, comfortable procedure',
      description:
        'Eyebrow sessions typically run 2–4 hours, often as a day surgery. Most patients fly in and out within 24 hours.'
    },
    {
      title: 'Hides surgical or trauma scars',
      description:
        'Single grafts placed through old scars can restore continuous-looking brow lines and effectively camouflage the scar.'
    }
  ],
  disadvantages: [
    {
      title: 'Grow faster than native brow hair',
      description:
        'Transplanted brow hairs retain their scalp characteristics, growing slightly faster. They need trimming every 2–4 weeks to maintain shape.'
    },
    {
      title: 'Pink skin for ~10 days',
      description:
        'The brow area looks pink with tiny scabs for the first 7–10 days. Plan to limit photographed events in that window.'
    },
    {
      title: 'Same shock loss as other transplants',
      description:
        'Transplanted hairs shed between week 2 and 6. New growth begins month 3. Final brows show at month 6–9.'
    },
    {
      title: 'Slightly different texture',
      description:
        'Scalp hair texture is finer than natural eyebrow hair in some patients. Properly chosen donor finely-pigmented grafts minimise this difference.'
    }
  ],
  candidates: {
    perfect: [
      'Years of over-plucking that has damaged follicles permanently',
      'Sparse or absent eyebrows from genetics, alopecia or scarring',
      'Patients dissatisfied with microblading limitations',
      'Stable hair loss in eyebrow area (not actively progressing)',
      'Healthy adults aged 20–65 with realistic expectations'
    ],
    mayNeedAlternative: [
      'Active alopecia areata in eyebrow area — settle first',
      'Borderline scalp donor — assess feasibility',
      'Very thin natural scalp hair — texture may not match well'
    ],
    notSuitable: [
      'Active skin conditions in the eyebrow area',
      'Body dysmorphic concerns where realistic results won’t satisfy',
      'Actively progressing autoimmune hair loss'
    ]
  },
  timeline: [
    {
      stage: 'Day 1–7',
      title: 'Pink and scabby phase',
      description:
        'The brow area looks pink with tiny scabs at every graft. Avoid touching, rubbing or wetting beyond saline mist. Scabs fall off naturally by day 7–10.'
    },
    {
      stage: 'Week 2–4',
      title: 'Shock loss',
      description:
        'Transplanted hairs shed between week 2 and week 6. Brows look temporarily back to "pre-surgery" sparseness. This is expected and not permanent.'
    },
    {
      stage: 'Month 1–3',
      title: 'Quiet phase',
      description:
        'Little visible change. Below the surface, follicles are preparing to grow. You can apply gentle makeup again from week 3 if needed.'
    },
    {
      stage: 'Month 4–6',
      title: 'New brows emerge',
      description:
        'New hairs start to push through around month 4. By month 6, the brow shape is clearly visible. Trim every 2–3 weeks to maintain the designed shape.'
    },
    {
      stage: 'Month 9+',
      title: 'Final brows',
      description:
        'By month 9–12, full density develops. The brows now grow continuously and need regular trimming. The result is permanent — no more pencilling or microblading.'
    }
  ],
  faq: [
    {
      question: 'Does eyebrow transplant hurt?',
      answer:
        'During surgery, no — local anaesthesia eliminates sharp pain. Post-op, the brow area feels tight and tender for 24–48 hours, well-managed by paracetamol.'
    },
    {
      question: 'How many grafts will I need?',
      answer:
        'Light filling: 150–250 grafts per brow. Substantial restoration: 250–350 per brow. Complete brow construction: 350–400+ per brow. We finalise during consultation.'
    },
    {
      question: 'Will it look natural?',
      answer:
        'Yes — when single-graft FUE is performed with correct angles and density variation. Properly designed transplanted brows are indistinguishable from natural ones.'
    },
    {
      question: 'How often will I need to trim them?',
      answer:
        'Every 2–4 weeks. Transplanted brow hairs retain scalp-hair growth speed, slightly faster than natural brow hair. Light trimming with small scissors keeps the shape.'
    },
    {
      question: 'Is it permanent?',
      answer:
        'Yes. Unlike microblading (which fades within 12–18 months) or tattooing (which discolours), transplanted brows are a one-time procedure that lasts a lifetime.'
    },
    {
      question: 'Will I have visible scars?',
      answer:
        'No visible scarring in the brows themselves. The small donor zone at the back of the scalp leaves only pinpoint marks that fade within weeks.'
    },
    {
      question: 'Can I have microblading first, then a transplant?',
      answer:
        'Yes. The pigment from previous microblading does not affect transplant outcomes. Many of our patients transition from microblading to transplant for permanence.'
    },
    {
      question: 'When can I wear makeup again?',
      answer:
        'No makeup on the brows for the first 10 days. From week 2 onwards, gentle makeup elsewhere on the face is fine. Brow pencilling can resume from week 3 if needed.'
    },
    {
      question: 'How long is the procedure?',
      answer:
        'Typically 2–4 hours. Most patients fly in the evening before, have surgery the next morning, and fly home the same evening or the day after.'
    },
    {
      question: 'What is the success rate?',
      answer:
        'In experienced hands, 92–96% of grafts survive and grow. Outcomes below expectation at month 12 are covered by our touch-up policy.'
    }
  ]
};

export default function Page() {
  return <TechniquePage data={data} />;
}
