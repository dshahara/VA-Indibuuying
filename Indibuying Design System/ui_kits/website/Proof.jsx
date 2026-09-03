function Proof() {
  return (
    <section className="section" id="proof">
      <div className="container">
        <span className="eyebrow">Case study</span>
        <h2 className="h2" style={{ marginTop: 12, maxWidth: 720 }}>
          Real shipments. Real ops. Real follow-through.
        </h2>
        <div className="proof-quote">
          <div>
            <blockquote>
              "I was about to fly to Mumbai myself. Instead I got photos of every sample on WhatsApp,
              picked one, and the first container shipped six weeks later. That used to take us a year."
            </blockquote>
            <div className="who">
              <strong style={{ color: 'var(--fg-1)' }}>Mariana Ortiz</strong> · Head of Buying, Casabella Living (US)<br/>
              Home textiles · 12 SKUs · shipped Q3
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <a href="#" className="btn secondary sm">Read the full case study →</a>
            </div>
          </div>
          <div className="photo"></div>
        </div>
      </div>
    </section>
  );
}

window.Proof = Proof;
