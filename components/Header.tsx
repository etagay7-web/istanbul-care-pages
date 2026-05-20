'use client';

import Link from 'next/link';
import { useState } from 'react';

type Item = { label: string; href: string; hasSubmenu?: boolean };

const services: Item[] = [
  { label: 'Hair Transplant', href: '/hair-transplant', hasSubmenu: true },
  { label: 'Dental', href: '/dental' },
  { label: 'Plastic Surgery', href: '/plastic-surgery' },
  { label: 'Obesity Surgery', href: '/obesity-surgery' }
];

const tools: Item[] = [
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

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
    aria-hidden
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-3.5 w-3.5 text-zinc-400"
    aria-hidden
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 h-[70px] md:h-[80px] lg:h-[90px] shrink-0"
      style={{ backgroundColor: 'var(--color-overlay)' }}
    >
      <div className="relative w-full h-full max-w-8xl mx-auto flex items-center justify-between px-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-white shrink-0">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold">
            IC
          </span>
          <div className="leading-tight">
            <div className="font-semibold tracking-wide text-sm md:text-base">Istanbul Care</div>
            <div className="text-[10px] md:text-[11px] uppercase opacity-80">Hair Clinic</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <NavLink href="/about-us">About Us</NavLink>

          <Dropdown title="Services" items={services} />

          <NavLink href="/pricing">Pricing</NavLink>

          <Dropdown title="Tools" items={tools} />

          <NavLink href="/review">Reviews</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/celebrity-hair-transplant">Celebrities</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/contact-us">Contact Us</NavLink>
        </nav>

        {/* Right-side CTA cluster (desktop) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-strong transition-colors whitespace-nowrap"
          >
            Free Consultation
          </Link>

          <LanguageSelector />
        </div>

        {/* Mobile: language + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSelector compact />
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white hover:bg-white/10"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile slide-down panel */}
      <div
        className={
          'lg:hidden absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-soft/40 origin-top transition-all duration-200 overflow-hidden ' +
          (mobileOpen ? 'opacity-100 max-h-[80vh] overflow-y-auto' : 'opacity-0 max-h-0 pointer-events-none')
        }
      >
        <nav className="px-4 py-5 space-y-1">
          <MobileLink href="/about-us" onNavigate={() => setMobileOpen(false)}>
            About Us
          </MobileLink>

          <MobileGroup label="Services" items={services} onNavigate={() => setMobileOpen(false)} />

          <MobileLink href="/pricing" onNavigate={() => setMobileOpen(false)}>
            Pricing
          </MobileLink>

          <MobileGroup label="Tools" items={tools} onNavigate={() => setMobileOpen(false)} />

          <MobileLink href="/review" onNavigate={() => setMobileOpen(false)}>
            Reviews
          </MobileLink>
          <MobileLink href="/blog" onNavigate={() => setMobileOpen(false)}>
            Blog
          </MobileLink>
          <MobileLink href="/celebrity-hair-transplant" onNavigate={() => setMobileOpen(false)}>
            Celebrities
          </MobileLink>
          <MobileLink href="/faq" onNavigate={() => setMobileOpen(false)}>
            FAQ
          </MobileLink>
          <MobileLink href="/contact-us" onNavigate={() => setMobileOpen(false)}>
            Contact Us
          </MobileLink>

          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block text-center rounded-full bg-accent text-white font-semibold py-3 hover:bg-accent-strong transition-colors"
          >
            Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="whitespace-nowrap text-sm transition-colors text-white hover:text-accent-light font-medium px-3 py-2"
    >
      {children}
    </Link>
  );
}

function Dropdown({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="relative group">
      <button
        type="button"
        aria-haspopup="menu"
        className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-white hover:text-accent-light transition-colors px-3 py-2"
      >
        {title}
        <ChevronDown />
      </button>

      {/* Invisible bridge to prevent flicker when moving cursor down */}
      <span className="absolute left-0 right-0 top-full h-3" aria-hidden />

      <div
        role="menu"
        className="absolute left-0 top-full mt-3 min-w-[260px] rounded-xl bg-white shadow-xl border border-zinc-100 py-1.5 opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-zinc-700 hover:text-primary hover:bg-zinc-50 transition-colors"
          >
            <span>{item.label}</span>
            {item.hasSubmenu ? <ChevronRight /> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}

function LanguageSelector({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative group">
      <button
        type="button"
        aria-haspopup="menu"
        aria-label="Select language"
        className={
          'inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white ' +
          (compact ? 'h-10 w-10 justify-center' : 'px-3 py-2')
        }
      >
        <span aria-hidden className="text-base leading-none">
          🇹🇷
        </span>
        {compact ? null : (
          <>
            <span className="text-xs font-semibold">EN</span>
            <ChevronDown />
          </>
        )}
      </button>

      <span className="absolute left-0 right-0 top-full h-3" aria-hidden />

      <div
        role="menu"
        className="absolute right-0 top-full mt-3 min-w-[180px] rounded-xl bg-white shadow-xl border border-zinc-100 py-1.5 opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200"
      >
        {[
          { code: 'EN', flag: '🇬🇧', label: 'English' },
          { code: 'DE', flag: '🇩🇪', label: 'German' },
          { code: 'FR', flag: '🇫🇷', label: 'French' },
          { code: 'ES', flag: '🇪🇸', label: 'Spanish' },
          { code: 'IT', flag: '🇮🇹', label: 'Italian' },
          { code: 'PL', flag: '🇵🇱', label: 'Polish' },
          { code: 'RO', flag: '🇷🇴', label: 'Romanian' },
          { code: 'PT', flag: '🇵🇹', label: 'Portuguese' },
          { code: 'SQ', flag: '🇦🇱', label: 'Albanian' }
        ].map((l) => (
          <button
            key={l.code}
            type="button"
            role="menuitem"
            className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-zinc-700 hover:text-primary hover:bg-zinc-50 transition-colors"
          >
            <span aria-hidden>{l.flag}</span>
            <span className="flex-1">{l.label}</span>
            <span className="text-[11px] font-semibold text-zinc-400">{l.code}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MobileLink({
  href,
  children,
  onNavigate
}: {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block rounded-lg px-4 py-3 text-base font-medium text-primary hover:bg-primary/5"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  label,
  items,
  onNavigate
}: {
  label: string;
  items: Item[];
  onNavigate?: () => void;
}) {
  return (
    <details className="group rounded-lg">
      <summary className="list-none flex items-center justify-between cursor-pointer select-none rounded-lg px-4 py-3 text-base font-medium text-primary hover:bg-primary/5">
        <span>{label}</span>
        <span
          aria-hidden
          className="h-7 w-7 inline-flex items-center justify-center rounded-full bg-primary/5 text-primary text-base transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pl-3 pb-2">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            onClick={onNavigate}
            className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-primary/80 hover:bg-primary/5 hover:text-primary"
          >
            <span>{it.label}</span>
            {it.hasSubmenu ? <ChevronRight /> : null}
          </Link>
        ))}
      </div>
    </details>
  );
}
