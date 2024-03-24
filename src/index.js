import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Pages/Header';
import Home from './Pages/Home';
import Create from './Pages/Create';
import AllRecipes from './Pages/AllRecipes';
import Favorites from './Pages/Favorites';
import Gross from './Pages/Gross'
import RecipePage from './Pages/RecipePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} /> {/* Home component as the root route */}
        <Route path="/create" element={<Create />} />
        <Route path="/allRecipes" element={<AllRecipes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/gross" element={<Gross />} />
        <Route path="/recipes/:id" element={<RecipePage />} /> {/*Define route for RecipePage*/}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
