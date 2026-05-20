export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="brand-gradient text-white">
      <div className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-24 text-center">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
            {eyebrow}
          </div>
        ) : null}
        <h1 className={(eyebrow ? 'mt-5 ' : '') + 'text-3xl md:text-5xl font-bold leading-tight'}>
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/85 leading-relaxed">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
