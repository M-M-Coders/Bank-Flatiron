import React from "react";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by Description"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
