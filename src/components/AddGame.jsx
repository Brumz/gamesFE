import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";

const AddGame = props => {
  return (
    <div>
      <NavBar />
      <div className="form">
        <h1> Add Game </h1>
        <form className="formIn" onSubmit={props.handleSubmit}>
          <label>
            Title{" "}
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={props.newGameInput}
            />
          </label>
          <label>
            Poster URL{" "}
            <input
              type="text"
              name="poster"
              placeholder="Url"
              onChange={props.newGameInput}
            />
          </label>
          <label>
            Publisher
            <input
              type="text"
              name="publisher"
              placeholder="Publisher"
              onChange={props.newGameInput}
            />
          </label>
          <label>
            Developer{" "}
            <input
              type="text"
              name="developer"
              placeholder="Developer"
              onChange={props.newGameInput}
            />
          </label>
          <label>
            Year
            <input
              type="number"
              name="year"
              placeholder="Year Released"
              onChange={props.newGameInput}
            />
          </label>
          <label>
            Multiplayer
            <input
              type="boolean"
              name="Multiplayer"
              placeholder="Is this multiplayer?"
              onChange={props.newGameInput}
            />
          </label>
          <label>
            Rating
            <input
              type="number"
              name="rating"
              placeholder="Rate game 1-5"
              onChange={props.newGameInput}
            />
          </label>
          <button className="addMovieBtn"> Add Game </button>
        </form>
      </div>
    </div>
  );
};

export default AddGame;
