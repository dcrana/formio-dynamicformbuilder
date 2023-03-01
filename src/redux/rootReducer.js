import { combineReducers } from "@reduxjs/toolkit";
import dfbReducer from './features/dynamicformbuilder/dfbSlice'



export const rootReducer = combineReducers({
    dfb: dfbReducer,
});
