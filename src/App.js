function App() {
  return (
    <div className="App">
      {/* Preloader Start */}
      {/* <div className="se-pre-con" /> */}
      {/* Preloader Ends */}

      {/* Start Header Top */}
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
           
              <a className="btn btn-theme effect btn-sm" href="index-2.html#">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Top */}

      {/* Header */}
      <header>
        <div className="container box-nav">
          <div className="row">
            {/* Start Navigation */}
            <nav
              id="mainNav"
              className="navbar logo-less inc-top-bar navbar-default navbar-fixed white bootsnav on no-full nav-box no-background"
            >
              {/* Start Top Search */}
              <div className="container">
                <div className="row">
                  <div className="top-search">
                    <div className="input-group">
                      <form action="index-2.html#">
                        <input
                          type="text"
                          name="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <button type="submit">
                          <i className="ti-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Top Search */}
              <div className="container">
                {/* Start Atribute Navigation */}
                <div className="attr-nav">
                  <ul>
                    <li className="language-switcher">
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                        >
                          <img src="assets/img/lan-eng.png" alt="Flag" />
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="index-2.html#">English</a>
                          </li>
                          <li>
                            <a href="index-2.html#">Español</a>
                          </li>
                          <li>
                            <a href="index-2.html#">Française</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="search">
                      <a href="index-2.html#">
                        <i className="fas fa-search" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Atribute Navigation */}
                {/* Start Header Navigation */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <a className="navbar-brand" href="index.html">
                    <img
                      src="assets/img/logo.png"
                      className="logo"
                      alt="Logo"
                    />
                  </a>
                </div>
                {/* End Header Navigation */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="navbar-menu">
                  <ul
                    className="nav navbar-nav navbar-left"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li className="dropdown">
                      <a
                        href="index-2.html#"
                        className="dropdown-toggle active"
                        data-toggle="dropdown"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="index-1.html">Home Version One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Version Two</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Version Three</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Version Four</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        href="index-2.html#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="volunteer.html">Voluntter</a>
                        </li>
                        <li>
                          <a href="our-mission.html">Our Mission</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="404.html">Error Page</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        href="index-2.html#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Donations
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="donation-1.html">Donations Version One</a>
                        </li>
                        <li>
                          <a href="donation-2.html">Donations Version Two</a>
                        </li>
                        <li>
                          <a href="donation-3.html">Donations Version Three</a>
                        </li>
                        <li>
                          <a href="donation-single.html">Donations Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        href="index-2.html#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Event
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="event-1.html">Event Version One</a>
                        </li>
                        <li>
                          <a href="event-2.html">Event Version Two</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        href="index-2.html#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="blog-standard.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-with-sidebar.html">Blog With Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-2-colum.html">Blog Grid Two Colum</a>
                        </li>
                        <li>
                          <a href="blog-3-colum.html">Blog Grid Three Colum</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog Single</a>
                        </li>
                        <li>
                          <a href="blog-single-with-sidebar.html">
                            Blog Single With Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                {/* /.navbar-collapse */}
              </div>
            </nav>
            {/* End Navigation */}
            <div className="clearfix" />
          </div>
        </div>
      </header>
      {/* End Header */}

      {/* Start Banner */}
      <div className="banner-area top-pad-150 text-center text-large">
        <div
          id="bootcarousel"
          className="carousel text-light slide carousel-fade animate_text"
          data-ride="carousel"
        >
          {/* Wrapper for slides */}
          <div className="carousel-inner carousel-zoom">
            <div className="carousel-item active">
              <div
                className="slider-thumb bg-cover"
                style={{ backgroundImage: "url(assets/img/banner/2.jpg)" }}
              />
              <div className="box-table">
                <div className="box-cell shadow dark">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <div className="content">
                          <h2 data-animation="animated slideInRight">
                            Help us to save <strong>Homeless People</strong>
                          </h2>
                          <p data-animation="animated slideInLeft">
                            Numerous ladyship so raillery humoured goodness
                            received an. So narrow formal length my highly
                            longer afford oh. Tall neat he make.
                          </p>
                          <a
                            data-animation="animated fadeInUp"
                            className="btn circle btn-theme border btn-md"
                            href="index-2.html#"
                          >
                            Discover More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="slider-thumb bg-cover"
                style={{ backgroundImage: "url(assets/img/banner/7.jpg)" }}
              />
              <div className="box-table">
                <div className="box-cell shadow dark">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <div className="content">
                          <h2 data-animation="animated slideInRight">
                            Join with us and <strong>save the world</strong>
                          </h2>
                          <p data-animation="animated slideInLeft">
                            Numerous ladyship so raillery humoured goodness
                            received an. So narrow formal length my highly
                            longer afford oh. Tall neat he make.
                          </p>
                          <a
                            data-animation="animated fadeInUp"
                            className="btn circle btn-theme border btn-md"
                            href="index-2.html#"
                          >
                            Discover More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Wrapper for slides */}
          {/* Left and right controls */}
          <a
            className="left carousel-control light"
            href="index-2.html#bootcarousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control light"
            href="index-2.html#bootcarousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* End Banner */}
      {/* Start We Do */}
      <div className="wedo-area inc-shadow carousel-shadow bg-gray default-padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="thumb">
                <img src="assets/img/about/1.jpg" alt="Thumb" />
                <a
                  href="https://www.youtube.com/watch?v=owhuBrGIOsE"
                  className="popup-youtube light video-play-button item-center"
                >
                  <i className="fa fa-play" />
                </a>
                <div className="overlay">
                  <div className="fun-fact">
                    <div className="timer" data-to={35} data-speed={2000} />
                    <span className="medium">Years of Foundation</span>
                  </div>
                  <div className="fun-fact">
                    <div className="timer" data-to={678} data-speed={5000} />
                    <span className="medium">Monthly donors</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 info">
              <h5>What we do</h5>
              <h2 className="area-title">
                We Donate to charity causes around the world.
              </h2>
              <p>
                Continual say suspicion provision you neglected sir curiosity
                unwilling. Simplicity end themselves increasing led day
                sympathize yet. General windows effects not are drawing man
                garrets.
              </p>
              <ul className="wedo-carousel owl-carousel owl-theme">
                <li>
                  <i className="flaticon-water-bottle" />
                  <h4>Water Delivery</h4>
                  <p>
                    Taken now you him trees tears any. Her object giving end
                    sister except oppose
                  </p>
                </li>
                <li>
                  <i className="flaticon-pharmacy" />
                  <h4>Medicine Help</h4>
                  <p>
                    Taken now you him trees tears any. Her object giving end
                    sister except oppose
                  </p>
                </li>
                <li>
                  <i className="flaticon-planet-earth" />
                  <h4>Save Plants</h4>
                  <p>
                    Taken now you him trees tears any. Her object giving end
                    sister except oppose
                  </p>
                </li>
                <li>
                  <i className="flaticon-home" />
                  <h4>Build &amp; Create</h4>
                  <p>
                    Taken now you him trees tears any. Her object giving end
                    sister except oppose
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End We Do */}
      {/* Start Causes */}
      <div className="causes-area bg-gray default-padding bottom-less">
        <div className="container">
          <div className="heading-left">
            <div className="row">
              <div className="col-lg-6 left-info">
                <h5>Recent Causes</h5>
                <h2>Donate to charity causes around the world.</h2>
              </div>
              <div className="col-lg-6 right-info">
                <p>
                  Everything melancholy uncommonly but solicitude inhabiting
                  projection off. Connection stimulated estimating excellence an
                  to impression.
                </p>
                <a
                  className="btn circle btn-md btn-gradient wow fadeInUp"
                  href="index-2.html#"
                >
                  View All <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="causes-items">
            <div className="row">
              <div className="col-lg-12">
                {/* Single Item */}
                <div className="grid-item">
                  <div className="row">
                    <div
                      className="thumb col-lg-5"
                      style={{
                        backgroundImage: "url(assets/img/causes/11.jpg)",
                      }}
                    >
                      <span className="cats">Education</span>
                    </div>
                    <div className="info col-lg-7">
                      <div className="top-entry">
                        <div className="date">
                          <i className="fas fa-clock" />{" "}
                          <strong>Created : </strong> Jul 15, 2020
                        </div>
                        <div className="location">
                          <i className="fas fa-map-marker-alt" />{" "}
                          <strong>Location : </strong> Mombasa, Africa
                        </div>
                      </div>
                      <h3>
                        <a href="index-2.html#">Give Education To Africa</a>
                      </h3>
                      <p>
                        Admiration stimulated cultivated reasonable be
                        projection possession of. Real no near room ye bred sake
                        if some. Is arranging furnished knowledge agreeable so.
                        Fanny as smile up small. It vulgar chatty simple months.
                      </p>
                      <div className="progress-box">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            data-width={33}
                          >
                            <span>33%</span>
                          </div>
                        </div>
                        <p>
                          Raised : $5488 <span>Goal : $12800</span>
                        </p>
                      </div>
                      <a
                        className="btn circle btn-theme border btn-md"
                        href="index-2.html#"
                      >
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="grid-item">
                  <div className="row">
                    <div
                      className="thumb col-lg-5"
                      style={{
                        backgroundImage: "url(assets/img/causes/22.jpg)",
                      }}
                    >
                      <span className="cats">Water</span>
                    </div>
                    <div className="info col-lg-7">
                      <div className="top-entry">
                        <div className="date">
                          <i className="fas fa-clock" />{" "}
                          <strong>Created : </strong> Aug 26, 2020
                        </div>
                        <div className="location">
                          <i className="fas fa-map-marker-alt" />{" "}
                          <strong>Location : </strong> Kusaka, Uganda
                        </div>
                      </div>
                      <h3>
                        <a href="index-2.html#">Water For All Children</a>
                      </h3>
                      <p>
                        Admiration stimulated cultivated reasonable be
                        projection possession of. Real no near room ye bred sake
                        if some. Is arranging furnished knowledge agreeable so.
                        Fanny as smile up small. It vulgar chatty simple months.
                      </p>
                      <div className="progress-box">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            data-width={57}
                          >
                            <span>57%</span>
                          </div>
                        </div>
                        <p>
                          Raised : $2890 <span>Goal : $5700</span>
                        </p>
                      </div>
                      <a
                        className="btn circle btn-theme border btn-md"
                        href="index-2.html#"
                      >
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="grid-item">
                  <div className="row">
                    <div
                      className="thumb col-lg-5"
                      style={{
                        backgroundImage: "url(assets/img/causes/33.jpg)",
                      }}
                    >
                      <span className="cats">Food</span>
                    </div>
                    <div className="info col-lg-7">
                      <div className="top-entry">
                        <div className="date">
                          <i className="fas fa-clock" />{" "}
                          <strong>Created : </strong> Sep 06, 2020
                        </div>
                        <div className="location">
                          <i className="fas fa-map-marker-alt" />{" "}
                          <strong>Location : </strong> Mombasa, Syria
                        </div>
                      </div>
                      <h3>
                        <a href="index-2.html#">Food for Syrian</a>
                      </h3>
                      <p>
                        Admiration stimulated cultivated reasonable be
                        projection possession of. Real no near room ye bred sake
                        if some. Is arranging furnished knowledge agreeable so.
                        Fanny as smile up small. It vulgar chatty simple months.
                      </p>
                      <div className="progress-box">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            data-width={68}
                          >
                            <span>68%</span>
                          </div>
                        </div>
                        <p>
                          Raised : $5488 <span>Goal : $8900</span>
                        </p>
                      </div>
                      <a
                        className="btn circle btn-theme border btn-md"
                        href="index-2.html#"
                      >
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Causes */}
      {/* Start Volunteer */}
      <div className="volunteer-area text-center default-padding">
        {/* Fixed Shape */}
        <div className="shape-bottom">
          <img src="assets/img/shape/7.png" alt="Shape" />
        </div>
        {/* Fixed Shape */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h5>Become a Volunteer</h5>
              <h2 className="text-blur">Volunteer</h2>
              <h2 className="area-title">
                We’ve funded 120,00 charity projects for 20M people around the
                world.
              </h2>
              <p>
                Replied joy age visitor nothing cottage. Mrs door paid led loud
                sure easy read. Hastily at perhaps as neither or ye fertile
                tedious visitor. Use fine bed none call busy dull when. Quiet
                ought match my right by table means. Principles up do in me
                favourable affronting. Twenty mother denied effect we to do on.
              </p>
              <form action="index-2.html#">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control"
                  name="email"
                />
                <button type="submit"> Join Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Volunteer */}
      {/* Start Footer */}
      <footer className="bg-dark text-light">
        {/* Fixed Shape */}
        <div className="fixed-shape">
          <img src="assets/img/footer-bg.png" alt="Shape" />
        </div>
        {/* Fixed Shape */}
        <div className="container">
          <div className="f-items default-padding">
            <div className="row">
              <div className="col-lg-4 col-md-6 item">
                <div className="f-item about">
                  <img src="assets/img/logo-light.png" alt="Logo" />
                  <p>
                    Happen active county. Winding morning am shyness evident to.
                    Garrets because elderly new manners however one village she.
                  </p>
                  <form action="index-2.html#">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-control"
                      name="email"
                    />
                    <button type="submit"> Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 item">
                <div className="f-item link">
                  <h4 className="widget-title">Explore</h4>
                  <ul>
                    <li>
                      <a href="index-2.html#">Our Causes</a>
                    </li>
                    <li>
                      <a href="index-2.html#">New Campaign</a>
                    </li>
                    <li>
                      <a href="index-2.html#">Site Map</a>
                    </li>
                    <li>
                      <a href="index-2.html#">Donate</a>
                    </li>
                    <li>
                      <a href="index-2.html#">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="f-item">
                  <h4 className="widget-title">Contact Info</h4>
                  <div className="address">
                    <ul>
                      <li>
                        <strong>Address:</strong>
                        5919 Trussville Crossings Pkwy, Birmingham AL 35235
                      </li>
                      <li>
                        <strong>Email:</strong>
                        <a href="mailto:info@validtheme.com">
                          info@validtheme.com
                        </a>
                      </li>
                      <li>
                        <strong>Phone:</strong>
                        <a href="tel:2151234567">+123 34598768</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="f-item recent-post">
                  <h4 className="widget-title">Latest News</h4>
                  <div className="item">
                    <a href="index-2.html#">
                      Delighted prevailed supported too not remainder perpetual.
                    </a>
                    <span>
                      <i className="fas fa-calendar-alt" /> 22 Aug, 2020 -{" "}
                      <a href="index-2.html#">Admin</a>
                    </span>
                  </div>
                  <div className="item">
                    <a href="index-2.html#">
                      Speaking trifling an to unpacked moderate debating learnin
                      management.{" "}
                    </a>
                    <span>
                      <i className="fas fa-calendar-alt" /> 15 Nov, 2020 -{" "}
                      <a href="index-2.html#">User</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  Copyright © 2020. Designed by{" "}
                  <a href="index-2.html#">validtemplatess</a>
                </p>
              </div>
              <div className="col-md-6 text-right link">
                <ul>
                  <li>
                    <a href="index-2.html#">Terms</a>
                  </li>
                  <li>
                    <a href="index-2.html#">Privacy</a>
                  </li>
                  <li>
                    <a href="index-2.html#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </footer>
      {/* End Footer */}
    </div>
  );
}

export default App;
