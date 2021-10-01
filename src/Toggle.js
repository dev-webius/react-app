import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: true
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    // 클래스 메서드는 기본적으로 바인딩 되지 않음 (default this is void 0)
    clickHandler() {
        this.setState({
            isToggle: !this.state.isToggle
        });
    }

    render() {
        return (
            <button onClick={this.clickHandler}>Toggle is {this.state.isToggle ? 'ON': 'OFF'}</button>
        );
    }
}

export default Toggle;