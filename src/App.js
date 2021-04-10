import React, { useState, useEffect } from "react";
import axios from "axios";
import AttendanceViewer from "./components/AttendanceViewer";
import WithLoading from "./components/WithLoading";
import { InputText } from "./components/Input";

function App() {
  // need to hold initial data to have something to filter against; should only update on initial fetch
  const [initialChildrenData, setInitialChildrenData] = useState([]);
  const [childrenData, setChildrenData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=23").then(({ data }) => {
      setInitialChildrenData(data.results);
      setChildrenData(data.results);
      setIsLoading(false);
    });
  }, []);

  const getRelevantDataPoints = (kid) => [
    kid.name.last,
    kid.name.first,
    kid.location.city,
    kid.location.state,
    kid.location.country,
  ];

  const filterChildrenData = (str) => {
    const searchRegex = new RegExp(`\\b${str}\\S*`, "i");
    const searchMatches = initialChildrenData.filter((kid) => {
      const relevantDataPoints = getRelevantDataPoints(kid);
      return searchRegex.test(relevantDataPoints);
    });
    setChildrenData(searchMatches);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    filterChildrenData(e.target.value);
  };

  return (
    <main>
      <header className="header-page">
        <h1>Valerie Frizzle&apos;s Class</h1>
      </header>
      <WithLoading
        isLoading={isLoading}
        render={() => (
          <AttendanceViewer data={childrenData}>
            <InputText
              value={inputValue}
              role="searchbox"
              containerClass="flex justify-end"
              labelText="Search"
              isLabelHidden
              name="searchInput"
              handleChange={handleInputChange}
              placeholder="Search"
            />
          </AttendanceViewer>
        )}
      />
    </main>
  );
}

export default App;
