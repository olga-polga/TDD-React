import React, { Component, PropTypes } from 'react';
import Comment from './Comment';
import Timer from './Timer';
import Critter from './Critter';
export default class CommentList extends Component {
  constructor(props) {
    super(props);


    this.state = { comments: [], critter: new Critter("Winston",3)};
    this.reverseComments = this.reverseComments.bind(this);
  }

  componentDidMount() {
    this.setState({
      comments: ['Comment number one', 'Comment number two']
    });
      this.state.critter.talk();

  }

  renderComments(comments) {
    return comments.map((comment, idx) => <Comment key={idx} comment={comment} />);
  }

  reverseComments() {
      this.state.critter.talk();
      const {comments} = this.state;


    const newComments = comments.map(comment => comment
      .split('')
      .reverse()
      .join('')
    );

    this.setState({ comments: newComments });
  }

  render() {
    const commentsNode = this.renderComments(this.state.comments);
    return (
      <div className="comments-list">

        <Timer/>
        {commentsNode}
        <button onClick={this.reverseComments}>{this.props.buttonValueIncrease}</button>
        <button onClick={this.loss}>{this.props.buttonValueDcrease}</button>
        <button onClick={this.report}>{this.props.buttonValueReport}</button>
      </div>
    )
  }
}

CommentList.defaultProps = {
    buttonValueIncrease: 'Gain ',
    buttonValueDecrease: 'Loss '
    buttonValueReport: 'Report '
}

