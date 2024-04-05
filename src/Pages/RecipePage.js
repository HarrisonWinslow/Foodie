// import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Recipe from '../Models/RecipeModel.js';

function RecipePage() {
  const { data } = useParams();
  const recipe = JSON.parse(decodeURIComponent(data));

  return (
    <div>
      <h2 className="App-header">{recipe.name}</h2>
      <div className="container"  style={{ fontFamily: 'EB Garamond', fontSize:"30px" }}>
        <br/>
        <div className="row">
          <div className="col" style={{ fontFamily: 'Satisfy', fontSize:"50px" }}>
            {recipe.description}
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
            Cook time: {recipe.cookTime} minutes
          </div>
          <div className="col" style={{justifySelf:"right", justifyContent:"right", textAlign:"right"}}>
            Rating: {recipe.rating}
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
            Tags: {recipe.tags.join(", ")}
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
            <text style={{ textDecoration: 'underline', fontSize: '35px' }}>Ingredients</text>
            <ul>
              {recipe.ingredients.map((line, index) => (
                <li key={index}>
                  {line[0]} - {line[1]}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
          <text style={{ textDecoration: 'underline', fontSize: '35px' }}>Directions</text>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
          <text style={{ textDecoration: 'underline', fontSize: '35px' }}>Comments</text><br/>
            <text style={{ fontFamily: 'Caveat'}} >{recipe.comments}</text>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default RecipePage;