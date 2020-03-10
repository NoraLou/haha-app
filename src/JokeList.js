import React, { Component } from 'react';
import Joke from './Joke';
import axios from "axios";

class JokeList extends Component {
  static defaultProps ={
    numJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = { jokes: [] };
    this.handleVote = this.handleVote.bind(this);
  }

  async componentDidMount() {
    let jokes = [];
    while(jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com",{
        headers: { Accept: "application/json"}
      });
      let joke = {
       id : res.data.id,
       joke: res.data.joke,
       score: 0,
      }
      jokes.push(joke);
    }
    this.setState({jokes})
  }

  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j =>
          j.id === id ? {...j, score: j.score + delta } : j
        )
      })
    );
  }

  render() {
    const { jokes } = this.state;

    return (
      <div className="joke-list">
        <div className="joke-list-sidebar">
          <div>
            <h1>Dad Jokes</h1>
            <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="laughing smiling face"/>
            <button>Fetch Icons</button>
          </div>
        </div>
        <ul className="joke-list-jokes">
          { jokes.map((joke)=> (
            <Joke key={joke.id} joke={joke} handleVote={this.handleVote}/>
          )) }
        </ul>
      </div>
     );
  }

}

export default JokeList;