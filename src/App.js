import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import GamesIndex from "./components/GamesIndex";
import AddGame from "./components/AddGame";

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      title: "",
      publisher: "",
      developer: "",
      year: undefined,
      multiplayer: undefined,
      rating: undefined,
      poster: "",
      selected: undefined,
      allInputs: false
    };
  }
  async componentDidMount() {
    let response = await fetch("https://rumz-games.herokuapp.com/games/");
    let myJson = await response.json();
    this.setState({
      games: myJson
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const newGame = {
      title: this.state.title,
      publisher: this.state.publisher,
      developer: this.state.developer,
      year: this.state.year,
      multiplayer: this.state.multiplayer,
      rating: this.state.rating,
      poster: this.state.poster
    };
    fetch("https://rumz-games.herokuapp.com/games/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGame)
    }).then(res => res.json());
    // .then(() => (window.location = ""));
  };
  newGameInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    if (
      this.state.title.length > 0 &&
      this.state.publisher.length > 0 &&
      this.state.developer > 0 &&
      this.state.year > 0
    ) {
      this.setState({ allInputs: true });
    }
  };
  deleteGame = e => {
    fetch(`https://rumz-games.herokuapp.com/games/${e.target.id}`, {
      method: "DELETE"
    }).then(() => this.reload());
  };
  gameSelected = e => {
    this.setState({ selected: e.target.id });
  };
  reload = () => {
    fetch("https://rumz-games.herokuapp.com/games/")
      .then(res => res.json())
      .then(res =>
        this.setState({
          game: res,
          title: "",
          publiher: "",
          developer: undefined,
          year: undefined,
          multiplayer: undefined,
          rating: undefined,
          poster: "",
          selected: undefined
        })
      );
  };
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
              render={() => (
                <GamesIndex
                  selectedGame={this.gameSelected}
                  deleteGame={this.deleteGame}
                  games={this.state.games}
                />
              )}
            />
            <Route
              path="/newgame"
              exact
              render={() => (
                <AddGame
                  newGameInput={this.newGameInput}
                  handleSubmit={this.handleSubmit}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
