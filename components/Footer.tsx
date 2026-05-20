import Link from 'next/link';

const hairTransplantLinks = [
  { label: 'Hair Transplant in Turkey', href: '/hair-transplant' },
  { label: 'FUE Hair Transplant', href: '/hair-transplant/fue' },
  { label: 'DHI Hair Transplant', href: '/hair-transplant/dhi' },
  { label: 'Sapphire FUE Hair Transplant', href: '/hair-transplant/sapphire-fue' },
  { label: 'FUT Hair Transplant', href: '/hair-transplant/fut' },
  { label: 'Woman Hair Transplant', href: '/hair-transplant/woman' },
  { label: 'Afro Hair Transplant', href: '/hair-transplant/afro' },
  { label: 'Beard Transplant', href: '/hair-transplant/beard' },
  { label: 'Eyebrow Transplant', href: '/hair-transplant/eyebrow' },
  { label: 'Unshaven Hair Transplant', href: '/hair-transplant/unshaven' }
];

const hairTransplantTools = [
  { label: 'Graft Calculator', href: '/tools/graft-calculator' },
  { label: 'Norwood Scale Tool', href: '/tools/norwood-scale' },
  { label: 'Hair Density Estimator', href: '/tools/hair-density' },
  { label: 'Price Estimator', href: '/tools/price-estimator' },
  { label: 'Hair Loss Quiz', href: '/tools/hair-loss-quiz' },
  { label: 'Recovery Timeline', href: '/tools/recovery-timeline' },
  { label: 'Beard Graft Calculator', href: '/tools/beard-calculator' },
  { label: 'Eyebrow Graft Calculator', href: '/tools/eyebrow-calculator' },
  { label: 'Travel & Budget Planner', href: '/tools/budget-planner' }
];

const aestheticLinks = [
  { label: 'Rhinoplasty in Turkey', href: '/services/rhinoplasty' },
  { label: 'Mega Liposuction', href: '/services/mega-liposuction' },
  { label: 'Facelift in Turkey', href: '/services/facelift' },
  { label: 'Breast Augmentation', href: '/services/breast-augmentation' },
  { label: 'Brazilian Butt Lift', href: '/services/bbl' },
  { label: 'Sleeve Gastrectomy', href: '/services/sleeve-gastrectomy' }
];

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Tools', href: '/tools' },
  { label: 'Reviews', href: '/review' },
  { label: 'Blog', href: '/blog' },
  { label: 'Celebrity Hair Transplants', href: '/celebrity-hair-transplant' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' }
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-8xl mx-auto px-4 lg:px-12 py-14">
        <div className="grid gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent font-bold">
                IC
              </span>
              <div>
                <div className="font-semibold tracking-wide">Istanbul Care</div>
                <div className="text-xs uppercase opacity-80">Hair Clinic</div>
              </div>
            </Link>
            <p className="mt-5 text-sm text-white/80 leading-relaxed">
              Trusted hair transplant and aesthetic clinic in Istanbul, Turkey. Expert
              surgeons, modern techniques, and all-inclusive packages from $1,990.
            </p>
            <div className="mt-6 flex gap-3">
              {['facebook', 'instagram', 'youtube', 'tiktok'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm capitalize"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Hair Transplant" links={hairTransplantLinks} />
          <FooterColumn title="Hair Transplant Tools" links={hairTransplantTools} highlight />
          <FooterColumn title="Aesthetic Surgery" links={aestheticLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/70">
          <p>© {new Date().getFullYear()} Istanbul Care Hair Clinic. All rights reserved.</p>
          <p>
            Made with care in Istanbul · <Link href="/privacy-policy" className="hover:text-accent-light">Privacy</Link>
            {' · '}
            <Link href="/cookie-policy" className="hover:text-accent-light">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  highlight = false
}: {
  title: string;
  links: { label: string; href: string }[];
  highlight?: boolean;
}) {
  return (
    <div>
      <h4
        className={
          'text-sm font-semibold mb-4 uppercase tracking-wider ' +
          (highlight ? 'text-accent-light' : 'text-white')
        }
      >
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/75 hover:text-accent-light transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
