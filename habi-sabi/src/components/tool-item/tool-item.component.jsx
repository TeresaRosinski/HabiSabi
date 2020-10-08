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
  production,
}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span>{production}</span>
    </div>
  </div>
);
export default withRouter(ToolItem);
