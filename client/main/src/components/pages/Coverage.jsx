import React, { Component } from "react";
import NoMatchFound from "./functional/NoMatchFound";
import { Link } from "react-router-dom";

class Coverage extends Component {
  constructor(props) {
    super(props);
    this.link = decodeURIComponent(props.match.params.id).split(",");
    this.title = this.link[0];
    this.url = this.link[1];

    console.log(props);
  }

  render() {
    return (
      <div>
        {/* <!--========== PROMO BLOCK ==========--> */}
        <div
          className="js__parallax-window"
          style={{
            background: "url(/img/1920x1080/06.jpg) 50% 0 no-repeat fixed"
          }}
        >
          <div className="g-container--md g-text-center--xs g-padding-y-150--xs">
            <div className="g-margin-b-60--xs">
              <h1 className="g-font-size-40--xs g-font-size-50--sm g-font-size-70--md g-color--white g-letter-spacing--1 g-margin-b-30--xs">
                Journal Search
              </h1>
              <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2">
                {this.title}
              </p>
            </div>
            <a href="#js__scroll-to-section">
              <span className="s-icon s-icon--md s-icon--white-brd g-radius--circle ti-angle-double-down" />
            </a>
          </div>
        </div>
        {/* <!--========== END PROMO BLOCK ==========--> */}

        {/* <!--========== PAGE CONTENT ==========--> */}
        {/* <!-- FA Questions Text --> */}
        <div
          id="js__scroll-to-section"
          className="g-container--md g-padding-y-80--xs g-padding-y-125--sm"
        >
          <div className="col-sm-6 g-margin-b-30--xs g-margin-b-0--md">
            {/* <!-- News --> */}
            <article>
              <div className="g-bg-color--white g-box-shadow__dark-lightest-v2  g-padding-x-40--xs g-padding-y-40--xs">
                <h2 className="g-font-size-15--xs g-font-family--playfair text-center">
                  Find a specific journal by title, title words, or ISSN
                </h2>
                <div className="g-text-center--xs">
                  <Link
                    to="/search"
                    className="text-uppercase s-btn s-btn--md s-btn--primary-bg g-radius--50 btn-block g-padding-x-50--xs"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </article>
            {/* <!-- End News --> */}
          </div>
          <div className="col-sm-6">
            {/* <!-- News --> */}
            <article>
              <div className="g-bg-color--white g-box-shadow__dark-lightest-v2  g-padding-x-40--xs g-padding-y-40--xs">
                <h2 className="g-font-size-15--xs g-font-family--playfair text-center">
                  View a list of all journals
                </h2>
                <div className="g-text-center--xs">
                  <Link
                    to={"/search/" + encodeURIComponent(this.url)}
                    className="text-uppercase s-btn s-btn--md s-btn--primary-bg g-radius--50 btn-block g-padding-x-50--xs"
                  >
                    View list
                  </Link>
                </div>
              </div>
            </article>
            {/* <!-- End News --> */}
          </div>
        </div>
        {/* <!-- End FA Questions Text --> */}
      </div>
    );
  }
}

export default Coverage;
