import React from "react";
import PropTypes from "prop-types";
import Spinner from "../icons/Spinner";

function WithLoading({ isLoading, Component = Spinner, render }) {
  return isLoading ? <Component /> : render();
}

WithLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  Component: PropTypes.elementType,
  render: PropTypes.func.isRequired,
};

export default WithLoading;
