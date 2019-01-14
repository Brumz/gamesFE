import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import GamesIndex from "./components/GamesIndex";

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }
  async componentDidMount() {
    let response = await fetch("https://rumz-games.herokuapp.com/games/");
    let myJson = await response.json();
    this.setState({
      games: myJson
    });
  }
  render() {
    return (
      <>
        <div className="App" />
        <BrowserRouter>
          <div className="routes">
            <Route
              path="/"
              exact
              render={() => <HomePage games={this.state.games} />}
            />
            <Route
              path="/games"
              exact
              render={() => <GamesIndex games={this.state.games} />}
            />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
