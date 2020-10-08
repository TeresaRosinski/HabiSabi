import React from "react";
import "./tool-item.styles.scss";
import { withRouter } from "react-router-dom";

const ToolItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
  toolName,
}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
    </div>
  </div>
);
export default withRouter(ToolItem);
