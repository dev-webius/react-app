import React from 'react';
import WarningBanner from './WarningBanner';

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showWarning: null
        };

        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        if (!this.state.showWarning) {
            this.setState({showWarning: 'Warning message'});
        } else {
            this.setState({showWarning: null});
        }
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export default Page;