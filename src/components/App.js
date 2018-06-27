import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import '../assets/scss/index.scss';

class App extends Component {
    renderHelloWorld = () => {
        return (
            <h1>Hello World</h1>
        )
    }


    render() {
        return (
        <div>
            {this.renderHelloWorld()}
        </div>
        );
    }
}

export default hot(module)(App)

