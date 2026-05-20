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
        title="Expert Guides on Hair Transplant, Recovery & Results"
        subtitle="Our surgeons and medical specialists share honest, in-depth articles on DHI, FUE, aftercare, costs and real patient stories — everything you need to make a confident decision."
      >
        <a
          href="#authors"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-strong transition-colors"
        >
          Browse by Author ↓
        </a>
        <a
          href="#authors"
          className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 hover:border-white transition-colors"
        >
          View All Articles ↓
        </a>
      </PageHero>

      {/* SECTION 2 — Intro */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-12 py-16 md:py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Istanbul Care Editorial
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Expert-written content you can trust
          </h2>
          <p className="mt-5 text-primary/75 leading-relaxed">
            Every article published on the Istanbul Care blog is written or reviewed by a member of
            our medical team. Our authors are board-certified surgeons and specialists with years of
            hands-on experience in hair transplantation. Browse by author below to explore their
            areas of expertise and read their published content.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: '19 articles published' },
              { label: '4 specialist authors' },
              { label: '5 content categories' }
            ].map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-2 rounded-full bg-primary/5 text-primary text-sm font-semibold px-4 py-2 border border-soft/40"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Our Authors */}
      <section id="authors" className="max-w-8xl mx-auto px-4 lg:px-12 pb-16 scroll-mt-24">
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
                          href={`/blog/${post.slug}`}
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

      {/* SECTION 4 — Reach Us Now */}
      <section
        className="text-white"
        style={{
          backgroundImage: 'linear-gradient(90deg, #22c55e 0%, #41758c 100%)'
        }}
      >
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Free consultation
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">Reach Us Now</h2>
            <p className="mt-4 text-white/90 max-w-xl leading-relaxed">
              Speak with our expert hair transplant specialists. We&apos;re ready to answer your
              questions.
            </p>

            <form
              className="mt-8 grid gap-4 max-w-xl"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
              />

              <div className="flex gap-2">
                <div className="flex items-center gap-2 rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-3 py-3.5 text-white shrink-0">
                  <span aria-hidden>🇹🇷</span>
                  <span className="text-sm font-medium">+90</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 opacity-70"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="flex-1 rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
              />

              <select
                name="language"
                required
                defaultValue=""
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white focus:outline-none focus:border-white appearance-none"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1rem'
                }}
              >
                <option value="" disabled className="text-primary">
                  Select Language
                </option>
                {[
                  'English',
                  'German',
                  'French',
                  'Spanish',
                  'Italian',
                  'Polish',
                  'Romanian',
                  'Albanian'
                ].map((l) => (
                  <option key={l} value={l} className="text-primary">
                    {l}
                  </option>
                ))}
              </select>

              <select
                name="service"
                required
                defaultValue=""
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white focus:outline-none focus:border-white appearance-none"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1rem'
                }}
              >
                <option value="" disabled className="text-primary">
                  Service Category
                </option>
                {[
                  'Hair Transplant',
                  'DHI',
                  'FUE',
                  'Sapphire FUE',
                  'Beard Transplant',
                  'Eyebrow Transplant',
                  'Woman Hair Transplant'
                ].map((s) => (
                  <option key={s} value={s} className="text-primary">
                    {s}
                  </option>
                ))}
              </select>

              <label className="flex items-start gap-3 text-sm text-white/90 mt-1">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-white/40 accent-white"
                />
                <span>
                  I have read and accepted the{' '}
                  <Link href="/privacy-policy" className="underline hover:text-white">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary-strong hover:bg-primary-dark transition-colors px-6 py-4 text-base font-semibold text-white shadow-lg"
              >
                Send Now
              </button>
            </form>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl ring-4 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/doctors/500/600"
                alt="Istanbul Care medical team"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-strong/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
                  Medical Team
                </p>
                <p className="mt-1 text-lg font-bold drop-shadow">
                  Board-certified specialists, ready to help
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
