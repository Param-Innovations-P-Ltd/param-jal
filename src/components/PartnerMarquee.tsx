const partners = [
  'DPIIT · Govt. of India',
  'MSME · UDYAM',
  'ACIC IIT(ISM) Dhanbad',
  'Dhanbad Municipal Corporation',
  'Startup India Seed Fund',
  'Jal Jeevan Mission — aligned',
  'BIS IS 10500:2012',
  'NABL-accredited testing',
  'P. S. Davar & Co. · Patent Agents',
];

export default function PartnerMarquee() {
  const double = [...partners, ...partners];
  return (
    <div className="overflow-hidden border-y border-brand-sky/10 bg-white py-5">
      <div className="marquee-track text-xs uppercase tracking-[0.2em] text-brand-sky/60">
        {double.map((p, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3">
            <span className="size-1.5 rounded-full bg-brand-gold" />
            <span>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
