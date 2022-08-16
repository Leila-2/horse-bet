import { createSlice } from '@reduxjs/toolkit'
import { socket } from '../services/socketConnect'

const initialState = {
    horses: socket.start,
}

export const horsesSlice = createSlice({
    name: 'horses',
    initialState,
    reducers: {
        getScore(state, action) {
            state.horses = action.payload
        }
    }
})
export const { getScore } = horsesSlice.actions
export const horsesReducer = horsesSlice.reducer