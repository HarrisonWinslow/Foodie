// Header.js
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import logoImage from '../Images/defaultImage.jpg';

function Header({ setSearchTerm }) {

    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);
        setSearchTerm(searchTerm);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(searchInput);
    };

    return (
        <div style={{fontFamily: 'EB Garamond'}}>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center me-0" href="/Foodie/Home" style={{ marginLeft: '5px', color: 'white' }}>
                        <img src={logoImage} alt="FoodieLogo" className="img-fluid" style={{ maxHeight: '100px' }}/>   
                        <span className="ms-3" style={{ fontSize: '250%', verticalAlign: 'center'}}>Foodie</span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{margin:"auto"}}>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light me-4" activeClassName="active" aria-current="page" exact to="/Foodie/Home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light me-4" activeClassName="active" aria-current="page" exact to="/Foodie/Create">Create</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light me-4" activeClassName="active" aria-current="page" exact to="/Foodie/AllRecipes">All Recipes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light me-4" activeClassName="active" aria-current="page" exact to="/Foodie/Favorites">Favourites</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light me-4" activeClassName="active" aria-current="page" exact to="/Foodie/Gross">Gross</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light me-4" activeClassName="active" aria-current="page" exact to="/Foodie/Need to Try">Need to Try</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex me-3" role="search" onSubmit={handleSearchSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchInput} onChange={handleSearchInputChange}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;


//Example navbar things:
/*
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
</nav>
*/