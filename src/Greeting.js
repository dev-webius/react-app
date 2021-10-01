import React from 'react';

import Mailbox from './Mailbox';

function Greeting(props) {
    if (props.isLoggedIn) {
        return <UserGreeting name={props.name} />
    }
    return <GuestGreeting />
}

function UserGreeting(props) {
    const messages = ['React', 'Re: React', 'Re: Re: React'];
    
    return (
        <React.Fragment>
            <h1>Welcome, {props.name}!</h1>
            <Mailbox unreadMessage={messages} />
        </React.Fragment>
    );
}

function GuestGreeting(props) {
    return <h1>Please sign up!</h1>;
}

export default Greeting;