import React from "react";
import "./scorecard.styles.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "../../firebase/firebase.utils";
import "firebase/firestore";
import "firebase/auth";
import SignIn from "../../components/sign-in/sign-in.component";
import AddNewHabit from "../../components/new-addhabit/new-addhabit.component";
import ToolsDirectory from "../../components/tools-directory/tools-directory.component";

const ScoreCard = ({ currentUser }) => (
  <div>
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
