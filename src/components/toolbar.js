import '../styling/main.css';
import {Link} from 'react-router-dom';
import React from 'react';
import {useSelector} from "react-redux";

const Toolbar = () => {
    let recipesLoaded = useSelector((state) => state.recipes.recipesLoaded);

    return (
        <div className="top" id="myNavbar">
            <div className="bar whiteNavy center smallText">
                <Link to="/" className="bar-item button">HOME</Link>
                <Link to="/recipes" className="bar-item button">ALL RECIPES</Link>
                <Link to="/recipes/add" className="bar-item button">ADD A RECIPE</Link>
                <Link to="/login" className="bar-item button">{recipesLoaded ? 'LOGOUT' : 'LOGIN'}</Link>
            </div>
        </div>
    );
}

export default Toolbar;