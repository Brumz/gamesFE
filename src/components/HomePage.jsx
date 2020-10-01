import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import LandingNav from "../components/LandingNav";

const HomePage = props => {
  return (
    <div className="backGround">
      <LandingNav />
      <div className="homePage">
        <div className="gamesRoute">
          <Link className="link" to="/games">
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
