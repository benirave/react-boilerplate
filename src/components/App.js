import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router';

import '../assets/scss/index.scss';

class App extends Component {
    // renderHelloWorld = () => {
    //     return (
    //         <h1>Hello, World!</h1>
    //     )
    // }

    render() {
        return (
            <div>
                <Link className="no-decoration" to="/welcome">
                    <h1>
                        Hello, World!
                    </h1>
                </Link>
            </div>
        );
    }
}

export default hot(module)(App);

