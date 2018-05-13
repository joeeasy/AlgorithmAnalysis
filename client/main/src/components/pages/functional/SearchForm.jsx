import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.props.searchHandler}>
        <input
          type="search"
          className="form-control s-form-v1__input g-radius--left-50"
          name="search"
          placeholder="Search our Journal List"
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
    );
  }
}

export default SearchForm;
