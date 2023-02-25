import '../styling/main.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Toolbar = () => {
    return (
        <div className="top" id="myNavbar">
            <div className="bar whiteNavy center smallText">
                <Link to="/" className="bar-item button">HOME</Link>
                <Link to="/recipes" className="bar-item button">ALL RECIPES</Link>
                <Link to="/recipes/add" className="bar-item button">ADD A RECIPE</Link>
            </div>
        </div>
    );
}

export default Toolbar;