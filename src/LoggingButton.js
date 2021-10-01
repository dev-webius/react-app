import React from 'react';

class LoggingButton extends React.Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(e, i, s) {
        console.log('this is:', this);
        console.log(e, i, s);
    };

    render() {
        return (
            <button onClick={this.clickHandler}>Click me</button>
        )
    }
}

export default LoggingButton;