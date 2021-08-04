import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokedex: [],
    };
  }

  componentDidMount() {
    /*
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => console.log(users));
      */
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=9")
      .then((response) => response.json())
      .then((pokedex) => this.setState({ pokedex: pokedex.results }));
  }

  render() {
    return (
      <div className="App">
        {this.state.pokedex.map((pokemon, index) => (
          <>
            <h1 key={index}>{pokemon.name}</h1>
            <a href={pokemon.url} key={index}>
              {pokemon.url}
            </a>
          </>
        ))}
      </div>
    );
  }
}

export default App;
