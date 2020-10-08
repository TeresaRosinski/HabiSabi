import React from "react";
import ToolItem from "../tool-item/tool-item.component";
import "./tools-directory.styles.scss";

import yoga from "./yoga.svg";
import desk from "./desk.svg";
import game from "./game.svg";
class ToolsDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Habit Scorecard",
          imageUrl: desk,
          id: 1,
          linkUrl: "scorecard",
        },
        {
          title: "Wellness Tracker",
          imageUrl: yoga,
          id: 2,
          linkUrl: "underConstruction",
          production: "Being Built",
        },
        {
          title: "Experiment",
          imageUrl: game,
          id: 3,
          linkUrl: "underConstruction",
          production: "Being Built",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <ToolItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default ToolsDirectory;
