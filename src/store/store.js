import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from '../Reducers/index';
import thunk from 'redux-thunk';

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancer(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        )
    )
)