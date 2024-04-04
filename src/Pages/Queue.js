import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';
const stageURL = "https://95tydbpfth.execute-api.us-west-2.amazonaws.com/betaDeployment";


function Queue() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    let lastEvaluatedKey = null;
    let items = [];
    const pageSize = 30;
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
      setRecipes(items); 
    } catch (error) 
    {
      console.error('There was a problem with your Axios request:', error);
    }
  }


  return (
    <div>
      <header className="App-header">
        Recipes that we still need to try
      </header>
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
    </div>
  );
}

export default Queue;
