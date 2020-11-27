const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')

//list of action types
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

//actions or action creators
const increaseActionCreator = (data) => {
    const increaseAction = {
        type: INCREASE,
        payload: data
    }
    return increaseAction;
}
const decreaseActionCreator = (data) => {
    const decreaseAction = {
        type: DECREASE,
        payload: data
    }
    return decreaseAction;
}

//state
const initialCounterState = {
    counter: 0
}

//reducer
const counterReducer = (state = initialCounterState, action) => {
    let newState = null;
    switch (action.type) {
        case INCREASE:
            newState = {
                ...state,
                counter: state.counter + 1
            }
            break;

        case DECREASE:
            newState = {
                ...state,
                counter: state.counter - 1
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

const loggerMiddleware = createLogger();
const store = createStore(counterReducer, applyMiddleware(loggerMiddleware))

//console.log(store.getState())

let increaseByTwoAction = increaseActionCreator(2);
store.dispatch(increaseByTwoAction);
//console.log(store.getState())

let increaseByThreeAction = increaseActionCreator(3);
store.dispatch(increaseByThreeAction)
//console.log(store.getState())

let decreaseByTwoAction = decreaseActionCreator(2);
store.dispatch(decreaseByTwoAction);
//console.log(store.getState())

/*
class Store {
    _reducer = null;
    stateArray = [null]

    constructor(reducer) {
        this._reducer = reducer;
    }
    dispatch = (action) => {
        let updatedState = this._reducer(this.stateArray[0], action)
        this.stateArray[0] = updatedState;
        //middleware
    }
    getState=()=>{
        return this.stateArray[0]
    }
}
export const createStore = (reducer) => {
    return new Store(reducer);
}
const store = createStore(counterReducer)
console.log(store.dispatch(increaseAction));
console.log(store.dispatch(increaseAction));
console.log(store.dispatch(increaseAction));
console.log(store.dispatch(decreaseAction))
*/
