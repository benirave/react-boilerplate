import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers/index';
import thunk from 'redux-thunk';

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)