// import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Recipe from '../Models/RecipeModel.js';

function RecipePage() {
  const { data } = useParams();
  const recipe = JSON.parse(decodeURIComponent(data));

  return (
    <div>
      <h2 className="App-header">{recipe.name}</h2>
      <div style={{margin: "10px"}}>
        <div className="row">
          <div className="col">
            {recipe.description}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Cook time: {recipe.cookTime} minutes
          </div>
          <div className="col">
            Tags: {recipe.tags}
          </div>
          <div className="col">
            Rating: {recipe.rating}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {recipe.ingredients}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {recipe.steps}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {recipe.comments}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default RecipePage;