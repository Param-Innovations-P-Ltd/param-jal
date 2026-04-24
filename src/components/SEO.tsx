import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

const SITE        = 'https://paramjal.in';
const DEFAULT_TIT = 'Param Jal · Water Technology by Param Innovations';
const DEFAULT_DES = 'Param Jal converts acidic coal mine pit water (pH 2–4) into BIS IS 10500:2012 drinking water. NABL-certified, patent-protected, field-proven in Dhanbad.';
const DEFAULT_IMG = '/og-image.svg';

export default function SEO({ title, description, path = '/', image }: Props) {
  const fullTitle  = title ? `${title} · Param Jal` : DEFAULT_TIT;
  const desc       = description || DEFAULT_DES;
  const url        = `${SITE}${path}`;
  const imageUrl   = `${SITE}${image || DEFAULT_IMG}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Param Jal" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
