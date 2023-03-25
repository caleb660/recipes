import {createSlice} from '@reduxjs/toolkit'

const initialState = {recipesCaleb: [], recipesLoaded: false};
export const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipesCaleb = action.payload;
            state.recipesLoaded = true;
        },
    },
})

// Action creators are generated for each case reducer function
export const {setRecipes} = recipeSlice.actions

export default recipeSlice.reducer