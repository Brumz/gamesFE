import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const GamesIndex = props => {
  const games = props.games.map(games => {
    return (
      <div id={games.id}>
        <div className="gamesList">
          <div className="gameTitle">
            <h1> {games.title}</h1>
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
