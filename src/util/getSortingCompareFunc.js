const compareStrings = (a, b) => (a > b) - (a < b);

const sortByNameAscending = (kidA, kidB) =>
  compareStrings(kidA.name.last, kidB.name.last);

const sortByNameDescending = (kidA, kidB) =>
  compareStrings(kidB.name.last, kidA.name.last);

const sortByAgeAscending = (kidA, kidB) =>
  compareStrings(kidA.dob.age, kidB.dob.age);

const sortByAgeDescending = (kidA, kidB) =>
  compareStrings(kidB.dob.age, kidA.dob.age);

const getSortCompareFunc = (sortCriterion, sortIsAscending) => {
  switch (sortCriterion) {
    case "name":
      return sortIsAscending ? sortByNameAscending : sortByNameDescending;
    case "age":
      return sortIsAscending ? sortByAgeAscending : sortByAgeDescending;
    default:
      return sortByNameAscending;
  }
};

export default getSortCompareFunc;
