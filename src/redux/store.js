import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from '../redux/recipeSlice'

export const store = configureStore({
    reducer: {
        recipes: recipeReducer,
    },
})