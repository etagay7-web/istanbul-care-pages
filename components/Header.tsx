import Link from 'next/link';

const navLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Hair Transplant', href: '/hair-transplant' },
  { label: 'Tools', href: '/tools' },
  { label: 'Reviews', href: '/review' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Celebrities', href: '/celebrity-hair-transplant' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact-us' }
];

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 h-[70px] md:h-[80px] lg:h-[90px] shrink-0"
      style={{ backgroundColor: 'var(--color-overlay)' }}
    >
      <div className="relative w-full h-full max-w-8xl mx-auto flex items-center justify-between px-4 lg:px-12">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold">
            IC
          </span>
          <div className="leading-tight">
            <div className="font-semibold tracking-wide">Istanbul Care</div>
            <div className="text-[11px] uppercase opacity-80">Hair Clinic</div>
          </div>
        </Link>

        <nav className="hidden lg:flex flex-1 items-center justify-end gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm transition-colors text-white hover:text-accent-light cursor-pointer font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-strong transition-colors"
          >
            Free Consultation
          </Link>
        </nav>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-white hover:bg-white/10"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
