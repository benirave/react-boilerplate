import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount = () => {
        this.props.getWelcomeText();
    }

    render() {
        return (
            <h1>
                {this.props.welcometext}
            </h1>
        );
    }
}

export default Welcome;