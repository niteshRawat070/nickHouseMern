import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'//for async operations
import { composeWithDevTools } from 'redux-devtools-extension';

import houseReducer from './reducers/houseReducer';

const rootReducer = combineReducers({
    house: houseReducer
});

//for async operations
const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);