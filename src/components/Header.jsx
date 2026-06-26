export default function Header() {
  return (
    <header className="py-6 px-8 flex items-center justify-between">
      <span className="font-heading text-xl text-forsythia">FlowAI</span>
      <nav aria-label="Main">
        <ul className="flex gap-6 text-sm">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>
    </header>
  );
}