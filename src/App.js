import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AllRecipes from "./components/allRecipes";
import Recipe from "./components/recipe";
import Main from "./components/main";
import AddRecipe from "./components/addRecipe";
import LoginPage from "./components/loginPage";
import {ProtectedRoute} from "./components/protectedRoute";
import {useSelector} from "react-redux";

//todo list
//todo everytime you go back to the sign in page it requires you log in again. save that in the state or something
//todo Login button should be grayed out until the init for both api scripts is ready. Then enable the button
//todo after a successful login you should be redirected to the page you were attempting to access

const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const recipesLoaded = useSelector((state) => state.recipes.recipesLoaded);
    useEffect(() => {
        console.log("the recipes are loaded for APP.js? ", recipesLoaded);
        setLoggedIn(recipesLoaded);
    }, [recipesLoaded]);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/login" exact element={<LoginPage/>}/>
                <Route path="/recipes" exact element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <AllRecipes/>
                    </ProtectedRoute>
                }/>
                <Route path="/recipes/add" exact element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <AddRecipe/>
                    </ProtectedRoute>
                }/>
                <Route path="/recipes/:id" exact element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <Recipe/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </BrowserRouter>
    );
};
export default App;