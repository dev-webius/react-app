import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();

        alert('numbers: ' + this.state.numberOfGuests + ' / isGoing: ' + this.state.isGoing);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Is Going:
                    <input type="checkbox" name="isGoing" onChange={this.handleInputChange} checked={this.state.isGoing} />
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input type="number" name="numberOfGuests" onChange={this.handleInputChange} value={this.state.numberOfGuests} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Reservation;