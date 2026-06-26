export default function SocialProof() {
  const stats = [
    { icon: '/svg/arrow-trending-up.svg', label: 'Faster pipeline setup', value: '80%' },
    { icon: '/svg/chart-pie.svg', label: 'Data sources connected', value: '50+' },
    { icon: '/svg/cog-8-tooth.svg', label: 'Automated workflows', value: '10K+' },
  ];

  return (
    <section aria-label="Platform impact" className="py-16 text-center">
      <p className="text-sm opacity-60 mb-8">Trusted by data teams at scale</p>
      <div className="flex justify-center gap-12 flex-wrap max-w-3xl mx-auto px-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2">
            <img src={s.icon} alt="" width="28" height="28" className="opacity-80" />
            <span className="font-heading text-2xl text-forsythia">{s.value}</span>
            <span className="text-xs opacity-60">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}