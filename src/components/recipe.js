import '../styling/main.css';
import React, { useState, useEffect } from 'react';
import Toolbar from './toolbar'
import { accessSpreadsheet } from './allRecipes';

const Recipe = () => {
    const [recipe, setRecipe] = useState({});

    useEffect (() => {
        let values = window.location.pathname.split('/');
        let recipeId = values[values.length -1];
        async function fetchData() {
            const recipes = await accessSpreadsheet();
            let recipe = recipes[recipeId];
            recipe.ingredients = addBreaks(recipe.ingredients);
            recipe.directions = addBreaks(recipe.directions);
            setRecipe(recipe);
        }
        fetchData();
    }, []);

    const addBreaks = (string) => {
        string = string + "";
        return string.split(/\r?\n/);
    }

    const getBrokenString = (arr) => {
        console.log(arr);
        if(arr !== undefined) {
            return (
                arr.map(value =>
                    <div key={value}>
                        {value}
                        <br />
                    </div>
                ));
        }
    }

    const getRecipeOrLoader = () => {
        if (!recipe) {
            return (
                <h1 className="recipeHeader error">
                    could not retrieve recipe
                </h1>
            );
        } else if (Object.keys(recipe).length !== 0) {
            return (
                <div>
                    <h1 className="recipeHeader">
                        {recipe.title}
                    </h1>
                    <h4 className="recipeSubHeader">
                        Ingredients
                    </h4>
                    <div className="recipeSection">
                        {getBrokenString(recipe.ingredients)}
                    </div>
                    <h4 className="recipeSubHeader">
                        Directions
                    </h4>
                    <div className="recipeSection">
                        {getBrokenString(recipe.directions)}
                    </div>
                    <div className="contributorSection">
                        Type: {recipe.category}
                    </div>
                    <div className="contributorSection">
                        Contributor: {recipe.contributor}
                    </div>
                </div>);
        } else {
            return(
                <div>
                    <br />
                    <br />
                    <div className="loader"></div>
                </div>
            );
        }
    }

    return (
        <div>
            <Toolbar />
            <br/>
            {getRecipeOrLoader()}
        </div>
    );
};


export default Recipe;