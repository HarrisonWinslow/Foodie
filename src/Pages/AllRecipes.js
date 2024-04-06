import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner'; // Import your loading spinner component
const stageURL = "https://95tydbpfth.execute-api.us-west-2.amazonaws.com/betaDeployment";



function AllRecipes({ searchTerm }) {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [areRecipes, setAreRecipes] = useState(true);

  useEffect(() => {
    console.log(searchTerm);
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
      setRecipes(items); 
    } catch (error) 
    {
      console.error('There was a problem with your Axios request:', error);
    }
  }

  return (
    <div>
      <header className="App-header">
        All Recipes
      </header>
      {isLoading && <LoadingSpinner />}
      {!isLoading && 
        <div>
          <h1>Recipes</h1>
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>
                <Link to={`/Foodie/Recipes/${encodeURIComponent(JSON.stringify(recipe))}`}>{recipe.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      }
      {!isLoading && !areRecipes && 
        <div>
           <h1>There are no recipes in this category!</h1>
        </div>
      }
    </div>
  );
}

export default AllRecipes;
