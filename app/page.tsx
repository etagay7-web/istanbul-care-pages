import Link from 'next/link';
import PageHero from '@/components/PageHero';

const sections = [
  {
    href: '/tools',
    title: 'Clinic Tools',
    description: 'Calculators and interactive tools to plan your treatment.'
  },
  {
    href: '/review',
    title: 'Patient Reviews',
    description: 'Real before/after stories and patient experiences.'
  },
  {
    href: '/hair-transplant',
    title: 'Hair Transplant',
    description: 'Explore DHI, FUE, Sapphire FUE and more techniques.'
  },
  {
    href: '/blog',
    title: 'Blog',
    description: 'Guides, research and care tips from our medical team.'
  }
];

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Istanbul Care Hair Clinic"
        title="Natural results, expert surgeons, all-inclusive packages"
        subtitle="Explore the full Istanbul Care experience — patient reviews, hair transplant techniques, helpful clinic tools, and the latest from our blog."
      />
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl border border-soft/40 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
            >
              <div className="h-12 w-12 rounded-xl brand-gradient mb-4" />
              <h3 className="text-lg font-semibold text-primary group-hover:text-secondary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-primary/70 leading-relaxed">{s.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent-strong group-hover:text-accent">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
