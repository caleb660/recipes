import React from 'react';

import Toolbar from './toolbar';
import AddForm from './addForm';
import showResults from "./showResults";

const AddRecipe = () => {
    return (
        <div className="addRecipe">
            <Toolbar/>
            <h2>
                Add Recipe
            </h2>
            <div className="addForm">
                <div className="innerForm">
                    <AddForm onSubmit={showResults}/>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe;