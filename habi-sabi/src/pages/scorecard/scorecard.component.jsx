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
import Card from "../../components/toolspreview/toolspreview.component";
import ToolsDirectory from "../../components/tools-directory/tools-directory.component";

const ScoreCard = ({ currentUser }) => (
  <div>
    {console.log(currentUser)}
    <div>
      {currentUser ? (
        <div>
          <AddNewHabit currentUser={currentUser} />
        </div>
      ) : (
        <div>To Create a Habit Score Card please Sign In.</div>
      )}
    </div>
  </div>
);
export default ScoreCard;
