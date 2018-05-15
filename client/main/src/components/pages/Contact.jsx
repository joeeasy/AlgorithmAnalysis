import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="g-position--relative g-bg-color--primary">
        <div className="g-container--md g-padding-y-125--xs">
          <div className="g-text-center--xs g-margin-t-50--xs g-margin-b-80--xs">
            <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2 g-margin-b-25--xs">
              Contact Us
            </p>
            <h2 className="g-font-size-32--xs g-font-size-36--sm g-color--white">
              Get in Touch
            </h2>
          </div>
          <div className="row g-row-col--5 g-margin-b-80--xs">
            <div className="col-xs-4 g-full-width--xs g-margin-b-50--xs g-margin-b-0--sm">
              <div className="g-text-center--xs">
                <i className="g-display-block--xs g-font-size-40--xs g-color--white-opacity g-margin-b-30--xs ti-email" />
                <h4 className="g-font-size-18--xs g-color--white g-margin-b-5--xs">
                  Email
                </h4>
                <p className="g-color--white-opacity">support@keenthemes.com</p>
              </div>
            </div>
            <div className="col-xs-4 g-full-width--xs g-margin-b-50--xs g-margin-b-0--sm">
              <div className="g-text-center--xs">
                <i className="g-display-block--xs g-font-size-40--xs g-color--white-opacity g-margin-b-30--xs ti-map-alt" />
                <h4 className="g-font-size-18--xs g-color--white g-margin-b-5--xs">
                  Address
                </h4>
                <p className="g-color--white-opacity">
                  277 Bedford Avenue, Brooklyn
                </p>
              </div>
            </div>
            <div className="col-xs-4 g-full-width--xs">
              <div className="g-text-center--xs">
                <i className="g-display-block--xs g-font-size-40--xs g-color--white-opacity g-margin-b-30--xs ti-headphone-alt" />
                <h4 className="g-font-size-18--xs g-color--white g-margin-b-5--xs">
                  Call at
                </h4>
                <p className="g-color--white-opacity">+ (1) 001 389 3720</p>
              </div>
            </div>
          </div>
          <form
            className="center-block g-width-500--sm g-width-550--md"
            action="/contact"
          >
            <div className="g-margin-b-30--xs">
              <input
                type="text"
                className="form-control s-form-v3__input"
                placeholder="* Name"
              />
            </div>
            <div className="row g-row-col-5 g-margin-b-50--xs">
              <div className="col-sm-6 g-margin-b-30--xs g-margin-b-0--md">
                <input
                  type="email"
                  className="form-control s-form-v3__input"
                  placeholder="* Email"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control s-form-v3__input"
                  placeholder="* Phone"
                />
              </div>
            </div>
            <div className="g-margin-b-80--xs">
              <textarea
                className="form-control s-form-v3__input"
                rows="5"
                placeholder="* Your message"
              />
            </div>
            <div className="g-text-center--xs">
              <button
                type="submit"
                className="text-uppercase s-btn s-btn--md s-btn--white-bg g-radius--50 g-padding-x-70--xs g-margin-b-20--xs"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <img
          className="s-mockup-v2"
          src="img/mockups/pencil-01.png"
          alt="Mockup Image"
        />
      </div>
    );
  }
}

export default Contact;
