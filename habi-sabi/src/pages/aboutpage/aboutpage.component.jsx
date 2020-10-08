import React from "react";
import "./aboutpage.styles.scss";
import TwoPeople from "./twopeople.svg";

const AboutPage = () => (
  <div ClassName="Display-4 container-fluid">
    <div className="aboutPage-header">
      <h1>Have you heard the term Japanese "Wabi-Sabi?"</h1>
      <img src={TwoPeople} alt="man on peddle pusher" />
      <h3 className="left">
        Wabi-Sabi describes the idea of accepting and finding beauty in
        imperfection.
      </h3>
      <p>
        What if we cultivated habits that we actually wanted.Habits that brought
        us joy? Instead of building up habits that we think are 'right' or will
        make us seem more 'perfect'. Habi-Sabi wants to help users consciously
        decide what to add to their life by using object measurments. It's about
        choosing what's best for you and your individual life experience
      </p>
    </div>
    <br />
    <div className="resources">
      <h2>Habi-Sabi is Desiged with Three Books in Mind</h2>
      <div className="row">
        <div className="col-4 book">
          <h4>
            <strong>The Power of Habit</strong>
          </h4>
          <p>
            <em>by Charles Duhigg</em>
          </p>
          <p>
            <em>"There's nothing you can't do if you get the habits right"</em>
          </p>
        </div>
        <div className="col-4 book">
          <h4>
            <strong>Atomic Habits</strong>
          </h4>
          <p>
            <em>by James Clearwater</em>
          </p>
          <p>
            <em>
              "Habits are not a finish line to be crossed, they are a lifestyle
              to be lived."
            </em>
          </p>
        </div>
        <div className="col-4 book">
          <h4>
            <strong>The Brain that Changes Itself</strong>
          </h4>
          <p>
            <em>by Norman Doidge</em>
          </p>
          <p>
            <em>
              {" "}
              “Ironically, some of our most stubborn habits and disorders are
              products of our plasticity.”
            </em>
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default AboutPage;
