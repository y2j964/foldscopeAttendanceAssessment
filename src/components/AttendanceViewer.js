import React from "react";
import PropTypes from "prop-types";

function AttendanceViewer({ data, children }) {
  const tableRows = data.map((kid) => (
    <tr key={kid.login.uuid}>
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
    <div className="container-sm mb-8">
      {children}
      <table className="attendance-table">
        <caption className="sr-only">Attendance tracker</caption>
        <thead>
          <tr>
            <th scope="col" className="attendance-table__heading">
              Name
            </th>
            <th scope="col" className="attendance-table__heading">
              Age
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
    </div>
  );
}

AttendanceViewer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element,
};

export default AttendanceViewer;
