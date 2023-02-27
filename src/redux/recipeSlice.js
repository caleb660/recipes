import { createSlice } from '@reduxjs/toolkit'

const initialState =  {recipesCaleb: []};
export const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        getRecipesFromServer: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        setRecipes: (state, action) => {
            console.log("we are inside setRecipes", state);
            console.log("we are inside setRecipes", state.value);
            console.log("recipeList is ", action);
            state.recipesCaleb = action.payload;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setRecipes } = recipeSlice.actions

export default recipeSlice.reducer