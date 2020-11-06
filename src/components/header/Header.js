import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link path="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link path="/" className="item">
          All Streams
        </Link>
      </div>
    </div>
  );
};

export default Header;
