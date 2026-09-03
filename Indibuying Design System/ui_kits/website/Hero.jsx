function Hero({ onQuote }) {
  return (
    <section className="hero" id="top">
      <div className="tint"></div>
      <div className="container inner">
        <div>
          <span className="tag" style={{ marginBottom: 20 }}><span className="dot"></span>Currently shipping for 40+ global buyers</span>
          <h1>
            Source from India,<br/>
            <em>without sourcing in India.</em>
          </h1>
          <p className="sub">
            We find the right factory, sample your product, run pre-shipment QC, and ship.
            One operations team, one point of contact, no surprises.
          </p>
          <div className="ctas">
            <button className="btn lg" onClick={onQuote}>Get a sourcing quote <Icon.arrow/></button>
            <a href="#how" className="btn ghost">See how it works →</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="photo-stack"></div>
          <div className="pop tl"><span className="dot"></span>Pre-shipment photos sent · 2 hrs ago</div>
          <div className="pop br"><span className="dot"></span>3 factories shortlisted · Tiruppur</div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const data = [
    ['600+', 'Verified factories'],
    ['12', 'Product categories'],
    ['40+', 'Active global buyers'],
    ['24 hrs', 'Avg. first reply'],
  ];
  return (
    <div className="metrics">
      {data.map(([v, l]) => (
        <div className="metric" key={l}>
          <div className="val">{v}</div>
          <div className="lbl">{l}</div>
        </div>
      ))}
    </div>
  );
}

window.Hero = Hero;
window.Metrics = Metrics;
