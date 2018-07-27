import React, { Component } from "react";
import SearchForm from "./functional/SearchForm";
import axios from "axios";
import SearchResult from "./functional/SearchResult";
import NoMatchFound from "./functional/NoMatchFound";
import Loader from "react-loader";
import CitaionIndex from "./CitationIndex";

var options = {
  lines: 13,
  length: 18,
  width: 8,
  radius: 30,
  scale: 1.0,
  corners: 1,
  color: "#000",
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  top: "50%",
  left: "50%",
  shadow: false,
  hwaccel: false,
  position: "absolute"
};
let searchResult = [];
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [], loaded: true };
    this.searchFormHandler = this.searchFormHandler.bind(this);
    this.searchJournal = this.searchJournal.bind(this);
  }

  searchJournal(url) {
    let that = this;
    return axios
      .post(`/search?search=${url}`)
      .then(function(response) {
        return console.log(
          that.setState(prevState => ({
            result: response.data,
            loaded: true
          }))
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  searchFormHandler(e) {
    e.preventDefault();
    let that = this;
    that.setState(() => ({ loaded: false }));
    let url = encodeURIComponent(
      `http://mjl.clarivate.com/cgi-bin/jrnlst/jlresults.cgi?PC=MASTER&Word=${
        e.target.firstChild.value
      }`
    );
    this.searchJournal(url);
    e.target.reset();
  }
  render() {
    return (
      <div>
        <div
          className="g-bg-position--center js__parallax-window"
          style={{
            background: "url(/img/1920x1080/09.jpg) 50% 0 no-repeat fixed"
          }}
        >
          <div className="g-container--md g-text-center--xs g-padding-y-150--xs">
            <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2 g-margin-b-25--xs">
              Search Algorithm Analysis
            </p>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                <SearchForm searchHandler={this.searchFormHandler} />
              </div>
            </div>
          </div>
        </div>
        {/* <!--========== END PROMO BLOCK ==========--> */}

        {/* <!--========== PAGE CONTENT ==========--> */}
        {/* <!-- About --> */}
        <div className="g-promo-section">
          <div className="container g-padding-y-80--xs g-padding-y-125--sm">
            <div className="row">
              <Loader
                loaded={this.state.loaded}
                options={options}
                className="spinner"
              >
                {this.state.result.length > 0 && this.state.loaded === true ? (
                  this.state.result.map((result, index) => (
                    <SearchResult result={result} indexId={index} key={index} />
                  ))
                ) : (
                  <NoMatchFound />
                  // <CitaionIndex />
                )}
              </Loader>
            </div>
          </div>
        </div>
        {/* <!-- Subscribe --> */}
        <div className="g-bg-color--dark-light">
          <div className="g-container--sm g-text-center--xs g-padding-y-80--xs g-padding-y-125--sm">
            <div className="g-margin-b-60--xs">
              <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2 g-margin-b-25--xs">
                Submit Journal
              </p>
              <h2 className="g-font-size-32--xs g-font-size-36--sm g-letter-spacing--1 g-color--white">
                Submit Your journal For Evaluation
              </h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                <form className="input-group">
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
  }
  componentDidMount() {
    let id = decodeURIComponent(this.props.match.params.id);
    console.log(id);
    if (id !== undefined) {
      id = id.split("=");
      id = id[1];
      console.log(id);
      let url = encodeURIComponent(
        `http://mjl.clarivate.com/cgi-bin/jrnlst/jlresults.cgi?PC=${id}`
      );
      if (url !== "undefined" && url !== undefined) {
        console.log(url);
        let that = this;
        that.setState(() => ({ loaded: false }));
        return this.searchJournal(url);
        console.log("Mounted");
      }
    }
  }
}

export default Search;
