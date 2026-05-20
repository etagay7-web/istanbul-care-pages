import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contact Istanbul Care | Free Hair Transplant Consultation',
  description:
    'Get in touch with our medical coordinators. Free consultations available 7 days a week. WhatsApp, email and phone supported.'
};

const channels = [
  {
    label: 'WhatsApp',
    value: '+90 532 000 00 00',
    cta: 'Message on WhatsApp',
    href: 'https://wa.me/905320000000',
    external: true,
    button: 'bg-accent hover:bg-accent-strong',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 .003 11.86C0 5.336 5.335 0 11.892 0c3.181 0 6.167 1.24 8.413 3.488a11.82 11.82 0 0 1 3.48 8.405c-.003 6.523-5.338 11.86-11.893 11.86a11.9 11.9 0 0 1-5.687-1.45L.057 24zM6.597 20.13a9.86 9.86 0 0 0 5.286 1.521h.005c5.448 0 9.886-4.434 9.889-9.881a9.825 9.825 0 0 0-2.895-6.991 9.826 9.826 0 0 0-6.994-2.899c-5.452 0-9.886 4.434-9.889 9.881a9.86 9.86 0 0 0 1.512 5.26l.234.374-1 3.65 3.745-.982.207.122zm9.413-7.07c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.966-.272-.099-.47-.149-.668.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.06-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.149-.668-1.61-.916-2.206-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01a1.094 1.094 0 0 0-.792.371c-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
      </svg>
    )
  },
  {
    label: 'Email',
    value: 'info@istanbul-care.com',
    cta: 'Send Email',
    href: 'mailto:info@istanbul-care.com',
    button: 'bg-secondary hover:bg-primary',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    )
  },
  {
    label: 'Phone',
    value: '+90 212 000 00 00',
    cta: 'Call Now',
    href: 'tel:+902120000000',
    button: 'bg-primary hover:bg-primary-dark',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
];

const nextSteps = [
  {
    n: 1,
    title: 'We review your message within 2 hours',
    body: 'A medical coordinator reads your message during business hours and confirms receipt straight away.'
  },
  {
    n: 2,
    title: 'A coordinator sends you a personalised treatment plan',
    body: 'After reviewing your photos and goals, we send a tailored plan with recommended technique and graft count.'
  },
  {
    n: 3,
    title: 'You receive your free quote and can book your consultation',
    body: "If you'd like to proceed, we lock in your dates, package and transfers. No pressure, no obligation."
  }
];

const countries = [
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Poland',
  'Romania',
  'Netherlands',
  'Belgium',
  'Albania',
  'Portugal',
  'Sweden',
  'Other'
];

const services = [
  'DHI',
  'FUE',
  'Sapphire FUE',
  'Woman Hair Transplant',
  'Beard Transplant',
  'Eyebrow Transplant',
  'Afro Hair Transplant',
  'Unshaven',
  'General Enquiry'
];

const sources = ['Google', 'Instagram', 'TikTok', 'Facebook', 'Friend / Family', 'YouTube', 'Other'];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Istanbul Care"
        subtitle="Get in touch with our medical coordinators. Free consultations available 7 days a week."
      />

      {/* 1 — Contact channels */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl bg-white border border-soft/40 p-7 hover:shadow-xl hover:border-secondary transition-all"
            >
              <div className="h-14 w-14 rounded-2xl brand-gradient text-white flex items-center justify-center">
                {c.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold uppercase tracking-wider text-secondary">
                {c.label}
              </h3>
              <p className="mt-2 text-xl font-bold text-primary">{c.value}</p>
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={
                  'mt-5 inline-flex items-center justify-center w-full rounded-full px-5 py-3 text-sm font-semibold text-white transition-colors ' +
                  c.button
                }
              >
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 2 — Main contact form */}
      <section className="bg-primary/5 border-y border-soft/40">
        <div className="max-w-5xl mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="rounded-3xl bg-white shadow-xl border border-soft/40 p-6 md:p-10">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Send a detailed message
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-primary leading-tight">
                Tell us about your case
              </h2>
              <p className="mt-3 text-primary/70">
                The more we know, the better the plan we can build for you. All fields are
                confidential.
              </p>
            </div>

            <form className="mt-8 grid gap-5 md:grid-cols-2" method="post" action="/api/contact">
              <Field label="Full Name" required>
                <input
                  name="name"
                  type="text"
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email" required>
                <input
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Phone" required>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 rounded-xl bg-primary/5 border border-soft/40 px-3 py-3 text-primary shrink-0">
                    <span aria-hidden>🇹🇷</span>
                    <span className="text-sm font-semibold">+90</span>
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="form-input flex-1"
                    placeholder="Phone Number"
                  />
                </div>
              </Field>

              <Field label="Country" required>
                <select name="country" required defaultValue="" className="form-input">
                  <option value="" disabled>
                    Select your country
                  </option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Service" required>
                <select name="service" required defaultValue="" className="form-input">
                  <option value="" disabled>
                    Select service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="How did you hear about us?">
                <select name="source" defaultValue="" className="form-input">
                  <option value="" disabled>
                    Select an option
                  </option>
                  {sources.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="md:col-span-2">
                <Field label="Message">
                  <textarea
                    name="message"
                    rows={5}
                    className="form-input resize-y"
                    placeholder="Tell us about your goals — graft count, photos to share, preferred technique, dates you have in mind..."
                  />
                </Field>
              </div>

              <label className="md:col-span-2 flex items-start gap-3 text-sm text-primary/80">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-soft accent-accent"
                />
                <span>
                  I have read and accepted the{' '}
                  <Link href="/privacy-policy" className="underline hover:text-secondary">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="md:col-span-2 mt-2 inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-strong transition-colors px-6 py-4 text-base font-semibold text-white shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <style>{`
          .form-input {
            width: 100%;
            border-radius: 0.75rem;
            background-color: #fff;
            border: 1px solid #cbd5e1;
            padding: 0.75rem 1rem;
            color: #164b6a;
            font-size: 0.95rem;
          }
          .form-input::placeholder { color: rgba(22, 75, 106, 0.45); }
          .form-input:focus { outline: none; border-color: #41758c; box-shadow: 0 0 0 3px rgba(65, 117, 140, 0.15); }
          select.form-input { appearance: none; background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23164b6a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1rem; padding-right: 2.5rem; }
        `}</style>
      </section>

      {/* 3 — What happens next */}
      <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            What happens next
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">
            Three simple steps to your free quote
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {nextSteps.map((s) => (
            <li key={s.n} className="rounded-2xl bg-white border border-soft/40 p-7">
              <div className="text-5xl font-extrabold text-secondary/20 leading-none">
                {String(s.n).padStart(2, '0')}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-primary/75 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4 — Clinic info card */}
      <section className="bg-primary text-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
              Visit us
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Istanbul Care Hair Clinic
            </h2>
            <p className="mt-3 text-white/85 max-w-xl leading-relaxed">
              Conveniently located in Şişli, central Istanbul. 30 minutes from Istanbul Airport (IST)
              and 20 minutes from Sabiha Gökçen (SAW). Easy access by metro and taxi.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoLine
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Address"
                value="Şişli, Istanbul, Turkey"
              />
              <InfoLine
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                label="Opening hours"
                value="Mon–Sat · 08:00–19:00"
              />
              <InfoLine
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                }
                label="Email"
                value="info@istanbul-care.com"
              />
              <InfoLine
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                label="Phone"
                value="+90 212 000 00 00"
              />
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/seed/istanbul-clinic-map/900/700"
              alt="Map of Istanbul Care location"
              className="w-full h-full rounded-[1.4rem] object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  children
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5">
        {label} {required ? <span className="text-accent">*</span> : null}
      </span>
      {children}
    </label>
  );
}

function InfoLine({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="h-9 w-9 rounded-lg bg-white/10 inline-flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-accent-light">
          {label}
        </div>
        <div className="text-sm font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
}
