function Categories() {
  const cats = [
    { name: 'Apparel & textiles', factories: '180+ factories · Tiruppur, Ludhiana', I: Icon.shirt, c: 'var(--brand-green-100)' },
    { name: 'Home & kitchen',    factories: '120+ factories · Moradabad, Jaipur', I: Icon.home,  c: '#FDE5C2' },
    { name: 'Beauty & wellness', factories: '60+ factories · Mumbai, Delhi NCR',  I: Icon.spark, c: '#F3DCD0' },
    { name: 'Organic & ayurveda',factories: '45+ farms & co-ops',                 I: Icon.leaf,  c: '#DCEAD0' },
    { name: 'Hardware & tools',  factories: '70+ factories · Rajkot, Pune',       I: Icon.tools, c: '#D9E2EC' },
    { name: 'Tea & coffee',      factories: '30+ estates · Assam, Coorg',         I: Icon.cup,   c: '#F0D6BB' },
    { name: 'Stationery & gifts',factories: '50+ factories · Sivakasi, Delhi',    I: Icon.spark, c: '#FBE0DD' },
    { name: 'Toys & juvenile',   factories: '25+ factories · Channapatna',        I: Icon.toy,   c: '#E8D7F0' },
  ];
  return (
    <section className="section alt" id="categories">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32 }}>
          <div>
            <span className="eyebrow">Categories</span>
            <h2 className="h2" style={{ marginTop: 12, maxWidth: 700 }}>
              Twelve categories. A factory network we've actually walked.
            </h2>
          </div>
          <a href="#" className="btn ghost">View all 12 →</a>
        </div>
        <div className="cats">
          {cats.map(c => (
            <div className="cat" key={c.name}>
              <div className="swatch-cat" style={{ background: c.c }}></div>
              <div style={{ color: 'var(--brand-green-700)' }}><c.I/></div>
              <div className="name">{c.name}</div>
              <div className="factories">{c.factories}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Categories = Categories;
