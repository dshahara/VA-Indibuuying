function HowItWorks() {
  const steps = [
    { n: '01', t: 'Source', d: 'Tell us the spec. We shortlist five verified factories within three working days.', I: Icon.search },
    { n: '02', t: 'Sample', d: 'We negotiate, place sample orders, and courier the samples to your door.', I: Icon.beaker },
    { n: '03', t: 'Inspect', d: '100% pre-shipment inspection on every order. Photos before anything leaves the floor.', I: Icon.eye },
    { n: '04', t: 'Ship',    d: 'We handle export docs, freight forwarding, and clearance. You receive at port.', I: Icon.ship },
  ];
  return (
    <section className="section" id="how">
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2 className="h2" style={{ marginTop: 12, maxWidth: 720 }}>
          Four steps. One team. <span style={{ color: 'var(--brand-green)' }}>Every order.</span>
        </h2>
        <div className="steps">
          {steps.map(s => (
            <div className="step" key={s.n}>
              <div className="num">Step {s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div style={{ position: 'absolute', right: 18, bottom: 18, color: 'var(--brand-green)', opacity: .25 }}>
                <s.I/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
