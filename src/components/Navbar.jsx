import React from "react";
import { NavLink } from "react-router-dom";

import PokédexLogo from "../assets/pokédex-logo.png";

function NavMain() {
  return (
    <div className="Nav-bar">
      <nav className="Nav">
        <NavLink exact to="/">
          <img className="PokédexLogo" src={PokédexLogo} alt="Pokédex-logo" />
        </NavLink>
      </nav>
    </div>
  );
}

export default NavMain;
