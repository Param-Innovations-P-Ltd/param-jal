type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  sanskrit?: string;
};

export default function PageHero({ eyebrow, title, subtitle, sanskrit }: Props) {
  return (
    <section className="hero-gradient relative overflow-hidden border-b border-brand-sky/10">
      <div className="dot-bg absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="container-x relative py-20 md:py-28">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="headline-deco mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-brand-sky md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-brand-sky/75 md:text-xl">{subtitle}</p>
        {sanskrit && (
          <div className="mt-6 flex items-center gap-3 text-brand-sky/70">
            <span className="sanskrit text-lg">{sanskrit}</span>
          </div>
        )}
      </div>
    </section>
  );
}
