import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const GamesIndex = props => {
  const games = props.games.map(games => {
    return (
      <div className="gamesIndex" id={games.id}>
        <div className="gamesList">
          <div className="gameTitle">
            <Link to="/game" className="gamePageLink">
              <h1 className="title" onClick={props.selectedGame} id={games.id}>
                {games.title}
              </h1>
            </Link>
          </div>
          <div className="gamePoster">
            <img className="gamePoster" src={games.poster} alt="poster" />
          </div>
          <div className="gamePublisher">
            <h2> Publisher: {games.publisher}</h2>
          </div>
          <div className="gameDeveloper">
            <h2>Developer: {games.developer}</h2>
          </div>
          <div className="gameYear">
            <h2> Year: {games.year}</h2>
          </div>
          <div className="gameMultiplayer">
            <h2>
              Multiplayer:{" "}
              {games.multiplayer === true ? <p>True</p> : <p>False</p>}
            </h2>
          </div>
          <div className="gameRating">
            <h2>Rating: {games.rating}</h2>
          </div>
          <div className="Btns">
            <button
              className="deleteBtn"
              id={games.id}
              onClick={props.deleteGame}
            >
              Delete Game
            </button>
            <button className="editGame">Edit Game</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="gamesDisplayed">
      <NavBar />
      <div className="games">{games}</div>
    </div>
  );
};

export default GamesIndex;
