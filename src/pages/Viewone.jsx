import React, { Component } from "react";
import axios from "axios";
import Stats from "../components/Stats";
import Types from "../components/Types";
import Loader from "../components/Loader";

export default class Viewone extends Component {
  state = {
    pokemon: {},
    species: {},
    isLoading: false
  };

  async componentDidMount() {
    const { urlName } = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${urlName}/`;
    const pokemonInfosUrl = `https://pokeapi.co/api/v2/pokemon-species/${urlName}/`;
    this.setState({ isLoading: true });
    const pokemonRes = await axios.get(pokemonUrl);
    const pokemon = await pokemonRes.data;
    const speciesRes = await axios.get(pokemonInfosUrl);
    const species = await speciesRes.data;
    this.setState({ pokemon, species });
    this.setState({ isLoading: false });
  }
  render() {
    if (this.state.isLoading) {
      return <Loader />;
    } else {
      let movesJsx = [];
      if (this.state.pokemon.moves) {
        const moves = this.state.pokemon.moves.slice(0, 3);
        movesJsx = moves.map((move, i) => {
          return i === moves.length - 1 ? (
            <span key={i}> {move.move.name} </span>
          ) : (
            `${move.move.name}, `
          );
        });
      }
      return (
        <div className="Viewone">
          <div className="Viewone-container">
            <div className="Pokémon-infos">
              <p> Weight : {this.state.pokemon.weight / 10} kg </p>
              <p> Height : {this.state.pokemon.height * 10} cm </p>
              <p> Moves : {movesJsx} </p>
              <Stats stats={this.state.pokemon.stats} />
            </div>
            <div className="Pokémon-id">
              <h1>{this.state.pokemon.name}</h1>
              {this.state.pokemon.sprites ? (
                <img
                  src={this.state.pokemon.sprites.front_default}
                  alt="Pokémon-profil"
                ></img>
              ) : (
                ""
              )}{" "}
            </div>
            <Types types={this.state.pokemon.types} />
          </div>
        </div>
      );
    }
  }
}
