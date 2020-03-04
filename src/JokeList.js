import React, { Component } from 'react';
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
      console.log("RES BOI!", res);
      let joke = {
       id : res.data.id,
       joke: res.data.joke
      }
      jokes.push(joke);
    }
    this.setState({jokes})
  }

  render() {
    const { jokes } = this.state;

    return (
      <ul>
        { jokes.map((j)=> (
          <li key={j.id}>{j.joke}</li>
        ))}
      </ul>
     );
  }

}

export default JokeList;