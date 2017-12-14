import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentList from './components/CommentList';
import './stylesheets/main.scss';
class Root extends Component {
  render() {
    return (
      <div>
        <h1>TDD React in the Cloud</h1>
        <CommentList/>
      </div>
    );
  }
}

render(<Root />, document.getElementById('root'));
