import React, { useState, useEffect } from 'react';
import { generateClient } from "aws-amplify/api";
import { listBusinesses } from "../../graphql/queries";

export function NavBarWithSearch() {
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
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-item">Your Logo</span>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <form className="search" onSubmit={handleSearch}>
                <div className="search">
                  <input
                    className="search-input"
                    type="search"
                    placeholder="Search businesses..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button className="search-button" type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <div id="searchResults">
        {results.map((business) => (
          <div key={business.id}>{business.name}</div>
        ))}
      </div>
    </div>
  );
}

export 