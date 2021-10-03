import React from 'react';

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ['tomato']
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        if (this.state.value.indexOf(value) > -1) {
            const array = this.state.value;

            array.splice(this.state.value.indexOf(value), 1);

            this.setState({value: array});
        } else {
            this.setState({value: [...this.state.value, value]});
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        alert('Selected value is ' + this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Flavor:
                    <select multiple value={this.state.value} onChange={this.handleChange}>
                        <option value="banana">Banana</option>
                        <option value="apple">Apple</option>
                        <option value="tomato">Tomato</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FlavorForm;