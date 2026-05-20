import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Blog | Istanbul Care Hair Clinic',
  description:
    'Guides, research and aftercare tips from the medical team at Istanbul Care Hair Clinic.'
};

const categories = ['All', 'Hair Transplant', 'Aftercare', 'Research', 'Celebrities', 'Cost & Pricing'];

const posts = [
  {
    href: '/blog/bald-mans-guide-to-modern-hair-restoration',
    title: "Bald Man's Guide to Modern Hair Restoration",
    excerpt:
      'A complete look at the modern restoration options for men experiencing significant hair loss.',
    date: '2026-05-12',
    readingTime: 9,
    category: 'Hair Transplant',
    img: 'https://picsum.photos/seed/blog1/800/520',
    featured: true
  },
  {
    href: '/blog/tristan-tate-hairline',
    title: 'Tristan Tate Hairline: Recession, Density and Transplant Questions',
    excerpt:
      'We analyse Tristan Tate’s hairline evolution and what techniques he likely used.',
    date: '2026-05-02',
    readingTime: 7,
    category: 'Celebrities',
    img: 'https://picsum.photos/seed/blog2/800/520'
  },
  {
    href: '/blog/bald-people-causes-myths-restoration',
    title: 'Bald People: Causes, Myths and Restoration Options',
    excerpt:
      'Separating common myths from medical reality and exploring restoration paths.',
    date: '2026-04-21',
    readingTime: 8,
    category: 'Research',
    img: 'https://picsum.photos/seed/blog3/800/520'
  },
  {
    href: '/blog/jeremy-pivens-hairline',
    title: "Jeremy Piven's Hairline: Transplant or Hairpiece?",
    excerpt:
      'A closer look at the photographic evidence of Jeremy Piven’s hairline over the years.',
    date: '2026-04-10',
    readingTime: 6,
    category: 'Celebrities',
    img: 'https://picsum.photos/seed/blog4/800/520'
  },
  {
    href: '/blog/trichotillomania-restoration',
    title: 'Trichotillomania and Hair Restoration: What Are My Options?',
    excerpt:
      'Restoration options for people living with trichotillomania, with surgeon guidance.',
    date: '2026-03-28',
    readingTime: 7,
    category: 'Research',
    img: 'https://picsum.photos/seed/blog5/800/520'
  },
  {
    href: '/blog/mustard-oil-hair-benefits',
    title: 'Mustard Oil and Hair: What the Evidence Says',
    excerpt:
      'Is mustard oil actually good for your hair? We look at the research and clinical experience.',
    date: '2026-03-15',
    readingTime: 5,
    category: 'Aftercare',
    img: 'https://picsum.photos/seed/blog6/800/520'
  },
  {
    href: '/blog/bump-on-scalp-treatment',
    title: 'Bump on Scalp: How to Identify and Treat It',
    excerpt:
      'When to worry about scalp bumps and when they are just a routine concern.',
    date: '2026-03-04',
    readingTime: 6,
    category: 'Aftercare',
    img: 'https://picsum.photos/seed/blog7/800/520'
  },
  {
    href: '/blog/can-hair-mold-cause-hair-loss',
    title: 'Can Hair Mold Cause Hair Loss?',
    excerpt:
      'Exploring the surprising link between damp environments, hair mold and hair loss.',
    date: '2026-02-22',
    readingTime: 5,
    category: 'Research',
    img: 'https://picsum.photos/seed/blog8/800/520'
  },
  {
    href: '/blog/fue-cost-turkey',
    title: 'What Is the Average Cost of FUE Hair Transplant in Turkey?',
    excerpt:
      'Real prices, what’s included in packages, and how to avoid hidden costs.',
    date: '2026-02-10',
    readingTime: 7,
    category: 'Cost & Pricing',
    img: 'https://picsum.photos/seed/blog9/800/520'
  }
];

const featured = posts.find((p) => p.featured) ?? posts[0];
const rest = posts.filter((p) => p !== featured);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Istanbul Care Blog"
        title="Hair, science and patient stories"
        subtitle="In-depth guides, research and aftercare tips written by our medical team and contributing experts."
      />

      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c, i) => (
            <button
              key={c}
              className={
                'rounded-full px-4 py-2 text-sm font-medium transition-colors ' +
                (i === 0
                  ? 'bg-primary text-white'
                  : 'bg-primary/5 text-primary hover:bg-secondary hover:text-white')
              }
            >
              {c}
            </button>
          ))}
        </div>

        <Link
          href={featured.href}
          className="group block rounded-2xl overflow-hidden border border-soft/40 hover:shadow-xl transition-shadow"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.img}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 rounded-full bg-accent text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                Featured
              </span>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-secondary font-semibold">
                <span>{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-soft" />
                <time>{formatDate(featured.date)}</time>
                <span className="h-1 w-1 rounded-full bg-soft" />
                <span>{featured.readingTime} min read</span>
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-primary group-hover:text-secondary">
                {featured.title}
              </h2>
              <p className="mt-3 text-primary/75 leading-relaxed">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                Read article →
              </span>
            </div>
          </div>
        </Link>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {rest.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-2xl overflow-hidden bg-white border border-soft/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-primary/85 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-primary/60">
                  <time>{formatDate(post.date)}</time>
                  <span className="h-1 w-1 rounded-full bg-soft" />
                  <span>{post.readingTime} min read</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-primary group-hover:text-secondary leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-primary/75 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold hover:bg-primary-dark transition-colors">
            Load more articles
          </button>
        </div>
      </section>
    </>
  );
}
