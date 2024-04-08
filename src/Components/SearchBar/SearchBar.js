// Import necessary modules
const express = require('express');
const { useState, useEffect } = require('react');
import { generateClient } from "aws-amplify/api";
import { listBusinesses } from "../../graphql/queries";

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// React component for the search bar
function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchBusiness();
  }, []);

  async function fetchBusiness() {
    try {
      const client = generateClient();
      const apiBusinessData = await client.graphql({ query: listBusinesses });
      const businessFromAPI = apiBusinessData.data.listBusinesses.items;
      setResults(businessFromAPI);
      console.log("Retrieved businesses", businessFromAPI);
    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  }

  const handleSearch = async () => {
    try {
      const client = generateClient();
      const response = await client.graphql({ query: listBusinesses, variables: { filter: { name: { contains: query } } } });
      const data = response.data.listBusinesses.items;
      setResults(data);
    } catch (error) {
      console.error('Error searching for businesses:', error);
    }
  };

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
module.exports = SearchBar;
