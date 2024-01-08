import React from "react";
import { Link } from "react-router-dom";

const TitleScreen = () => {
  return (
    <div className="body">
      <div className="title">
        <h1>Maze of the One Piece</h1>
        <div className="title-btn">
        <a href="/Level1">
            <button>Start Game</button>
          </a>
          <Link to="/Instructions">
            <button>Instructions</button>
          </Link>
          <Link to="/About">
            <button>About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TitleScreen;
