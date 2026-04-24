type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="hero-gradient border-b border-jal-100">
      <div className="container-x py-16 md:py-24">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold text-jal-950 md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-jal-700 md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
