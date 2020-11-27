import { combineReducers } from "redux";
import { singleProductReducer, allProductsReducer } from '../reducers/productReducers'

export const rootReducer = combineReducers({
    single: singleProductReducer,
    all: allProductsReducer
})