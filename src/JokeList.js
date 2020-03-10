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

  handleVote(id,action) {
    const { jokes } = this.state;
    const votedJokes = jokes.map( id => {
      if (joke.id === id) {
       joke.score = (action === 'plus') ? joke.score++ : joke.score--;
      }
      return joke
    });
    this.setState({jokes: upVotedJokes});
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
          { jokes.map((j)=> (
            <Joke key={j.id} joke={j.joke}/>
          ))}
        </ul>
      </div>
     );
  }

}

export default JokeList;