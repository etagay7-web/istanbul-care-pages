'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import PageHero from '@/components/PageHero';

type Category = 'Hair Transplant' | 'Aftercare' | 'Research' | 'Celebrities' | 'Cost & Pricing';

type Post = {
  slug: string;
  title: string;
  category: Category;
  date: string;
  readingTime: number;
  img: string;
  excerpt?: string;
};

type Author = {
  slug: string;
  name: string;
  initials: string;
  title: string;
  bio: string;
  tags: string[];
  accent: 'primary' | 'secondary' | 'accent' | 'primaryDark';
  posts: Post[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const mk = (title: string, category: Category, date: string, readingTime = 6): Post => ({
  slug: slugify(title),
  title,
  category,
  date,
  readingTime,
  img: `https://picsum.photos/seed/${slugify(title)}/800/520`,
  excerpt:
    'A clear, surgeon-reviewed read from the Istanbul Care editorial team — practical guidance you can trust.'
});

const authors: Author[] = [
  {
    slug: 'dr-asil-b',
    name: 'Dr. Asil B.',
    initials: 'AB',
    title: 'Hair Transplant Specialist & Trichologist',
    bio: 'Board-certified hair restoration surgeon with deep expertise in FUE, DHI and beard transplantation. Leads the editorial team for hair transplant content.',
    tags: ['FUE', 'DHI', 'Trichology', 'Beard'],
    accent: 'primary',
    posts: [
      mk("Bald Man's Guide to Modern Hair Restoration", 'Hair Transplant', '2026-05-12', 9),
      mk('Blonde Hair Transplant in Turkey', 'Hair Transplant', '2026-05-15', 7),
      mk('Joel McHale Hairline Analysis', 'Celebrities', '2026-05-04', 6),
      mk('Creatine and Hair Loss', 'Research', '2026-04-30', 8),
      mk("Sapphire FUE: A Surgeon's Honest Guide", 'Hair Transplant', '2026-04-29', 10),
      mk('Hair Transplant Aftercare: Week by Week', 'Aftercare', '2026-04-20', 7)
    ]
  },
  {
    slug: 'dr-aysenur-k',
    name: 'Dr. Ayşenur K.',
    initials: 'AK',
    title: 'Hair Transplant Specialist',
    bio: 'Specialist focused on natural hairline design and a calm, patient-first counselling style. Reviews aftercare content across the blog.',
    tags: ['FUE', 'DHI', 'Natural Hairline', 'Patient Care'],
    accent: 'secondary',
    posts: [
      mk('Natural Hairline Design Principles', 'Hair Transplant', '2026-05-10', 7),
      mk('DHI vs FUE: Which Is Right for You?', 'Hair Transplant', '2026-04-25', 8),
      mk('Female Hair Loss Patterns Explained', 'Research', '2026-04-15', 6),
      mk('What to Expect on Surgery Day', 'Aftercare', '2026-04-08', 5)
    ]
  },
  {
    slug: 'dr-merve-s',
    name: 'Dr. Merve S.',
    initials: 'MS',
    title: 'Hair Transplant Specialist',
    bio: 'Surgeon specialising in crown restoration and minimally invasive techniques. Writes deep dives on the science behind density and graft survival.',
    tags: ['FUE', 'DHI', 'Minimally Invasive', 'Crown'],
    accent: 'accent',
    posts: [
      mk('Crown Restoration: Challenges and Solutions', 'Hair Transplant', '2026-05-08', 9),
      mk('Minimally Invasive Techniques in 2026', 'Hair Transplant', '2026-04-22', 7),
      mk('Post-Op Pain Management Guide', 'Aftercare', '2026-04-12', 6),
      mk('Hair Density: What the Numbers Mean', 'Research', '2026-03-30', 7)
    ]
  },
  {
    slug: 'uzm-dr-tugba-h',
    name: 'Uzm. Dr. Tuğba H.',
    initials: 'TH',
    title: 'Hair Transplant Specialist',
    bio: 'Specialist physician leading our female hair loss and hairline restoration programmes. Reviews the literature behind every research article.',
    tags: ['Female Hair Loss', 'Hairline Restoration'],
    accent: 'primaryDark',
    posts: [
      mk('Women and Hair Transplants: The Complete Guide', 'Hair Transplant', '2026-05-14', 10),
      mk('Hairline Restoration for Women', 'Hair Transplant', '2026-05-05', 8),
      mk('Trichology Basics Every Patient Should Know', 'Research', '2026-04-18', 7),
      mk('Cost of Hair Transplant in Turkey 2026', 'Cost & Pricing', '2026-04-10', 6),
      mk('Tristan Tate Hairline Analysis', 'Celebrities', '2026-05-12', 5)
    ]
  }
];

const allPosts: (Post & { author: Author })[] = authors.flatMap((a) =>
  a.posts.map((p) => ({ ...p, author: a }))
);

const categories: ('All' | Category)[] = [
  'All',
  'Hair Transplant',
  'Aftercare',
  'Research',
  'Celebrities',
  'Cost & Pricing'
];

const categoryStyle: Record<Category, string> = {
  'Hair Transplant': 'bg-primary text-white',
  Aftercare: 'bg-accent text-white',
  Research: 'bg-secondary text-white',
  Celebrities: 'bg-primary-dark text-white',
  'Cost & Pricing': 'bg-accent-strong text-white'
};

const accentBg: Record<Author['accent'], string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
  primaryDark: 'bg-primary-dark'
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

export default function BlogPage() {
  const [openAuthor, setOpenAuthor] = useState<string | null>(authors[0].slug);
  const [activeCategory, setActiveCategory] = useState<'All' | Category>('All');

  const filteredPosts = useMemo(() => {
    const sorted = [...allPosts].sort((a, b) => b.date.localeCompare(a.date));
    if (activeCategory === 'All') return sorted;
    return sorted.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero
        eyebrow="Istanbul Care Blog"
        title="Hair, science and patient stories"
        subtitle="In-depth guides, research and aftercare tips written by our medical team and contributing experts."
      />

      {/* SECTION 2 — OUR AUTHORS (above articles) */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Editorial team
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Our Authors
          </h2>
          <p className="mt-4 text-primary/75 leading-relaxed">
            Every article is written, reviewed or supervised by a member of our medical team. Tap an
            author to see their work and areas of expertise.
          </p>
        </div>

        <div className="space-y-6">
          {authors.map((author) => {
            const isOpen = openAuthor === author.slug;
            return (
              <div key={author.slug}>
                <button
                  onClick={() => setOpenAuthor(isOpen ? null : author.slug)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${author.slug}`}
                  className={
                    'w-full rounded-2xl overflow-hidden bg-white border border-soft/40 grid grid-cols-1 md:grid-cols-[280px_1fr] text-left transition-all ' +
                    (isOpen ? 'shadow-xl border-secondary' : 'shadow-sm hover:shadow-lg hover:border-secondary/60')
                  }
                >
                  {/* Left: gradient panel with initial + name */}
                  <div
                    className={
                      'relative px-6 py-8 md:py-10 text-white flex flex-col items-center justify-center text-center ' +
                      accentBg[author.accent]
                    }
                  >
                    <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />
                    <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/15 backdrop-blur ring-4 ring-white/20 flex items-center justify-center text-3xl md:text-4xl font-bold">
                      {author.initials}
                    </div>
                    <h3 className="relative mt-4 text-lg md:text-xl font-bold leading-tight">
                      {author.name}
                    </h3>
                    <p className="relative mt-1 text-xs md:text-sm text-white/85">
                      {author.posts.length} article{author.posts.length === 1 ? '' : 's'}
                    </p>
                  </div>

                  {/* Right: bio + tags + meta */}
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm md:text-base font-semibold text-secondary">
                        {author.title}
                      </p>
                      <span
                        aria-hidden
                        className={
                          'h-9 w-9 shrink-0 inline-flex items-center justify-center rounded-full text-lg transition-transform ' +
                          (isOpen ? 'bg-accent text-white rotate-45' : 'bg-primary/5 text-primary')
                        }
                      >
                        +
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-primary/75 leading-relaxed">{author.bio}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {author.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex rounded-full bg-secondary/10 text-primary text-xs font-medium px-3 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span
                      className={
                        'mt-5 text-xs font-semibold uppercase tracking-wider transition-colors ' +
                        (isOpen ? 'text-accent-strong' : 'text-primary/60')
                      }
                    >
                      {isOpen ? 'Hide articles ↑' : 'View articles ↓'}
                    </span>
                  </div>
                </button>

                {/* Expanded panel */}
                {isOpen ? (
                  <div
                    id={`panel-${author.slug}`}
                    className="mt-4 rounded-2xl bg-white border border-soft/40 shadow-sm overflow-hidden"
                  >
                    <ul className="px-2 md:px-4 py-6">
                      {author.posts.map((post) => (
                        <li key={post.slug}>
                          <Link
                            href={`/tools/blog/${post.slug}`}
                            className="group block rounded-xl px-4 md:px-6 py-4 hover:bg-primary/5 transition-colors"
                          >
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                              <span
                                className={
                                  'inline-flex w-fit rounded-full text-[10px] uppercase tracking-wider font-semibold px-3 py-1 ' +
                                  categoryStyle[post.category]
                                }
                              >
                                {post.category}
                              </span>
                              <h5 className="flex-1 text-base md:text-lg font-semibold text-primary group-hover:text-secondary leading-snug">
                                {post.title}
                              </h5>
                              <div className="flex items-center gap-3 text-xs text-primary/60 whitespace-nowrap">
                                <time>{formatDate(post.date)}</time>
                                <span className="h-1 w-1 rounded-full bg-soft" />
                                <span>{post.readingTime} min</span>
                                <span className="hidden md:inline text-sm font-semibold text-accent-strong group-hover:text-accent ml-2">
                                  Read article →
                                </span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3 — ALL ARTICLES */}
      <section className="bg-primary/5 border-t border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                All articles
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
                Latest from the blog
              </h2>
            </div>
            <span className="text-sm font-semibold text-primary/70">
              {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
              {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => {
              const active = c === activeCategory;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors ' +
                    (active
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary border border-soft/40 hover:bg-secondary hover:text-white hover:border-secondary')
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>

          {filteredPosts.length === 0 ? (
            <p className="rounded-2xl bg-white border border-soft/40 p-10 text-center text-primary/70">
              No articles in this category yet — check back soon.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/tools/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-soft/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
                >
                  <div className="grid sm:grid-cols-[200px_1fr]">
                    <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[180px] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.img}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className={
                          'absolute top-3 left-3 rounded-full text-[10px] font-semibold uppercase tracking-wider px-3 py-1 ' +
                          categoryStyle[post.category]
                        }
                      >
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
                      <p className="mt-2 text-sm text-primary/75 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs">
                        <span className="text-primary/60">By {post.author.name}</span>
                        <span className="text-sm font-semibold text-accent-strong group-hover:text-accent">
                          Read article →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
