import React from 'react';

import './RandomEmulator.css';

class RandomEmulator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repeat: ''
        };

        this.submitForm = this.submitForm.bind(this);
        this.drawRandom = this.drawRandom.bind(this);
        this.stopDrawing = this.stopDrawing.bind(this);
        this.resetDrawing = this.resetDrawing.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

    submitForm(event) {
        event.preventDefault();

        const numbers = [];
        const numberLength = 10;

        for (let i = 0; i < numberLength; i++) {
            numbers.push({
                number: (i.toString()),
                count: 0
            });
        }

        this.setState({
            drawing: true,
            repeatCount: 0,
            numbers
        });

        this.drawing = setInterval(this.drawRandom, 10);
    }

    drawRandom() {
        const numbers = this.state.numbers
        const number = Math.floor(Math.random() * 10);
        const drawing = this.state.repeat - this.state.repeatCount > 1;

        numbers[number].count++;
    
        this.setState({
            numbers,
            repeatCount: this.state.repeatCount + 1
        });

        if (!drawing) {
            clearInterval(this.drawing);
            delete this.drawing;
        }
    }

    stopDrawing() {
        this.setState({
            drawing: ''
        });
    }

    resetDrawing() {
        this.setState({
            drawing: false
        });
    }

    inputHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <>
                {
                    !this.state.drawing && (
                        <div className="input-form">
                            <form onSubmit={this.submitForm}>
                                <input type="text" name="repeat" value={this.state.repeat} onChange={this.inputHandler} />
                                <input type="submit" value="랜덤 테스트" />
                            </form>
                        </div>
                    )
                }
                {
                    this.state.drawing !== false && (
                        <div className="output">
                            <Output numbers={this.state.numbers} />
                            <div className="button-wrap">
                                <button onClick={this.stopDrawing}>Stop</button>
                                <button onClick={this.resetDrawing}>Reset</button>
                            </div>
                        </div>
                    )
                }
            </>
        )
    }
}

function Output(props) {
    const numbers = props.numbers || [];
    const total = numbers.map((number) => number.count).reduce((a, b) => a + b, 0);

    numbers.sort((a, b) => -a.count + b.count);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {numbers.map((number) => <th key={number.number}>{number.number}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {numbers.map((number) => <td key={number.number}>{number.count} ({Math.floor(number.count / total * 10000) / 100}%)</td>)}
                    </tr>
                </tbody>
            </table>
        </>
    );
}

/*
function RandomOutput(props) {
    const numbers = props.numbers || [];

    return (
        <>
            <ul>
                {
                    numbers
                        .sort((a, b) => -a + b)
                        .map((number, i) => {
                            const key = i.toString();
                            const part = number / numbers.reduce((a, b) => a + b) * 100;
                    
                            return <li key={key}>[{key}] {number} time{number > 1 && 's'} ({part}%)</li>;
                        })
                }
            </ul>
        </>
    )
}

function RandomTable(props) {
    const numbers = props.numbers || [];

    return (
        <>
            <table style={{borderSpacing: 0, borderCollapse: 'collapse', border: '1px solid #dedede', tableLayout: 'fixed'}}>
                <thead>
                    <tr>
                        {numbers.map((number, i) => <th style={{border: '1px solid #dedede', padding: '0.25rem 0'}} key={i.toString()}>{i.toString()}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {numbers.map((number, i) => <td style={{border: '1px solid #dedede', padding: '1rem'}} key={i.toString()}>{number} / {Math.floor(number / numbers.reduce((a, b) => a + b) * 10000) / 100}%</td>)}
                    </tr>
                </tbody>
            </table>
        </>
    )
}
*/

export default RandomEmulator;