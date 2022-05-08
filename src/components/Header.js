function Header() {
  return (
    <div className="top-bar-area fixed text-light">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-4 logo">
            <a href="index.html">
              <img
                src="assets/img/logo-light.png"
                className="logo"
                alt="Logo"
              />
            </a>
          </div>
          <div className="col-lg-8 info item-flex">
            <ul>
              <li>
                <i className="fas fa-envelope-open" /> Info@gmail.com
              </li>
              <li>
                <i className="fas fa-phone" /> +123 456 7890
              </li>
            </ul>
            <a className="btn btn-theme effect btn-sm" href="index-2.html#">
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
