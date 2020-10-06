import React from "react";
import "./homepage-button.styles.scss";

const HomePageButton = ({ children, ...otherProps }) => (
  <button className="homepage-button" {...otherProps}>
    {children}
  </button>
);
export default HomePageButton;
