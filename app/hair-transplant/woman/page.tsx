import type { Metadata } from 'next';
import TechniquePage, { type TechniqueData } from '@/components/TechniquePage';

export const metadata: Metadata = {
  title: 'Woman Hair Transplant in Turkey | Istanbul Care',
  description:
    'Hair transplant for women at Istanbul Care — no-shave DHI technique, discreet care and natural results for female pattern hair loss and hairline restoration.'
};

const data: TechniqueData = {
  slug: 'woman',
  name: 'Woman Hair Transplant',
  shortName: 'Woman Hair Transplant',
  hero: {
    title: 'Hair Transplant for Women — Discreet, No-Shave, Natural',
    subtitle:
      'Female hair loss is different from male pattern baldness, and treatment must be too. Our female team performs no-shave DHI procedures designed around your existing hairstyle, so you can return to normal life without anyone noticing.',
    stats: [
      { label: 'Graft range', value: '1,500–3,500' },
      { label: 'Duration', value: '6–8 hours' },
      { label: 'Recovery', value: '7–10 days' }
    ]
  },
  whatIsIt: {
    paragraphs: [
      'Hair transplantation in women requires a fundamentally different approach to that used in men. Female pattern hair loss tends to produce diffuse thinning rather than the patterned baldness common in men, and the recipient zone is usually populated with existing hairs that must be protected during surgery.',
      'For this reason, the great majority of female transplants at Istanbul Care use the DHI technique with no shaving of the recipient area. Choi pens allow the surgeon to implant new follicles between existing hairs at precise angles, without disturbing surrounding growth. The donor strip at the back is shaved, but it is hidden under your existing hair throughout recovery.',
      'Common reasons women seek a hair transplant include genetic female pattern hair loss, a high or receding hairline, traction alopecia from years of tight ponytails or braids, and thinning following pregnancy or menopause. Some women also seek to lower their hairline as a cosmetic procedure or as part of facial feminisation.',
      'Before surgery, every female patient at Istanbul Care is evaluated by a trichologist to confirm that the underlying cause of hair loss is stable and amenable to surgery. Some forms of female hair loss respond better to medical treatment than to transplantation, and an honest assessment up front saves disappointment later.',
      'Our female-patient team is led by a senior female surgeon, with female coordinators handling consultations and aftercare. We design each case around your preferred hairstyle and the way you part your hair, so the result complements what you already have rather than fighting it.'
    ],
    specs: [
      { label: 'Technique', value: 'No-shave DHI' },
      { label: 'Ideal Candidate', value: 'Female pattern types' },
      { label: 'Graft Range', value: '1,500–3,500' },
      { label: 'Duration', value: '6–8 hours' },
      { label: 'Anaesthesia', value: 'Local + sedation' },
      { label: 'Recovery', value: '7–10 days' },
      { label: 'Scarring', value: 'None visible' },
      { label: 'Success Rate', value: '92–96%' },
      { label: 'Price From', value: '$2,290' }
    ]
  },
  howItWorks: [
    {
      n: 1,
      title: 'Trichology consultation',
      description:
        'Before surgery is planned, a trichologist confirms the type of hair loss, rules out medical causes that need other treatment, and verifies that you are a surgical candidate.'
    },
    {
      n: 2,
      title: 'Hairline and parting design',
      description:
        'Your surgeon designs the new hairline and density distribution around your usual parting and styling preferences. Photos from multiple angles inform the plan.'
    },
    {
      n: 3,
      title: 'Discreet donor preparation',
      description:
        'Only a narrow strip at the back of the head is shaved — completely hidden under surrounding hair. The recipient area is not touched.'
    },
    {
      n: 4,
      title: 'Follicle extraction',
      description:
        'Follicles are extracted from the prepared donor zone using a sub-1mm punch. Single, double and triple-hair units are sorted under magnification.'
    },
    {
      n: 5,
      title: 'No-shave DHI implantation',
      description:
        'Choi pens place each follicle between existing hairs without disturbing them. The surgeon controls angle and direction so the result blends seamlessly into your natural growth.'
    },
    {
      n: 6,
      title: 'Aftercare',
      description:
        'You receive a discreet aftercare kit, written instructions and the team’s direct WhatsApp. We schedule your next-morning wash at the clinic before you fly home.'
    }
  ],
  advantages: [
    {
      title: 'No shaving of your visible hair',
      description:
        'Only a narrow donor strip is trimmed and it is covered by surrounding hair throughout recovery. Your friends and colleagues do not need to know.'
    },
    {
      title: 'Female surgeon and team',
      description:
        'Female-led procedures, female coordinators and a female aftercare team mean every step is handled with the discretion and understanding the topic deserves.'
    },
    {
      title: 'Designed around your hairstyle',
      description:
        'Hairline and density are planned around how you actually part and wear your hair, not a generic template. The result complements your style.'
    },
    {
      title: 'Permanent solution',
      description:
        'Once transplanted follicles take root, they grow for life. Unlike topical treatments, you don’t need to take anything forever to maintain results.'
    },
    {
      title: 'Improves over time',
      description:
        'Most women see noticeable thickening from month 6, with full results at month 12–15. The improvement is gradual and natural-looking.'
    },
    {
      title: 'Combines with PRP',
      description:
        'PRP support around the surgery helps stimulate existing thinning follicles in addition to the transplanted grafts, often giving overall density improvement.'
    }
  ],
  disadvantages: [
    {
      title: 'Not all female hair loss is surgical',
      description:
        'Many forms of female hair loss (telogen effluvium, certain alopecias, hormonal hair loss) respond better to medical treatment. Surgery is not always the right answer.'
    },
    {
      title: 'Donor area must still be trimmed',
      description:
        'Although hidden, a narrow horizontal donor strip is shaved short. If you wear your hair tied up high every day, you will be aware of it for a few weeks.'
    },
    {
      title: 'Lower graft counts',
      description:
        'Female donor areas are usually less dense than male equivalents, which limits maximum graft count per session compared to a Norwood IV–V male case.'
    },
    {
      title: 'Existing thinning may continue',
      description:
        'Surgery restores density where grafts are placed, but does not stop ongoing thinning of native hair around them. Maintenance treatment is sometimes needed.'
    }
  ],
  candidates: {
    perfect: [
      'Women with high or receding hairlines who want subtle lowering',
      'Female pattern hair loss type I–II with stable progression',
      'Traction alopecia patients with confirmed dormant phase',
      'Women with localised thinning after pregnancy or menopause once stable',
      'Healthy adults aged 25–65 with realistic expectations'
    ],
    mayNeedAlternative: [
      'Diffuse thinning without a clear donor reserve — try medical first',
      'Active autoimmune hair loss (alopecia areata) — treatment then re-assess',
      'Severe iron or thyroid imbalance — fix the underlying issue first'
    ],
    notSuitable: [
      'Active scarring alopecia (frontal fibrosing, lichen planopilaris)',
      'Untreated medical hair loss conditions',
      'Severe medical conditions that contraindicate elective surgery'
    ]
  },
  timeline: [
    {
      stage: 'Day 1–7',
      title: 'Discreet healing',
      description:
        'Tiny scabs form around implanted hairs. Because the recipient was not shaved, scabs are often hidden in your existing hair. The donor strip is sore but covered by surrounding hair.'
    },
    {
      stage: 'Week 2–4',
      title: 'Shock loss phase',
      description:
        'Transplanted hairs shed between week 2 and week 6 — this is expected. Some women also see temporary shock loss of surrounding native hairs, which regrow over the following months.'
    },
    {
      stage: 'Month 1–3',
      title: 'Quiet phase',
      description:
        'Little change visible to the eye. Below the surface, follicles are preparing to grow. The donor strip is now fully blended back into surrounding hair.'
    },
    {
      stage: 'Month 4–6',
      title: 'Coverage builds',
      description:
        'New growth becomes visible around month 4. By month 6, thickening is clearly noticeable, particularly in the hairline and parting area. Native shock-loss hairs are returning.'
    },
    {
      stage: 'Month 12+',
      title: 'Final density',
      description:
        'Final results show at month 12–15. The hairline and parting look natural and thicker, but unmistakably "yours" — the result complements your style rather than replacing it.'
    }
  ],
  faq: [
    {
      question: 'Will I need to shave my head?',
      answer:
        'No. Only a narrow donor strip at the back is shaved short, and it is hidden under the surrounding hair you keep at full length. The recipient area is not shaved at all in our standard female DHI protocol.'
    },
    {
      question: 'Am I a candidate for a hair transplant?',
      answer:
        'Maybe. Many forms of female hair loss are better treated medically. A trichology consultation comes before surgery is offered. If your case is suitable for transplantation, we’ll tell you honestly; if not, we’ll explain what will help.'
    },
    {
      question: 'How is female hair transplant different from male?',
      answer:
        'Female hair loss is usually diffuse rather than patterned, the recipient area is populated with existing hairs, and the goal is usually thickening rather than coverage. We use no-shave DHI to protect existing growth.'
    },
    {
      question: 'Will anyone be able to tell I had surgery?',
      answer:
        'In the immediate post-op week, close inspection might reveal small scabs. Beyond that, no. Most patients return to work within a week and report that colleagues don’t notice anything until results emerge months later.'
    },
    {
      question: 'How many grafts will I need?',
      answer:
        'Typically 1,500–3,500 grafts depending on the area treated. Hairline lowering may require 1,500–2,500; full parting and frontal thickening 2,500–3,500. Your coordinator will estimate from your photos.'
    },
    {
      question: 'Can I combine surgery with PRP?',
      answer:
        'Yes — and we recommend it. PRP stimulates existing thinning follicles in addition to the transplanted grafts, often producing overall density improvement. PRP is included in our female DHI packages.'
    },
    {
      question: 'When can I tie my hair up again?',
      answer:
        'Loose ponytails are fine after week 2–3. Tight buns, braids and high tension hairstyles should be avoided for the first 3 months while transplanted follicles are setting and native hair is recovering.'
    },
    {
      question: 'Is the result permanent?',
      answer:
        'Yes. Transplanted follicles come from genetically stable donor sites and grow for life. Ongoing thinning of native hair around them may still need maintenance treatment.'
    },
    {
      question: 'Will my surgeon be female?',
      answer:
        'Yes — female patients at Istanbul Care are seen by our female-led team, with female coordinators handling pre-op consultations and aftercare.'
    },
    {
      question: 'How long until I see results?',
      answer:
        'First new hairs around month 4. Visible coverage by month 6. Final density at month 12–15. Female timelines are generally similar to male ones.'
    }
  ]
};

export default function Page() {
  return <TechniquePage data={data} />;
}
