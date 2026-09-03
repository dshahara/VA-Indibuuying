// /home — Homepage

const BENEFITS = [
  { h: 'Vetted workshops',         p: "Physically visited, capability-audited — not pulled off IndiaMART." },
  { h: 'First sample in 2-3 weeks', p: "Not 2–3 months of cold outreach to factories you can't verify." },
  { h: 'Pre-shipment inspection',  p: "Quality checked before goods leave India. Bad batches don't ship." },
  { h: 'One direct contact',       p: "No WhatsApp groups, no missing updates, no 2 AM follow-ups." },
];

const CATEGORIES = [
  {
    name: 'Jewellery',
    tag: 'Our deepest network',
    desc: 'Silver (925, oxidized, antique-finish), brass (raw, antiqued, plated), gold-plated work (1–3 micron), and stone-set pieces with semi-precious and basic precious stones.',
    not: "We don't do certified loose diamond procurement or fine jewellery where the stone is the primary value.",
    bg: 'linear-gradient(160deg, #C9A77A, #6B4421 70%, #3E2710)',
    photo: 'silver & brass workshop',
    span: 3,
  },
  {
    name: 'Handicrafts & décor',
    desc: 'Hand-painted ceramics, marble inlay work, brass decoratives, wooden carving, blue pottery from Jaipur, metal art pieces.',
    bg: 'linear-gradient(155deg, #4A6A8A, #1F3A5F)',
    photo: 'blue pottery · Jaipur',
    span: 3,
  },
  {
    name: 'Furniture',
    desc: 'Solid wood (sheesham, mango, acacia), upholstered, hand-carved traditional, contemporary mango-wood and metal. Network extends to Jodhpur — India\'s largest wooden furniture export cluster.',
    bg: 'linear-gradient(160deg, #B07747, #6B3F1F)',
    photo: 'Jodhpur joinery',
    span: 2,
  },
  {
    name: 'Home furnishings',
    desc: 'Block-printed textiles (Sanganer, Bagru), bedding, cushion covers, table linen, rugs and dhurries, traditional Rajasthani textiles.',
    bg: 'linear-gradient(160deg, #C2596A, #6B1F2A)',
    photo: 'Sanganer block printing',
    span: 2,
  },
  {
    name: 'Apparel',
    desc: 'Block-printed cotton, hand-embroidered pieces, traditional Rajasthani womenswear, kidswear, boho/contemporary styles.',
    not: 'Handcrafted only — not commodity garment production.',
    bg: 'linear-gradient(160deg, #6E8252, #2F4427)',
    photo: 'hand-embroidered apparel',
    span: 2,
  },
];

const PROBLEMS = [
  {
    h: 'Timelines that slip without warning',
    desc: "'Two weeks' becomes four. Four becomes eight. Updates get vague, then sparse. Workshops juggle multiple orders — yours can quietly slide down the priority list when a bigger client walks in.",
    fix: 'Agreed timelines with weekly check-ins, and direct visibility into workshop workload before you commit.',
  },
  {
    h: 'Samples that drift from the reference',
    desc: "You send a moodboard, tech pack, exact specs. The sample comes back close — but not quite. The cause is usually translation, not deception: tech packs read differently to a karigar than to you.",
    fix: 'We walk through your references with the karigar in person before sampling starts, so what comes out is what you actually asked for.',
  },
  {
    h: 'Quality that varies between sample and bulk',
    desc: 'The sample looks great. The bulk run, made by different hands across multiple days, doesn\'t match it as tightly. Finish, dimension, color, material grade — they quietly drift.',
    fix: 'Pre-shipment inspection on every order — physical comparison against the approved sample, defect checks, and count verification before goods leave the workshop.',
  },
  {
    h: 'The first-time-buyer pricing gap',
    desc: "Workshops quote new buyers higher prices and firmer MOQs than they quote repeat customers. It's not malicious — it's how relationship-driven economies work. New buyers can pay 15–25% more.",
    fix: 'We negotiate as a portfolio buyer. Our clients get prices and MOQs that wouldn\'t be offered to a stranger walking in cold.',
  },
  {
    h: 'Telling a real workshop from a middleman',
    desc: "Many 'manufacturers' you find online are trading companies — they take your order and subcontract it to whichever workshop has capacity. You pay the middleman markup and have no control.",
    fix: 'Every workshop in our network has been physically visited. We\'ve seen the production floor, met the karigars, audited the capability. You work with the actual maker.',
  },
  {
    h: 'Communication that fragments across channels',
    desc: 'WhatsApp at 2 AM your time. A different person every week. Updates split across emails, voice notes, and three group chats. By month two you\'re spending more time chasing answers than running your brand.',
    fix: 'One direct contact, one channel, one source of truth. Weekly photo updates during active production, without you asking.',
  },
];

const OFFERS = [
  {
    tag: 'Start here',
    h: 'Vendor Sourcing + Sample Coordination',
    who: 'For brands placing their first order from Jaipur, or replacing a supplier that didn\'t work out.',
    desc: 'A two-to-three week engagement. We shortlist 2–3 vetted workshops matched to your category, design, and price point, coordinate sample requests, and deliver a capability + pricing report.',
    cta: 'Start vendor sourcing',
    href: 'services.html#vendor',
  },
  {
    tag: 'Most popular',
    h: 'Pre-Shipment QC',
    who: 'For brands placing production orders who want certainty before goods leave India.',
    desc: 'Our team visits the workshop before dispatch. Sample-vs-bulk comparison, defect check, count verification, finish review. Photo report within 24 hours and a go/no-go recommendation.',
    cta: 'Add QC to your next order',
    href: 'services.html#qc',
    popular: true,
  },
  {
    tag: 'When you scale',
    h: 'India Operations Retainer',
    who: 'For brands running 2+ production cycles per quarter, scaling across multiple workshops.',
    desc: 'Your ongoing India team. Multi-workshop coordination, weekly QC visits, production calendar planning, real-time issue resolution. One point of contact for everything.',
    cta: 'Discuss a retainer',
    href: 'services.html#retainer',
  },
];

const STEPS = [
  { n: '01', h: 'Fit call (20 min, free)', p: "We understand your category, designs, target prices, volumes, and current pain. If we're not the right fit, we say so and point you elsewhere." },
  { n: '02', h: 'Workshop matching',       p: 'We shortlist 2–3 workshops from our network. You get capability profiles, sample work, and our recommendation.' },
  { n: '03', h: 'Sample round',            p: 'We coordinate sample production. Most designs hit spec in 1–2 iterations because we translate references in person, not over email.' },
  { n: '04', h: 'Production with optional QC', p: "You place the order. If you've added QC, we visit during production and inspect before dispatch." },
  { n: '05', h: 'Shipment and handover',   p: 'The workshop ships directly to you. We coordinate documentation and tracking.' },
];

const FIT_YES = [
  "You're launching a brand and don't know where to start with Indian sourcing.",
  "You're already in production but your supplier is fragile or unreliable.",
  "You've been burned by a previous Indian or Alibaba supplier.",
  "You sell handcrafted or artisanal jewellery, home goods, furniture, textiles, or apparel.",
  "You value reliability over rock-bottom Alibaba pricing.",
];
const FIT_NO = [
  "You're price-shopping at the Alibaba floor — we cost more, and we earn it.",
  "You need volumes below standard workshop minimums (varies by category).",
  "You need certified loose diamonds, fine jewellery, or commodity garment production.",
  "You're a mature operator already managing India production self-sufficiently.",
];

const FAQ = [
  { q: 'What categories do you source?',
    a: 'Jewellery (silver, brass, gold-plated, stone-set), handicrafts and décor, furniture, home furnishings (block-print textiles, bedding, rugs), and handcrafted apparel. We focus on categories Jaipur and surrounding clusters are genuinely good at — handcrafted and artisanal work, not commodity production.' },
  { q: 'Where are your workshops?',
    a: 'Primarily Jaipur and the surrounding region — Sanganer (block printing), Bagru (natural-dye textiles), Jodhpur (wooden furniture), Sikar (handicrafts). For categories that aren\'t strong in Jaipur, we route to Mumbai, Delhi, or other clusters.' },
  { q: "What's the minimum order quantity?",
    a: 'Varies by category. Jewellery: 50–100 pieces per SKU. Textiles: typically 100–200 meters or 50–100 finished pieces per design. Furniture: 5–20 pieces per design depending on complexity. Apparel: 100–300 pieces per design. We confirm exact MOQs based on your spec.' },
  { q: 'Do you mark up workshop prices?',
    a: 'No. You pay the workshop directly at their quoted price. Our fees come from you only — transparent, no hidden margins.' },
  { q: 'How is this different from Alibaba?',
    a: 'Alibaba lists workshops. We\'ve physically visited ours, audited their capabilities, and removed workshops from our network for falling below our standards. You\'re paying for vetting and accountability, not search results.' },
  { q: "I'm just starting my brand and don't have orders yet. Can I work with you?",
    a: 'Yes. Many of our clients are early-stage or pre-revenue founders making their first production decisions. Our vendor sourcing engagement is built for exactly this.' },
  { q: 'What are your payment terms?',
    a: 'Transparent and structured. Our fees: typically a deposit on engagement start and balance on completion. Workshop production costs go directly from you to the workshop at quoted price.' },
  { q: 'How long until first delivery?',
    a: 'From engagement start to first sample: 2–3 weeks. From sample approval to bulk delivery: typically 4–8 weeks depending on category and volume. Total: roughly 6–11 weeks for a first order.' },
  { q: 'Do you take commissions from suppliers?',
    a: 'No. Our income is your fees only. Workshop quotes go to you at net price — we audit them but don\'t mark them up.' },
];

function HomePage() {
  return (
    <>
      <PageNav active="home"/>

      {/* ─── Section 1 — Hero ─────────────────────── */}
      <section className="home-hero">
        <div className="tint"></div>
        <div className="container inner">
          <div>
            <span className="tag" style={{ marginBottom: 18 }}><span className="dot"></span>Sourcing from Jaipur, India</span>
            <h1>Source from Jaipur,<br/><em>the way it should be done.</em></h1>
            <p className="sub">
              We find vetted Jaipur workshops, coordinate samples, and inspect every order before it ships.
              For brands sourcing jewellery, handicrafts, furniture, home furnishings, and apparel — whether you're
              placing your first order or your fiftieth.
            </p>
            <div className="ctas">
              <a href="#cta" className="btn lg">Book a 20-minute fit call <ArrowIcon/></a>
              <a href="#how" className="btn ghost">How we work →</a>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="photo-stack"></div>
            <div className="pop tl"><span className="dot"></span>Workshop visited · last Tuesday</div>
            <div className="pop br"><span className="dot"></span>Sample dispatched · Bagru</div>
          </div>
        </div>
      </section>

      {/* ─── Section 2 — Benefit Strip ────────────── */}
      <div className="benefit-strip">
        {BENEFITS.map(b => (
          <div className="benefit" key={b.h}>
            <div className="check"><CheckIcon size={14}/></div>
            <h4>{b.h}</h4>
            <p>{b.p}</p>
          </div>
        ))}
      </div>

      {/* ─── Section 3 — Categories ───────────────── */}
      <section className="section tight" id="categories">
        <div className="container">
          <span className="eyebrow">Categories</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 780 }}>
            What we source from Jaipur and nearby clusters.
          </h2>
          <p className="p" style={{ marginTop: 14, maxWidth: 760 }}>
            Jaipur and the surrounding region (Sanganer, Bagru, Jodhpur, Sikar) is one of the most concentrated
            handcraft and small-manufacturing hubs in the world. We've spent years building workshop relationships
            across the categories that ship best to international buyers.
          </p>

          <div className="cats-grid">
            {CATEGORIES.map((c, i) => (
              <div className={"cat-card span-" + c.span} key={c.name}>
                <div className="photo" style={{ background: c.bg }} data-label={"[ photo · " + c.photo + " ]"}>
                  {c.tag && <span className="tag">{c.tag}</span>}
                </div>
                <div className="body">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  {c.not && <div className="not">— {c.not}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4 — Problem Mirror ───────────── */}
      <section className="section tight" style={{ background: 'var(--paper-warm)' }}>
        <div className="container">
          <span className="eyebrow">The six things that go wrong</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 780 }}>
            Sourcing from India works — when you have the right partner.
          </h2>
          <p className="p" style={{ marginTop: 14, maxWidth: 820 }}>
            Jaipur and its surrounding clusters produce some of the world's best handcrafted goods — the karigar
            traditions in silver and stone-setting, the block-printing villages of Sanganer and Bagru, the
            wood-carving workshops of Jodhpur. The challenge isn't the region. It's that the supply ecosystem
            is large, fragmented, and built for buyers who already have relationships.
          </p>
          <p className="p" style={{ marginTop: 10, maxWidth: 820 }}>
            If you don't have those relationships yet, six things tend to go wrong. Each is solvable — but only
            if you know what to look for.
          </p>

          <div className="problems-grid">
            {PROBLEMS.map((p, i) => (
              <div className="problem" key={i}>
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{p.h}</h4>
                <div className="desc">{p.desc}</div>
                <div className="fix">
                  <strong>What we do</strong>
                  {p.fix}
                </div>
              </div>
            ))}
          </div>

          <div className="closing-frame">
            None of this means India is a bad place to source from. The opposite — <strong>Jaipur and its surrounding
            clusters are where the craft is, where the price points work, and where the design vocabulary for
            handcrafted goods is deepest.</strong> But sourcing well from India is a skill, built through hundreds
            of orders and relationships. We've built that skill so you don't have to learn it the hard way.
          </div>
        </div>
      </section>

      {/* ─── Section 5 — Offer Ladder ─────────────── */}
      <section className="section tight" id="services">
        <div className="container">
          <span className="eyebrow">Three ways to work with us</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 760 }}>
            Start where you need help. Add the rest as you grow.
          </h2>
          <p className="p" style={{ marginTop: 14, maxWidth: 720 }}>
            Most clients start with vendor sourcing, add QC on their first production order, and move to a monthly
            retainer once they're running multiple cycles per quarter. You don't need to commit to all three on day one.
          </p>

          <div className="offer-grid">
            {OFFERS.map(o => (
              <div className={"offer-card" + (o.popular ? ' popular' : '')} key={o.h}>
                <div className="for">{o.tag}</div>
                <h3>{o.h}</h3>
                <div className="who">{o.who}</div>
                <p>{o.desc}</p>
                <div className="cta-row"><a href={o.href}>{o.cta} <ArrowIcon/></a></div>
              </div>
            ))}
          </div>
          <p className="meta" style={{ marginTop: 22 }}>
            Pricing on all three is shared on a fit call once we understand your category, volume, and scope.
            See <a href="pricing-v2.html" style={{ color: 'var(--brand-green-700)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>pricing</a> for engagement bands.
          </p>
        </div>
      </section>

      {/* ─── Section 6 — How It Works ─────────────── */}
      <section className="section tight" id="how" style={{ background: 'var(--paper-warm)' }}>
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 720 }}>
            Five steps. The same rhythm every time.
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

      {/* ─── Section 7 — Case Study ───────────────── */}
      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Case study</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 820 }}>
            Two years. $600K of orders. <span style={{ color: 'var(--brand-green)' }}>Zero supplier breakage.</span>
          </h2>

          <div className="case-grid">
            <div className="case-stat">
              <div className="label">Long-term client</div>
              <div className="big">$600,000<br/><em>across 2 years.</em></div>
              <div className="metrics">
                <div className="m"><div className="v">3</div><div className="l">Workshops vetted at the start</div></div>
                <div className="m"><div className="v">2</div><div className="l">Sample rounds to first approval</div></div>
                <div className="m"><div className="v">0</div><div className="l">Catastrophic failures since</div></div>
              </div>
            </div>
            <div className="case-text">
              <p>
                A brand owner approached us two years ago, frustrated after losing money on two failed orders from
                suppliers found on Alibaba. We started with vendor sourcing — three vetted workshops, two sample
                rounds, one selected partner.
              </p>
              <p>
                Since then, that client has placed weekly custom orders through the workshops we introduced —
                averaging <strong style={{ color: 'var(--fg-1)' }}>$300,000 annually</strong> across two years.
                No catastrophic failures. No supplier ghosting. No 2 AM WhatsApp emergencies.
              </p>
              <p>
                The relationship is now mature — the client manages day-to-day production directly with the workshop,
                and engages us for periodic cost-reduction reviews. That's the path: enter on a scoped engagement,
                build trust over real orders, evolve the relationship as your needs change.
              </p>
              <div className="note">
                Client identity withheld at their request. Scoped reference calls available post fit call.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 8 — Fit / Not a Fit ──────────── */}
      <section className="section tight" style={{ background: 'var(--paper-warm)' }}>
        <div className="container">
          <span className="eyebrow">Who this is for · who it isn't</span>
          <h2 className="h2" style={{ marginTop: 12, maxWidth: 720 }}>
            We work best with brands that value reliability over rock-bottom pricing.
          </h2>

          <div className="fit-grid">
            <div className="fit-col yes">
              <h4>This is for you if</h4>
              <ul>
                {FIT_YES.map((x, i) => (
                  <li key={i}><span className="b"><CheckIcon size={11}/></span>{x}</li>
                ))}
              </ul>
            </div>
            <div className="fit-col no">
              <h4>This isn't a fit if</h4>
              <ul>
                {FIT_NO.map((x, i) => (
                  <li key={i}><span className="b"><MinusIcon size={11}/></span>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 9 — FAQ ──────────────────────── */}
      <section className="section tight">
        <div className="container narrow">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2" style={{ marginTop: 12 }}>Before you book a call.</h2>
          <Faq items={FAQ}/>
        </div>
      </section>

      {/* ─── Section 10 — Closing CTA ─────────────── */}
      <ClosingCTA
        headline={<>Let's <em>talk.</em></>}
        sub="A 20-minute call to understand your situation. We'll ask about your category, designs, supplier history, and what's blocking you right now. If we can help, we'll tell you how. If we can't, we'll point you somewhere that can."
      />

      <Footer/>
    </>
  );
}

window.HomePage = HomePage;
