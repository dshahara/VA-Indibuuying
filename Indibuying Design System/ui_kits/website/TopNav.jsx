function TopNav({ onQuote }) {
  return (
    <nav className="nav">
      <a href="#top" className="lockup">
        <img src="../../assets/logo-mark.png" alt="" />
        <span>Indibuying</span>
      </a>
      <a href="#services" className="item">Services</a>
      <a href="#categories" className="item">Categories</a>
      <a href="#how" className="item">How it works</a>
      <a href="#proof" className="item">Case studies</a>
      <div className="nav-spacer"></div>
      <a href="#" className="item">Sign in</a>
      <button className="btn sm" onClick={onQuote}>Get a quote</button>
    </nav>
  );
}

window.TopNav = TopNav;
