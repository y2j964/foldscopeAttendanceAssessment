import React, { useState, useEffect } from "react";
import axios from "axios";
import AttendanceViewer from "./components/AttendanceViewer";
import WithLoading from "./components/WithLoading";

function App() {
  const [childrenData, setChildrenData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=23").then(({ data }) => {
      setChildrenData(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <header className="header-page">
        <h1>Valerie Frizzle&apos;s Class</h1>
      </header>
      <WithLoading
        isLoading={isLoading}
        render={() => <AttendanceViewer data={childrenData}></AttendanceViewer>}
      />
    </main>
  );
}

export default App;
