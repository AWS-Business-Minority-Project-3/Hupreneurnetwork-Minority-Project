// Import React and necessary hooks
import React, { useState, useEffect } from 'react';

// Define the SearchBar component
function SearchBar() {
  // Define state variables
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Define the handleSearch function to handle search action
  const handleSearch = async () => {
    try {
      // Make a GET request to the backend API to search for businesses
      const response = await fetch(`/api/businesses/search?q=${query}`);
      const data = await response.json();
      // Update the results state with the search results
      setResults(data);
    } catch (error) {
      console.error('Error searching for businesses:', error);
    }
  };

  // Render the SearchBar component
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search businesses..."
      />
      <button onClick={handleSearch}>Search</button>
      <div id="searchResults">
        {results.map((business) => (
          <div key={business.id}>{business.name}</div>
        ))}
      </div>
    </div>
  );
}

// Export the SearchBar component
export default SearchBar;
