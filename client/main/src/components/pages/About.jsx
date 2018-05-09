import React from "react";

const About = () => (
  <div>
    <div
      className="g-bg-position--center js__parallax-window"
      style={{ background: "url(img/1920x1080/09.jpg) 50% 0 no-repeat fixed" }}
    >
      <div className="g-container--md g-text-center--xs g-padding-y-150--xs">
        <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2 g-margin-b-25--xs">
          About
        </p>
        <h1 className="g-font-size-40--xs g-font-size-50--sm g-font-size-60--md g-color--white g-letter-spacing--1">
          Algorithm Analysis
        </h1>
      </div>
    </div>
    {/* <!--========== END PROMO BLOCK ==========--> */}

    {/* <!--========== PAGE CONTENT ==========--> */}
    {/* <!-- About --> */}
    <div className="g-promo-section">
      <div className="container g-padding-y-80--xs g-padding-y-125--sm">
        <div className="row">
          <div className="col-md-4 g-margin-t-15--xs g-margin-b-60--xs g-margin-b-0--lg">
            <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-25--xs">
              About
            </p>
            <div
              className="wow fadeInLeft animated"
              data-wow-duration=".3"
              data-wow-delay=".1s"
              style={{
                visibility:
                  "visible animation-delay: 0.1s animation-name: fadeInLeft"
              }}
            >
              <h2 className="g-font-size-40--xs g-font-size-50--sm g-font-size-60--md">
                Algorithm
              </h2>
            </div>
            <div
              className="wow fadeInLeft animated"
              data-wow-duration=".3"
              data-wow-delay=".3s"
              style={{
                visibility:
                  "visible animation-delay: 0.3s animation-name: fadeInLeft"
              }}
            >
              <h2 className="g-font-size-40--xs g-font-size-50--sm g-font-size-60--md">
                Analysis
              </h2>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-1">
            <p className="g-font-size-18--xs">
              Algorithm Analysis is an online indexing services and
              bibliographic database containing the collection of academic and
              scientific titles, an organized digital references, published
              literature, conference proceedings, reports, government and legal
              publications, patents and books.
            </p>
            <p className="g-font-size-18--xs">
              Algorithm Analysis covers subjects in scientific, medical,
              biological, social sciences and arts. Algorithm Analysis
              established and operates the accessment and collection of data in
              Algorithm Biological Citation Index (ABCI), Algorithm Science
              Citation Index (ASCI), Algorithm Social Sciences and Arts Citation
              Index (ASSACI), Scholar Citation Index (SCI), Medical Citation
              Index (MCI) which are on the coverage of her Master List.
            </p>
            <p className="g-font-size-18--xs">
              Algorithm Analysis also focus on the expansion of Science Covarage
              Database which operates a collection of subscription-based
              services on scientific and academic research
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-sm-3 g-promo-section__img-right--lg g-bg-position--center g-height-100-percent--md js__fullwidth-img"
        style={{ background: "url(img/970x970/03.jpg)" }}
      >
        <img
          className="img-responsive"
          src="img/970x970/03.jpg"
          alt="Image"
          style={{ display: "none" }}
        />
      </div>
    </div>
    {/* <!-- Subscribe --> */}
    <div className="g-bg-color--dark-light">
      <div className="g-container--sm g-text-center--xs g-padding-y-80--xs g-padding-y-125--sm">
        <div className="g-margin-b-60--xs">
          <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2 g-margin-b-25--xs">
            Subscribe
          </p>
          <h2 className="g-font-size-32--xs g-font-size-36--sm g-letter-spacing--1 g-color--white">
            Join Over 1000+ People
          </h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
            <form className="input-group">
              <input
                type="email"
                className="form-control s-form-v1__input g-radius--left-50"
                name="email"
                placeholder="Enter your email"
              />
              <span className="input-group-btn">
                <button
                  type="submit"
                  className="s-btn s-btn-icon--md s-btn-icon--white-brd s-btn--white-brd g-radius--right-50"
                >
                  <i className="ti-arrow-right" />
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
