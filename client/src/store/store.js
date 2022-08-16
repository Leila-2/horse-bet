import { configureStore } from '@reduxjs/toolkit'
import { horsesReducer } from './horsesSlice'
export const store = configureStore({
    reducer: {
        horses: horsesReducer,
    },
})