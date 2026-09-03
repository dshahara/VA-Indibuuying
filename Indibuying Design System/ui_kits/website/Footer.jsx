function Footer() {
  return (
    <footer className="site">
      <div className="container grid">
        <div>
          <a href="#top" className="lockup">
            <img src="../../assets/logo-mark.png" alt="" />
            <span>Indibuying</span>
          </a>
          <p className="blurb">
            Operations services for global buyers sourcing from India.
            One team, every order, from spec to port.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <a href="#">Factory sourcing</a>
          <a href="#">Sampling</a>
          <a href="#">Quality inspection</a>
          <a href="#">Freight &amp; clearance</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Case studies</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:hello@indibuying.com">hello@indibuying.com</a>
          <a href="#">WhatsApp +91 22 …</a>
          <a href="#">Mumbai · Tiruppur · Moradabad</a>
        </div>
      </div>
      <div className="container legal">
        <span>© 2026 Indibuying Operations Pvt Ltd. All rights reserved.</span>
        <span><a href="#" style={{ display: 'inline', marginRight: 16 }}>Privacy</a><a href="#" style={{ display: 'inline' }}>Terms</a></span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
