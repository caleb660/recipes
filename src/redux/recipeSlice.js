import {createSlice} from '@reduxjs/toolkit'

const MILLIS_IN_HOUR = 3500000; //not quite, but the token expires a little before an hour anyway
const setInitialState = () => {
    const lastSave = sessionStorage.getItem("lastRecipeSave");
    const recipesCaleb = sessionStorage.getItem("recipesCaleb");
    if (lastSave && recipesCaleb && lastSave > (new Date()).getTime() - MILLIS_IN_HOUR) {
        return {recipesCaleb: JSON.parse(recipesCaleb), recipesLoaded: true};
    }
    return {recipesCaleb: [], recipesLoaded: false};
}

const initialState = setInitialState();
export const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipesCaleb = action.payload;
            state.recipesLoaded = action.payload.length !== 0;
            if (action.payload.length === 0) {
                sessionStorage.removeItem("lastRecipeSave");
            } else {
                sessionStorage.setItem("lastRecipeSave", (new Date()).getTime());
            }
            sessionStorage.setItem("recipesCaleb", JSON.stringify(action.payload));
        },
    },
})

// Action creators are generated for each case reducer function
export const {setRecipes} = recipeSlice.actions

export default recipeSlice.reducer