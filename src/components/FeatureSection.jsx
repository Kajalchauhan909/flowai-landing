import FeatureGrid from './FeatureGrid';

export default function FeatureSection() {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-20">
      <h2 id="features-heading" className="text-center font-heading text-4xl">Built for modern data teams</h2>
      <FeatureGrid />
    </section>
  );
}