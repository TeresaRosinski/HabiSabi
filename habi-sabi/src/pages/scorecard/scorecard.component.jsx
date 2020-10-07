import React from "react";
import AddHabit from "../../components/add-habit/add-habit.component";
import "./scorecard.styles.scss";
import HabitList from "../../components/habit-list/habit-list.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "../../firebase/firebase.utils";
import "firebase/firestore";
import "firebase/auth";
import SignIn from "../../components/sign-in/sign-in.component";
import AddNewHabit from "../../components/new-addhabit/new-addhabit.component";

const ScoreCard = ({ currentUser }) => (
  <div>
    {console.log(currentUser)}
    <div>
      {currentUser ? (
        <div>
          {currentUser.id} You are signed in{" "}
          <AddNewHabit currentUser={currentUser} />
        </div>
      ) : (
        <div>To Create a Habit Score Card please Sign In.</div>
      )}
    </div>
    <section>
      <ul id="habitList"></ul>
      <button id="addHabit">Add</button>
    </section>
  </div>
);
export default ScoreCard;
