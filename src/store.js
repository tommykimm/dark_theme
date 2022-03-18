import {configureStore, combineReducers} from '@reduxjs/toolkit'
import tommy from './counterSlice'
import hyewon123 from './colors'

export const allStore = combineReducers({
    tommy: tommy,
    hyewon: hyewon123
    })