import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const stageURL = "https://95tydbpfth.execute-api.us-west-2.amazonaws.com/betaDeployment";
const currentlyTesting = false; // enables or disables the creation or deletion of dummy data



function Create() {

  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeCookTime, setRecipeCookTime] = useState(0);
  // const [numParts, setNumParts] = useState(1);
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeSteps, setRecipeSteps] = useState("")
  const [recipeTags, setRecipeTags] = useState("");
  const [recipeComments, setRecipeComments] = useState("");
  const [recipeRating, setRecipeRating] = useState("Need To Try");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const successMessageRef = useRef(null);

  useEffect(() => {
    // Check if there's a success message in local storage
    const storedMessage = localStorage.getItem('successMessage');
    
    if (storedMessage) {
      // Show the success message
      setShowSuccessMessage(true);
      // Remove the success message from local storage
      localStorage.removeItem('successMessage');

      setTimeout(() => {
        // successMessageRef.current.alert();
      }, 1000);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const partialIngredientsList = recipeIngredients.split("\n");
    const ingredientsList = [];
    for(let i = 0; i < partialIngredientsList.length; i++)
    {
      ingredientsList.push(partialIngredientsList[i].split(" - "));
    }
    const stepsList = recipeSteps.split("\n");
    const tagsList = recipeTags.split(", ");
    

    try 
    {
      const response = await axios.post(stageURL + "/insertRecipe", 
      {
        name: recipeName,
        description: recipeDescription,
        cookTime: recipeCookTime,
        ingredients: ingredientsList,
        steps: stepsList,
        tags: tagsList,
        comments: recipeComments,
        rating: recipeRating
      });
      console.log(response.data);
      setShowSuccessMessage(true);
      localStorage.setItem('successMessage', 'Recipe added successfully');
      window.location.reload();
    } catch (error) 
    {
      console.error('There was a problem with your Axios request:', error);
      // showMessage("There was a problem trying to add your recipe... contact the dev. Or debug better, Q. C'mon, you got this. ;)");
    }
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

  // const handleNumPartsChange = async (e) => {
  //   setNumParts(e.target.value);
  // }

  const handleIngredientsChange = async (e) => {
    setRecipeIngredients(e.target.value);
  }

  const handleStepsChange = async (e) => {
    setRecipeSteps(e.target.value);
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

  const createDummyItems = async () => {
    for(let i = 0; i < 100; i++)
    {
      const randomRatingNum = parseInt((Math.random()*6));
      let randomRating = "Need To Try";
      switch(randomRatingNum){
        case 0:
          randomRating = "Gross"; break;
        case 1:
          randomRating = "Meh"; break;
        case 2:
          randomRating = "Need To Try"; break;
        case 3:
          randomRating = "Good"; break;
        case 4:
          randomRating = "Favorite"; break;
        case 5:
          randomRating = "Favourite"; break;
        default:
          randomRating = "Random";
      }
      const rName = "dummy #" + i;
      const rDescription = "description #" + i;
      const rCookTime = parseInt((Math.random() * 100));
      const rIngredients = "ingredient " + i + ".1 - 1 cup, ingredient " + i + ".2 - 2 tsps";
      const rSteps = "step " + i + ".1 ||| step " + i + ".2 ||| step " + i + ".3";
      const rTags = "tag " + i + ".1, tag " + i + ".2";
      const rComments = "comments for recipe #" + i;
      const rRating = randomRating;

      const partialIngredientsList = rIngredients.split(", ");
      const ingredientsList = [];
      for(let i = 0; i < partialIngredientsList.length; i++)
      {
        ingredientsList.push(partialIngredientsList[i].split(" - "));
      }
      const stepsList = rSteps.split(" ||| ");
      const tagsList = rTags.split(", ");

      try 
      {
        const response = await axios.post(stageURL + "/insertRecipe", 
        {
          name: rName,
          description: rDescription,
          cookTime: rCookTime,
          ingredients: ingredientsList,
          steps: stepsList,
          tags: tagsList,
          comments: rComments,
          rating: rRating
        });
        console.log(response.data);
      } catch (error) 
      {
        console.error('There was a problem with your Axios request:', error);
      }
    }
  }

  const deleteDummyItems = async () => {
    for(let i = 0; i < 100; i++)
    {
      const rName = "dummy #" + i;
      try {
        const response = await axios.delete(stageURL + "/deleteRecipe", {
          data: { name: rName }
        });
        console.log(response.data); // Log response data
        // Add logic to handle successful response (e.g., update UI)
      } catch (error) {
        console.error('There was a problem with your Axios request:', error);
        // Add logic to handle errors (e.g., display error message)
      }
    }
  }
  
  

  return (
    <div style={{ backgroundColor: "#588c9981"}}>
      <header className="App-header">
        Create
        <br/>
      </header>
      {showSuccessMessage && (
        <div ref={successMessageRef} className="alert alert-success alert-dismissible fade show" role="alert">
          Recipe added successfully
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowSuccessMessage(false)} // Hide message on button click
          ></button>
        </div>
      )}
      <div style={{margin: "10px", paddingRight: "20px"}}>
        {currentlyTesting && 
          <>
            <div className="dev-button"><button type="submit" onClick={createDummyItems} >Create Dummy Items</button></div>
            <div className="dev-button"><button type="submit" onClick={deleteDummyItems} >Delete Dummy Items</button></div>
          </>
        }
        <form style={{ width: "calc(100%)", margin:"10px" }}>
          <div className="row">
            <div className="col">
              <div className="form-group" style={{ width: "calc(100%)" }}>
                <label> Name: </label>
                <input type="text" name="name" className="form-control" style={{ width: "calc(100% - 10px)", height: "auto", padding: "10px", margin: "10px", resize: "vertical" }}  value={recipeName} onChange={handleNameChange} />
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group" style={{ width: "calc(100%)" }}>
                <label>Cook Time:</label>
                <input type="number" name="cookTime" className="form-control" style={{ width: "calc(100%-10px)", height: "auto", padding: "10px", margin: "10px", resize: "vertical" }} value={recipeCookTime} onChange={handleCookTimeChange} />
                <small className="form-text text-muted">(in minutes)</small>
                <br />
              </div>
            </div>
            <div className="col">
              <div className="form-group"  style={{ width: "calc(100%)" }}>
                <label>Tags:</label>
                <input type="text" name="tags" className="form-control" style={{ width: "calc(100% - 10px)", height: "auto", padding: "10px", margin: "10px", resize: "vertical" }} value={recipeTags} onChange={handleTagsChange} />
                <small className="form-text text-muted">(of the form: tag1, tag2, tag3,..., last tag)</small>
                <br />
              </div>
            </div>
            <div className="col">
              <div className="form-group"  style={{ width: "calc(100%)" }}>
                <label> Rating: </label>
                <div  style={{ width: "calc(100%)", margin: '10px' }}>
                  <input type="radio" id="rating1" name="rating" style={{margin:"5px"}} value="Gross" checked={recipeRating === 'Gross'} onChange={handleRatingChange} />
                  <label htmlFor="rating1" style={{marginRight:"5px"}}>Gross</label>
                  <input type="radio" id="rating2" name="rating" style={{margin:"5px"}} value="Meh" checked={recipeRating === 'Meh'} onChange={handleRatingChange} />
                  <label htmlFor="rating2" style={{marginRight:"5px"}}>Meh</label>
                  <input type="radio" id="rating3" name="rating" style={{margin:"5px"}} value="Need To Try" checked={recipeRating === 'Need To Try'} onChange={handleRatingChange} />
                  <label htmlFor="rating3" style={{marginRight:"5px"}}>Need To Try</label>
                  <input type="radio" id="rating4" name="rating" style={{margin:"5px"}} value="Good" checked={recipeRating === 'Good'} onChange={handleRatingChange} />
                  <label htmlFor="rating4" style={{marginRight:"5px"}}>Good</label>
                  <input type="radio" id="rating5" name="rating" style={{margin:"5px"}} value="Favorite" checked={recipeRating === 'Favorite'} onChange={handleRatingChange} />
                  <label htmlFor="rating5" style={{marginRight:"5px"}}>Favorite</label>
                  <input type="radio" id="rating6" name="rating" style={{margin:"5px"}} value="Favourite" checked={recipeRating === 'Favourite'} onChange={handleRatingChange} />
                  <label htmlFor="rating6" style={{marginRight:"5px"}}>Favourite</label>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group" style={{ width: "calc(100%)" }}>
                <label> Description: </label>
                <textarea type="text" name="description" className="form-control" style={{ width: "calc(100% - 10px)", height: "auto", padding: "10px", margin: "10px", resize: "vertical" }} value={recipeDescription} onChange={handleDescriptionChange} />
                <br />
              </div>
            </div>
          </div>
          {/* <div className="form-group">
            <label>
              How many parts does this recipe have?
              <input type="number" name="numParts" style={{ margin: "10px" }} value={numParts} onChange={handleNumPartsChange} />
            </label>
            <br />
          </div> */}
          <div className="form-group"  style={{ width: "calc(100%)" }}>
            <label> Ingredients:</label>
            <textarea type="text" name="ingredients" className="form-control" style={{ width: "calc(100% - 10px)", height: "auto", padding: "10px", margin: "10px", resize: "vertical" }} value={recipeIngredients} onChange={handleIngredientsChange} />
            <small className="form-text text-muted">of the form:</small> <br/>
            <small className="form-text text-muted">ingredient1 - amount</small> <br/>
            <small className="form-text text-muted">ingredient2 - amount</small> <br/>
            <small className="form-text text-muted">last ingredient - amount</small> <br/>
            <br />
          </div>
          <div className="form-group"  style={{ width: "calc(100%)" }}>
            <label> Steps:</label>
            <textarea type="text" name="steps" className="form-control" style={{ width: "calc(100% - 10px)", height: "auto", padding: "10px", margin: "10px", resize: "vertical" }} value={recipeSteps} onChange={handleStepsChange} />
            <small className="form-text text-muted">of the form:</small> <br/>
            <small className="form-text text-muted">step1</small> <br/>
            <small className="form-text text-muted">step2</small> <br/>
            <small className="form-text text-muted">step3</small> <br/>
            <br />
          </div>
          <div className="form-group"  style={{ width: "calc(100%)" }}>
            <label>Comments:</label>
            <textarea type="text" name="comments" className="form-control" style={{ width: "calc(100% - 10px)", height: "auto", padding: "10px", margin: "10px", resize: "vertical" }} value={recipeComments} onChange={handleCommentsChange} />
            <br />
          </div>
          <button type="submit" className="btn btn-custom" style={{ marginBottom: "100px" }} onClick={handleSubmit} >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;