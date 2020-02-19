import React from "react";
import PropTypes from "prop-types";

const Thanks = props => {
  return (
    <div>
      <h1 className="thanksHeading">Thanks {props.company}</h1>
      <p className="thanksContent"> Your csv will be downloaded in a minute</p>
    </div>
  );
};

Thanks.propTypes = {
  company: PropTypes.string.isRequired
};

export default Thanks;