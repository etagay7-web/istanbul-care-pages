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
    href: '/tools/beard-calculator',
    title: 'Beard Graft Calculator',
    description:
      'Plan the grafts required for full beard, moustache, sideburns, or goatee shaping.',
    img: 'https://picsum.photos/seed/beard/640/400',
    tag: 'Planning'
  },
  {
    href: '/tools/eyebrow-calculator',
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

const benefits = [
  {
    title: 'Free & Accurate',
    description:
      '100% free to use, with no signup required. The math behind every tool is reviewed by our medical team.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
      </svg>
    )
  },
  {
    title: 'Clinically Backed',
    description:
      'Built with input from board-certified hair restoration surgeons performing thousands of operations a year.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: 'Instant Results',
    description:
      'No back-and-forth emails. Get your estimate, plan, or quote in under a minute — right in your browser.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  }
];

const steps = [
  {
    n: '01',
    title: 'Choose your tool',
    description:
      'Pick the calculator or planner that matches the question on your mind — grafts, price, density, recovery and more.'
  },
  {
    n: '02',
    title: 'Get your result',
    description:
      'Answer a couple of guided questions and receive an instant, personalised estimate or plan.'
  },
  {
    n: '03',
    title: 'Book free consultation',
    description:
      'Happy with the result? Send it straight to our coordinators and lock in a free, no-obligation video consult.'
  }
];

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hair Transplant Tools"
        title="Plan, price and prepare for your hair transplant"
        subtitle="A complete suite of free, clinic-grade tools — graft calculators, Norwood diagnostics, pricing estimators and aftercare planners — built by our medical team."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">All clinic tools</h2>
            <p className="mt-2 text-primary/70 max-w-2xl">
              Pick a tool to get started. Every result is private to your browser — we never store anything without your consent.
            </p>
          </div>
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            {tools.length} tools available
          </span>
        </div>

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
                <p className="mt-2 text-sm text-primary/70 leading-relaxed">{tool.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Use Tool →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Why use our tools?
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-primary">
              Built to give you straight, trustworthy answers
            </h2>
            <p className="mt-3 text-primary/70 leading-relaxed">
              No sales tricks, no fake countdowns. Just useful tools to help you make a confident decision about your hair restoration.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-white border border-soft/40 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl brand-gradient text-white flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-primary/75 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            How it works
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-primary">
            From question to consultation in three steps
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3 relative">
          {steps.map((s, i) => (
            <li key={s.n} className="relative rounded-2xl bg-white border border-soft/40 p-7">
              <div className="text-5xl font-extrabold text-secondary/20 leading-none">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{s.description}</p>
              {i < steps.length - 1 ? (
                <span className="hidden md:block absolute top-1/2 -right-3 translate-x-0 -translate-y-1/2 text-secondary">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-primary-strong text-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
              Free consultation
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Ready to take the next step?
            </h2>
            <p className="mt-4 text-white/85 leading-relaxed max-w-xl">
              Send your tool results to our medical coordinators. We will review your photos and goals and build an honest, all-inclusive treatment plan within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-strong transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/hair-transplant"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Explore Techniques
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
