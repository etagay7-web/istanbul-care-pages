'use client';

import Link from 'next/link';
import { useState } from 'react';
import PageHero from '@/components/PageHero';

type Category = 'Hair Transplant' | 'Aftercare' | 'Research' | 'Celebrities' | 'Cost & Pricing';

type Post = {
  slug: string;
  title: string;
  category: Category;
  date: string;
  readingTime: number;
  img: string;
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
  img: `https://picsum.photos/seed/${slugify(title)}/800/520`
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

  return (
    <>
      <PageHero
        eyebrow="Istanbul Care Blog"
        title="Hair, science and patient stories"
        subtitle="In-depth guides, research and aftercare tips written by our medical team and contributing experts."
      />

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
            author to see their work.
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
                    (isOpen
                      ? 'shadow-xl border-secondary'
                      : 'shadow-sm hover:shadow-lg hover:border-secondary/60')
                  }
                >
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
                      {isOpen ? 'Hide Articles ↑' : 'View Articles ↓'}
                    </span>
                  </div>
                </button>

                {isOpen ? (
                  <div
                    id={`panel-${author.slug}`}
                    className="mt-4 rounded-2xl bg-white border border-soft/40 shadow-sm p-5 md:p-8"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      {author.posts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/tools/blog/${post.slug}`}
                          className="group rounded-2xl overflow-hidden bg-white border border-soft/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden">
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
                          <div className="p-5">
                            <div className="flex items-center gap-3 text-xs text-primary/60">
                              <time>{formatDate(post.date)}</time>
                              <span className="h-1 w-1 rounded-full bg-soft" />
                              <span>{post.readingTime} min read</span>
                            </div>
                            <h4 className="mt-3 text-base md:text-lg font-semibold text-primary group-hover:text-secondary leading-snug">
                              {post.title}
                            </h4>
                            <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                              Read article →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
