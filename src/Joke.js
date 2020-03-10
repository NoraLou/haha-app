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
        {joke}
      </li>
     );
  }
}

export default Joke ;