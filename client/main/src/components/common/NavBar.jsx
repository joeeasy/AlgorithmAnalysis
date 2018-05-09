import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <header className="navbar-fixed-top s-header-v2 js__header-sticky">
      {/* <!-- Navbar --> */}
      <nav className="s-header-v2__navbar">
        <div className="container g-display-table--lg">
          {/* <!-- Navbar Row --> */}
          <div className="s-header-v2__navbar-row">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="s-header-v2__navbar-col">
              <button
                type="button"
                className="collapsed s-header-v2__toggle"
                data-toggle="collapse"
                data-target="#nav-collapse"
                aria-expanded="false"
              >
                <span className="s-header-v2__toggle-icon-bar" />
              </button>
            </div>

            <div className="s-header-v2__navbar-col s-header-v2__navbar-col-width--180">
              {/* <!-- Logo --> */}
              <div className="s-header-v2__logo">
                <Link to="/" className="s-header-v2__logo-link">
                  {window.location.pathname ===( "/contact" || "/asci" )? (
                    <img
                      className="s-header-v2__logo-img s-header-v2__logo-img--default"
                      src="img/logo-white.png"
                      alt="Dublin Logo"
                    />
                  ) : (
                    <img
                      className="s-header-v2__logo-img s-header-v2__logo-img--default"
                      src="img/logo.png"
                      alt="Dublin Logo"
                    />
                  )}
                  <img
                    className="s-header-v2__logo-img s-header-v2__logo-img--shrink"
                    src="img/logo-dark.png"
                    alt="Dublin Logo"
                  />
                </Link>
              </div>
              {/* <!-- End Logo --> */}
            </div>

            <div className="s-header-v2__navbar-col s-header-v2__navbar-col--right">
              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div
                className="collapse navbar-collapse s-header-v2__navbar-collapse"
                id="nav-collapse"
              >
                <ul className="s-header-v2__nav">
                  {/* <!-- Home --> */}
                  <li className="dropdown s-header-v2__nav-item s-header-v2__dropdown-on-hover">
                    <Link
                      to="/"
                      className="dropdown-toggle s-header-v2__nav-link -is-active"
                    >
                      Home
                    </Link>
                  </li>
                  {/* <!-- End Home --> */}
                  <li className="s-header-v2__nav-item">
                    <Link to="/about" className="s-header-v2__nav-link">
                      About
                    </Link>
                  </li>
                  {/* <!-- Pages --> */}
                  <li className="dropdown s-header-v2__nav-item s-header-v2__dropdown-on-hover">
                    <Link
                      to="masterjournals.html"
                      className="dropdown-toggle s-header-v2__nav-link"
                      target="_blank"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Master Journal
                      <span className="g-font-size-10--xs g-margin-l-5--xs ti-angle-down" />
                    </Link>
                    <ul className="dropdown-menu s-header-v2__dropdown-menu">
                      <li>
                        <Link
                          to="abci.html"
                          className="s-header-v2__dropdown-menu-link"
                        >
                          ABCI
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="asci.html"
                          className="s-header-v2__dropdown-menu-link"
                        >
                          ASCI
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="assaci.html"
                          className="s-header-v2__dropdown-menu-link"
                        >
                          ASSACI
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="sci.html"
                          className="s-header-v2__dropdown-menu-link"
                        >
                          SCI
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="mci"
                          className="s-header-v2__dropdown-menu-link"
                        >
                          MCI
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- End Pages --> */}

                  <li className="s-header-v2__nav-item">
                    <Link to="/search" className="s-header-v2__nav-link">
                      Search
                    </Link>
                  </li>
                  {/* <!-- <li className="s-header-v2__nav-item">
                                    <Link  to="index_portfolio.html" className="s-header-v2__nav-link">Portfolio</Link >
                                </li> --> */}
                  <li className="s-header-v2__nav-item">
                    <Link
                      to="/contact"
                      className="s-header-v2__nav-link s-header-v2__nav-link--dark"
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- End Nav Menu --> */}
            </div>
          </div>
          {/* <!-- End Navbar Row --> */}
        </div>
      </nav>
      {/* <!-- End Navbar --> */}
    </header>
  </div>
);

export default NavBar;
