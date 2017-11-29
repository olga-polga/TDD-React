import React, { Component } from 'react';

export default class Timer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            score: 1
    }
        this.clear = this.clear.bind(this);
        this.isClear = this.isClear.bind(this);
        this.increment = this.increment.bind(this);

    }

    clear() {
        this.setState({ score: 0 });
    }

    increment() {
        this.setState({ score: ++this.state.score });
        console.log("increment.......")
    }

    isClear() {
        return this.state.score === 0;
    }
    render() {
        return (
            <b/>
        )
    }
}