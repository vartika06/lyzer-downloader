import React from "react";
import PropTypes from "prop-types";

const Filter = props => {
  return (
    <div style={{ display: "inline" }}>
      <button className="filterBtn" style={{ display: "inline" }}>
        Select Filter
      </button>
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
