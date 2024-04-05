import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner'; // Import your loading spinner component
const stageURL = "https://95tydbpfth.execute-api.us-west-2.amazonaws.com/betaDeployment";


function Favorites() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
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
          params: { 'lastEvaluatedKey': lastEvaluatedKey, 'pageSize': pageSize, 'rating': 'Favorite' }
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

      hasMore = true;
      do{
        const response = await axios.get(stageURL + "/queryRecipes", {
          params: { 'lastEvaluatedKey': lastEvaluatedKey, 'pageSize': pageSize, 'rating': 'Favourite' }
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
        Favorites
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
    </div>
  );
}

export default Favorites;
