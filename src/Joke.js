import React, { Component } from 'react';

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const {joke} = this.props;

    return (
      <li className="joke">
        <div className="joke-score">
          {joke.score}
        </div>
        <div className="joke-text">
          {joke.joke}
        </div>
      </li>
     );
  }
}

export default Joke ;