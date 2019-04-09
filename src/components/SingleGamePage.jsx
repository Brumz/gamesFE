import React from "react";
import "../App.css";
import NavBar from "./NavBar";

const SinglePage = props => {
  const gameSelected = props.games.map(game => {
    if (game.id == props.selected) {
      return (
        <div>
          <div>
            <NavBar />
          </div>
          <div className="singlePage">
            <h1>{game.title}</h1>
            <img className="gamePoster" src={game.poster} alt="poster" />
          </div>
        </div>
      );
    }
  });
  return <div className="singlePageMain">{gameSelected}</div>;
};

export default SinglePage;
