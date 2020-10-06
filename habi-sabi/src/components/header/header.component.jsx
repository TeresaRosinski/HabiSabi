import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/tools">
        TOOLS
      </Link>
      <Link className="option" to="/about">
        ABOUT
      </Link>
    </div>
  </div>
);
export default Header;
