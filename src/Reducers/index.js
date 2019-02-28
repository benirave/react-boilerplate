import { combineReducers } from 'redux';
import welcomeReducer from './welcomeReducer';

export const rootReducer = combineReducers({
    welcome: welcomeReducer
});