import { Component } from "react";
import { CardList } from "./components/CardList/CardList.component";
import { SearchBox } from "./components/SearchBox/SearchBox.component";
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
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=898")
      .then((response) => response.json())
      .then((pokedex) => this.setState({ pokedex: pokedex.results }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

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
        <h1>Pokedex</h1>
        <SearchBox
          placeholder="Search pokemon"
          handleSearch={this.handleChange}
        />
        <CardList pokedex={filteredPokemons} />
      </div>
    );
  }
}

export default App;
