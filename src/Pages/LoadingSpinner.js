import React from 'react';
import '../Styles/Pages.css'

const LoadingSpinner = () => (
    <div>
        <div style={{textAlign: "center", fontSize: "20px"}}><br/>Fetching recipes</div>
        <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
        </div>
    </div>
);

export default LoadingSpinner;
