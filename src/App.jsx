/* App.js */
import React, { useState, useEffect } from "react";
import TranscationTable from "./TranscationTable";
import "./App.css";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [searchDescription, setSearchDescription] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchAmount, setSearchAmount] = useState("");

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/transactions");
        if (response.ok) {
          const data = await response.json();
          setFetchedData(data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    // Simulate deleting a transaction
    const updatedData = fetchedData.filter((item) => item.id !== id);
    setFetchedData(updatedData);
  };

  return (
    <div className="centered-container">
      <h1>Bank Of Flatiron</h1>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by Description"
          value={searchDescription}
          onChange={(e) => setSearchDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Amount"
          value={searchAmount}
          onChange={(e) => setSearchAmount(e.target.value)}
        />
      </div>
      <div className="transaction-table-container">
        <TranscationTable
          transactions={fetchedData}
          searchDescription={searchDescription}
          searchCategory={searchCategory}
          searchAmount={searchAmount}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
