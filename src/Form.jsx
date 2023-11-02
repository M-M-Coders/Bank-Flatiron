import React, { useState } from "react";

function Form({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({
      ...newTransaction,
      [name]: name === "amount" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the parent component's function to add the new transaction
    onAddTransaction(newTransaction);
    // Clear the form
    setNewTransaction({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "3px",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="date"
        name="date"
        value={newTransaction.date}
        onChange={handleInputChange}
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newTransaction.description}
        onChange={handleInputChange}
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={newTransaction.category}
        onChange={handleInputChange}
        required
        style={inputStyle}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={newTransaction.amount}
        onChange={handleInputChange}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add Transaction</button>
    </form>
  );
}

export default Form;
