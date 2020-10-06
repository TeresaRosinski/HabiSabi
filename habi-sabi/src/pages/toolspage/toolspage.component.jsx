import React from "react";
import { Link } from "react-router-dom";
import "./toolspage.styles.scss";

const ToolsPage = () => (
  <div className="container-fluid top-tools">
    <div className="triangle-right">
      <div className="tools-text">
        <h1 className="Display-1">Tools</h1>
      </div>
    </div>
    <div>
      <Link to="/scorecard">
        <h1>Habit Scorecard</h1>
      </Link>
    </div>
  </div>
);
export default ToolsPage;
