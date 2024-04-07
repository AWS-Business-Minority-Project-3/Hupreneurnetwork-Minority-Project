// CategoriesPage.jsx
import React from 'react';
import categoriesData from './CategoryView.json'; // Import categories data

function CategoriesView() {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categoriesData.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesView;
