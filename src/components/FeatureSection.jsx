import PriceText from './PriceText';
import PricingToggle from './PricingToggle';

const TIERS = [
  { key: 'starter', name: 'Starter', blurb: 'For small teams getting started.' },
  { key: 'pro', name: 'Pro', blurb: 'For scaling automation workflows.' },
  { key: 'enterprise', name: 'Enterprise', blurb: 'For full-pipeline orchestration.' },
];

export default function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-20">
      <h2 id="pricing-heading" className="text-center font-heading text-4xl">Simple, transparent pricing</h2>
      <PricingToggle />
      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto px-4">
        {TIERS.map((tier) => (
          <article key={tier.key} className="rounded-2xl border border-mystic-mint/20 p-8">
            <h3 className="font-heading text-xl">{tier.name}</h3>
            <p className="text-sm opacity-70">{tier.blurb}</p>
            <PriceText tierKey={tier.key} />
          </article>
        ))}
      </div>
    </section>
  );
}
import FeatureGrid from './FeatureGrid';

  export default function FeatureSection() {
    return (
      <section id="features" aria-labelledby="features-heading" className="py-20">
        <h2 id="features-heading" className="text-center font-heading text-4xl">Built for modern data teams</h2>
        <FeatureGrid />
      </section>
    );
  }
