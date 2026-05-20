import Link from 'next/link';

type ServiceOption = string;

export default function ContactCTA({
  heading = 'Get Your Free Consultation Today',
  subtitle = "Share your photos and goals. We'll review your case and respond with an honest, all-inclusive plan within 24 hours.",
  defaultService,
  showMessage = false,
  messageLabel = 'Your message (optional)',
  services = [
    'Hair Transplant',
    'DHI',
    'FUE',
    'Sapphire FUE',
    'Beard Transplant',
    'Eyebrow Transplant',
    'Woman Hair Transplant'
  ]
}: {
  heading?: string;
  subtitle?: string;
  defaultService?: string;
  showMessage?: boolean;
  messageLabel?: string;
  services?: ServiceOption[];
}) {
  return (
    <section
      id="contact"
      className="text-white scroll-mt-24"
      style={{ backgroundImage: 'linear-gradient(90deg, #22c55e 0%, #41758c 100%)' }}
    >
      <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20 grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Free consultation
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">{heading}</h2>
          <p className="mt-4 text-white/90 max-w-xl leading-relaxed">{subtitle}</p>

          <form className="mt-8 grid gap-4 max-w-xl" method="post" action="/api/contact">
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
              name="service"
              required
              defaultValue={defaultService ?? ''}
              className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white focus:outline-none focus:border-white appearance-none"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1rem'
              }}
            >
              {!defaultService ? (
                <option value="" disabled className="text-primary">
                  Service Category
                </option>
              ) : null}
              {services.map((s) => (
                <option key={s} value={s} className="text-primary">
                  {s}
                </option>
              ))}
            </select>
            {showMessage ? (
              <textarea
                name="message"
                placeholder={messageLabel}
                rows={4}
                className="w-full rounded-xl bg-primary-strong/40 backdrop-blur border border-white/20 px-4 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white resize-y"
              />
            ) : null}
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary-strong hover:bg-primary-dark transition-colors px-6 py-4 text-base font-semibold text-white shadow-lg"
            >
              Send Now
            </button>
            <p className="text-xs text-white/75">
              By submitting you agree to our{' '}
              <Link href="/privacy-policy" className="underline hover:text-white">
                privacy policy
              </Link>
              .
            </p>
          </form>
        </div>

        <div className="grid gap-4">
          {[
            { title: 'Free', desc: 'No payment, no card details. Our team reviews your case at no cost.' },
            { title: '24h Response', desc: 'Personalised treatment plan within one business day.' },
            { title: 'No Obligation', desc: 'Use it as a second opinion. Up to you.' }
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-5 flex items-start gap-4"
            >
              <div className="shrink-0 h-12 w-12 rounded-xl bg-white/15 inline-flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-white/85 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
