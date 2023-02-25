import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRecipes from "./components/allRecipes";
import Recipe from "./components/recipe";
import Main from "./components/main";
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" exact element={<Main />} />
                        <Route path="/recipes" exact element={<AllRecipes />} />
                        <Route path="/recipes/add" exact element={<AllRecipes />} />
                        <Route path="/recipes/:id" exact element={<Recipe />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
export default App;