// /services — Services page

const SERVICES = [
  {
    id: 'vendor',
    n: '01',
    name: 'Vendor Sourcing + Sample Coordination',
    for: 'For brands placing their first order from Jaipur, or replacing a supplier that didn\'t work out.',
    desc1: 'A scoped two-to-three week engagement. We take your design brief, target price points, category, and volume requirements, then deliver a shortlist of vetted workshops from our network — usually two to three options matched to what you actually need.',
    desc2: 'You see capability profiles, sample work, and our recommendation. We coordinate sample requests directly with the workshop and walk through your references with the karigar in person, so the sample comes back close to what you asked for the first time around.',
    desc3: 'You approve the workshop, and we make the introduction. From there, you can run the order yourself, or add pre-shipment QC for added certainty.',
    get: [
      'A shortlist of 2–3 vetted workshops matched to your category and spec',
      'Sample coordination with in-person reference review',
      'A capability and pricing report on each workshop',
      'Direct introduction once you approve the choice',
    ],
    solves: [
      'Months of cold outreach to workshops you can\'t verify',
      'Sample-vs-reference mismatch caused by translation gaps',
      'The new-buyer pricing premium (workshops quote 15–25% higher to strangers)',
      'Risk of paying a middleman who subcontracts your order to someone else',
    ],
    meta: [
      { lbl: 'Timeline', v: '2–3 weeks' },
      { lbl: 'Categories', v: 'Jewellery · Handicrafts · Furniture · Textiles · Apparel' },
      { lbl: 'Complex cycles', v: '3–4 weeks for furniture & technical apparel' },
    ],
    badges: ['Jewellery', 'Handicrafts', 'Furniture', 'Home furnishings', 'Apparel'],
    cta: 'Book a fit call',
  },
  {
    id: 'qc',
    n: '02',
    name: 'Pre-Shipment QC',
    for: 'For brands placing production orders who want certainty before goods leave India.',
    desc1: "The single highest-risk moment in any production cycle is the gap between 'the workshop says it's done' and 'the goods arrive at your warehouse.' Pre-Shipment QC closes that gap.",
    desc2: 'Our team visits the workshop in person before dispatch. We compare the bulk run against the approved sample, check finish consistency, verify counts, test material quality, and look for the defects that quietly drift in between sample and bulk production.',
    desc3: "You get a photo report within 24 hours of the inspection and a clear go/no-go recommendation. If we identify issues, we coordinate rework with the workshop before anything ships. Bad batches don't leave India.",
    get: [
      'Physical workshop visit before dispatch',
      'Sample-vs-bulk comparison across multiple sample points',
      'Category-specific defect checks (plating micron, color-fastness, joint quality, stitch quality)',
      'Count verification against the order',
      'Photo report within 24 hours',
      'Go / no-go recommendation, with rework coordination if needed',
    ],
    solves: [
      'Plating that wears off in three weeks (lying about micron thickness on jewellery)',
      'Block-print colors that bleed on first wash (poor dye-fixing on textiles)',
      'Furniture joints that loosen in shipping (poor construction)',
      'Stitch density and seam strength issues on apparel',
      'Pieces that match each other but not the approved sample',
      'Defective goods shipping to your warehouse with no recourse',
    ],
    meta: [
      { lbl: 'Pricing',  v: 'Per-order · scoped on fit call' },
      { lbl: 'Inspection', v: 'Category-specific defect checks' },
      { lbl: 'Report',   v: '24-hour photo report · go/no-go' },
    ],
    badges: ['Most popular'],
    popular: true,
    cta: 'Add QC to your next order',
  },
  {
    id: 'retainer',
    n: '03',
    name: 'India Operations Retainer',
    for: 'For brands running 2+ production cycles per quarter, scaling across multiple workshops.',
    desc1: "If you're past your first or second order and production has become a real part of your operations, the per-order model starts to break down. You need someone who knows your designs, your workshops, and your production calendar — not someone you re-onboard every cycle.",
    desc2: 'The retainer is your ongoing India team. We coordinate across multiple workshops in parallel, run weekly QC visits during active production, plan your production calendar around Indian shutdowns (Diwali, Holi, summer break), manage workshop communication in your timezone, and resolve issues in real time without you needing to be the foreman.',
    desc3: 'You get one point of contact for everything that happens in India. One channel, one person responsible, one source of truth.',
    get: [
      'Multi-workshop coordination across your full production footprint',
      'Weekly QC visits during active production',
      'Production calendar planning aligned to your launch dates',
      'Single accountable contact (no WhatsApp groups, no missing updates)',
      'Real-time issue resolution',
      'Quarterly cost benchmarking against your current quotes',
    ],
    solves: [
      'Running production from your laptop at 2 AM',
      'Coordinating three workshops in three time zones',
      'Production timeline shocks (Diwali shutdowns, sudden workshop unavailability)',
      'Quality drift as you scale across more workshops',
      'Workshop communication eating 10–15 hours of your week',
    ],
    meta: [
      { lbl: 'Cadence',   v: 'Monthly · cancel with 30 days notice' },
      { lbl: 'Qualifies', v: 'Typically after 2–3 successful orders' },
      { lbl: 'Scales from', v: '1 cycle / month · 1–2 workshops' },
    ],
    badges: ['Multi-workshop', 'Ongoing'],
    cta: 'Discuss a retainer',
  },
];

const DONTS = [
  { strong: "We don't source fine jewellery", rest: " where certified loose diamonds or high-value precious stones are the primary value driver." },
  { strong: "We don't source commodity garment production", rest: " — we focus on handcrafted, block-printed, and artisanal apparel." },
  { strong: "We don't mark up workshop production costs.", rest: " You pay the workshop directly at their quoted price. Our fees come from you only." },
  { strong: "We don't take commissions from suppliers.", rest: " Our income is your fees, transparently." },
  { strong: "We don't list workshops without vetting them.", rest: " Every workshop in our network has been physically visited and capability-audited." },
];

const STEPS = [
  { n: '01', h: 'Fit call (20 minutes, free)', p: "We understand your category, designs, target prices, volumes, and current pain points. If we're not the right fit, we say so and point you elsewhere." },
  { n: '02', h: 'Workshop matching', p: 'We shortlist workshops from our network based on your specs. You see capability profiles, sample work, and our recommendation.' },
  { n: '03', h: 'Sample round', p: 'We coordinate sample production. Most designs hit spec in one or two iterations because we translate references in person, not over email.' },
  { n: '04', h: 'Production with optional QC', p: "You place the order. If you've added QC, we visit during production and inspect before dispatch." },
  { n: '05', h: 'Shipment and handover', p: 'The workshop ships directly to you. We coordinate documentation and tracking.' },
];

function ServicesPage() {
  return (
    <>
      <PageNav active="services"/>

      <section className="page-hero">
        <div className="container">
          <div className="crumb"><a href="home.html">Indibuying</a> &nbsp;/&nbsp; <span style={{ color: 'var(--fg-1)' }}>Services</span></div>
          <h1>What we do.<br/><em>Three services, designed as a sequence.</em></h1>
          <p className="lede">
            We help brands source from Jaipur and nearby clusters across jewellery, handicrafts, furniture,
            home furnishings, and handcrafted apparel — finding the right workshop, getting samples that match
            your references, and inspecting production before it ships.
          </p>
          <p className="lede" style={{ marginTop: 10 }}>
            You don't need to commit to all three on day one. Most clients start with vendor sourcing, add QC on
            their first production order, and move to a retainer once they're running multiple cycles per quarter.
          </p>
          <div className="ctas">
            <a href="#cta" className="btn lg">Book a fit call <ArrowIcon/></a>
            <a href="#vendor" className="btn ghost">Start at vendor sourcing →</a>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          {SERVICES.map(s => (
            <div className={"service-block" + (s.popular ? ' popular' : '')} id={s.id} key={s.id}>
              <div className="hero-col">
                <div className="num">{s.n}</div>
                <h3>{s.name}</h3>
                <div className="for">{s.for}</div>
                <div className="desc">{s.desc1}</div>
                <div className="desc">{s.desc2}</div>
                <div className="desc">{s.desc3}</div>
                {s.badges && (
                  <div className="badge-row">
                    {s.badges.map(b => <span className="tag" key={b}>{b}</span>)}
                  </div>
                )}
                <div className="meta-strip">
                  {s.meta.map(m => (
                    <div key={m.lbl}>
                      <span className="lbl">{m.lbl}</span>
                      <span className="v">{m.v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 22 }}>
                  <a href="#cta" className="btn">{s.cta} <ArrowIcon/></a>
                </div>
              </div>

              <div className="lists">
                <div className="panel">
                  <h5>What you get</h5>
                  <ul>
                    {s.get.map((x, i) => (
                      <li key={i}><span className="b"><CheckIcon size={10}/></span>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="panel solves">
                  <h5>What it solves</h5>
                  <ul>
                    {s.solves.map((x, i) => (
                      <li key={i}><span className="b"><MinusIcon size={10}/></span>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight" style={{ background: 'var(--paper-warm)' }}>
        <div className="container">
          <span className="eyebrow">How a typical engagement runs</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 760 }}>
            Whether it's a one-time engagement or an ongoing retainer, the work follows the same rhythm.
          </h2>

          <div className="steps-list">
            {STEPS.map(s => (
              <div className="step-row" key={s.n}>
                <div className="nm">{s.n}</div>
                <div className="body">
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <span className="eyebrow">What we don't do</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 720 }}>
            We're specific about what we do well — and equally specific about what we don't.
          </h2>

          <div className="dont-grid">
            {DONTS.map((d, i) => (
              <div className="dont-item" key={i}>
                <div className="icon"><MinusIcon size={12}/></div>
                <div className="body">
                  <strong>{d.strong}</strong>{d.rest}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight" style={{ background: 'var(--paper-warm)' }}>
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 720 }}>
            Pricing depends on category, scope, and volume.
          </h2>
          <p className="p" style={{ marginTop: 14, maxWidth: 680 }}>
            We share specific numbers on the fit call once we understand your situation. Engagement bands are
            published on the pricing page.
          </p>

          <div className="pricing-ref">
            <div className="copy">
              <h4>Two pricing models. Pick whichever fits.</h4>
              <p>
                <strong style={{ color: '#fff' }}>Bundled bands</strong> for vendor sourcing, QC, and retainer engagements —
                quoted on the fit call.
              </p>
              <p style={{ marginTop: 10 }}>
                <strong style={{ color: '#fff' }}>Unbundled work units</strong> ($250 / $150 / $250) for buyers who want
                a single piece of work without committing to a bundle.
              </p>
            </div>
            <div className="ctas">
              <a href="pricing-v2.html" className="btn">See pricing <ArrowIcon/></a>
              <a href="#cta" className="btn outline">Book a fit call</a>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        headline={<>Ready to <em>start?</em></>}
        sub="A 20-minute call. We'll ask about your category, designs, supplier history, and what's blocking you right now. If we can help, we'll tell you how. If we can't, we'll point you somewhere that can."
      />

      <Footer/>
    </>
  );
}

window.ServicesPage = ServicesPage;
