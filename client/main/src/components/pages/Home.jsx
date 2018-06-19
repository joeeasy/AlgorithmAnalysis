import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
  <div>
    <div
      className="g-fullheight--md js__parallax-window"
      style={{
        background: "url(/img/1920x1080/06.jpg) 50% 0 no-repeat fixed"
      }}
    >
      <div className="g-container--md g-text-center--xs g-ver-center--md g-padding-y-150--xs g-padding-y-0--md">
        <div className="g-margin-b-60--xs">
          <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2 g-margin-b-25--xs">
            Welcome to
          </p>
          <h1 className="g-font-size-40--xs g-font-size-50--sm g-font-size-60--md g-color--white g-letter-spacing--1">
            Algorithm Analysis
          </h1>
          <p className="g-font-size-18--xs g-font-size-26--md g-color--white-opacity g-margin-b-0--xs">
            We are an Online Indexing Service And Academic Database containing
            the collection of scientific and academic titles.
          </p>
        </div>
        <span className="g-display-block--xs g-display-inline-block--sm g-padding-x-5--xs g-margin-b-10--xs g-margin-b-0--sm">
          <a
            href="/scienceweb"
            className="text-uppercase s-btn s-btn-icon--md s-btn--primary-bg g-radius--50 g-padding-x-45--xs"
          >
            Login to Science Web Index
          </a>
        </span>
        <span className="g-display-block--xs g-display-inline-block--sm g-padding-x-5--xs g-margin-b-10--xs g-margin-b-0--sm">
          <Link
            to="/search"
            className="text-uppercase s-btn s-btn-icon--md s-btn--white-brd g-radius--50 g-padding-x-65--xs"
          >
            Find Citation
          </Link>
        </span>
      </div>
    </div>

    {/* // <!--========== PAGE CONTENT ==========--> */}
    {/* // <!-- Features --> */}
    <div
      id="js__scroll-to-section"
      className="container g-padding-y-80--xs g-padding-y-125--sm"
    >
      <div className="g-text-center--xs g-margin-b-100--xs">
        <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-25--xs">
          Welcome to Algorithm Analysis
        </p>
        <h2 className="g-font-size-32--xs g-font-size-36--md">
          {" "}
          online indexing service and biological database.
        </h2>
      </div>
      <div className="row g-margin-b-60--xs g-margin-b-70--md">
        <div className="col-sm-4 g-margin-b-60--xs g-margin-b-0--md">
          <div className="clearfix">
            <div className="g-media g-width-30--xs">
              <div
                className="wow fadeInDown"
                data-wow-duration=".3"
                data-wow-delay=".1s"
              >
                <i className="g-font-size-28--xs g-color--primary ti-desktop" />
              </div>
            </div>
            <div className="g-media__body g-padding-x-20--xs">
              <h3 className="g-font-size-18--xs">
                Algorithm Biological Citation Index (ABCI)
              </h3>
              <p className="g-margin-b-0--xs">
                {" "}
                covers the business asearchnd resources on the study of
                biological sciences in the areas of Chemistry in...
                <a href="#">Learn More ></a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 g-margin-b-60--xs g-margin-b-0--md">
          <div className="clearfix">
            <div className="g-media g-width-30--xs">
              <div
                className="wow fadeInDown"
                data-wow-duration=".3"
                data-wow-delay=".2s"
              >
                <i className="g-font-size-28--xs g-color--primary ti-settings" />
              </div>
            </div>
            <div className="g-media__body g-padding-x-20--xs">
              <h3 className="g-font-size-18--xs">
                Algorithm Science Citation Index (ASCI)
              </h3>
              <p className="g-margin-b-0--xs">
                covers the resources of primary and major aspect of science in
                Astronomy, Biology, Chemistry, Cognitive ...
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="clearfix">
            <div className="g-media g-width-30--xs">
              <div
                className="wow fadeInDown"
                data-wow-duration=".3"
                data-wow-delay=".3s"
              >
                <i className="g-font-size-28--xs g-color--primary ti-ruler-alt-2" />
              </div>
            </div>
            <div className="g-media__body g-padding-x-20--xs">
              <h3 className="g-font-size-18--xs">
                Algorithm Social Sciences and Arts Citation Index (ASSACI)
              </h3>
              <p className="g-margin-b-0--xs">
                focus on the business and resources on study concerning
                educational Sciences, social...
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- // end row  --> */}
      <div className="row">
        <div className="col-sm-4 g-margin-b-60--xs g-margin-b-0--md">
          <div className="clearfix">
            <div className="g-media g-width-30--xs">
              <div
                className="wow fadeInDown"
                data-wow-duration=".3"
                data-wow-delay=".4s"
              >
                <i className="g-font-size-28--xs g-color--primary ti-package" />
              </div>
            </div>
            <div className="g-media__body g-padding-x-20--xs">
              <h3 className="g-font-size-18--xs">
                Scholar Citation Index (SCI){" "}
              </h3>
              <p className="g-margin-b-0--xs">
                {" "}
                covers multi disciplinary subjects which titles have published
                in 5 years and above. SCI index covers subjects in all...
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 g-margin-b-60--xs g-margin-b-0--md">
          <div className="clearfix">
            <div className="g-media g-width-30--xs">
              <div
                className="wow fadeInDown"
                data-wow-duration=".3"
                data-wow-delay=".5s"
              >
                <i className="g-font-size-28--xs g-color--primary ti-star" />
              </div>
            </div>
            <div className="g-media__body g-padding-x-20--xs">
              <h3 className="g-font-size-18--xs">
                Medical Citation Index (MCI)
              </h3>
              <p className="g-margin-b-0--xs">
                covers the business on all aspects of medical subjects including
                Acne, Acute Coronary Syndromes (ACS), Acute...
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- <div className="col-sm-4">
            <div className="clearfix">
                <div className="g-media g-width-30--xs">
                    <div className="wow fadeInDown" data-wow-duration=".3" data-wow-delay=".6s">
                        <i className="g-font-size-28--xs g-color--primary ti-panel"></i>
                    </div>
                </div>
                <div className="g-media__body g-padding-x-20--xs">
                    <h3 className="g-font-size-18--xs">Parallax Support</h3>
                    <p className="g-margin-b-0--xs">This is where we sit down, grab a cup of coffee and dial in the details.</p>
                </div>
            </div>
        </div> --> */}
      </div>
      {/* <!-- // end row  --> */}
    </div>
    {/* // <!-- End Features --> */}

    {/* // <!-- Parallax --> */}
    <div
      className="js__parallax-window"
      style={{
        background: " url(img/1920x1080/03.jpg ) 50% 0 no-repeat fixed"
      }}
    >
      <div className="container g-text-center--xs g-padding-y-80--xs g-padding-y-125--sm">
        <div className="g-margin-b-80--xs">
          <h2 className="g-font-size-40--xs g-font-size-50--sm g-font-size-60--md g-color--white">
            View Our Journal Master List
          </h2>
        </div>
        <a
          href="masterjournals.html"
          className="text-uppercase s-btn s-btn--md s-btn--white-brd g-radius--50"
        >
          View Journal Master List
        </a>
      </div>
    </div>
    {/* // <!-- End Parallax --> */}

    {/* // <!-- Culture --> */}
    <div className="g-promo-section">
      <div className="container g-padding-y-80--xs g-padding-y-125--sm">
        <div className="row">
          <div className="col-md-4 g-margin-t-15--xs g-margin-b-60--xs g-margin-b-0--lg">
            <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-25--xs">
              About
            </p>
            <div
              className="wow fadeInLeft"
              data-wow-duration=".3"
              data-wow-delay=".1s"
            >
              <h2 className="g-font-size-40--xs g-font-size-50--sm g-font-size-60--md">
                Algorithm
              </h2>
            </div>
            <div
              className="wow fadeInLeft"
              data-wow-duration=".3"
              data-wow-delay=".3s"
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
      <div className="col-sm-3 g-promo-section__img-right--lg g-bg-position--center g-height-100-percent--md js__fullwidth-img">
        <img className="img-responsive" src="img/970x970/03.jpg" alt="Image" />
      </div>
    </div>

    <div
      className="js__parallax-window"
      style={{ background: "url(img/1920x1080/07.jpg) 50% 0 no-repeat fixed" }}
    >
      <div className="g-container--sm g-text-center--xs g-padding-y-80--xs g-padding-y-125--sm">
        <div className="g-margin-b-80--xs">
          <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2 g-margin-b-25--xs">
            Subscribe
          </p>
          <h2 className="g-font-size-32--xs g-font-size-36--md g-color--white">
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

    <div className="container-fluid g-padding-y-80--xs g-padding-y-125--sm">
      <div className="g-text-center--xs g-margin-b-80--xs">
        <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-25--xs">
          Indexes
        </p>
        <p>Online Indexing Service And Biological Database.</p>
      </div>

      {/* <!-- Swiper --> */}
      <div className="s-swiper js__swiper-news">
        {/* <!-- Wrapper --> */}
        <div className="swiper-wrapper g-margin-b-60--xs">
          <article
            className="s-promo-block-v6 g-bg-position--center swiper-slide"
            style={{ background: "url('img/400x500/07.jpg')" }}
          >
            <div className="g-text-center--xs g-padding-x-15--xs g-padding-x-30--lg g-padding-y-50--xs g-margin-t-120--xs">
              <div className="g-margin-b-25--xs">
                <h3 className="g-font-size-16--xs g-color--white g-margin-b-5--xs">
                  Algorithm Biological Citation Index (ABCI)
                </h3>
                <p className="g-color--white">
                  Covers the business and resources on the study of...
                </p>
              </div>
              <a
                href="abci.html"
                className="text-uppercase s-btn s-btn--xs s-btn--white-brd g-radius--50"
              >
                Read More
              </a>
            </div>
          </article>
          <article
            className="s-promo-block-v6 g-bg-position--center swiper-slide"
            style={{ background: "url('img/400x500/08.jpg')" }}
          >
            <div className="g-text-center--xs g-padding-x-15--xs g-padding-x-30--lg g-padding-y-50--xs g-margin-t-120--xs">
              <div className="g-margin-b-25--xs">
                <h3 className="g-font-size-16--xs g-color--white g-margin-b-5--xs">
                  Algorithm Science Citation Index (ASCI)
                </h3>
                <p className="g-color--white">
                  Covers the resources of primary and major aspect o....
                </p>
              </div>
              <a
                href="asci.html"
                className="text-uppercase s-btn s-btn--xs s-btn--white-brd g-radius--50"
              >
                Read More
              </a>
            </div>
          </article>
          <article
            className="s-promo-block-v6 g-bg-position--center swiper-slide"
            style={{ background: "url('img/400x500/09.jpg')" }}
          >
            <div className="g-text-center--xs g-padding-x-15--xs g-padding-x-30--lg g-padding-y-50--xs g-margin-t-120--xs">
              <div className="g-margin-b-25--xs">
                <h3 className="g-font-size-16--xs g-color--white g-margin-b-5--xs">
                  Algorithm Social Sciences and Arts Citation Index (ASSACI)
                </h3>
                <p className="g-color--white">
                  Focus on the business and resources on study concerning...
                </p>
              </div>
              <a
                href="assaci.html"
                className="text-uppercase s-btn s-btn--xs s-btn--white-brd g-radius--50"
              >
                Read More
              </a>
            </div>
          </article>
          <article
            className="s-promo-block-v6 g-bg-position--center swiper-slide"
            style={{ background: "url('img/400x500/10.jpg')" }}
          >
            <div className="g-text-center--xs g-padding-x-15--xs g-padding-x-30--lg g-padding-y-50--xs g-margin-t-120--xs">
              <div className="g-margin-b-25--xs">
                <h3 className="g-font-size-16--xs g-color--white g-margin-b-5--xs">
                  Scholar Citation Index (SCI)
                </h3>
                <p className="g-color--white">
                  Covers multi disciplinary subjects which titles have published
                  in 5 years...
                </p>
              </div>
              <a
                href="sci.html"
                className="text-uppercase s-btn s-btn--xs s-btn--white-brd g-radius--50"
              >
                Read More
              </a>
            </div>
          </article>
          <article
            className="s-promo-block-v6 g-bg-position--center swiper-slide"
            style={{ background: "url('img/400x500/11.jpg')" }}
          >
            <div className="g-text-center--xs g-padding-x-15--xs g-padding-x-30--lg g-padding-y-50--xs g-margin-t-120--xs">
              <div className="g-margin-b-25--xs">
                <h3 className="g-font-size-16--xs g-color--white g-margin-b-5--xs">
                  Medical Citation Index (MCI)
                </h3>
                <p className="g-color--white">
                  covers the business on all aspects of medical subjects
                  including...
                </p>
              </div>
              <a
                href="mci.html"
                className="text-uppercase s-btn s-btn--xs s-btn--white-brd g-radius--50"
              >
                Read More
              </a>
            </div>
          </article>
        </div>
        {/* <!-- End Wrapper --> */}

        {/* <!-- Pagination --> */}
        <div className="s-swiper__pagination-v1 s-swiper__pagination-v1--dark g-text-center--xs js__swiper-pagination" />
      </div>
      {/* <!-- End Swiper --> */}
    </div>

    <div
      className="js__parallax-window"
      style={{ background: "url(img/1920x1080/06.jpg) 50% 0 no-repeat fixed" }}
    >
      <div className="container g-padding-y-80--xs g-padding-y-125--sm">
        <div className="row">
          <div className="col-md-3 col-xs-6 g-full-width--xs g-margin-b-70--xs g-margin-b-0--lg">
            <div className="g-text-center--xs">
              <div className="g-margin-b-10--xs">
                <figure className="g-display-inline-block--xs g-font-size-70--xs g-color--white js__counter">
                  6
                </figure>
                <span className="g-font-size-40--xs g-color--white">k</span>
              </div>
              <div className="center-block g-hor-divider__solid--white g-width-40--xs g-margin-b-25--xs" />
              <h4 className="g-font-size-18--xs g-color--white">
                Lines of Code
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 g-full-width--xs g-margin-b-70--xs g-margin-b-0--lg">
            <div className="g-text-center--xs">
              <figure className="g-display-block--xs g-font-size-70--xs g-color--white g-margin-b-10--xs js__counter">
                5
              </figure>
              <div className="center-block g-hor-divider__solid--white g-width-40--xs g-margin-b-25--xs" />
              <h4 className="g-font-size-18--xs g-color--white">
                Award Winners
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 g-full-width--xs g-margin-b-70--xs g-margin-b-0--sm">
            <div className="g-text-center--xs">
              <figure className="g-display-block--xs g-font-size-70--xs g-color--white g-margin-b-10--xs js__counter">
                15
              </figure>
              <div className="center-block g-hor-divider__solid--white g-width-40--xs g-margin-b-25--xs" />
              <h4 className="g-font-size-18--xs g-color--white">
                Multiple Pages
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 g-full-width--xs">
            <div className="g-text-center--xs">
              <div className="g-margin-b-10--xs">
                <figure className="g-display-inline-block--xs g-font-size-70--xs g-color--white js__counter">
                  2
                </figure>
                <span className="g-font-size-40--xs g-color--white">x</span>
              </div>
              <div className="center-block g-hor-divider__solid--white g-width-40--xs g-margin-b-25--xs" />
              <h4 className="g-font-size-18--xs g-color--white">
                Faster Support
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="g-bg-color--sky-light">
      <div className="container g-padding-y-80--xs g-padding-y-125--sm">
        <div className="g-text-center--xs g-margin-b-80--xs">
          <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-25--xs">
            Feedback
          </p>
          <h2 className="g-font-size-32--xs g-font-size-36--md">
            Send us a note
          </h2>
          <a
            href="contacts.html"
            className="text-uppercase s-btn s-btn--md s-btn--primary-bg g-radius--50 g-padding-x-80--xs"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
