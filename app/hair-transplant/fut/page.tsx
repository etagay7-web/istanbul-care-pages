import type { Metadata } from 'next';
import TechniquePage, { type TechniqueData } from '@/components/TechniquePage';

export const metadata: Metadata = {
  title: 'FUT Hair Transplant in Turkey | Istanbul Care',
  description:
    'FUT (Follicular Unit Transplantation) — the strip method that delivers maximum graft yield for very advanced hair loss cases.'
};

const data: TechniqueData = {
  slug: 'fut',
  name: 'FUT Hair Transplant',
  shortName: 'FUT',
  hero: {
    title: 'FUT Hair Transplant — Maximum Yield in One Session',
    subtitle:
      'The classic "strip method" remains the gold standard for very large sessions where every available graft counts. With expert closure technique, the donor scar is fine, low and easily hidden by surrounding hair.',
    stats: [
      { label: 'Graft range', value: '3,500–6,000' },
      { label: 'Duration', value: '5–7 hours' },
      { label: 'Recovery', value: '10–14 days' }
    ]
  },
  whatIsIt: {
    paragraphs: [
      'FUT, or Follicular Unit Transplantation, is the original modern hair transplant technique. In FUT, the surgeon removes a thin horizontal strip of scalp from the donor area at the back of the head. This strip is then dissected under microscopes into thousands of individual follicular units, which are implanted into the recipient area exactly as they would be in FUE.',
      'Although FUE has become more popular for its lack of a linear scar, FUT remains the technique of choice for two specific scenarios: very large sessions (5,000+ grafts) where maximum yield matters more than donor area appearance, and patients with curly or coarse hair where strip dissection preserves more grafts than punch extraction.',
      'The defining limitation of FUT is a thin linear scar across the donor area. In experienced hands using a trichophytic closure — a technique that allows hair to grow through the scar — this scar is fine, low and easily covered by hair worn longer than ~10mm. Many patients with longer hairstyles cannot detect the scar at all.',
      'FUT typically yields more grafts per session than FUE because strip dissection under a microscope preserves follicles that punch extraction might transect. For someone planning a single, comprehensive procedure with very heavy coverage demands, FUT is often the more efficient choice.',
      'At Istanbul Care, FUT is performed by surgeons with extensive strip experience and trichophytic closure training. We use ultra-fine sutures, multilayer closure and absorbable internal layers to produce the cleanest possible scar line. FUT and FUE can also be combined in the same session if needed.'
    ],
    specs: [
      { label: 'Technique', value: 'Strip excision + microdissection' },
      { label: 'Ideal Candidate', value: 'Norwood V–VII' },
      { label: 'Graft Range', value: '3,500–6,000' },
      { label: 'Duration', value: '5–7 hours' },
      { label: 'Anaesthesia', value: 'Local + sedation' },
      { label: 'Recovery', value: '10–14 days' },
      { label: 'Scarring', value: 'Fine linear strip scar' },
      { label: 'Success Rate', value: '92–96%' },
      { label: 'Price From', value: '$2,490' }
    ]
  },
  howItWorks: [
    {
      n: 1,
      title: 'Donor strip planning',
      description:
        'The surgeon measures donor density and laxity, then marks the strip area at the safest, densest part of the donor zone. Width and length are calculated based on the target graft count.'
    },
    {
      n: 2,
      title: 'Anaesthesia and strip removal',
      description:
        'Local anaesthesia is administered. The surgeon removes a thin horizontal strip of scalp containing thousands of follicular units, while preserving the surrounding hair and tissue layers.'
    },
    {
      n: 3,
      title: 'Trichophytic closure',
      description:
        'The donor area is closed in multiple layers using fine sutures with a trichophytic technique, where hair grows through the scar over time, dramatically reducing its visibility.'
    },
    {
      n: 4,
      title: 'Microdissection',
      description:
        'Under high-magnification microscopes, the strip is dissected by trained technicians into thousands of individual follicular units. This step typically preserves more grafts than FUE punch extraction.'
    },
    {
      n: 5,
      title: 'Channel creation and placement',
      description:
        'The surgeon designs the hairline and opens recipient channels at the chosen angle and density. Grafts are placed by trained technicians using jeweller forceps.'
    },
    {
      n: 6,
      title: 'Aftercare',
      description:
        'A protective dressing is applied to the donor strip. Stitches are removed at day 10–14, either at our clinic for those still in Istanbul or at a local clinic at home.'
    }
  ],
  advantages: [
    {
      title: 'Highest graft yield per session',
      description:
        'A single FUT session can routinely deliver 4,500–6,000 grafts, often more than FUE in the same operative day, making it ideal for severe hair loss.'
    },
    {
      title: 'Preserves follicle integrity',
      description:
        'Microdissection under magnification preserves more follicles intact than punch extraction, which can transect a small percentage of grafts.'
    },
    {
      title: 'Donor area unshaven',
      description:
        'Only the narrow strip itself is trimmed — the rest of the donor area is undisturbed. Hair worn at normal length covers the strip immediately post-op.'
    },
    {
      title: 'Better for curly or coarse hair',
      description:
        'For Afro-textured and very curly hair, strip dissection often preserves more grafts than punch FUE, where curved follicles are harder to extract cleanly.'
    },
    {
      title: 'Cost-effective for large cases',
      description:
        'When measured per graft, FUT can be more cost-effective than FUE for very large sessions because the operative time per graft is lower.'
    },
    {
      title: 'Excellent track record',
      description:
        'FUT has been refined since the 1990s. Long-term outcomes are well-documented, with mature follicles still growing normally 15–20 years after surgery.'
    }
  ],
  disadvantages: [
    {
      title: 'Linear donor scar',
      description:
        'A fine linear scar remains across the back of the donor area. With trichophytic closure and hair worn above ~10mm length, it is hard to see, but it is permanent.'
    },
    {
      title: 'Longer recovery',
      description:
        'Sutures need 10–14 days before removal. The donor area is tender for the first week, especially when lying down. Strenuous exercise is restricted for 3–4 weeks.'
    },
    {
      title: 'Not suitable for short haircuts',
      description:
        'Patients who routinely wear hair below ~8mm should choose FUE or DHI instead, as the strip scar may become visible at very short lengths.'
    },
    {
      title: 'Higher initial donor discomfort',
      description:
        'The donor area is more tender after FUT than after FUE for the first week, due to the sutured wound. Sleeping position needs to be adjusted.'
    }
  ],
  candidates: {
    perfect: [
      'Norwood V–VII patients needing maximum graft yield in one session',
      'Patients with curly or coarse hair where punch extraction risks transection',
      'Anyone with sufficient donor laxity to allow safe strip closure',
      'Patients who wear hair longer than ~10mm and are not worried about a hidden scar',
      'Healthy adults aged 30–70 with stable hair loss and realistic expectations'
    ],
    mayNeedAlternative: [
      'Patients with tight scalps and low donor laxity — FUE is safer',
      'Younger patients who may want to wear hair very short in future',
      'Patients prioritising fastest possible recovery — FUE heals quicker'
    ],
    notSuitable: [
      'Patients planning to wear hair shaved or very short',
      'Active scalp conditions or untreated infections',
      'Bleeding disorders or conditions impairing wound healing'
    ]
  },
  timeline: [
    {
      stage: 'Day 1–7',
      title: 'Donor healing — sutures in place',
      description:
        'The donor area is sore for the first 3–5 days. Sleep on your back with a travel pillow to keep pressure off the wound. Recipient area scabs form and start falling off by day 7.'
    },
    {
      stage: 'Week 2–4',
      title: 'Stitch removal and shock loss',
      description:
        'Sutures are removed at day 10–14. Transplanted hair sheds between week 2 and week 6 — this is normal. The donor scar starts maturing and becomes pinker before fading.'
    },
    {
      stage: 'Month 1–3',
      title: 'Quiet phase',
      description:
        'Little change in the recipient area. The donor scar continues to fade and flatten. Avoid stretching exercises and heavy weights that pull on the scalp.'
    },
    {
      stage: 'Month 4–6',
      title: 'New growth visible',
      description:
        'New hairs emerge from month 4. By month 6, significant coverage is visible. Trichophytic hair starts to grow through the donor scar, further camouflaging it.'
    },
    {
      stage: 'Month 12+',
      title: 'Final result',
      description:
        'Around month 12, approximately 90% of your final density is in place. The donor scar matures to a fine, pale line typically 1–2mm wide, well-hidden by surrounding hair.'
    }
  ],
  faq: [
    {
      question: 'Will I have a visible scar after FUT?',
      answer:
        'A thin linear scar remains, but with trichophytic closure and surrounding hair at ~10mm or longer, it is typically very hard to see. If you intend to wear hair shaved or very short, FUE or DHI is a better choice.'
    },
    {
      question: 'Why choose FUT over FUE?',
      answer:
        'FUT is preferred for very large sessions (5,000+ grafts), for patients with curly or coarse hair where punch extraction risks transection, and for anyone where graft yield per session matters more than donor appearance.'
    },
    {
      question: 'Does FUT hurt?',
      answer:
        'During surgery, no — local anaesthesia covers the entire donor and recipient. The donor area is more tender than after FUE for the first 5–7 days, but is well-managed with prescribed painkillers.'
    },
    {
      question: 'How many grafts can FUT deliver?',
      answer:
        'A single FUT session routinely delivers 4,500–6,000 grafts. Combined FUT + FUE sessions in the same day can push past 7,000 grafts for very advanced cases.'
    },
    {
      question: 'When can I return to work?',
      answer:
        'Office work: 7–10 days. The donor area needs to settle and stitches must remain undisturbed until removal. Physical work and gym sessions: 4 weeks. Avoid stretching exercises that pull on the scalp.'
    },
    {
      question: 'Are stitches removed before I fly home?',
      answer:
        'For patients staying in Istanbul for 10+ days, we remove stitches at our clinic. For shorter stays, we provide a removal protocol and note for a local clinic or GP to remove at day 10–14.'
    },
    {
      question: 'Is FUT permanent?',
      answer:
        'Yes. Transplanted follicles retain their genetic resistance to male pattern baldness and grow for life.'
    },
    {
      question: 'Can I combine FUT with FUE?',
      answer:
        'Yes. Combined sessions can deliver the highest possible graft count in one day — useful for very advanced Norwood VI–VII cases. We assess donor density and laxity to plan the optimal split.'
    },
    {
      question: 'What is the success rate of FUT?',
      answer:
        'Properly performed FUT has a graft survival rate of 92–96%. Microdissection under magnification protects follicle integrity. Outcomes below expectation at month 12 are covered by our touch-up guarantee.'
    },
    {
      question: 'Can women have FUT?',
      answer:
        'Yes, in selected cases — particularly women with strong donor density who need large coverage and prefer not to shave their entire head. We assess each case individually.'
    }
  ]
};

export default function Page() {
  return <TechniquePage data={data} />;
}
