import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



function Home() {

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
        Home
      </header>
      <body>
        Welcome to Foodie :)
      </body>
    </div>
  );
};

export default Home;