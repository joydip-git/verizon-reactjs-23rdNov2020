import * as ProductStates from '../states/productStates'
import * as ActionTypes from '../action-types/productActionTypes'

export const singleProductReducer = (state = ProductStates.singleProductState, action) => {
    let newState = null;

    switch (action.type) {

        case ActionTypes.GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                error: null,
                loading: true
            }
            break;

        case ActionTypes.GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: action.payload,
                error: null,
                loading: false
            }
            break;

        case ActionTypes.GET_PRODUCTBYID_FAILURE:
            newState = {
                ...state,
                product: null,
                error: action.payload,
                loading: false
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState;
}

export const allProductsReducer = (state = ProductStates.allProductsState, action) => {
    let newState = null;

    switch (action.type) {

        case ActionTypes.GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                error: null,
                loading: true
            }
            break;

        case ActionTypes.GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: action.payload,
                error: null,
                loading: false
            }
            break;

        case ActionTypes.GET_PRODUCTS_FAILURE:
            newState = {
                ...state,
                products: [],
                error: action.payload,
                loading: false
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState;
}