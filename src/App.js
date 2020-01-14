import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Viewall from "./pages/Viewall";
import Viewone from "./pages/Viewone";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Viewall} />
            <Route exact path="/pokemon/:urlName" component={Viewone} />
          </Switch>
        </div>
      </Router>
    );
  }
}
