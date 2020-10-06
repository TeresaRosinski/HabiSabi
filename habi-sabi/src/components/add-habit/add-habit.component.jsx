import React from "react";
import "./add-habit.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class AddHabit extends React.Component {
  constructor() {
    super();
    this.state = {
      habitName: "",
      habitRating: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { habitName, habitRating } = this.state;
    console.log(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { habitName, habitRating } = this.state;
    return (
      <div className="add">
        <form className="add-habit" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="habitName"
            value={habitName}
            onChange={this.handleChange}
            label="Habit Name"
            required
          ></FormInput>
          <FormInput
            type="habitRating"
            name="habitRating"
            value={habitRating}
            onChange={this.handleChange}
            label="Habit Rating"
            required
          ></FormInput>
          <CustomButton type="submit">ADD</CustomButton>
        </form>
      </div>
    );
  }
}
export default AddHabit;
