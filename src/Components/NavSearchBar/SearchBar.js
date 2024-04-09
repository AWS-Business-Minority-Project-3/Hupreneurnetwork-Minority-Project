<<<<<<< HEAD
// Import necessary modules
const express = require('express');
const { useState } = require('react');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data (replace with your actual data)
const businesses = [
  { id: 1, name: 'Business 1' },
  { id: 2, name: 'Business 2' },
  { id: 3, name: 'Business 3' },
  // Add more businesses as needed
];

// Endpoint to get all businesses
app.get('/api/businesses', (req, res) => {
  res.json(businesses);
});

// Endpoint to search for businesses by name
app.get('/api/businesses/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = businesses.filter((business) =>
    business.name.toLowerCase().includes(query)
  );
  res.json(results);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// React component for the search bar
function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/businesses/search?q=${query}`);
      const data = await response.json();
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
=======
const express = require('express');
const { useState, useEffect } = require('react');
import { generateClient } from "aws-amplify/api";
import { listBusinesses } from "../../graphql/queries";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

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

module.exports = SearchBar;
>>>>>>> origin/main