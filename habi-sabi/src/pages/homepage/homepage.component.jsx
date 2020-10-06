import React from "react";
import "./homepage.styles.scss";
import HomePageButton from "../../components/homepage-button/homepage-button.component";

function HomePage() {
  return (
    <div className="hero-container contain-fluid">
      <div className="hero-text">
        <h1>Welcome</h1>
        <HomePageButton>GET STARTED</HomePageButton>
      </div>
    </div>
  );
}
export default HomePage;
