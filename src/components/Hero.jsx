export default function Hero() {
    return (
      <section id="hero" aria-labelledby="hero-heading" className="py-24 text-center">
        <p className="hero-eyebrow text-sm uppercase tracking-wide text-primary">AI-Native Automation</p>
        <h1 id="hero-heading" className="hero-title font-heading text-5xl mt-4">
          Automate your data pipelines, end to end
        </h1>
        <p className="hero-sub mt-4 text-lg opacity-80">
          FlowAI connects every source, transforms it intelligently, and ships it where it's needed — no manual glue code.
        </p>
        <div className="hero-cta mt-8">
          <a href="#pricing" className="px-6 py-3 rounded-full bg-primary text-white">Get started</a>
        </div>
      </section>
    );
  }