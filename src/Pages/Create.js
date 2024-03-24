import '../Styles/Pages.css';
import React, { useState, useEffect } from 'react';


function Explore() {

  const [recipeName, setRecipeName] = useState("");
  
  const handleSubmit = async (e) => {
    // add to js file
    setRecipeName(e.target.value);
    console.log(e.target.recipeName);
  };

  const handleChange = async (e) => {
    setRecipeName(e.target.value);
  }

  useEffect(() => {
    console.log(recipeName);
  }, [recipeName]);
  
  return (
    <div className="App">
      <header className="App-header">
        Create
        <br/>
        <form onSubmit={handleSubmit}>
          <label>
            Name: 
            <input type="text" name="name" value={recipeName} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </header>
      
    </div>
  );
}

export default Explore;