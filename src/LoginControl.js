import React from 'react';

import Greeting from './Greeting';
import Page from './Page';

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };

        this.loginHandler = this.loginHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
    }

    loginHandler() {
        this.setState({
            isLoggedIn: true
        });
    }

    logoutHandler() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <Greeting isLoggedIn={this.state.isLoggedIn} name="webius" />
                {
                    this.state.isLoggedIn
                        ? <LogoutButton onClick={this.logoutHandler} />
                        : <LoginButton onClick={this.loginHandler} />
                }
                <Page />
            </React.Fragment>
        );
    }
}

export default LoginControl;