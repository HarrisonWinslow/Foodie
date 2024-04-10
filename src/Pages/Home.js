import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import us from '../Images/us.jpg';



function Home() {

  return (
    <div className="page-default">
      <header className="App-header">
        Home
      </header>
      <div className="container" style={{margin:'5px'}}> 
        <div style={{ height: '73vh', fontFamily: 'satisfy', fontSize: "300%", display:"flex", width:"96vw" }}>
          <img src={us} alt="us" className="img-fluid" style={{ maxHeight: '73vh' }}/>
          <p style={{textAlign:"left", margin:"50px"}}>We wanted to know how to cook and we don't know how so we made this website</p>
        </div> 
        {/* <div className="row" style={{display: "flex", justifyContent:"space-evenly"}}>
          <div className="col-lg-6 col-md-6 col-sm-6" style={{display: 'flex', justifySelf: "left", textAlign: "left", padding:"12px"}}>
            <img src={us} alt="us" className="img-fluid" style={{ maxHeight: '73vh' }}/> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6" style={{display: 'flex', justify: "right", textAlign: "right", padding:"12px"}}>
            <p style={{ height: '73vh', fontFamily: 'satisfy', fontSize: "300%" }}>We wanted to know how to cook and we don't know how so we made this website</p> 
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Home;