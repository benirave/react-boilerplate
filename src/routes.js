import React from 'react';
import {
    Router,
    Route,
    browserHistory,
    IndexRoute
} from 'react-router';
import App from './components/App';
import Welcome from './containers/welcome';


export const GetRoutes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/">
               <IndexRoute component={App} />
            </Route>
            <Route path="welcome" component={Welcome} />
        </Router>
    );
}