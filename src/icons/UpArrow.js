import React from "react";
import PropTypes from "prop-types";

export default function UpArrow({ width, height, fill, additionalClasses }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={width || "22"}
      height={height || "22"}
      fill={fill || "#000"}
      className={`sort-arrow ${additionalClasses}`}
      aria-hidden="true"
    >
      <path d="M9 3.828l-6.071 6.071-1.414-1.414 8.485-8.485 8.485 8.485-1.414 1.414-6.071-6.071v16.172h-2v-16.172z"></path>
    </svg>
  );
}

UpArrow.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  additionalClasses: PropTypes.string,
};
