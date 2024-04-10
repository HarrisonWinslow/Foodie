import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RecipeCard from '../Models/RecipeCard';
import backgroundImage from '../Images/defaultImage.jpg';

function RecipeCardList({recipes}) {
  

  return (
    <div>
        <h1 style={{marginTop: "2%", marginLeft:"4%"}}>Recipes</h1>
        <div className="row" style={{margin: "5%", marginTop:"1%"}}>
        {recipes.map((recipe, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <Link to={`/Foodie/Recipes/${encodeURIComponent(JSON.stringify(recipe))}`} style={{textDecoration: "none"}}>
                <RecipeCard recipe={recipe}></RecipeCard>
            </Link>
            </div>
        ))}
        </div>
    </div>
  );
}

export default RecipeCardList;