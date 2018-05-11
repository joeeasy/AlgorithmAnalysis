import React, { Component } from "react";

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-sm-12 g-margin-b-30--xs g-margin-b-0--md">
        {/* <!-- News --> */}
        <article>
          <div className="g-bg-color--white g-box-shadow__dark-lightest-v2  g-padding-x-40--xs g-padding-y-40--xs">
            <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2">
              {this.props.result.title}
            </p>
            <h2 className="g-font-size-26--xs g-font-family--playfair g-letter-spacing--1">
              <a>{this.props.result.isbn}</a>
            </h2>
            <p>{this.props.result.description}.</p>
            <a
              data-toggle="collapse"
              href={`#${this.props.indexId}`}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <strong>Coverage</strong>{" "}
              <span className="g-font-size-10--xs g-margin-l-5--xs ti-angle-down" />
            </a>
            <div className="collapse" id={this.props.indexId}>
              <div className="card card-body">
                <ul className="list-unstyled">
                  {this.props.result.coverage.map((coverage, index) => (
                    <li key={index}>
                      <a className="g-color--primary" href={coverage.link}>
                        {coverage.text}
                      </a>
                    </li>
                  ))}

                  <li>
                    <a className="g-color--primary" href="#">
                      link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <hr />
        {/* <!-- End News --> */}
      </div>
    );
  }
}

export default SearchResult;
