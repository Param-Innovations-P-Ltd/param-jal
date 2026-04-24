import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 text-4xl font-bold text-jal-950 md:text-5xl">Page not found.</h1>
      <p className="mt-3 max-w-md text-jal-700">The page you&apos;re looking for doesn&apos;t exist. Head back home and we&apos;ll get you on track.</p>
      <Link to="/" className="btn-primary mt-8">← Back to home</Link>
    </section>
  );
}
