const { default: Axios } = require("axios");
const { createStore, applyMiddleware, combineReducers } = require("redux");
const { createLogger } = require("redux-logger");
const thunk = require('redux-thunk')

//state
const singleProductState = {
    product: null,
    error: null,
    loading: true
}

const allProductsState = {
    products: [],
    error: null,
    loading: true
}

//action types
const GET_PRODUCTBYID_INITIATE = 'GET_PRODUCTBYID_INITIATE'
const GET_PRODUCTBYID_SUCCESS = 'GET_PRODUCTBYID_SUCCESS'
const GET_PRODUCTBYID_FAILURE = 'GET_PRODUCTBYID_FAILURE'

//action types
const GET_PRODUCTS_INITIATE = 'GET_PRODUCTS_INITIATE'
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

//action creators
const getProductByIdInitiateActionCreator = () => {
    return {
        type: GET_PRODUCTBYID_INITIATE
    }
}

const getProductByIdSuccessActionCreator = (data) => {
    return {
        type: GET_PRODUCTBYID_SUCCESS,
        payload: data
    }
}

const getProductByIdFailureActionCreator = (error) => {
    return {
        type: GET_PRODUCTBYID_FAILURE,
        payload: error
    }
}

const getProductsInitiateActionCreator = () => {
    return {
        type: GET_PRODUCTS_INITIATE
    }
}

const getProductsSuccessActionCreator = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

const getProductsFailureActionCreator = (error) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        payload: error
    }
}

const fetchProductByIdAsyncCallbackCreator = (productId) => {

    const fetchProductByIdAsync = (dispatch) => {
        const initiateAction = getProductByIdInitiateActionCreator();
        dispatch(initiateAction)

        Axios.get('http://127.0.0.1:8081/productservice/' + productId)
            .then(
                (resp) => {
                    //success
                    const successAction = getProductByIdSuccessActionCreator(resp.data);
                    dispatch(successAction)
                },
                (resaon) => {
                    //failure
                    const failureAction = getProductByIdFailureActionCreator(resaon);
                    dispatch(failureAction)
                }
            )
            .catch(
                (e) => {
                    //{ type: GET_PRODUCTBYID_FAILURE, payload: e.message }
                    const errorAction = getProductByIdFailureActionCreator(e.message);
                    dispatch(errorAction)
                }
            )
    }

    return fetchProductByIdAsync;
}

const fetchProductsAsyncCallbackCreator = () => {

    const fetchProductsAsync = (dispatch) => {
        const initiateAction = getProductsInitiateActionCreator();
        dispatch(initiateAction)

        Axios.get('http://127.0.0.1:8081/productservice')
            .then(
                (resp) => {
                    //success
                    const successAction = getProductsSuccessActionCreator(resp.data);
                    dispatch(successAction)
                },
                (resaon) => {
                    //failure
                    const failureAction = getProductsFailureActionCreator(resaon);
                    dispatch(failureAction)
                }
            )
            .catch(
                (e) => {
                    //{ type: GET_PRODUCTBYID_FAILURE, payload: e.message }
                    const errorAction = getProductsFailureActionCreator(e.message);
                    dispatch(errorAction)
                }
            )
    }

    return fetchProductsAsync;
}


//reducer
const singleProductReducer = (state = singleProductState, action) => {
    let newState = null;

    switch (action.type) {

        case GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                error: null,
                loading: true
            }
            break;

        case GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: action.payload,
                error: null,
                loading: false
            }
            break;

        case GET_PRODUCTBYID_FAILURE:
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

const allProductsReducer = (state = allProductsState, action) => {
    let newState = null;

    switch (action.type) {

        case GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                error: null,
                loading: true
            }
            break;

        case GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: action.payload,
                error: null,
                loading: false
            }
            break;

        case GET_PRODUCTS_FAILURE:
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

//middlewares
const loggerMiddleware = createLogger();
const thunkMiddleware = thunk.default;

//store
const rootReducer = combineReducers({
    single: singleProductReducer,
    all: allProductsReducer
})
const productStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunkMiddleware))

//const callback = fetchProductByIdAsyncCallbackCreator(1);
//fetchProductByIdAsync(productStore.dispatch)
//productStore.dispatch(callback)
productStore.dispatch(fetchProductsAsyncCallbackCreator())