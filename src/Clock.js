import React from 'react';

function FormattedDate(props) {
    return (
        <h3>It is {props.date.toLocaleTimeString()}.</h3>
    )
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello, World!</h1>
                <FormattedDate date={this.state.date} />
            </React.Fragment>
        )
    }
}

export default Clock;