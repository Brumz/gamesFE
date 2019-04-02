import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const HomePage = props => {
  return (
    <div className="backGround">
      <NavBar />
      <div className="homePage">
        <div className="gamesRoute">
          <Link to="/games">
            <button className="gamesBtn" onClick={props.games}>
              Gamez
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
