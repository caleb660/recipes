import React from 'react';
import {Link} from 'react-router-dom';

import '../styling/main.css';
import Toolbar from './toolbar';
import {useSelector} from "react-redux";

const AllRecipes = () => {
    const recipes = useSelector((state) => state.recipes);

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

    const getAllRecipes = () => {
        if (recipes.recipesCaleb.length !== 0) {
            return (
                <div className="allRecipes">
                    {arrangeRecipes("Appetizers, Beverages", recipes.recipesCaleb.filter(r => r.category === "Appetizers, Beverages"))}
                    {arrangeRecipes("Soups, Salads", recipes.recipesCaleb.filter(r => r.category === "Soups, Salads"))}
                    {arrangeRecipes("Breads, Rolls", recipes.recipesCaleb.filter(r => r.category === "Breads, Rolls"))}
                    {arrangeRecipes("Main Dishes", recipes.recipesCaleb.filter(r => r.category === "Main Dishes"))}
                    {arrangeRecipes("Side Dishes", recipes.recipesCaleb.filter(r => r.category === "Side Dishes"))}
                    {arrangeRecipes("Desserts", recipes.recipesCaleb.filter(r => r.category === "Desserts"))}
                    {arrangeRecipes("Miscellaneous", recipes.recipesCaleb.filter(r => r.category === "Miscellaneous"))}
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