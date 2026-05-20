import type { Metadata } from 'next';
import TechniquePage, { type TechniqueData } from '@/components/TechniquePage';

export const metadata: Metadata = {
  title: 'Unshaven Hair Transplant in Turkey | Istanbul Care',
  description:
    'Unshaven hair transplant at Istanbul Care — DHI-based technique that lets you return to work and social life immediately, with no visible shaving.'
};

const data: TechniqueData = {
  slug: 'unshaven',
  name: 'Unshaven Hair Transplant',
  shortName: 'Unshaven Hair Transplant',
  hero: {
    title: 'Unshaven Hair Transplant — Surgery Without the Telltale Shaved Head',
    subtitle:
      'Return to work, weddings or filming the day after surgery. Our DHI-based unshaven protocol leaves the recipient area entirely intact and shaves only a narrow donor zone covered by your remaining hair.',
    stats: [
      { label: 'Graft range', value: '1,500–3,000' },
      { label: 'Duration', value: '7–10 hours' },
      { label: 'Recovery', value: '5–7 days' }
    ]
  },
  whatIsIt: {
    paragraphs: [
      'Unshaven hair transplant is a refinement of the DHI technique designed for patients whose social, professional or personal lives make a shaved head undesirable. The procedure restores hair to the recipient area without trimming it down — you walk into the clinic with your existing hair, and walk out with it still intact, only longer.',
      'The technique relies on two adjustments. First, only a narrow horizontal donor strip is shaved short. This strip is positioned at the back of the head and covered immediately by the surrounding hair, so even on day one no shaving is visible. Second, the recipient area is implanted between existing hairs using Choi pens, with no incisions or shaving in the recipient zone whatsoever.',
      'Unshaven sessions are limited in size. Because each graft must be implanted between existing hairs without cutting them, the realistic upper limit per session is around 3,000 grafts. For larger restorations, the procedure can be staged across multiple sessions, or a partial-shave (donor + small recipient zone) approach can be considered.',
      'Unshaven transplant is particularly common among public figures, business professionals, actors, presenters and anyone whose return-to-work timeline cannot accommodate a visibly shaved head. It is also popular for hairline-only restoration where the goal is precise, discreet improvement rather than full coverage.',
      'The trade-offs are operative time and cost. Unshaven DHI takes 30–50% longer than equivalent shaven sessions because every implantation must be threaded between existing hairs. Costs are correspondingly higher, typically 15–25% above standard DHI. For the right patient, the social and professional flexibility is worth every cent.'
    ],
    specs: [
      { label: 'Technique', value: 'No-shave DHI' },
      { label: 'Ideal Candidate', value: 'Hairline and frontal cases' },
      { label: 'Graft Range', value: '1,500–3,000' },
      { label: 'Duration', value: '7–10 hours' },
      { label: 'Anaesthesia', value: 'Local + sedation' },
      { label: 'Recovery', value: '5–7 days' },
      { label: 'Scarring', value: 'None visible' },
      { label: 'Success Rate', value: '92–96%' },
      { label: 'Price From', value: '$2,490' }
    ]
  },
  howItWorks: [
    {
      n: 1,
      title: 'Hairline design with hair in place',
      description:
        'Because your existing hair is intact, design is done with your normal hairstyle visible. The surgeon plans density and direction to integrate seamlessly with your current hair.'
    },
    {
      n: 2,
      title: 'Discreet donor preparation',
      description:
        'Only a narrow horizontal strip at the lower back of the scalp is shaved short — fully covered by surrounding hair throughout recovery. Local anaesthesia is administered to donor and recipient.'
    },
    {
      n: 3,
      title: 'Careful extraction',
      description:
        'Follicles are extracted with a sub-1mm punch from the shaved strip. Each graft is inspected under magnification and sorted by hair count.'
    },
    {
      n: 4,
      title: 'Choi pen preparation',
      description:
        'Single, double and triple-hair grafts are loaded into Choi implanter pens of appropriate diameter. Four to six pens are used in rotation throughout the procedure.'
    },
    {
      n: 5,
      title: 'Implantation between existing hairs',
      description:
        'The surgeon implants each follicle between existing hairs without cutting them. Direction and angle are matched to surrounding native growth. This is the slowest and most technical part.'
    },
    {
      n: 6,
      title: 'Same-day discreet aftercare',
      description:
        'No headband is needed because nothing visible has been done. Aftercare kit, written instructions, scheduled clinic wash for next morning, and direct WhatsApp contact.'
    }
  ],
  advantages: [
    {
      title: 'Same-day return to social life',
      description:
        'Walk out of the clinic with your existing hair intact. Most patients are presentable for meetings, weddings or filming the very next day.'
    },
    {
      title: 'No telltale signs of surgery',
      description:
        'No shaved head, no visible donor strip, no headband. Only the small scabs in the recipient area, hidden in your existing hair.'
    },
    {
      title: 'Hairline integration is precise',
      description:
        'Because the surgeon designs with your existing hair in place, the new hairline integrates seamlessly without the gap that appears in shaven sessions.'
    },
    {
      title: 'Excellent for public-facing roles',
      description:
        'Ideal for executives, public figures, presenters and anyone who cannot disappear for two weeks. The procedure becomes invisible to everyone except your inner circle.'
    },
    {
      title: 'Permanent like all transplants',
      description:
        'Once transplanted, follicles grow for life. The unshaven approach changes the cosmetic recovery, not the long-term result.'
    },
    {
      title: 'Faster apparent recovery',
      description:
        'Although graft healing follows the standard timeline, the absence of shaving means the visible recovery is dramatically shorter than shaven sessions.'
    }
  ],
  disadvantages: [
    {
      title: 'Limited session size',
      description:
        'Realistic upper limit is ~3,000 grafts per session due to the slow implantation rhythm. Larger needs require staged sessions or a partial-shave compromise.'
    },
    {
      title: '15–25% higher cost',
      description:
        'Longer operative time and more demanding implantation push costs above standard DHI. Most patients consider the social flexibility worth the difference.'
    },
    {
      title: 'Long operative day',
      description:
        'Unshaven 3,000-graft sessions can run 9–10 hours. The procedure is comfortable but the day is long. Plan to rest the next day.'
    },
    {
      title: 'Same shock loss timeline',
      description:
        'Transplanted hairs shed between weeks 2 and 6 like all transplants. The unshaven approach changes the visible recovery week, not the underlying biology.'
    }
  ],
  candidates: {
    perfect: [
      'Patients whose work or social life rules out a visibly shaved head',
      'Hairline-only or frontal restoration with 1,500–2,500 grafts',
      'Public figures, executives, presenters, actors',
      'Patients with sufficient existing hair to disguise the recipient area immediately',
      'Healthy adults aged 25–65 with realistic expectations'
    ],
    mayNeedAlternative: [
      'Patients needing 3,500+ grafts in one session — consider staged or partial-shave',
      'Very advanced Norwood VI–VII — full coverage may need shaving',
      'Patients with extreme budget constraints — standard DHI or FUE is cheaper'
    ],
    notSuitable: [
      'Active scalp infection or untreated dermatological conditions',
      'Unstable hair loss in patients under 22',
      'Severe medical conditions that contraindicate elective surgery'
    ]
  },
  timeline: [
    {
      stage: 'Day 1–7',
      title: 'Invisible healing',
      description:
        'Tiny scabs form between existing hairs in the recipient area. Because surrounding hair is intact, the scabs are not visible from a normal viewing distance. The donor strip is covered by surrounding hair throughout.'
    },
    {
      stage: 'Week 2–4',
      title: 'Shock loss',
      description:
        'Transplanted hairs shed between week 2 and week 6. This is expected. Importantly, your existing native hair around the grafts is fully intact, so you maintain a normal appearance.'
    },
    {
      stage: 'Month 1–3',
      title: 'Quiet phase',
      description:
        'Little visible change. Your hair looks identical to pre-surgery. Below the surface, follicles are preparing to grow new hairs.'
    },
    {
      stage: 'Month 4–6',
      title: 'New growth visible',
      description:
        'New hairs emerge from month 4. Because they integrate between existing hairs, the gradual thickening looks completely natural — colleagues notice "something different" rather than "surgery."'
    },
    {
      stage: 'Month 12+',
      title: 'Final density',
      description:
        'By month 12, the full result is in place. Because the transition from pre-surgery to result is gradual, even close friends may not pinpoint when or what changed. The result looks like very slow natural improvement.'
    }
  ],
  faq: [
    {
      question: 'How is unshaven hair transplant possible?',
      answer:
        'It uses Choi pen DHI technique to implant each graft between existing hairs without cutting them. Only a narrow donor strip at the back is shaved, and that strip is fully covered by surrounding hair throughout recovery.'
    },
    {
      question: 'Will anyone be able to tell I had surgery?',
      answer:
        'In most cases, no. From day one you walk out with your existing hair intact. Close inspection might reveal small scabs in week one, but at normal viewing distance the procedure is essentially invisible.'
    },
    {
      question: 'How many grafts is the realistic maximum?',
      answer:
        'Around 3,000 grafts per session. Beyond that, the implantation rhythm becomes impractical to complete in a single day. Larger needs can be staged across two visits or addressed with a partial-shave compromise.'
    },
    {
      question: 'Is the result any different from shaven DHI?',
      answer:
        'The final result is the same. The difference is only in the visible recovery week. Long-term density, hairline naturalness and permanence are identical to a shaven DHI session.'
    },
    {
      question: 'Does it hurt?',
      answer:
        'During surgery, no — local anaesthesia eliminates sharp pain. Post-op, mild soreness for 24–48 hours, well-managed by simple painkillers.'
    },
    {
      question: 'Why is it more expensive?',
      answer:
        'Unshaven implantation takes 30–50% longer than shaven sessions because every implantation must be threaded between existing hairs. The longer operative time, more skilled team and lower throughput drive a 15–25% price premium.'
    },
    {
      question: 'When can I return to work?',
      answer:
        'Most patients return to work the day after surgery or within 2–3 days, depending on how much rest you need. Office and public-facing roles are realistic from day 1–2 in most cases.'
    },
    {
      question: 'Can I exercise normally?',
      answer:
        'Heavy gym and sweating: two weeks. Swimming and saunas: four weeks. Light walking and gentle activity: from day 2.'
    },
    {
      question: 'Is unshaven possible with FUE?',
      answer:
        'Limited unshaven FUE is technically possible for very small sessions (~1,000 grafts) but slower and more risky to existing hairs. DHI is the established and preferred technique for unshaven results.'
    },
    {
      question: 'Is it really permanent?',
      answer:
        'Yes. Transplanted follicles come from the genetically stable donor area and grow for life. The unshaven approach changes the recovery experience, not the durability of the result.'
    }
  ]
};

export default function Page() {
  return <TechniquePage data={data} />;
}
