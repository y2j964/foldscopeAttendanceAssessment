import React, { useState } from "react";
import PropTypes from "prop-types";
import SortToggle from "../SortToggle/SortToggle";

function AttendanceViewer({ data, children, sortData }) {
  const [activeSortingCriterion, setActiveSortingCriterion] = useState("name");

  const handleSort = (updatedSortingCriterion, updatedSortIsAscending) => {
    setActiveSortingCriterion(updatedSortingCriterion);
    sortData(updatedSortingCriterion, updatedSortIsAscending);
  };

  const tableRows = data.map((kid) => (
    <tr key={kid.login.uuid} className="attendance-table__row">
      <th
        scope="row"
        className="attendance-table__cell"
      >{`${kid.name.last}, ${kid.name.first}`}</th>
      <td className="attendance-table__cell">{kid.dob.age}</td>
      <td className="attendance-table__cell">{`${kid.location.city}, ${kid.location.state} ${kid.location.postcode}, ${kid.location.country}`}</td>
      <td className="attendance-table__cell">{kid.email}</td>
      <td className="attendance-table__cell">
        <img src={kid.picture.thumbnail} alt="" />
      </td>
    </tr>
  ));

  return (
    <div className="container-sm mb-12">
      {children}
      {data.length ? (
        <table className="attendance-table">
          <caption className="sr-only">Attendance tracker</caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="attendance-table__heading flex-centered"
              >
                <span>Name</span>
                <SortToggle
                  isActive={activeSortingCriterion === "name"}
                  sortingCriterion="name"
                  handleSort={handleSort}
                />
              </th>
              <th
                scope="col"
                className="attendance-table__heading flex-centered"
              >
                <span>Age</span>
                <SortToggle
                  isActive={activeSortingCriterion === "age"}
                  sortingCriterion="age"
                  handleSort={handleSort}
                />
              </th>
              <th scope="col" className="attendance-table__heading">
                Address
              </th>
              <th scope="col" className="attendance-table__heading">
                Email
              </th>
              <th scope="col" className="attendance-table__heading">
                Photo
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      ) : (
        <p className="mt-12 text-lg">
          No entries matching that text. Try something else.
        </p>
      )}
    </div>
  );
}

AttendanceViewer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortData: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default AttendanceViewer;
