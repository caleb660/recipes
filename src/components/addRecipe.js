import React, {useEffect} from 'react';

import Toolbar from './toolbar';
import AddForm from './addForm';
import {useDispatch} from "react-redux";
import {setRecipes} from "../redux/recipeSlice";

const AddRecipe = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.gapi.client === undefined) {
            dispatch(setRecipes([]));
        }
    }, [window.gapi.client]);

    return (
        <div className="addRecipe">
            <Toolbar/>
            <h2>
                Add Recipe
            </h2>
            <div className="addForm">
                <div className="innerForm">
                    <AddForm/>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe;