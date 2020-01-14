import React, { Component, Fragment } from "react";
import axios from "axios";

import Item from "./Item";
import Searchbar from "../components/Searchbar";
import Loader from "../components/Loader";

class Viewall extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <Fragment>
        <Searchbar />
        {this.state.pokemon ? (
          <div className="List">
            {this.state.pokemon.map((pokemon, i) => (
              <Item key={i} name={pokemon.name} url={pokemon.url} />
            ))}
          </div>
        ) : (
          <Loader className="Loader" />
        )}
      </Fragment>
    );
  }
}

export default Viewall;
