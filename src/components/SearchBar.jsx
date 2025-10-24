import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-wrapper">
      <h3>Search Contacts</h3>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
