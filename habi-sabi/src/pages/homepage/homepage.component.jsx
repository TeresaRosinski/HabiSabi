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
          <p>
            Use the Habit Scorecard to track all of your current habits. Rate
            each one as being 'positive', 'negative', or 'netural'.This
            technique comes from the book, "Atomic Habits: Tiny Changes,
            Remarkable Results" by James Clear{" "}
          </p>
        </div>
        <div className="col-4">
          <h3>Marie Kondo Your Habits</h3>
          <p>
            As you start to analyze your habits, develop tools to help you let
            go of the habits that no longer serve you, and build up habits that
            "spark joy"
          </p>
        </div>
        <div className="col-4">
          <h3>Objectively Test Out New Habits</h3>
          <p>
            As you add in new habits to your life, continue tracking your
            general wellness in our Wellness Tracker. Quickly spot if your new
            habits are having any positive or negative spill-over effects
          </p>
        </div>
      </div>
      <footer>Habi-Sabi 2020</footer>
    </Fragment>
  );
}
export default HomePage;
