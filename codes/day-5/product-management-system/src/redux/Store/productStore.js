import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

//middlewares
const loggerMiddleware = createLogger();

const productStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, thunkMiddleware)))

export default productStore