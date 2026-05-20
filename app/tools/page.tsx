import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Hair Transplant Tools | Istanbul Care',
  description:
    'Free calculators and tools to plan your hair transplant: graft calculator, Norwood scale, hair density estimator, price estimator and more.'
};

const tools = [
  {
    href: '/tools/graft-calculator',
    title: 'Graft Calculator',
    description:
      'Estimate how many grafts you may need based on your hair loss pattern and goals.',
    img: 'https://picsum.photos/seed/graft/640/400',
    tag: 'Planning'
  },
  {
    href: '/tools/norwood-scale',
    title: 'Norwood Scale Tool',
    description:
      'Identify your stage on the Norwood–Hamilton scale to understand your hair loss level.',
    img: 'https://picsum.photos/seed/norwood/640/400',
    tag: 'Diagnosis'
  },
  {
    href: '/tools/hair-density',
    title: 'Hair Density Estimator',
    description:
      'Calculate the density needed in donor and recipient areas for natural results.',
    img: 'https://picsum.photos/seed/density/640/400',
    tag: 'Diagnosis'
  },
  {
    href: '/tools/price-estimator',
    title: 'Price Estimator',
    description:
      'Get an instant package quote — surgeon, technique, hotel, and transfers included.',
    img: 'https://picsum.photos/seed/price/640/400',
    tag: 'Pricing'
  },
  {
    href: '/tools/hair-loss-quiz',
    title: 'Hair Loss Quiz',
    description:
      'Answer a few questions to see which transplant technique fits you best.',
    img: 'https://picsum.photos/seed/quiz/640/400',
    tag: 'Diagnosis'
  },
  {
    href: '/tools/recovery-timeline',
    title: 'Recovery Timeline',
    description:
      'A day-by-day, week-by-week guide of what to expect after your operation.',
    img: 'https://picsum.photos/seed/recovery/640/400',
    tag: 'Aftercare'
  },
  {
    href: '/tools/beard-graft-calculator',
    title: 'Beard Graft Calculator',
    description:
      'Plan the grafts required for full beard, moustache, sideburns, or goatee shaping.',
    img: 'https://picsum.photos/seed/beard/640/400',
    tag: 'Planning'
  },
  {
    href: '/tools/eyebrow-graft-calculator',
    title: 'Eyebrow Graft Calculator',
    description:
      'Determine the right graft count for shaped, natural-looking eyebrows.',
    img: 'https://picsum.photos/seed/eyebrow/640/400',
    tag: 'Planning'
  },
  {
    href: '/tools/budget-planner',
    title: 'Travel & Budget Planner',
    description:
      'Compare prices across techniques and add up flights, hotel and extras.',
    img: 'https://picsum.photos/seed/budget/640/400',
    tag: 'Pricing'
  }
];

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinic Tools"
        title="Hair Transplant Tools"
        subtitle="Free interactive tools to plan, price and prepare for your hair transplant. Built with our medical team."
      />
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-2xl overflow-hidden bg-white border border-soft/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.img}
                  alt={tool.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-accent text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                  {tool.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm text-primary/70 leading-relaxed">
                  {tool.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Use Tool →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="brand-gradient text-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Need a personal assessment?</h2>
            <p className="mt-2 text-white/85 max-w-2xl">
              Our coordinators review your photos and goals to build a treatment plan tailored to you.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-strong transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
