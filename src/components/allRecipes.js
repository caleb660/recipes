import React, { useState, useEffect } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Link } from 'react-router-dom';

import '../styling/main.css';
import Toolbar from './toolbar';

const creds = require('../client_secret.json');
export const accessSpreadsheet = async () => {
    console.log("We are accessing the spreadsheet");
    const doc = new GoogleSpreadsheet('11C_U7Xm2X43oT30uS2T4-T8HcrNLvfW-mYZKuhqEzNg');
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const serverInfo = doc.sheetsByIndex[0];

    const allRows = await serverInfo.getRows();
    let listThing = [];
    let id = 0;
    for (const row of allRows) {
        listThing.push({
            id: id++,
            title: row.Title,
            contributor: row.Contributor,
            category: row.Category,
            ingredients: row.Ingredients,
            directions: row.Directions
        })
    }
    return listThing;
}

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect (() => {
        async function fetchData() {
            setRecipes(await accessSpreadsheet());
        }
        fetchData();
    }, []);

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
        if (recipes.length !== 0) {
            return (
                <div className="allRecipes">
                    {arrangeRecipes("Appetizers, Beverages", recipes.filter(r => r.category === "Appetizers, Beverages"))}
                    {arrangeRecipes("Soups, Salads", recipes.filter(r => r.category === "Soups, Salads"))}
                    {arrangeRecipes("Breads, Rolls", recipes.filter(r => r.category === "Breads, Rolls"))}
                    {arrangeRecipes("Main Dishes", recipes.filter(r => r.category === "Main Dishes"))}
                    {arrangeRecipes("Side Dishes", recipes.filter(r => r.category === "Side Dishes"))}
                    {arrangeRecipes("Desserts", recipes.filter(r => r.category === "Desserts"))}
                    {arrangeRecipes("Miscellaneous", recipes.filter(r => r.category === "Miscellaneous"))}
                </div>
            );
        } else {
            return <div className="loader"></div>;
        }
    }

    return (
        <div>
            <Toolbar />
            <h2>All Recipes</h2>
            {getAllRecipes()}
        </div>
    );
};


export default AllRecipes;