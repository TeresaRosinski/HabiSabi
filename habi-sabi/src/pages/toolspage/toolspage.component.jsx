import React from "react";
import { Link } from "react-router-dom";
import "./toolspage.styles.scss";
import ToolsDirectory from "../../components/tools-directory/tools-directory.component";

const ToolsPage = () => (
  <div className="container-fluid top-tools">
    <div className="triangle-right">
      <div className="tools-text">
        <h1 className="Display-1">Tools</h1>
      </div>
    </div>
    <div>
      <div className="homepage">
        <ToolsDirectory />
      </div>
    </div>
  </div>
);
export default ToolsPage;
