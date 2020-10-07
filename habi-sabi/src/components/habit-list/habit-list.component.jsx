import React from "react";
import "./habit-list.styles.scss";
import "../../firebase/firebase.utils";
import AddHabit from "../add-habit/add-habit.component";

class HabitList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      habitName: "",
      habitRating: "",
    };
  }

  /*
  tableBody = () => (
    <tbody>
      {this.state.map((habit) => (
        <tr>
          <td>habit.habitName</td>
          <td>habit.habitRating</td>
        </tr>
      ))}
    </tbody>
  );
*/
  render() {
    const { habitName, habitRating } = this.state;
    return (
      <div className="table habitTable">
        <thead>
          <tr>
            <th scope="col">Habit Name</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
      </div>
    );
  }
}

export default HabitList;
