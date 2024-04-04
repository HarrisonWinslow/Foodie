import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './Styles/Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Pages/Header';
import Home from './Pages/Home';
import Create from './Pages/Create';
import AllRecipes from './Pages/AllRecipes';
import Favorites from './Pages/Favorites';
import Gross from './Pages/Gross'
import Queue from './Pages/Queue'
import RecipePage from './Pages/RecipePage';

let searchTerm = '';
const setSearchTerm = (term) => {
  searchTerm = term;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="*" element={<Home />} /> {/* Home component as the root route */}
        <Route path="/Foodie/Home" element={<Home searchTerm={searchTerm}  />} />
        <Route path="/Foodie/Create" element={<Create searchTerm={searchTerm}  />} />
        <Route path="/Foodie/AllRecipes" element={<AllRecipes searchTerm={searchTerm}  />} />
        <Route path="/Foodie/Favorites" element={<Favorites searchTerm={searchTerm}  />} />
        <Route path="/Foodie/Gross" element={<Gross searchTerm={searchTerm} />} />
        <Route path="/Foodie/Need To Try" element={<Queue searchTerm={searchTerm}  />} />
        <Route path="/Foodie/Recipes/:data*" element={<RecipePage />} /> {/*Define route for RecipePage*/}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
