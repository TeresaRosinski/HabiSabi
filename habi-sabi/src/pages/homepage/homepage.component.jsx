import React from "react";
import "./homepage.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

function HomePage() {
  return (
    <div className="hero-container .container-fluid">
      <div className="hero-text">
        <h1>Welcome</h1>
        <CustomButton>GET STARTED</CustomButton>
      </div>
    </div>
  );
}
export default HomePage;
