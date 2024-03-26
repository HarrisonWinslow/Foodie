
import React, { useState, useEffect } from 'react';


function Explore() {

  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeCookTime, setRecipeCookTime] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeTags, setRecipeTags] = useState("");
  const [recipeComments, setRecipeComments] = useState("");
  const [recipeRating, setRecipeRating] = useState("");
  
  const handleSubmit = async (e) => {
    setRecipeName(e.target.value);
  };

  const handleNameChange = async (e) => {
    setRecipeName(e.target.value);
  }

  const handleDescriptionChange = async (e) => {
    setRecipeDescription(e.target.value);
  }

  const handleCookTimeChange = async (e) => {
    setRecipeCookTime(e.target.value);
  }

  const handleIngredientsChange = async (e) => {
    setRecipeIngredients(e.target.value);
  }

  const handleTagsChange = async (e) => {
    setRecipeTags(e.target.value);
  }

  const handleCommentsChange = async (e) => {
    setRecipeComments(e.target.value);
  }

  const handleRatingChange = async (e) => {
    setRecipeRating(e.target.value);
  }

  useEffect(() => {
    console.log(recipeName);
  }, [recipeName]);
  
  return (
    <div>
      <header className="App-header">
        Create
        <br/>
      </header>
      <body className="container" style={{margin: "10px"}}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input type="text" name="name" style={{ margin: "10px" }} value={recipeName} onChange={handleNameChange} />
            </label>
            <br />
          </div>
          <div className="form-group">
            <label>
              Description:
              <input type="text" name="name" style={{ margin: "10px" }} value={recipeDescription} onChange={handleDescriptionChange} />
            </label>
            <br />
          </div>
          <div className="form-group">
            <label>Cook Time:</label>
            <input type="number" name="name" style={{ margin: "10px" }} value={recipeCookTime} onChange={handleCookTimeChange} />
            <small className="form-text text-muted">(minutes)</small>
            <br />
          </div>
          <div className="form-group">
            <label> Ingredients:</label>
            <input type="text" name="name" style={{ margin: "10px" }} value={recipeIngredients} onChange={handleIngredientsChange} />
            <small className="form-text text-muted">(of the form: ingredient1 - amount, ingredient2 - amount, ..., lastIngredient - amount)</small>
            <br />
          </div>
          <div className="form-group">
            <label>Tags:</label>
            <input type="text" name="name" style={{ margin: "10px" }} value={recipeTags} onChange={handleTagsChange} />
            <small className="form-text text-muted">(of the form: tag1, tag2, tag3,..., lastTag)</small>
            <br />
          </div>
          <div className="form-group">
            <label>Comments:</label>
            <input type="text" name="name" style={{ margin: "10px" }} value={recipeComments} onChange={handleCommentsChange} />
            <br />
          </div>
          <div className="form-group">
            <label> Rating: </label>
            <input type="text" name="name" style={{ margin: "10px" }} value={recipeName} onChange={handleRatingChange} />
            <small className="form-text text-muted">(Gross, Meh, Need to Try, Good, or Favorite)</small>
            <br />
          </div>
          <button type="submit" className="btn btn-custom">Submit</button>
        </form>
      </body>
    </div>
  );
}

export default Explore;