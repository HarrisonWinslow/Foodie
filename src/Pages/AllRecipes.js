import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function AllRecipes() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes([{id:1, name:"First!"}, {id:2, name:"Second!"}, {id:3, name:"Third!"}]);
  }, []);
  
  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <div>
      <header className="App-header">
        All Recipes
      </header>
      <body>
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={recipe.id}>
              <Link to={`/Foodie/Recipes/${recipe.name}`}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      </body>
    </div>
  );
}

export default AllRecipes;
