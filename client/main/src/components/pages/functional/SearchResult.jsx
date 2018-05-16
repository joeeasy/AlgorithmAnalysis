import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }
  displayText(text) {
    switch (text) {
      case "Current Contents - Agriculture, Biology & Environmental Sciences":
        return "Algorithm Biological Citation Index";
      case "Social & Behavioral Sciences":
        return "Algorithm Science Citation Index";
      case "Social Sciences Citation Index":
        return "Algorithm Science And Art Citation Index";
      // expected output: "Mangoes and papayas are $2.79 a pound."
      case "Science Citation Index":
        return "Scholar Citation Index";
      case "Emerging Sources Citation Index":
        return "Medical Citation Index";
      default:
        "Other Citation Index";
    }
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
                      <Link
                        className="g-color--primary"
                        destination={coverage.link.href}
                        to={
                          "/coverage/" +
                          this.displayText(coverage.text) +
                          "," +
                          encodeURIComponent(coverage.link.href)
                        }
                      >
                        {this.displayText(coverage.text)}
                      </Link>
                    </li>
                  ))}
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
