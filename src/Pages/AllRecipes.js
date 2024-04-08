import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner'; // Import your loading spinner component
import RecipeCard from '../Models/RecipeCard';
const stageURL = "https://95tydbpfth.execute-api.us-west-2.amazonaws.com/betaDeployment";



function AllRecipes({ searchTerm }) {
  const [originalRecipes, setOriginalRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [areRecipes, setAreRecipes] = useState(true);

  useEffect(() => {
    if(!isLoading)
    {
      const newRecipes = [];
      for(let i = 0; i < originalRecipes.length; i++)
      {
        let recipeString = (originalRecipes[i].name + " " + originalRecipes[i].tags + " " + originalRecipes[i].description + " " + originalRecipes[i].comments + " " + originalRecipes[i].rating).toLowerCase();
        if(recipeString.includes(searchTerm.toLowerCase())) newRecipes.push(originalRecipes[i]);
      }
      setRecipes(newRecipes);

    }
  }, [searchTerm]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    if(recipes.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
    }
  }, [recipes]);

  const fetchRecipes = async () => {
    let lastEvaluatedKey = null;
    let items = [];
    const pageSize = 10;
    try 
    {
      let hasMore = true;
      do{
        const response = await axios.get(stageURL + "/getAllRecipes", {
          params: { 'lastEvaluatedKey': lastEvaluatedKey, 'pageSize': pageSize }
        });
        console.log(response.data);
        let newItems = response.data.items;
        if(response.data.lastEvaluatedKey) {
          let newLastEvaluatedKey = response.data.lastEvaluatedKey;
          lastEvaluatedKey = newLastEvaluatedKey;
          console.log(newLastEvaluatedKey);
        }
        
        console.log(newItems);
        items = [...items, ...newItems]; 
        setRecipes(items);

        if(newItems.length < pageSize) hasMore = false;
      } while(hasMore);
      // console.log("Fetched recipes and got this response: " + response)
      // console.log(response.data.data);
      if(items.length < 1) {
        items.push("Empty");
        setAreRecipes(false);
      } 
      setRecipes(items); 
      setOriginalRecipes(items);
    } catch (error) 
    {
      console.error('There was a problem with your Axios request:', error);
    }
  }

  return (
    <div style={{fontFamily: 'EB Garamond', backgroundColor: "#f5f5f5", minHeight:"100vh"}}>
      <header className="App-header">
        All Recipes
      </header>
      {isLoading && 
        <div style={{textAlign: "center", fontSize: "20px"}}><br/>Fetching recipes
          <LoadingSpinner />
        </div>}
      {!isLoading && 
        <div>
          <h1>Recipes</h1>
          <div className="row">
            {recipes.map((recipe, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <Link to={`/Foodie/Recipes/${encodeURIComponent(JSON.stringify(recipe))}`} style={{textDecoration: "none"}}>
                  <RecipeCard recipe={recipe}></RecipeCard>
                </Link>
              </div>
            ))}
          </div>
        </div>
      }
      {!isLoading && !areRecipes && 
        <div style={{justifyContent:"center", height: "60vh", alignItems:"center", display:"flex"}}>
           <h1>There are no recipes in this category!</h1>
        </div>
      }
    </div>
  );
}

export default AllRecipes;
