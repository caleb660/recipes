import '../styling/main.css';
import React, {useState, useEffect} from 'react';
import Toolbar from './toolbar'
import {useSelector} from "react-redux";

const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const recipes = useSelector((state) => state.recipes);

    useEffect(() => {
        let urlParts = window.location.hash.split('/');
        let recipeId = urlParts[urlParts.length - 1];
        let tempRecipe = structuredClone(recipes.recipesCaleb[recipeId]);
        tempRecipe.ingredients = addBreaks(tempRecipe.ingredients);
        tempRecipe.directions = addBreaks(tempRecipe.directions);
        setRecipe(tempRecipe);
    }, [recipes.recipesCaleb]);

    const addBreaks = (string) => {
        string = string + "";
        return string.split(/\r?\n/);
    }

    const getBrokenString = (arr) => {
        if (arr !== undefined) {
            return (
                arr.map(value =>
                    <div key={value}>
                        {value}
                        <br/>
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
            return <div className="centerBlock">
                <div className="loader"></div>
            </div>;
        }
    }

    return (
        <div>
            <Toolbar/>
            <br/>
            {getRecipeOrLoader()}
        </div>
    );
};


export default Recipe;