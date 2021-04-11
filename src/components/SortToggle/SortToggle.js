import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton } from "../Button/Button";
import UpArrow from "../../icons/UpArrow";

function SortToggle({ isActive, sortingCriterion, handleSort }) {
  const [isAscending, setIsAscending] = useState(true);

  const handleClick = () => {
    if (isActive) {
      const updatedSortIsAscending = !isAscending;
      setIsAscending(updatedSortIsAscending);
      handleSort(sortingCriterion, updatedSortIsAscending);
    } else {
      handleSort(sortingCriterion, isAscending);
    }
  };

  const getTransitionClasses = () =>
    `${!isAscending ? "sort-arrow--is-descending" : ""} ${
      isActive ? "sort-arrow--is-active" : ""
    }`;

  return (
    <IconButton
      handleClick={handleClick}
      additionalClasses="sort-arrow-container"
      ariaLabel="toggle sort direction"
      ariaPressed={`${isActive}`}
      ariaDescribedBy={`${sortingCriterion}SortDescription`}
    >
      <span
        id={`${sortingCriterion}SortDirDesc`}
        className="sr-only"
        aria-live="polite"
      >{`Sort direction is ${isAscending ? "ascending" : "descending"}`}</span>
      <UpArrow additionalClasses={getTransitionClasses()} />
    </IconButton>
  );
}

SortToggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  sortingCriterion: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default SortToggle;
