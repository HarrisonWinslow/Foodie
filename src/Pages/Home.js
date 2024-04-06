import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



function Home() {

  return (
    <div>
      <header className="App-header">
        Home
      </header>
      <div>
        Welcome to Foodie :)
      </div>
    </div>
  );
};

export default Home;