import React, {Component} from 'react';
import InactivityTimer from './InactivityTimer';

export default class EditArea extends Component {
    constructor(props) {
        super(props);
        this.state = {myTimer: new InactivityTimer(5550, this.foo)};
        this.handleChange = this.handleChange.bind(this);
        this.foo = this.foo.bind(this);
        setInterval(function () {
            this.state.myTimer.increment(1000)
        }.bind(this), 1000);
    }

    handleChange(event) {

        this.state.myTimer.reset();
        console.log(event.target.value);
    }

    render() {

        return (
            <textarea rows="5"
                      name="comment"
                      placeholder="Add new comment here..."
                      onKeyPress={this.handleChange}
            />
        )
    }

    foo() {
        alert("Hello... is anybody still working here?");
    }

}


