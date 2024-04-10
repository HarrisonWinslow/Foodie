import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import backgroundImage from '../Images/defaultImage.jpg';
import axios from 'axios';
// import Recipe from '../Models/RecipeModel.js';
const stageURL = "https://95tydbpfth.execute-api.us-west-2.amazonaws.com/betaDeployment";

function RecipePage() {
  const { data } = useParams();
  const [recipe, setRecipe] = useState(JSON.parse(decodeURIComponent(data)));

  const markAsFavorite = async () => {
    let randomRating = Math.random() < 0.5 ? "Favorite" : "Favourite";
    
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      rating: randomRating,
    }));

    try
    {
      const response = await axios.post(stageURL + "/editRecipe", 
      {
        name: recipe.name,
        description: recipe.description,
        cookTime: recipe.cookTime,
        ingredients: recipe.ingredients,
        steps: recipe.steps,
        tags: recipe.tags,
        comments: recipe.comments,
        rating: randomRating
      });
      console.log(response.data);
    } catch (error) 
    {
      console.error('There was a problem with your Axios request:', error);
    }
    console.log(recipe);
  }

  return (
    <div>
      <div className="page-default" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <h2 className="App-header" style={{marginBottom: "0px"}}>{recipe.name}</h2>
        <div className="container"  style={{fontSize:"30px", backgroundColor:"#f5f5f5", padding:"20px" }}>
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
            <text>Images will go here</text>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row" style={{display:"flex", margin:"auto", justifyContent:"center", textAlign: "center"}}>
            <div className="col">
              <button style={{justifySelf:"center", backgroundColor: "white"}}>Add image <i className="material-icons" style={{scale:"200%", margin:"10px", paddingTop:"1px"}}>photo_library</i> </button>
            </div>
            <div className="col">
              <button style={{justifySelf:"center", backgroundColor: "white"}} onClick={markAsFavorite}>Mark as Favorite <i className="material-icons" style={{scale:"200%", margin:"10px", paddingTop:"1px"}}>favorite</i> </button>
            </div>
            <div className="col">
              <button style={{justifySelf:"center", backgroundColor: "white"}}>Edit Recipe <i className="material-icons" style={{scale:"200%", margin:"10px", paddingTop:"1px"}}>history_edu</i> </button>
            </div>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;