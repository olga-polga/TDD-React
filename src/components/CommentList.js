import React, {Component, PropTypes} from 'react';
import Comment from './Comment';
import EditArea from './EditArea';
import Critter from './Critter';

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: [], critter: new Critter("Winston", 3)};
        this.reverseComments = this.reverseComments.bind(this);
        this.askCritter = this.askCritter.bind(this);
        this.feedCritter = this.feedCritter.bind(this);
      //  this.saveComments = this.saveComments.bind(this);
    }



    componentDidMount() {
        this.setState({
            comments: ['Comment number one', 'Comment number two']
        });


    }



    renderComments(comments) {
        return comments.map((comment, idx) => <Comment key={idx} comment={comment}/>);
    }


    saveComments( ) {
       alert("I am a callback")
       this.state.comments.push("fsdfdfgggg");
    }

    askCritter( ) {
        this.state.critter.talk();
    }

    feedCritter( ) {
        this.state.critter.increase(1);
    }
    reverseComments() {

        const {comments} = this.state;


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
                <EditArea callback={this.saveComments.bind(this)}/>
                <br/>
                <button onClick={this.reverseComments}>{this.props.buttonValueReverse}</button>
                <button onClick={this.feedCritter}>{this.props.buttonValueFeedCritter}</button>
                <button onClick={this.askCritter}>{this.props.buttonValueAskCritter}</button>
            </div>
        )
    }
}

CommentList.defaultProps = {
    buttonValueReverse: 'Reverse ',
    buttonValueAskCritter: 'Ask the Critter ',
    buttonValueFeedCritter: 'Feed the Critter '
}

