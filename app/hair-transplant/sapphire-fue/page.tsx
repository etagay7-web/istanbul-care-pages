import type { Metadata } from 'next';
import TechniquePage, { type TechniqueData } from '@/components/TechniquePage';

export const metadata: Metadata = {
  title: 'Sapphire FUE Hair Transplant in Turkey | Istanbul Care',
  description:
    'Sapphire FUE at Istanbul Care — sapphire-tipped blades for finer incisions, faster healing and denser packing than classic FUE.'
};

const data: TechniqueData = {
  slug: 'sapphire-fue',
  name: 'Sapphire FUE Hair Transplant',
  shortName: 'Sapphire FUE',
  hero: {
    title: 'Sapphire FUE — Precision Incisions, Tighter Density',
    subtitle:
      'Sapphire FUE upgrades the classic technique by replacing steel blades with V-shaped sapphire crystal tips. The result: smaller, smoother channels, denser packing per cm², and faster recipient-area healing.',
    stats: [
      { label: 'Graft range', value: '3,000–5,500' },
      { label: 'Duration', value: '7–9 hours' },
      { label: 'Recovery', value: '7–10 days' }
    ]
  },
  whatIsIt: {
    paragraphs: [
      'Sapphire FUE is a modern refinement of the FUE technique in which the channel-creation step uses blades crafted from real sapphire crystal rather than stainless steel. Sapphire is the second-hardest natural mineral after diamond, and these specialist blades come in V-tip widths from 1.0mm down to 1.3mm, allowing the surgeon to match channel size exactly to each follicular unit.',
      'The sapphire blade glides through the scalp with markedly less drag than steel, producing channels that are smoother on a microscopic level. This means less tissue trauma, less inflammation, and faster healing — most patients see scabs falling off and the recipient area smoothing out by day 7–10, slightly faster than classic FUE.',
      'Beyond healing, the precision of sapphire blades allows experienced surgeons to safely pack channels closer together. This translates to higher achievable density in the hairline and front-third of the scalp — typically 50–55 grafts/cm² compared to 40–45 grafts/cm² with classic steel-blade FUE.',
      'Sapphire FUE follows the same overall workflow as classic FUE: micro-punch extraction, manual graft sorting, channel creation, then placement. The only step that changes is the instrument used to create the recipient channels. Extraction, anaesthesia and aftercare are unchanged.',
      'At Istanbul Care, Sapphire FUE is performed exclusively by surgeons trained in the technique, with sterile single-use sapphire blade sets per patient. Sessions are typically scheduled for 3,000–5,500 grafts in one day, with the same all-inclusive package options as our other procedures.'
    ],
    specs: [
      { label: 'Technique', value: 'Sapphire blade FUE' },
      { label: 'Ideal Candidate', value: 'Norwood II–VI' },
      { label: 'Graft Range', value: '3,000–5,500' },
      { label: 'Duration', value: '7–9 hours' },
      { label: 'Anaesthesia', value: 'Local + sedation' },
      { label: 'Recovery', value: '7–10 days' },
      { label: 'Scarring', value: 'Virtually invisible' },
      { label: 'Success Rate', value: '95–98%' },
      { label: 'Price From', value: '$2,290' }
    ]
  },
  howItWorks: [
    {
      n: 1,
      title: 'Hairline design',
      description:
        'Your surgeon analyses face shape, donor density and goals, then draws and agrees the hairline with you before any cutting. Sapphire FUE’s density advantage is mapped into the front design.'
    },
    {
      n: 2,
      title: 'Anaesthesia',
      description:
        'Local anaesthesia is delivered to donor and recipient zones using vibration-assisted delivery to minimise the initial prick. The numb area covers ear-to-ear across the back and sides.'
    },
    {
      n: 3,
      title: 'FUE extraction',
      description:
        'Follicular units are extracted with a sub-1mm motorised punch. Grafts are sorted by hair count under magnification and kept in chilled holding solution.'
    },
    {
      n: 4,
      title: 'Sapphire channel opening',
      description:
        'Using sapphire V-tip blades sized 1.0–1.3mm, the surgeon opens recipient channels at the exact angle, direction and depth needed. Sapphire’s smooth glide allows tighter packing.'
    },
    {
      n: 5,
      title: 'Graft implantation',
      description:
        'Trained technicians place each follicle into a pre-made channel. Single-hair grafts line the hairline; thicker 2–3 hair units sit behind for density.'
    },
    {
      n: 6,
      title: 'Aftercare',
      description:
        'A protective dressing and headband are applied. The team explains aftercare in detail, books your scheduled next-day wash, and provides your aftercare kit and direct contact details.'
    }
  ],
  advantages: [
    {
      title: 'Higher achievable density',
      description:
        'Sapphire blades allow safe channel packing at 50–55 grafts/cm² in the hairline, around 10–20% denser than steel-blade FUE in experienced hands.'
    },
    {
      title: 'Smoother, smaller channels',
      description:
        'The hardness of sapphire produces precision channels with minimal lateral tissue damage. This reduces inflammation and supports faster recovery.'
    },
    {
      title: 'Faster recipient healing',
      description:
        'Most patients see scabs falling off by day 7–10. The recipient area looks neater and less inflamed than equivalent steel-blade FUE at the same stage.'
    },
    {
      title: 'No linear scar',
      description:
        'Like classic FUE, Sapphire FUE leaves only pinpoint marks in the donor that fade within weeks. You can wear hair very short with no visible scarring.'
    },
    {
      title: 'Suitable for large sessions',
      description:
        'Sapphire FUE handles 3,000–5,500 grafts comfortably in one day, making it ideal for patients who want broad coverage in a single trip.'
    },
    {
      title: 'Excellent for hairline design',
      description:
        'The precision of sapphire blades is particularly valuable when designing detailed hairlines, where angle and density at the front matter most.'
    }
  ],
  disadvantages: [
    {
      title: 'Higher price than classic FUE',
      description:
        'Sapphire blade sets are consumable and more expensive than steel. Packages are typically 10–15% higher than steel-blade FUE for the same graft count.'
    },
    {
      title: 'Operator skill remains critical',
      description:
        'Sapphire is a tool, not a magic upgrade. Density and natural angle still depend entirely on surgeon experience and team training.'
    },
    {
      title: 'Slightly longer session',
      description:
        'A 3,500-graft Sapphire FUE typically runs 30–60 minutes longer than the same case in classic FUE, due to the more precise channel work.'
    },
    {
      title: 'Recipient shaving usually needed',
      description:
        'For sessions above ~2,500 grafts, the recipient is shaved. For unshaven results, DHI is generally a better fit.'
    }
  ],
  candidates: {
    perfect: [
      'Patients prioritising hairline density and natural-looking front-third coverage',
      'Norwood III–VI cases needing large session sizes (3,000–5,500 grafts)',
      'Patients who want to wear hair short with no visible scarring',
      'Anyone with a healthy donor and realistic expectations',
      'Healthy adults aged 25–70 with stable hair loss'
    ],
    mayNeedAlternative: [
      'Patients wanting fully unshaven recipient — consider DHI instead',
      'Norwood VII with very limited donor — full body-hair assessment needed first',
      'Patients seeking purely budget-minimum surgery — classic FUE is cheaper'
    ],
    notSuitable: [
      'Active scalp infection or untreated dermatological conditions',
      'Unstable hair loss in patients under 22',
      'Serious medical conditions that contraindicate elective surgery'
    ]
  },
  timeline: [
    {
      stage: 'Day 1–7',
      title: 'Initial healing',
      description:
        'Tiny scabs form on the recipient area within 48 hours; sapphire’s clean channels mean scabs are usually smaller and crispier than with steel-blade FUE. Forehead swelling, if any, resolves by day 6.'
    },
    {
      stage: 'Week 2–4',
      title: 'Shock loss phase',
      description:
        'Transplanted hairs shed between week 2 and week 6 — this is expected and temporary. The donor area is essentially invisible to others by the end of week 3.'
    },
    {
      stage: 'Month 1–3',
      title: 'Dormant period',
      description:
        'Little change is visible to the eye. Underneath the surface, follicles are preparing to push new hairs through. Avoid over-photographing yourself — month-by-month comparisons are misleading here.'
    },
    {
      stage: 'Month 4–6',
      title: 'New growth visible',
      description:
        'New hairs start to push through around month 4. By month 6, you have significant coverage, although new hairs are still fine and may look slightly wispy in this stage.'
    },
    {
      stage: 'Month 12+',
      title: 'Mature density',
      description:
        'By month 12, approximately 90% of your final result is in place. Sapphire FUE patients often notice their final density looks tighter and more even than expected, particularly at the hairline.'
    }
  ],
  faq: [
    {
      question: 'Does Sapphire FUE hurt?',
      answer:
        'During the procedure, no. Local anaesthesia is administered first, after which you should feel only pressure or vibration. Post-op soreness for 24–48 hours is mild and well-controlled by simple painkillers.'
    },
    {
      question: 'How is Sapphire FUE different from classic FUE?',
      answer:
        'Extraction is identical. The difference is the blade used to open recipient channels. Sapphire blades produce smaller, smoother channels, allowing 10–20% higher achievable density and slightly faster recipient healing.'
    },
    {
      question: 'How is Sapphire FUE different from DHI?',
      answer:
        'Sapphire FUE creates channels first and then places grafts; DHI does both steps in one motion with a Choi pen. Sapphire FUE handles larger sessions efficiently; DHI offers tighter density and unshaven options.'
    },
    {
      question: 'How many grafts will I need?',
      answer:
        'Typically 3,000–5,500 grafts for full coverage, depending on Norwood stage and donor density. Our coordinators give you a tailored estimate from your photos before you travel.'
    },
    {
      question: 'When can I return to work?',
      answer:
        'Office work: 5–7 days. Most Sapphire FUE patients find the recipient looks particularly clean at that stage. Physical work and exercise: two weeks. Swimming and saunas: four weeks.'
    },
    {
      question: 'Will I have a scar?',
      answer:
        'No linear scar. Pinpoint extraction marks fade within 2–4 weeks. You can wear hair very short without visible scarring.'
    },
    {
      question: 'Is Sapphire FUE permanent?',
      answer:
        'Yes. The transplanted follicles come from the genetically stable donor area and continue to grow for life once they take root in the recipient area.'
    },
    {
      question: 'Can I combine Sapphire FUE with PRP?',
      answer:
        'Yes. PRP is included in every Istanbul Care Sapphire FUE package and is applied immediately after surgery, with a follow-up session at month 1.'
    },
    {
      question: 'What is the success rate?',
      answer:
        'In experienced hands, Sapphire FUE achieves 95–98% follicle survival. Outcomes below expectations at month 12 are covered by our touch-up guarantee.'
    },
    {
      question: 'Do I need to shave my head?',
      answer:
        'The donor must be shaved. For larger sessions, the recipient area is also shaved. For fully unshaven goals, consider DHI as an alternative.'
    }
  ]
};

export default function Page() {
  return <TechniquePage data={data} />;
}
