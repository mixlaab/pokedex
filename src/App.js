import { Component } from "react";
import { CardList } from "./components/CardList/CardList.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokedex: [],
      searchField: "",
    };
  }

  componentDidMount() {
    /*
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => console.log(users));
      */
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=500")
      .then((response) => response.json())
      .then((pokedex) => this.setState({ pokedex: pokedex.results }));
  }

  render() {
    const { pokedex, searchField } = this.state;
    pokedex.forEach((item, i) => {
      item.id = i + 1;
    });
    const filteredPokemons = pokedex.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredPokemons);
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search pokemon"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList pokedex={filteredPokemons} />
      </div>
    );
  }
}

export default App;
