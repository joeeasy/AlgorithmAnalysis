import React from "react";
import { Link } from "react-router-dom";

const CitaionIndex = () => (
  <div className="container-fluid">
    <div className="g-text-center--xs g-margin-b-80--xs">
      <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-25--xs">
        Master List
      </p>
      <p>Online Indexing Service And Biological Database.</p>
    </div>

    {/* <!-- Swiper --> */}
    <div className="s-swiper js__swiper-news">
      {/* <!-- Wrapper --> */}
      <div className="swiper-wrapper g-margin-b-60--xs">
        <article
          className="s-promo-block-v6 g-bg-position--center swiper-slide"
          style={{ background: "url('/img/400x500/07.jpg')" }}
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
            <Link
              to={
                "/coverage/" +
                "Algorithm " +
                "Biological Citation Index (ABCI)" +
                "," +
                encodeURIComponent("/cgi-bin/jrnlst/jloptions.cgi?PC=A")
              }
              className="text-uppercase s-btn s-btn--xs s-btn--white-brd g-radius--50"
            >
              Read More
            </Link>
          </div>
        </article>
        <article
          className="s-promo-block-v6 g-bg-position--center swiper-slide"
          style={{ background: "url('/img/400x500/08.jpg')" }}
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
          style={{ background: "url('/img/400x500/09.jpg')" }}
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
          style={{ background: "url('/img/400x500/10.jpg')" }}
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
          style={{ background: "url('/img/400x500/11.jpg')" }}
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
);

export default CitaionIndex;
