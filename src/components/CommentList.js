import React, {Component, PropTypes} from 'react';
import Comment from './Comment';
import EditArea from './EditArea';
import Critter from './Critter';

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: [], critter: new Critter("Winston", 3)};
        this.askCritter = this.askCritter.bind(this);
        this.feedCritter = this.feedCritter.bind(this);
        this.saveComments = this.saveComments.bind(this);
    }

    componentDidMount() {
        this.setState({
            comments: ['Comments are saved after a period of inactivity', 'You can also save your new comment explicitly']
        });
    }


    renderComments(comments) {
        return comments.map((comment, idx) => <Comment key={idx} comment={comment}/>);
    }


    saveComments( ) {
       // alert("I am a callback function and being passed as a property to a component")
        var updates = this.state.comments.slice()
        updates.push(this.refs.editArea.refs.valuable_comment.value)
        this.setState({ comments: updates })
    }

    askCritter( ) {
        this.state.critter.talk();
    }

    feedCritter( ) {
        this.state.critter.increase(1);
    }

    render() {
        const commentsNode = this.renderComments(this.state.comments);

        return (
            <div className="comments-list">

                {commentsNode}
                <EditArea ref="editArea" callback={this.saveComments} />
                <br/>
                <button onClick={this.saveComments}>{this.props.buttonValueSave}</button>
                <button onClick={this.feedCritter}>{this.props.buttonValueFeedCritter}</button>
                <button onClick={this.askCritter}>{this.props.buttonValueAskCritter}</button>
            </div>
        )
    }
}

CommentList.defaultProps = {
    buttonValueSave: 'Explicit Save',
    buttonValueAskCritter: 'Ask the Critter',
    buttonValueFeedCritter: 'Feed the Critter'
}

