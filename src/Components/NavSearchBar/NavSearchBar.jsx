import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css'; // Make sure to import your CSS file

function SearchBar() {
  return (
    <div>
        <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </Helmet>
      <form>
        <div className="search">
          <span className="search-icon material-symbols-outlined">search</span>
          <input className="search-input" type="search" placeholder="Search" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;