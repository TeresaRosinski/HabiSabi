import React, { useEffect, useState, Fragment } from "react";
import firebase from "../../firebase/firebase.utils";
import "../../firebase/firebase.utils";
import { v4 as uuidv4 } from "uuid";
import "./new-addhabit.styles.scss";

function AddNewHabit(props) {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const ref = firebase.firestore().collection("habits");

  function getHabits() {
    setLoading(true);

    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const habitData = doc.data();
        if (habitData.userId === props.currentUser.uid) {
          items.push(doc.data());
        }
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
    <Fragment className="container">
      <div className="scorecard-heading">
        <h1>Habit Scorecard</h1>
        <p>Add current habits here.</p>
      </div>
      <div>
        <div className="row group">
          <div className="col-4">
            <label>Habit Name</label>
            <input
              className="habitform-input"
              type="text"
              name="habit"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-4">
            <label>Habit Rating</label>
            <input
              className="habitform-input"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="col-4">
            <button
              className="habit-submit-button"
              onClick={() =>
                addHabit({
                  name,
                  rating,
                  id: uuidv4(),
                  userId: props.currentUser.id,
                })
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {loading ? <h1>Loading....</h1> : null}
      <table className="table habitTable">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        {habits.map((habit) => (
          <tbody>
            <th key={habit.id}>{habit.name}</th>
            <th>{habit.rating}</th>
            <th>
              <button className="delete" onClick={() => deleteHabit(habit)}>
                {" "}
                Delete{" "}
              </button>
            </th>
          </tbody>
        ))}
      </table>
    </Fragment>
  );
}
export default AddNewHabit;
