import React from "react";
import { Link } from "react-router-dom";
import "./toolspage.styles.scss";
import ToolsDirectory from "../../components/tools-directory/tools-directory.component";

const ToolsPage = () => (
  <div className="container-fluid top-tools">
    <div className="triangle-right homepage">
      <div className="tools-text">
        <h1 className="Display-1">Tools</h1>
        <p>
          "Once you understand that habits can change, you have the freedom -
          and the responsibility to remake them. Once you understand that habits
          can be rebuilt, the power of habit becomes easier to grasp, and the
          only option left is to get to work." - Charles Duhigg{" "}
        </p>
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
