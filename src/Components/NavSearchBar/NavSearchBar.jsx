import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { generateClient } from "aws-amplify/api";
import { listBusinesses } from "../../graphql/queries";
import { Button } from "@aws-amplify/ui-react";
import './style.css'; // Make sure to import your CSS file
import { Link } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);



  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const client = generateClient();
      const response = await client.graphql({ query: listBusinesses, variables: { filter: { name: { contains: query } } } });
      const data = response.data.listBusinesses.items;
      setResults(data);
    } catch (error) {
      console.error('Error searching for businesses:', error);
    }
  };

  const handleFocus = () => { // Added function to handle focus
    setIsFocused(true);
  };

  const handleBlur = () => { // Added function to handle blur
    setIsFocused(false);
  };

  // Render the SearchBar component
  return (
    <div className="search">
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Helmet>
      <form onSubmit={handleSearch}>
        <span className="search-icon material-symbols-outlined">search</span>
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus} // Added onFocus event handler
          onBlur={handleBlur} // Added onBlur event handler
        />
        {/* <button className="search-button" type="submit">Search</button> */}
      </form>
      {/* Render search results conditionally */}

      {isFocused && results.length > 0 && (
        <div className="search-results">
          {results.map((business) => (
            <Link key={business.id} to={`/entrepreneur/${business.id}`}>
              {/* Apply styles to each button */}
              <Button 
                key={business.id}
                variation="primary" 
                isFullWidth 
                style={{ background: 'transparent', border: 'none', padding: '0', fontSize: '16px', color: '#333333', width: 'max-content', marginTop: '10px' }}
              >
                {business.name}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
        );
}

export default SearchBar;