import '../styling/main.css';
import React, { useState, useEffect } from 'react';
import Toolbar from './toolbar'
import {useDispatch, useSelector} from "react-redux";
import {setRecipes} from "../redux/recipeSlice";
import {accessSpreadsheet} from "./getRecipes";

const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const recipes = useSelector((state) => state.recipes);
    const dispatch = useDispatch();

    useEffect (() => {
        let values = window.location.pathname.split('/');
        let recipeId = values[values.length -1];
        async function fetchData() {
            const recipes = await accessSpreadsheet();
            dispatch(setRecipes(recipes));
            console.log("the recipe is", recipes, recipeId);
            let tempRecipe = structuredClone(recipes.at(recipeId));
            tempRecipe.ingredients = addBreaks(tempRecipe.ingredients);
            tempRecipe.directions = addBreaks(tempRecipe.directions);
            setRecipe(tempRecipe);
        }

        if (recipes.recipesCaleb?.length === 0) {
            fetchData();
        } else {
            let tempRecipe = structuredClone(recipes.recipesCaleb[recipeId]);
            tempRecipe.ingredients = addBreaks(tempRecipe.ingredients);
            tempRecipe.directions = addBreaks(tempRecipe.directions);
            setRecipe(tempRecipe);
        }
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
        console.log("recipe is: ", recipe);
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
            return <div className="centerBlock"><div className="loader"></div></div>;
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