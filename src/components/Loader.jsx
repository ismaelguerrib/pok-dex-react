import React, { Component } from "react";
import loader from "../assets/pokeloader.gif";

export default class Loader extends Component {
  render() {
    return (
      <div className="Loader-container">
        <h1> Loading ...</h1>
        <img src={loader} alt="loading..." />;
      </div>
    );
  }
}
