import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'hyewon`s counter',
    initialState: {
        value: 0,
        color: 'white',
        color2: 'pink'
    },
    reducers: {
        colorchange: (state) => {state.color==='white' ? state.color = '#E0E0E0': state.color='white'},
        colorchange2: (state) => {state.color2==='pink' ? state.color2 = '#FF99FF': state.color2='pink'},
    }})

export const {colorchange, colorchange2} = counterSlice.actions
export default counterSlice.reducer