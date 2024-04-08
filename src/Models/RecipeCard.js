import React, { useState, useEffect } from 'react';
import backgroundImage from '../Images/defaultImage.jpg';

function RecipeCard({recipe}) {
  

  return (
    <div className="card recipe-card">
        <div className="card-header" style={{backgroundImage: `url(${backgroundImage})`, height:"30px"}}>
        </div>
        <div class="card-body">
            <h5 class="card-title">{recipe.name}</h5>
            <p class="card-text">{recipe.description}</p>
        </div>
    </div>
  );
}

export default RecipeCard;