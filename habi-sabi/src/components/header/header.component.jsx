import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      Habi-Sabi
    </Link>
    <div className="options">
      <Link className="option" to="/tools">
        TOOLS
      </Link>
      <Link className="option" to="/about">
        ABOUT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);
export default Header;
