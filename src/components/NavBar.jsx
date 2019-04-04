import React from "react";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <a className="home" href="/">
        Home
      </a>
      <a className="gamez" href="/games">
        Gamez
      </a>
      <a className="add" href="/newgame">
        Add
      </a>
    </nav>
  );
};

export default NavBar;
