// import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Recipe from '../Models/RecipeModel.js';

function RecipePage() {
  const { id } = useParams(); // Extract id parameter from route

  return (
    <div>
      <h2>{id}:</h2>
    </div>
  );
}

export default RecipePage;