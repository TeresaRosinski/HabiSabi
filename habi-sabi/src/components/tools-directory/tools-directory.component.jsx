import React from "react";
import ToolItem from "../tool-item/tool-item.component";
import "./tools-directory.styles.scss";

class ToolsDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Habit Scorecard",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "scorecard",
        },
        {
          title: "Wellness Tracker",
          imageUrl:
            "https://github.com/TeresaRosinski/HabiSabi/blob/main/habi-sabi/src/components/tools-directory/yoga.svg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "Experiment",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
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
