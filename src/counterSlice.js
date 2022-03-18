import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const TommycounterSlice = createSlice({
    name: 'tommy`s counter',
    initialState,
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
    }})

export const {increment, decrement} = TommycounterSlice.actions
export default TommycounterSlice.reducer