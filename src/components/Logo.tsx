type Props = {
  size?: number;
  withTagline?: boolean;
  variant?: 'light' | 'dark';
};

/**
 * Param Innovations brand mark — loads /logo-param.png (the real mark),
 * falls back to /logo-param.svg if the PNG is missing.
 */
export default function Logo({ size = 40, withTagline = false, variant = 'light' }: Props) {
  return (
    <div className="flex items-center gap-2.5">
      <picture>
        <source srcSet="/logo-param.png" type="image/png" />
        <img
          src="/logo-param.svg"
          width={size}
          height={size}
          alt="Param Innovations"
          className="rounded-full ring-2 ring-brand-gold/30 shadow-sm object-cover"
          style={{ width: size, height: size }}
        />
      </picture>
      {withTagline && (
        <div className="leading-tight">
          <div className={`font-display text-lg font-semibold ${variant === 'dark' ? 'text-white' : 'text-brand-sky'}`}>
            Param Jal
          </div>
          <div className={`text-[10px] uppercase tracking-[0.18em] ${variant === 'dark' ? 'text-brand-gold/80' : 'text-brand-sky/60'}`}>
            जगतं जयतु · By Param Innovations
          </div>
        </div>
      )}
    </div>
  );
}
