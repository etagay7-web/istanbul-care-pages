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
    slug: 'bald-mans-guide-to-modern-hair-restoration',
    title: "Bald Man's Guide to Modern Hair Restoration",
    excerpt:
      'A complete look at the modern restoration options for men experiencing significant hair loss.',
    date: '2026-05-12',
    readingTime: 9,
    category: 'Hair Transplant',
    img: 'https://picsum.photos/seed/blog1/800/520',
    featured: true,
    author: 'Dr. Asil B.'
  },
  {
    slug: 'tristan-tate-hairline',
    title: 'Tristan Tate Hairline: Recession, Density and Transplant Questions',
    excerpt:
      'We analyse Tristan Tate’s hairline evolution and what techniques he likely used.',
    date: '2026-05-02',
    readingTime: 7,
    category: 'Celebrities',
    img: 'https://picsum.photos/seed/blog2/800/520',
    author: 'Dr. Merve S.'
  },
  {
    slug: 'bald-people-causes-myths-restoration',
    title: 'Bald People: Causes, Myths and Restoration Options',
    excerpt:
      'Separating common myths from medical reality and exploring restoration paths.',
    date: '2026-04-21',
    readingTime: 8,
    category: 'Research',
    img: 'https://picsum.photos/seed/blog3/800/520',
    author: 'Uzm. Dr. Tuğba H.'
  },
  {
    slug: 'jeremy-pivens-hairline',
    title: "Jeremy Piven's Hairline: Transplant or Hairpiece?",
    excerpt:
      'A closer look at the photographic evidence of Jeremy Piven’s hairline over the years.',
    date: '2026-04-10',
    readingTime: 6,
    category: 'Celebrities',
    img: 'https://picsum.photos/seed/blog4/800/520',
    author: 'Dr. Ayşenur K.'
  },
  {
    slug: 'trichotillomania-restoration',
    title: 'Trichotillomania and Hair Restoration: What Are My Options?',
    excerpt:
      'Restoration options for people living with trichotillomania, with surgeon guidance.',
    date: '2026-03-28',
    readingTime: 7,
    category: 'Research',
    img: 'https://picsum.photos/seed/blog5/800/520',
    author: 'Uzm. Dr. Tuğba H.'
  },
  {
    slug: 'mustard-oil-hair-benefits',
    title: 'Mustard Oil and Hair: What the Evidence Says',
    excerpt:
      'Is mustard oil actually good for your hair? We look at the research and clinical experience.',
    date: '2026-03-15',
    readingTime: 5,
    category: 'Aftercare',
    img: 'https://picsum.photos/seed/blog6/800/520',
    author: 'Dr. Ayşenur K.'
  },
  {
    slug: 'bump-on-scalp-treatment',
    title: 'Bump on Scalp: How to Identify and Treat It',
    excerpt:
      'When to worry about scalp bumps and when they are just a routine concern.',
    date: '2026-03-04',
    readingTime: 6,
    category: 'Aftercare',
    img: 'https://picsum.photos/seed/blog7/800/520',
    author: 'Dr. Merve S.'
  },
  {
    slug: 'can-hair-mold-cause-hair-loss',
    title: 'Can Hair Mold Cause Hair Loss?',
    excerpt:
      'Exploring the surprising link between damp environments, hair mold and hair loss.',
    date: '2026-02-22',
    readingTime: 5,
    category: 'Research',
    img: 'https://picsum.photos/seed/blog8/800/520',
    author: 'Dr. Asil B.'
  },
  {
    slug: 'fue-cost-turkey',
    title: 'What Is the Average Cost of FUE Hair Transplant in Turkey?',
    excerpt:
      'Real prices, what’s included in packages, and how to avoid hidden costs.',
    date: '2026-02-10',
    readingTime: 7,
    category: 'Cost & Pricing',
    img: 'https://picsum.photos/seed/blog9/800/520',
    author: 'Dr. Asil B.'
  }
];

const authors = [
  {
    slug: 'dr-asil-b',
    name: 'Dr. Asil B.',
    role: 'Hair Restoration Surgeon · Lead Editor',
    img: 'https://picsum.photos/seed/dr-asil/200/200',
    bio: 'Board-certified hair restoration surgeon with over 12 years of experience in FUE and DHI procedures. Leads the editorial team for hair transplant content.',
    credentials: [
      'MD, Istanbul University Faculty of Medicine',
      'ISHRS Member',
      '12+ years in hair restoration',
      '8,000+ procedures performed'
    ],
    topics: ['Hair Transplant', 'Cost & Pricing', 'Patient Selection']
  },
  {
    slug: 'dr-aysenur-k',
    name: 'Dr. Ayşenur K.',
    role: 'Dermatologist · Aftercare Specialist',
    img: 'https://picsum.photos/seed/dr-aysenur/200/200',
    bio: 'Dermatologist specialised in post-operative scalp care, female pattern hair loss and non-surgical treatments such as PRP and mesotherapy.',
    credentials: [
      'MD, Hacettepe University',
      'European Society of Dermatology member',
      'Female hair loss specialist',
      'Lecturer at international congresses'
    ],
    topics: ['Aftercare', 'Female Hair Loss', 'PRP & Mesotherapy']
  },
  {
    slug: 'dr-merve-s',
    name: 'Dr. Merve S.',
    role: 'Hair Transplant Surgeon · Patient Counsellor',
    img: 'https://picsum.photos/seed/dr-merve/200/200',
    bio: 'Hair transplant surgeon with a deep focus on hairline design, beard and eyebrow transplantation. Known for patient-first counselling style.',
    credentials: [
      'MD, Ege University Faculty of Medicine',
      'Specialty in hairline aesthetics',
      'Author of multiple peer-reviewed papers',
      '5,000+ procedures performed'
    ],
    topics: ['Hairline Design', 'Beard & Eyebrow', 'Celebrities & Trends']
  },
  {
    slug: 'uzm-dr-tugba-h',
    name: 'Uzm. Dr. Tuğba H.',
    role: 'Specialist Physician · Research Lead',
    img: 'https://picsum.photos/seed/dr-tugba/200/200',
    bio: 'Specialist physician overseeing the research desk at Istanbul Care. Reviews the literature behind every article and ensures medical accuracy.',
    credentials: [
      'Uzmanlık (Specialty) – Istanbul University',
      'Research focus: hair loss epidemiology',
      'Editorial board member, internal journal',
      '10+ years in clinical research'
    ],
    topics: ['Research', 'Evidence Reviews', 'Special Conditions']
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
          href={`/tools/blog/${featured.slug}`}
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
              <p className="mt-5 text-xs text-primary/60">By {featured.author}</p>
              <span className="mt-3 inline-flex items-center text-sm font-semibold text-accent-strong group-hover:text-accent">
                Read article →
              </span>
            </div>
          </div>
        </Link>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {rest.map((post) => (
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
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-primary/60">By {post.author}</span>
                  <span className="text-sm font-semibold text-accent-strong group-hover:text-accent">
                    Read more →
                  </span>
                </div>
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

      <section className="bg-primary/5 border-t border-soft/40">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Editorial team
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
              Meet the doctors behind every article
            </h2>
            <p className="mt-4 text-primary/75 leading-relaxed">
              Every piece on the Istanbul Care blog is written, reviewed or supervised by a
              member of our medical team. Tap a name to see their background, credentials and
              areas of focus.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {authors.map((a, i) => (
              <details
                key={a.slug}
                open={i === 0}
                className="group rounded-2xl bg-white border border-soft/40 overflow-hidden open:shadow-lg transition-shadow"
              >
                <summary className="list-none cursor-pointer select-none flex items-center gap-5 p-5 md:p-6 hover:bg-primary/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={a.name}
                    className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover ring-2 ring-soft/60"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-primary truncate">{a.name}</h3>
                    <p className="text-xs md:text-sm text-secondary truncate">{a.role}</p>
                  </div>
                  <span
                    aria-hidden
                    className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-primary/5 text-primary text-lg transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-soft/40 px-5 md:px-6 py-6 grid gap-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <p className="text-sm text-primary/80 leading-relaxed">{a.bio}</p>
                    <div className="mt-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                        Areas of focus
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {a.topics.map((t) => (
                          <span
                            key={t}
                            className="inline-flex rounded-full bg-secondary/10 text-primary text-xs font-medium px-3 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
                      Credentials
                    </h4>
                    <ul className="space-y-2 text-sm text-primary/80">
                      {a.credentials.map((c) => (
                        <li key={c} className="flex gap-2">
                          <span className="text-accent">✓</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
