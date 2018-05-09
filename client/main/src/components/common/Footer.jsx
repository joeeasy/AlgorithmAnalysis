import React, { Component } from "react";

const Footer = () => (
  <footer className="g-bg-color--dark">
    {/* <!-- Links --> */}
    <div className="g-hor-divider__dashed--white-opacity-lightest">
      <div className="container g-padding-y-80--xs">
        <div className="row">
          <div className="col-sm-2 g-margin-b-20--xs g-margin-b-0--md">
            <ul className="list-unstyled g-ul-li-tb-5--xs g-margin-b-0--xs">
              <li>
                <a className="g-font-size-15--xs g-color--white-opacity" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="g-font-size-15--xs g-color--white-opacity"
                  href="about.html"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="g-font-size-15--xs g-color--white-opacity"
                  href="search.html"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  className="g-font-size-15--xs g-color--white-opacity"
                  href="contacts.html"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 g-margin-b-20--xs g-margin-b-0--md">
            <ul className="list-unstyled g-ul-li-tb-5--xs g-margin-b-0--xs">
              <li>
                <a className="g-font-size-15--xs g-color--white-opacity" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="g-font-size-15--xs g-color--white-opacity" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="g-font-size-15--xs g-color--white-opacity" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="g-font-size-15--xs g-color--white-opacity" href="#">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 g-margin-b-40--xs g-margin-b-0--md">
            <ul className="list-unstyled g-ul-li-tb-5--xs g-margin-b-0--xs">
              <li>
                <a
                  className="g-font-size-15--xs g-color--white-opacity"
                  href="masterjournals.html"
                >
                  Master List
                </a>
              </li>
              <li>
                <a
                  className="g-font-size-15--xs g-color--white-opacity"
                  href="abci.html"
                >
                  ABCI
                </a>
              </li>
              <li>
                <a
                  className="g-font-size-15--xs g-color--white-opacity"
                  href="asci.html"
                >
                  ASCI
                </a>
              </li>
              <li>
                <a
                  className="g-font-size-15--xs g-color--white-opacity"
                  href="assaci.html"
                >
                  ASSACI
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1 s-footer__logo g-padding-y-50--xs g-padding-y-0--md">
            <h3 className="g-font-size-18--xs g-color--white">
              ALgorithm Analysis
            </h3>
            <p className="g-color--white-opacity">
              Algorithm Analysis also focus on the expansion of Science Covarage
              Database which operates a collection of subscription-based
              services on scientific and academic research
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Links --> */}

    {/* <!-- Copyright --> */}
    <div className="container g-padding-y-50--xs">
      <div className="row">
        <div className="col-xs-6">
          <a href="index.html">
            <img
              className="g-width-100--xs g-height-auto--xs"
              src="img/logo.png"
              alt="Megakit Logo"
            />
          </a>
        </div>
      </div>
    </div>
    {/* <!-- End Copyright --> */}
  </footer>
);

export default Footer;
