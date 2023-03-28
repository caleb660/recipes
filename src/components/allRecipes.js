import React from 'react';
import {Link} from 'react-router-dom';

import '../styling/main.css';
import Toolbar from './toolbar';
import {useSelector} from "react-redux";

const AllRecipes = () => {
    const recipes = useSelector((state) => state.recipes.recipesCaleb);

    const arrangeRecipes = (header, arr) => {
        if (arr !== undefined && arr.length !== 0) {
            return (
                <div>
                    <div className="sectionHeader">{header}</div>
                    {arr.map(recipe =>
                        <Link key={recipe.id} to={"/recipes/" + recipe.id}>
                            <div className="recipeTitle">
                                {recipe.title}
                            </div>
                        </Link>
                    )}
                </div>
            );
        }
    }

    const sortAlpha = (a, b) => {
        return a.title.localeCompare(b.title);
    }

    const getAllRecipes = () => {
        if (recipes.length !== 0) {
            return (
                <div className="allRecipes">
                    {arrangeRecipes("Appetizers, Beverages", recipes.filter(r => r.category === "Appetizers, Beverages").sort(sortAlpha))}
                    {arrangeRecipes("Soups, Salads", recipes.filter(r => r.category === "Soups, Salads").sort(sortAlpha))}
                    {arrangeRecipes("Breads, Rolls", recipes.filter(r => r.category === "Breads, Rolls").sort(sortAlpha))}
                    {arrangeRecipes("Main Dishes", recipes.filter(r => r.category === "Main Dishes").sort(sortAlpha))}
                    {arrangeRecipes("Side Dishes", recipes.filter(r => r.category === "Side Dishes").sort(sortAlpha))}
                    {arrangeRecipes("Desserts", recipes.filter(r => r.category === "Desserts").sort(sortAlpha))}
                    {arrangeRecipes("Miscellaneous", recipes.filter(r => r.category === "Miscellaneous").sort(sortAlpha))}
                </div>
            );
        } else {
            return <div className="centerBlock">
                <div className="loader"></div>
            </div>;
        }
    }

    return (
        <div>
            <div className={'spacing'}/>
            <Toolbar/>
            {getAllRecipes()}
        </div>
    );
};


export default AllRecipes;