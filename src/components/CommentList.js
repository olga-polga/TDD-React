import React, {Component, PropTypes} from 'react';
import Comment from './Comment';
import InactivityTimer from './InactivityTimer';
import Critter from './Critter';

export default class CommentList extends Component {
    constructor(props) {
        super(props);


        this.state = {comments: [], critter: new Critter("Winston", 3), timer: new InactivityTimer(3000, this.foo)};
        this.increment = this.increment.bind(this);
        this.foo = this.foo.bind(this);
        this.reset = this.reset.bind(this);
        this.reverseComments = this.reverseComments.bind(this);
    }

    foo() {
        alert("Hello from foo!" );
    }

    componentDidMount() {
        this.setState({
            comments: ['Comment number one', 'Comment number two']
        });
        setInterval(function() {this.state.timer.increment(1000)}.bind(this), 1000);

    }

    reset() {
        this.state.timer.reset();
    }

    renderComments(comments) {
        return comments.map((comment, idx) => <Comment key={idx} comment={comment}/>);
    }

    increment() {
        this.state.timer.increment(1);
    }

    reverseComments() {
        this.state.critter.talk();
        const {comments} = this.state;
        this.state.timer.reset();

        const newComments = comments.map(comment => comment
            .split('')
            .reverse()
            .join('')
        );

        this.setState({comments: newComments});
    }

    render() {
        const commentsNode = this.renderComments(this.state.comments);
        return (
            <div className="comments-list">

                {commentsNode}
                <button onClick={this.reverseComments}>{this.props.buttonValueReverse}</button>
                <button onClick={this.report}>{this.props.buttonValueReport}</button>
                <button onClick={this.reset}>{this.props.buttonValueReset}</button>
            </div>
        )
    }
}

CommentList.defaultProps = {
    buttonValueReverse: 'Reverse ',
    buttonValueReport: 'Report ',
    buttonValueReset: 'Reset '
}

