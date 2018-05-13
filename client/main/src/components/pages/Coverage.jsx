import React, { Component } from "react";
import NoMatchFound from "./functional/NoMatchFound";

class Coverage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {decodeURIComponent(window.location.pathname).split(",")[0]}
        <NoMatchFound />
      </div>
    );
  }
}

export default Coverage;
