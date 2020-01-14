import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Item extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: ""
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    console.log(imageUrl);
    this.setState({
      name,
      imageUrl,
      pokemonIndex
    });
  }

  render() {
    // console.log(this);
    return (
      <Link to={`pokemon/${this.state.name}`}>
        <div className="Item">
          <h4>
            {this.state.name
              .toLowerCase()
              .split(" ")
              .map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </h4>
          <img src={this.state.imageUrl} alt="Pokémon-profil"></img>
          <h5> #{this.state.pokemonIndex}</h5>
        </div>
      </Link>
    );
  }
}
