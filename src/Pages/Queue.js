import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner'; // Import your loading spinner component
import RecipeCardList from '../Models/RecipeCardList';
const stageURL = "https://95tydbpfth.execute-api.us-west-2.amazonaws.com/betaDeployment";


function Queue() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [areRecipes, setAreRecipes] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    if(recipes.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 100)
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
        const response = await axios.get(stageURL + "/queryRecipes", {
          params: { 'lastEvaluatedKey': lastEvaluatedKey, 'pageSize': pageSize, 'rating': 'Need To Try' }
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
    } catch (error) 
    {
      console.error('There was a problem with your Axios request:', error);
    }
  }


  return (
    <div className="page-default">
      <header className="App-header">
        Recipes that we still need to try
      </header>
      {isLoading && 
        <div style={{textAlign: "center", fontSize: "20px"}}><br/>Fetching recipes
          <LoadingSpinner />
        </div>}
      {!isLoading && 
        <div>
          <RecipeCardList recipes={recipes} />
        </div>
      }
      {!isLoading && !areRecipes && 
        <div> style={{justifyContent:"center", height: "60vh", alignItems:"center", display:"flex"}}
           <h1>There are no recipes in this category!</h1>
        </div>
      }
    </div>
  );
}

export default Queue;
