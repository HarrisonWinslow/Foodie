// import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import backgroundImage from '../Images/defaultImage.jpg';
// import Recipe from '../Models/RecipeModel.js';

function RecipePage() {
  const { data } = useParams();
  const recipe = JSON.parse(decodeURIComponent(data));

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
      <h2 className="App-header" style={{marginBottom: "0px"}}>{recipe.name}</h2>
      <div className="container"  style={{ fontFamily: 'EB Garamond', fontSize:"30px", backgroundColor:"#dfdfdf", padding:"20px" }}>
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
        <div className="row">
          <div className="col">
          <text style={{ textDecoration: 'underline', fontSize: '35px' }}>Images</text><br/>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row" style={{justifyContent:"right"}}>
          <div className="col" style={{justifyContent:"right", textAlign:"right"}}>
              <button>Edit Recipe <i className="material-icons" style={{scale:"200%", margin:"5px"}}>history_edu</i> </button>
          </div>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default RecipePage;