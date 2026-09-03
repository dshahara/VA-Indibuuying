// /pricing-v2 — Work-unit pricing

const UNITS = [
  {
    n: '01',
    name: 'Vendor Search + Sampling Coordination',
    price: '$250',
    engagement: '4-week engagement',
    summary: "We identify and vet 2–3 Jaipur workshops matched to your design, category, and price point. Coordinate sample requests, translate your references in person with the karigar, and deliver a comparison report with pricing, MOQs, and lead times.",
    included: [
      "Shortlist of 2–3 vetted workshops",
      "Direct karigar-level conversation on your references",
      "Sample request coordination (sample fees paid by you to workshop)",
      "Capability + pricing report on each workshop",
      "Workshop introduction on approval",
    ],
    excluded: [
      "Sample production cost (paid directly to workshop)",
      "International courier of physical samples (billed at cost)",
      "Production order management (covered under Unit 02)",
    ],
    meta: [
      { lbl: 'Engagement', v: '4 weeks' },
      { lbl: 'Payment',    v: '50% to start · 50% on delivery' },
      { lbl: 'Refundable', v: '$125 if no workshop fits' },
    ],
  },
  {
    n: '02',
    name: 'Production Coordination + Pre-Shipment QC',
    price: '$150',
    engagement: 'Per order, one day in Jaipur. Outside Jaipur, travel cost extra.',
    summary: "We coordinate with the workshop during production and conduct a physical pre-shipment inspection on dispatch day. Sample-vs-bulk comparison, count verification, defect check, photo report within 24 hours.",
    included: [
      "Production coordination during the active run (workshop comms, milestone tracking)",
      "One physical workshop visit in Jaipur on dispatch day",
      "Sample-vs-bulk comparison against your approved sample",
      "Defect check — category-specific (finish, stones, plating, stitching, etc.)",
      "Count verification against the order",
      "Photo report within 24 hours",
      "Go / no-go recommendation with rework coordination if needed",
    ],
    excluded: [
      "Travel & accommodation outside Jaipur (billed at cost, typically $80–$200)",
      "Formal third-party certification (SGS, Bureau Veritas)",
      "Workshop rework charges (paid directly to workshop)",
    ],
    meta: [
      { lbl: 'Engagement', v: 'Per order' },
      { lbl: 'Payment',    v: 'Prepaid before QC visit' },
      { lbl: 'Outside Jaipur', v: 'Jodhpur · Sanganer · Mumbai · Delhi' },
    ],
  },
  {
    n: '03',
    name: 'Packaging, Logistics & Documentation Support',
    price: '$250',
    engagement: 'Per shipment',
    summary: "We handle the last-mile work after production is approved — coordinating packaging specs with the workshop, arranging international shipment, and managing export documentation so you receive a clean, customs-ready consignment.",
    included: [
      "Packaging coordination with the workshop (poly bags, boxes, labels per your spec)",
      "Courier or freight forwarder coordination (DHL, FedEx, sea freight as required)",
      "Export documentation — commercial invoice, packing list, certificate of origin",
      "HS code guidance for your destination country",
      "Shipment tracking and delivery confirmation",
    ],
    excluded: [
      "Actual shipping cost (paid to courier or forwarder at quoted rate)",
      "Customs duty in destination country (paid on arrival)",
      "Insurance — optional, billed at cost if you opt in",
    ],
    meta: [
      { lbl: 'Engagement', v: 'Per shipment' },
      { lbl: 'Payment',    v: 'Prepaid before dispatch' },
      { lbl: 'Docs',       v: 'Invoice · packing list · COO · HS codes' },
    ],
  },
];

const FAQ = [
  { q: "Can I use just one work unit?",
    a: "Yes. If you already have a workshop and just want pre-shipment QC, you can engage us only for Unit 02. If your workshop handles their own shipping but you need documentation help, you can engage us only for Unit 03. Pick what you need." },
  { q: "Do you mark up workshop prices?",
    a: "No. You pay the workshop directly at their quoted price. Our fees come from you only — no supplier commissions, no hidden margins." },
  { q: "What if the QC finds defects?",
    a: "We coordinate rework with the workshop before dispatch. If a second QC visit is needed after rework, it's billed at $150 (or actuals if outside Jaipur). Most orders don't require a second visit." },
  { q: "Do you do retainers for ongoing production?",
    a: "Yes — for brands running multiple production cycles per quarter, a monthly retainer often makes more sense than per-order pricing. Mention it on the fit call and we'll scope it based on your volume." },
  { q: "Are there refunds if a vendor doesn't work out?",
    a: "On Unit 01 (Vendor Search), if we can't surface a workshop you'd actually order from after the sample round, we refund the second half ($125). The first half covers our research time and is non-refundable." },
  { q: "What categories do you cover at these prices?",
    a: "Jewellery is our deepest network. We also handle handicrafts, home furnishings, furniture, and handcrafted apparel where the workshop is in our network or accessible from Jaipur. For categories outside Jaipur, the QC unit may include travel costs." },
];

function PricingV2Page() {
  return (
    <>
      <PageNav active="pricing"/>

      <section className="page-hero">
        <div className="container">
          <div className="crumb"><a href="index.html">Indibuying</a> &nbsp;/&nbsp; <span style={{color:'var(--fg-1)'}}>Pricing</span></div>
          <h1>Pricing by the work,<br/><em>not by the package.</em></h1>
          <p className="lede">
            Pick the parts of the sourcing process where you want our help, and pay only for those.
            No retainers, no commitments, no hidden markups.
          </p>
          <div className="ctas">
            <a href="#cta" className="btn lg">Book a fit call <ArrowIcon/></a>
            <a href="#typical" className="btn ghost">See a typical engagement →</a>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">How we price</span>
              <h2 className="h2" style={{ marginTop: 12, maxWidth: 680 }}>
                Three discrete work units. Use one, two, or all three.
              </h2>
              <p className="p" style={{ marginTop: 18, maxWidth: 580 }}>
                Most clients use one, two, or all three. They're sequenced — most useful in order —
                but you can engage us for any single piece independently.
              </p>
            </div>
            <div className="side-note">
              <div className="label">Workshop costs</div>
              Workshop production is paid by you directly to the workshop at their quoted price.
              We don't take supplier commissions or add margins. Our fees come from you only.
            </div>
          </div>

          <div className="units-table">
            <div className="row header">
              <div>Work unit</div>
              <div>Price</div>
              <div>Engagement</div>
            </div>
            {UNITS.map(u => (
              <div className="row" key={u.n}>
                <div className="name"><span style={{color:'var(--brand-green)',marginRight:8,fontFamily:'var(--font-display)',fontStyle:'italic',fontWeight:900}}>{u.n}</span>{u.name}</div>
                <div className="price">{u.price}</div>
                <div className="eng">{u.engagement}</div>
              </div>
            ))}
            <div className="units-total">
              <div className="strong">$650</div>
              <div className="note">
                Full sourcing engagement using all three. Most clients start with just vendor search and add the others as production progresses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight" style={{ background: 'var(--paper-warm)' }}>
        <div className="container">
          <span className="eyebrow">The three work units, in detail</span>
          <h2 className="h2" style={{ marginTop: 12 }}>What's actually included.</h2>

          <div style={{ marginTop: 36 }}>
            {UNITS.map(u => (
              <div className="unit" key={u.n}>
                <div className="leftcol">
                  <div className="num">{u.n}</div>
                  <div className="price-tag">
                    <span className="p1">{u.price}</span>
                    <span className="p2">{u.engagement.split(',')[0]}</span>
                  </div>
                </div>
                <div className="body">
                  <h3>{u.name}</h3>
                  <p className="desc">{u.summary}</p>

                  <div className="lists">
                    <div>
                      <h4>What's included</h4>
                      <ul className="incl">
                        {u.included.map((x, i) => (
                          <li key={i}><span className="b"><CheckIcon size={10}/></span>{x}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>What's not included</h4>
                      <ul className="excl">
                        {u.excluded.map((x, i) => (
                          <li key={i}><span className="b"><MinusIcon size={10}/></span>{x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="meta-row">
                    {u.meta.map(m => (
                      <div key={m.lbl}>
                        <span className="lbl">{m.lbl}</span>
                        <span>{m.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight" id="typical">
        <div className="container">
          <span className="eyebrow">How a typical engagement runs</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 720 }}>
            Eight to twelve weeks, three pieces of work.
          </h2>
          <p className="p" style={{ marginTop: 14, maxWidth: 620 }}>
            Most first-time buyers use all three work units in sequence. Here's how the timing typically lines up.
          </p>

          <div className="timeline">
            <div className="slot">
              <div className="when">Week 1 – 4</div>
              <h4>Vendor search &amp; sampling</h4>
              <p>We find the workshop and translate your references in person. You approve a sample.</p>
              <span className="price">$250</span>
            </div>
            <div className="slot">
              <div className="when">Week 5 – 10</div>
              <h4>Production &amp; QC visit</h4>
              <p>You pay the workshop directly. We coordinate during production, then do the pre-shipment visit on dispatch day.</p>
              <span className="price">$150</span>
            </div>
            <div className="slot">
              <div className="when">Week 11 – 12</div>
              <h4>Packaging, logistics &amp; docs</h4>
              <p>We handle shipment logistics and export documentation. You receive a clean, customs-ready consignment.</p>
              <span className="price">$250</span>
            </div>
          </div>

          <div className="total-bar">
            <strong>$650 total fees</strong>
            <span>plus actual workshop production costs and shipping, paid by you directly. No surprises, no markups.</span>
          </div>
        </div>
      </section>

      <section className="section tight" style={{ background: 'var(--paper-warm)' }}>
        <div className="container narrow">
          <span className="eyebrow">Common questions</span>
          <h2 className="h2" style={{ marginTop: 12 }}>Before you book a call.</h2>
          <Faq items={FAQ}/>
        </div>
      </section>

      <ClosingCTA
        headline={<>Get started in a <em>20-minute fit call.</em></>}
        sub="We'll confirm pricing for your specific case — especially if your workshop is outside Jaipur — before any engagement starts."
      />

      <Footer/>
    </>
  );
}

window.PricingV2Page = PricingV2Page;
