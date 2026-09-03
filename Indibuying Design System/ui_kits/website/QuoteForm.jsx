function QuoteForm() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    category: 'apparel',
    volume: '500-2000',
    target: '',
    name: '',
    company: '',
    email: '',
    notes: '',
  });

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const next = () => setStep(s => Math.min(3, s + 1));
  const back = () => setStep(s => Math.max(0, s - 1));

  const cats = [
    { id: 'apparel',  name: 'Apparel & textiles', sub: 'Knits, woven, home textiles' },
    { id: 'home',     name: 'Home & kitchen',     sub: 'Brassware, wood, ceramics' },
    { id: 'beauty',   name: 'Beauty & wellness',  sub: 'Skin, hair, supplements' },
    { id: 'organic',  name: 'Organic & ayurveda', sub: 'Tea, spices, herbs' },
    { id: 'hardware', name: 'Hardware & tools',   sub: 'Bearings, fittings, hand tools' },
    { id: 'other',    name: 'Something else',     sub: 'Tell us in the notes' },
  ];
  const vols = ['<500', '500–2,000', '2,000–10,000', '10,000+'];

  return (
    <section className="section alt" id="quote">
      <div className="container narrow">
        <div className="quote-wrap">
          <div>
            <span className="eyebrow">Get a quote</span>
            <h2 className="h2" style={{ marginTop: 12 }}>
              Tell us the spec.<br/>
              We'll reply within <em style={{ color: 'var(--brand-green)', fontStyle: 'italic' }}>one working day.</em>
            </h2>
            <p className="p" style={{ marginTop: 18, maxWidth: 380 }}>
              No sign-up. No NDA gate. A real ops manager reviews your inquiry and comes back with
              a shortlist, a price range, and a clear next step.
            </p>
            <ul style={{ listStyle: 'none', marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Free for the first inquiry', 'Reply within 24 hours', 'Direct WhatsApp once engaged'].map(x => (
                <li key={x} style={{ display: 'flex', gap: 10, alignItems: 'center', font: '500 14px var(--font-ui)', color: 'var(--fg-2)' }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--brand-green-100)', color: 'var(--brand-green-700)', display: 'grid', placeItems: 'center' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="quote-card">
            <div className="stepper">
              {[0, 1, 2, 3].map(i => <div key={i} className={"dot" + (i <= step ? ' active' : '')}></div>)}
            </div>

            {step === 0 && (
              <>
                <h2>What are you sourcing?</h2>
                <div className="step-body">
                  <div className="tile-grid">
                    {cats.map(c => (
                      <button key={c.id} className={"tile" + (data.category === c.id ? ' selected' : '')} onClick={() => set('category', c.id)}>
                        <div className="t-name">{c.name}</div>
                        <div className="t-sub">{c.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="step-actions">
                  <span style={{ font: '500 13px var(--font-ui)', color: 'var(--fg-3)' }}>Step 1 of 4</span>
                  <button className="btn" onClick={next}>Continue <Icon.arrow/></button>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h2>How many units per month?</h2>
                <div className="step-body">
                  <div className="tile-grid">
                    {vols.map(v => (
                      <button key={v} className={"tile" + (data.volume === v ? ' selected' : '')} onClick={() => set('volume', v)}>
                        <div className="t-name">{v}</div>
                        <div className="t-sub">units / month</div>
                      </button>
                    ))}
                  </div>
                  <div className="field">
                    <label>Target unit price (USD, optional)</label>
                    <input value={data.target} onChange={e => set('target', e.target.value)} placeholder="e.g. 4.20" />
                    <div className="help">Helps us shortlist factories that fit your margin.</div>
                  </div>
                </div>
                <div className="step-actions">
                  <button className="btn secondary sm" onClick={back}>Back</button>
                  <button className="btn" onClick={next}>Continue <Icon.arrow/></button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Where do we send the shortlist?</h2>
                <div className="step-body">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div className="field"><label>Your name</label><input value={data.name} onChange={e => set('name', e.target.value)} placeholder="Mariana Ortiz" /></div>
                    <div className="field"><label>Company</label><input value={data.company} onChange={e => set('company', e.target.value)} placeholder="Casabella Living" /></div>
                  </div>
                  <div className="field"><label>Work email</label><input type="email" value={data.email} onChange={e => set('email', e.target.value)} placeholder="you@company.com" /></div>
                  <div className="field"><label>Notes (optional)</label><textarea rows="3" value={data.notes} onChange={e => set('notes', e.target.value)} placeholder="Materials, certifications, target ship date…" /></div>
                </div>
                <div className="step-actions">
                  <button className="btn secondary sm" onClick={back}>Back</button>
                  <button className="btn" onClick={next}>Send inquiry <Icon.arrow/></button>
                </div>
              </>
            )}

            {step === 3 && (
              <div className="quote-confirm">
                <div className="check"><Icon.check size={28}/></div>
                <h2 style={{ fontSize: 24 }}>Got it. We'll reply within a day.</h2>
                <p className="p-small" style={{ maxWidth: 320 }}>
                  Inquiry <code>IB-{Math.floor(10000 + Math.random() * 90000)}</code> assigned to an ops manager in Mumbai.
                  Check your inbox (and spam, just in case).
                </p>
                <button className="btn secondary sm" onClick={() => setStep(0)}>Send another →</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

window.QuoteForm = QuoteForm;
