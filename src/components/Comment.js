import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <li className='comment-item'>
        <span>{this.props.comment}</span>
      </li>
    )
  }
}
