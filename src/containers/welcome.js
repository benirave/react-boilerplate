import React, { Component } from 'react';
import { connect } from 'react-redux';
import Presentation from '../components/welcome';
import { getWelcomeText } from '../actions/welcomeAction';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <Presentation 
                welcometext={this.props.welcometext}
                getWelcomeText={this.props.getWelcomeText}
            />
        );
    }
}

const mapStateToProps = state => {
    const { welcometext } = state.welcome;

    return { welcometext };
}

export default connect(mapStateToProps, { getWelcomeText })(Welcome);