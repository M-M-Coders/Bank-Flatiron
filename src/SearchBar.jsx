import React from 'react'

function SearchBar() {
  return (
    <div>
       <input
    className='search-input'
      type="text"
      placeholder="Search transactions..."
      value={search}
      onChange={handleSearchChange}
    /> 
    </div>
  )
}

export default SearchBar