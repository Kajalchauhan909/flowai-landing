export default function SocialProof() {
    return (
      <section aria-label="Trusted by teams" className="py-16 text-center">
        <p className="text-sm opacity-60 mb-6">Trusted by data teams at</p>
        <div className="flex justify-center gap-10 opacity-70">
          {/* swap these for real logo SVGs from your asset pack */}
          <img src="/svg/logo1.svg" alt="Acme Corp logo" width="100" height="32" />
          <img src="/svg/logo2.svg" alt="Northwind logo" width="100" height="32" />
          <img src="/svg/logo3.svg" alt="Globex logo" width="100" height="32" />
        </div>
      </section>
    );
  }