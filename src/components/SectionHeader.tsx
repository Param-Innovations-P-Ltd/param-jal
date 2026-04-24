type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
};

export default function SectionHeader({ eyebrow, title, intro, center = false }: Props) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-bold text-jal-950 md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-jal-700">{intro}</p>}
    </div>
  );
}
