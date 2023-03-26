import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import AllRecipes from "./components/allRecipes";
import Recipe from "./components/recipe";
import Main from "./components/main";
import AddRecipe from "./components/addRecipe";
import LoginPage from "./components/loginPage";
import {ProtectedRoute} from "./components/protectedRoute";
import {useSelector} from "react-redux";

const App = () => {
    let recipesLoaded = useSelector((state) => state.recipes.recipesLoaded);
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/login" exact element={<LoginPage/>}/>
                <Route path="/recipes" exact element={
                    <ProtectedRoute isLoggedIn={recipesLoaded}>
                        <AllRecipes/>
                    </ProtectedRoute>
                }/>
                <Route path="/recipes/add" exact element={
                    <ProtectedRoute isLoggedIn={recipesLoaded} path={'add'}>
                        <AddRecipe/>
                    </ProtectedRoute>
                }/>
                <Route path="/recipes/:id" exact element={
                    <ProtectedRoute isLoggedIn={recipesLoaded}>
                        <Recipe/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </HashRouter>
    );
};
export default App;