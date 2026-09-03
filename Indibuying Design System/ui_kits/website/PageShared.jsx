// Shared bits used across pricing + ops-support pages.

function CheckIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
function MinusIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
  );
}
function ArrowIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
}

function PageNav({ active }) {
  const items = [
    { id: 'home',     href: 'home.html',     label: 'Home' },
    { id: 'services', href: 'services.html', label: 'Services' },
    { id: 'pricing',  href: 'pricing-v2.html', label: 'Pricing' },
    { id: 'ops',      href: 'operations-support.html', label: 'Operations support' },
  ];
  return (
    <nav className="nav">
      <a href="index.html" className="lockup">
        <img src="../../assets/logo-mark.png" alt="" />
        <span>Indibuying</span>
      </a>
      {items.map(i => (
        <a key={i.id} href={i.href} className={"item" + (i.id === active ? ' active' : '')}>{i.label}</a>
      ))}
      <div className="nav-spacer"></div>
      <a href="#" className="item">Sign in</a>
      <a href="#cta" className="btn sm">Book a fit call</a>
    </nav>
  );
}

function ClosingCTA({ headline, sub, primary = 'Book a fit call', secondary = 'Email us' }) {
  return (
    <section className="section" id="cta">
      <div className="container narrow">
        <div className="cta-band">
          <div>
            <h2>{headline}</h2>
            <p>{sub}</p>
          </div>
          <div className="col-cta">
            <a href="#" className="btn lg">{primary} <ArrowIcon/></a>
            <a href="mailto:hello@indibuying.com" className="btn secondary">{secondary}</a>
            <div className="micro">20-minute call · no obligation</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq({ items }) {
  return (
    <div className="faq-list">
      {items.map((it, i) => (
        <details className="faq" key={i}>
          <summary>{it.q}</summary>
          <div className="a">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

window.CheckIcon = CheckIcon;
window.MinusIcon = MinusIcon;
window.ArrowIcon = ArrowIcon;
window.PageNav = PageNav;
window.ClosingCTA = ClosingCTA;
window.Faq = Faq;
