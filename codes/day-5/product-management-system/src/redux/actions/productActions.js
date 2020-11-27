import * as ActionTypes from '../action-types/productActionTypes'

export const getProductByIdInitiateActionCreator = () => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_INITIATE
    }
}

export const getProductByIdSuccessActionCreator = (data) => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_SUCCESS,
        payload: data
    }
}

export const getProductByIdFailureActionCreator = (error) => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_FAILURE,
        payload: error
    }
}

export const getProductsInitiateActionCreator = () => {
    return {
        type: ActionTypes.GET_PRODUCTS_INITIATE
    }
}

export const getProductsSuccessActionCreator = (data) => {
    return {
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const getProductsFailureActionCreator = (error) => {
    return {
        type: ActionTypes.GET_PRODUCTS_FAILURE,
        payload: error
    }
}