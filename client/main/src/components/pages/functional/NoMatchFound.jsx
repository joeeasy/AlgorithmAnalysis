import React from "react";

const NoMatchFound = () => (
  <div className="g-bg-color--sky-light">
    <div className="container g-padding-y-80--xs g-padding-y-125--sm">
      <div className="g-text-center--xs g-margin-b-80--xs">
        <p className="text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-25--xs">
          No Match Found
        </p>
        <h2 className="g-font-size-32--xs g-font-size-36--md">
          Your Query Couldn't Match Any Result
        </h2>
      </div>
    </div>
  </div>
);

export default NoMatchFound;
