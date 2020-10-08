import React, { Fragment } from "react";
import "./homepage.styles.scss";
import HomePageButton from "../../components/homepage-button/homepage-button.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Fragment>
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">Welcome</div>
          <Link className="getStarted" to="/tools">
            Let's Get Started
          </Link>
        </div>
      </header>
      <legend>What To Expect</legend>
      <div className="row">
        <div className="col-4">
          <h3>Log and Analyze Current Habits</h3>
        </div>
        <div className="col-4">
          <h3>Marie Kondo Your Habits</h3>
        </div>
        <div className="col-4">
          <h3>Objectively Test Out New Habits</h3>
        </div>
      </div>
      <footer>Habi-Sabi 2020</footer>
    </Fragment>
  );
}
export default HomePage;
