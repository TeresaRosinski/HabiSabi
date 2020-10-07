import React, { useEffect, useState, Fragment } from "react";
import firebase from "../../firebase/firebase.utils";
import "../../firebase/firebase.utils";
import { v4 as uuidv4 } from "uuid";
import "./new-addhabit.styles.scss";

function AddNewHabit() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const ref = firebase.firestore().collection("habits");
  console.log("ref" + " " + ref.name);

  function getHabits() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setHabits(items);
      setLoading(false);
    });
  }

  //GET Funcionality
  function getHabits2() {
    setLoading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setHabits(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getHabits();
  }, []);
  //ADD Functionality
  function addHabit(newHabit) {
    ref
      .doc(newHabit.id)
      .set(newHabit)
      .catch((err) => {
        console.log(err);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  //delete
  function deleteHabit(habit) {
    ref
      .doc(habit.id)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  }
  //Edit
  function editHabit(updatedHabit) {
    setLoading();
    ref
      .doc(updatedHabit.id)
      .update(updatedHabit)
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Fragment>
      <h1>Habits</h1>
      <h2>Add New Habit</h2>
      <div className="group">
        <br></br>
        <label>Habit Name</label>
        <input
          className="habitform-input"
          type="text"
          name="habit"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Habit Rating</label>
        <input
          className="habitform-input"
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          className="habit-submit-button"
          onClick={() => addHabit({ name, rating, id: uuidv4() })}
        >
          Submit
        </button>
      </div>
      <hr />
      {loading ? <h1>Loading....</h1> : null}
      {console.log(habits)}
      {habits.map((habit) => (
        <div className="habit" key={habit.id}>
          <h2>{habit.name}</h2>
          <h2>{habit.rating}</h2>
          <div>
            <button onClick={() => deleteHabit(habit)}> Delete </button>
            <button onClick={() => editHabit({ name, rating, id: habit.id })}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
export default AddNewHabit;
