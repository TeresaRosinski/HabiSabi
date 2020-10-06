import React from "react";
import AddHabit from "../../components/add-habit/add-habit.component";
import "./scorecard.styles.scss";
import HabitList from "../../components/habit-list/habit-list.component";

const ScoreCard = () => (
  <div>
    <h1>SCORE CAQRD</h1>
    <AddHabit />
    <HabitList />
  </div>
);
export default ScoreCard;
