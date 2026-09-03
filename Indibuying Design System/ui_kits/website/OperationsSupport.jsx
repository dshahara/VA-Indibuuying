// /operations-support — Hourly India ops support

const WHO_FOR = [
  "Brands already sourcing from India who need overflow operational capacity.",
  "Founders who don't want to hire a full-time India ops person yet.",
  "Teams handling a specific one-off — vendor verification, factory visit, supplier audit.",
  "US / EU companies needing a trusted person to walk into a factory and report back honestly.",
  "Buyers who tried hiring a VA and realised they need someone who actually knows Indian manufacturing.",
  "Buyers flying into India for factory visits who want someone on the ground to make the trip count.",
];

const HANDLE = [
  {
    h: "Supplier research & verification",
    s: "Find and vet manufacturers, not traders with a website.",
    items: [
      "Find and shortlist manufacturers in a specific Indian cluster (Jaipur, Jodhpur, Delhi-NCR, Mumbai-Pune, Kerala/Karnataka)",
      "Verify legitimacy — physical address, GST, IEC, capability claims",
      "Distinguish real manufacturers from middlemen with a website",
      "Collect quotes, MOQs, and lead times across multiple suppliers",
      "Build comparison spreadsheets for your sourcing decisions",
    ],
  },
  {
    h: "Factory & workshop visits",
    s: "Physical visits with photos, video, and an honest read.",
    items: [
      "On-site visits in Jaipur and nearby clusters (Sanganer, Bagru, Jodhpur, Sikar)",
      "Photos and short videos of production floor, machinery, sample work",
      "Informal capability audits — capacity, quality standards, ethical practices",
      "Travel possible to Delhi-NCR, Mumbai, Jodhpur, Kerala coffee belt (actuals extra)",
    ],
  },
  {
    h: "Quality & inspection coordination",
    s: "Hands-on pre-shipment work — not paper certifications.",
    items: [
      "Pre-shipment inspections (AQL-based or buyer-specified)",
      "Sample-vs-bulk comparisons against your approved sample",
      "Defect documentation with photo evidence",
      "Coordinate rework with the workshop before dispatch",
    ],
  },
  {
    h: "Documentation & compliance",
    s: "Export paperwork that actually clears customs.",
    items: [
      "Commercial invoice, packing list, certificate of origin, BIS hallmarking docs",
      "HS code guidance for your destination country",
      "Indian export compliance — FEMA, GST LUT, IEC, payment routing",
      "Coordination with freight forwarders, couriers, and customs brokers",
      "Category-specific (phytosanitary for coffee, Coffee Board permits, BIS for silver)",
    ],
  },
  {
    h: "Vendor management & follow-up",
    s: "Chase outcomes, not emails.",
    items: [
      "Chase pending samples, quotes, or production updates a supplier has gone quiet on",
      "Negotiate pricing, MOQs, or payment terms in Hindi or regional languages",
      "Translate tech packs or specs for karigars who don't read English",
      "Mediate disputes between you and your Indian supplier",
    ],
  },
  {
    h: "Category-specific ops work",
    s: "Where deep India knowledge actually matters.",
    items: [
      "Jewellery (Jaipur): silver verification, plating micron testing, stone authenticity, hallmarking",
      "Furniture (Jodhpur/Jaipur): joinery, wood seasoning verification, export packaging",
      "Textiles (Sanganer/Bagru): block-print quality, color-fastness, fabric grade",
      "Apparel: stitch density, seam strength, sizing consistency",
      "Coffee (Kerala/Karnataka): cupping, traceability, export permit coordination",
    ],
    dark: true,
  },
];

const VA_LIST = [
  "Email coordination and inbox triage",
  "Calendar and scheduling support",
  "Light research over Google + LinkedIn",
  "Can't physically visit anything",
  "No Indian manufacturing context",
  "Doesn't know what a fair Jaipur quote looks like",
];
const US_LIST = [
  "Walks into a factory and looks at production",
  "Speaks Hindi, Marwari, Kannada with karigars",
  "Knows when a quote is fair vs new-buyer premium",
  "Spots the difference between real 925 silver and 800-grade with a fake stamp",
  "Navigates FEMA, GST LUT, IEC, BIS, export compliance",
  "Can chase outcomes — not just chase emails",
];

const ENGAGE_OPTIONS = [
  { h: 'Project-based', d: 'One-off work — a single factory visit, supplier audit, or quote-collection project. We scope hours upfront, agree on deliverables, bill at the end.', tag: 'Best for ad-hoc' },
  { h: 'Hourly bank',   d: 'Pre-purchase a block of hours (10 / 25 / 50) at a slightly reduced rate. Use across multiple small tasks over 3–6 months.', tag: 'Most flexible', popular: true },
  { h: 'Embedded retainer', d: 'Reserve a fixed number of hours per week (typically 10–20). Best when you need consistent India ops support without hiring full-time.', tag: 'Best for ongoing' },
];

const FAQ = [
  { q: "What's the minimum engagement?",
    a: "No formal minimum. Single-task engagements as small as 2–3 hours are fine. Most projects fall in the 5–20 hour range." },
  { q: "Are travel costs included?",
    a: "Local travel within Jaipur city is included in the hourly rate. Outside-city travel (Jodhpur, Delhi, Mumbai, Kerala, etc.) is billed at actuals — train/flight + accommodation + ground transport. We share an estimate before any outside-city engagement." },
  { q: "How do you bill time?",
    a: "Tracked in 15-minute increments with a brief work log per session. Shared with you weekly or at project completion. No padding, no minimum block billing." },
  { q: "Can you sign an NDA?",
    a: "Yes — standard for buyer engagements. We sign before any work begins. Specific vendor names, designs, or sourcing strategies stay confidential." },
  { q: "Do you offer this for non-sourcing operations work?",
    a: "If it's India ops work that benefits from a person on the ground — yes, in many cases. Examples: market research visits, partner due diligence, exhibition coverage, vendor onboarding for non-manufacturing services. Ask on the fit call." },
  { q: "How much notice for an India tour visit?",
    a: "Ideally 3–4 weeks. That gives us time to shortlist factories, confirm meetings, and plan logistics properly. We've handled trips at 7–10 days' notice when needed, but the factory line-up is tighter and some preferred suppliers may not have availability that quickly." },
  { q: "How is this different from your sourcing services?",
    a: "Sourcing services are packaged engagements with fixed deliverables (vendor search, QC, retainer). Operations support is hourly, flexible, and unbundled — you direct the work as needed. Many buyers use both, depending on the situation." },
];

function OpsSupportPage() {
  return (
    <>
      <PageNav active="ops"/>

      <section className="page-hero">
        <div className="container">
          <div className="crumb"><a href="index.html">Indibuying</a> &nbsp;/&nbsp; <span style={{color:'var(--fg-1)'}}>Operations support</span></div>
          <h1>Hourly India ops support,<br/><em>when you need a hand on the ground.</em></h1>
          <p className="lede">
            Sometimes you don't need a full sourcing engagement. You need someone in India who can pick up the phone,
            visit a workshop, chase a quote, verify a vendor, or handle the operational tasks that keep getting pushed
            to the bottom of your list.
          </p>
          <p className="lede" style={{ marginTop: 12, color: 'var(--fg-1)', fontWeight: 600 }}>
            That's what this service is for. Hourly, flexible, no minimum commitment.
          </p>
          <div className="ctas">
            <a href="#cta" className="btn lg">Book a fit call <ArrowIcon/></a>
            <a href="#handle" className="btn ghost">See what we handle →</a>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Who this is for</span>
              <h2 className="h2" style={{ marginTop: 12, maxWidth: 600 }}>
                A trusted person in India, on demand.
              </h2>
              <p className="p" style={{ marginTop: 14, maxWidth: 540 }}>
                Most buyers find us when a VA isn't enough but a full hire is too much. Hourly ops support fits the gap.
              </p>
            </div>
            <div className="side-note">
              <div className="label">Anchored by Shibu</div>
              Co-founder Shibu Gupta runs this service personally for engagements anchored in Jaipur or nearby clusters.
              For trips further afield, Shibu either travels with you or coordinates with verified local partners on the ground.
            </div>
          </div>

          <div className="who-grid">
            {WHO_FOR.map((w, i) => (
              <div className="who-item" key={i}>
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <div className="txt">{w}</div>
              </div>
            ))}
          </div>

          <div className="rate-strip">
            <div className="big">
              <div className="val">$15 – 25</div>
              <div className="unit">/ hour</div>
              <div className="sub">
                Exact rate within this band depends on the type of work and project scope.
                Quoted before each engagement.
              </div>
            </div>
            <div className="meta">
              <div className="item"><span className="b"><CheckIcon size={11}/></span>Time tracked transparently in 15-min increments</div>
              <div className="item"><span className="b"><CheckIcon size={11}/></span>Billed weekly or per project, depending on size</div>
              <div className="item"><span className="b"><CheckIcon size={11}/></span>No retainer required. No minimum commitment.</div>
              <div className="item"><span className="b"><CheckIcon size={11}/></span>NDA signed before any work begins</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight" id="handle" style={{ background: 'var(--paper-warm)' }}>
        <div className="container">
          <span className="eyebrow">What we handle</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 760 }}>
            Anything that benefits from someone in India with manufacturing knowledge and on-ground access.
          </h2>

          <div className="handle-grid">
            {HANDLE.map((c, i) => (
              <div className={"handle-card" + (c.dark ? ' dark' : '')} key={i}>
                <h4>{c.h}</h4>
                <div className="summary">{c.s}</div>
                <ul>
                  {c.items.map((x, j) => <li key={j}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <p className="meta" style={{ marginTop: 18 }}>
            Note · we coordinate inspections, but don't hold formal third-party certifications (SGS, Bureau Veritas).
            For those, we can recommend partners.
          </p>
        </div>
      </section>

      <section className="section tight" id="tour">
        <div className="container">
          <div className="tour-block">
            <div className="tag-row">
              <span className="tag"><span className="dot"></span>Buyer India tour support</span>
            </div>
            <h2>You land, <em>we drive,</em> you go home with decisions made.</h2>
            <p className="lede">
              Flying in to meet factories and see production first-hand? Most buyers come for 3–4 days and want to
              visit as many vetted suppliers as possible without wasting time on logistics, navigation, or factories
              that turn out not to fit. That's the whole job.
            </p>

            <div className="tour-cols">
              <div className="col">
                <h4>What's included</h4>
                <ul>
                  {[
                    "Pre-trip factory shortlisting based on your sourcing brief",
                    "Meeting scheduling — confirming availability, briefing factories, sample sets ready",
                    "Daily itinerary — 3–5 visits per day in dense clusters, 2–3 with travel time",
                    "Personal accompaniment through every meeting (Shibu, or verified local partner)",
                    "Translation at factory visits — Hindi, Marwari, regional languages",
                    "Real-time negotiation support — pricing, MOQs, payment terms in the room",
                    "Post-meeting debrief notes — capability fit, red flags, our honest read",
                    "End-of-trip summary with shortlist and recommended next steps",
                  ].map((x, i) => (
                    <li key={i}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="col">
                <h4>Logistics handled — billed at cost</h4>
                <ul>
                  {[
                    "Private car and driver for the duration",
                    "Hotel bookings at properties that work for business travellers",
                    "Inter-city travel — flights or trains between clusters",
                    "Restaurant recommendations and reservations where useful",
                    "SIM card, local payments, currency exchange guidance on arrival",
                  ].map((x, i) => (
                    <li key={i}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/></svg>{x}</li>
                  ))}
                </ul>
                <p className="meta" style={{ marginTop: 16 }}>
                  No markup on logistics. We share an estimate upfront based on your itinerary.
                </p>
              </div>
            </div>

            <div className="tour-trip">
              <div>
                <h4>Typical 3-day trip</h4>
                <div className="headline">$500 – $800 for our hours, plus actuals on logistics.</div>
                <p className="meta" style={{ color: 'rgba(255,255,255,.6)', marginTop: 14 }}>
                  Tour days run 8–10 active hours. A 3-day trip is usually 24–30 billable hours.
                  Inter-city travel time on the trip is billed hourly; personal travel before/after is not.
                </p>
              </div>
              <div className="breakdown">
                <div className="row"><span>Pre-trip planning call</span><span className="v">1–2 hrs</span></div>
                <div className="row"><span>Factory shortlisting &amp; outreach</span><span className="v">3–5 hrs</span></div>
                <div className="row"><span>On-the-ground days · 3 days</span><span className="v">24–30 hrs</span></div>
                <div className="row"><span>Post-trip summary</span><span className="v">1–2 hrs</span></div>
                <div className="row total"><span>Our hours</span><span className="v">$500 – $800</span></div>
                <div className="row total"><span>+ logistics at actuals</span><span className="v">$300 – $600</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight" style={{ background: 'var(--paper-warm)' }}>
        <div className="container">
          <span className="eyebrow">How this differs from a VA</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 720 }}>
            A VA can chase emails. <span style={{ color: 'var(--brand-green)' }}>We can chase outcomes.</span>
          </h2>

          <div className="compare">
            <div className="col va">
              <h4>$10 / hour VA</h4>
              <div className="price-row">Email coordination</div>
              <ul>
                {VA_LIST.map((x, i) => (
                  <li key={i}><span style={{ color: 'var(--fg-3)' }}><MinusIcon size={11}/></span>{x}</li>
                ))}
              </ul>
            </div>
            <div className="col us">
              <h4>Indibuying ops support</h4>
              <div className="price-row">On-ground operations</div>
              <ul>
                {US_LIST.map((x, i) => (
                  <li key={i}><span style={{ color: '#fff' }}><CheckIcon size={11}/></span>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Engagement options</span>
          <h2 className="h2" style={{ marginTop: 12 }}>Three ways to engage.</h2>

          <div className="engage-grid">
            {ENGAGE_OPTIONS.map((o, i) => (
              <div className={"engage-card" + (o.popular ? ' popular' : '')} key={i}>
                {o.popular && <span className="badge">Most flexible</span>}
                <h4>{o.h}</h4>
                <p>{o.d}</p>
                <div className="meta" style={{ marginTop: 'auto', paddingTop: 14, color: 'var(--brand-green-700)', fontWeight: 600 }}>{o.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight" style={{ background: 'var(--paper-warm)' }}>
        <div className="container">
          <span className="eyebrow">Who you'll work with</span>
          <h2 className="h2" style={{ marginTop: 12, marginBottom: 28, maxWidth: 720 }}>
            Anchored by a co-founder, not a faceless ops desk.
          </h2>

          <div className="shibu">
            <div className="avatar"></div>
            <div>
              <h3>Shibu Gupta</h3>
              <div className="role">Co-founder · Jaipur operations lead</div>
              <p className="body">
                Shibu runs Indibuying's on-ground operations across India's main manufacturing clusters — Jaipur, Jodhpur,
                Delhi-NCR, Mumbai-Pune, and the Kerala/Karnataka coffee belt — with direct karigar and factory access in each.
              </p>
              <p className="body" style={{ marginTop: 8 }}>
                For categories or geographies that need specialist knowledge (e.g. Kerala coffee, Jodhpur furniture),
                Shibu coordinates with verified partners on the ground who report into the same engagement —
                never a third party you have to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container narrow">
          <span className="eyebrow">Common questions</span>
          <h2 className="h2" style={{ marginTop: 12 }}>Before you book a call.</h2>
          <Faq items={FAQ}/>
        </div>
      </section>

      <ClosingCTA
        headline={<>Tell us what you need help with.</>}
        sub="A 20-minute call to scope the work, agree on hours, and start. NDA signed before any work begins."
      />

      <Footer/>
    </>
  );
}

window.OpsSupportPage = OpsSupportPage;
