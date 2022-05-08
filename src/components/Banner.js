function Banner() {
  return (
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
                          received an. So narrow formal length my highly longer
                          afford oh. Tall neat he make.
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
                          received an. So narrow formal length my highly longer
                          afford oh. Tall neat he make.
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
  );
}

export default Banner;
