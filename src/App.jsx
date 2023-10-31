import React, { useState, useEffect } from "react";
import TranscationTable from "./TranscationTable";
import "./App.css";

function App() {
  const [fetchedData, setFetchedData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setFetchedData(data));
  }, []);

  
  return (
    <div>
      <h1>Bank Of Flatiron</h1>
      <TranscationTable transactions={fetchedData} />

    </div>
  );
}

export default App;