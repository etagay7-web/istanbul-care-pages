export type FAQItem = { q: string; a: string };

export default function FAQAccordion({
  items,
  title = 'Frequently Asked Questions',
  eyebrow,
  intro
}: {
  items: FAQItem[];
  title?: string;
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <section className="max-w-8xl mx-auto px-4 lg:px-12 py-16 md:py-20">
      <div className="max-w-3xl mb-10">
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary leading-tight">{title}</h2>
        {intro ? <p className="mt-3 text-primary/70">{intro}</p> : null}
      </div>

      <div className="space-y-3">
        {items.map((item, i) => (
          <details
            key={i}
            className="group rounded-xl bg-white border border-soft/40 hover:border-secondary transition-colors overflow-hidden"
          >
            <summary className="list-none cursor-pointer select-none flex items-center justify-between gap-4 p-5 hover:bg-primary/5">
              <h3 className="font-semibold text-primary text-base md:text-lg">{item.q}</h3>
              <span
                aria-hidden
                className="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-full bg-primary/5 text-primary text-lg transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-5 -mt-1 text-sm md:text-base text-primary/80 leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
