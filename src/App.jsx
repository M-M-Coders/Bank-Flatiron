import React, { useState, useEffect } from "react";
import TranscationTable from "./TranscationTable";
import "./App.css";
import Form from "./Form";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [searchDescription, setSearchDescription] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchAmount, setSearchAmount] = useState("");

  useEffect(() => {
    // Specify the API endpoint URL with port 3000
    const apiEndpoint = "http://localhost:3000/transactions";

    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
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

  const handleDelete = (transactionId) => {
    const updatedTransactions = fetchedData.filter(
      (transaction) => transaction.id !== transactionId
    );
    setFetchedData(updatedTransactions);
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
        <Form/>
        <TranscationTable
          transactions={fetchedData}
          searchDescription={searchDescription}
          searchCategory={searchCategory}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
