type Props = {
  size?: number;
  withTagline?: boolean;
  variant?: 'light' | 'dark';
};

/**
 * Param Innovations brand mark.
 *
 * Uses `/logo-param.jpg` if the user drops one in `public/`, otherwise falls back
 * to an SVG recreation at `/logo-param.svg`. Drop your real logo at
 *   C:\Users\USER\Downloads\param-jal\public\logo-param.jpg
 * and it will auto-swap everywhere on the site.
 */
export default function Logo({ size = 40, withTagline = false, variant = 'light' }: Props) {
  return (
    <div className="flex items-center gap-2.5">
      <picture>
        <source srcSet="/logo-param.jpg" type="image/jpeg" />
        <img
          src="/logo-param.svg"
          width={size}
          height={size}
          alt="Param Innovations"
          className="rounded-full ring-2 ring-brand-gold/30 shadow-sm"
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
