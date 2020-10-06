import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ToolsPage from "./pages/toolspage/toolspage.component";
import AboutPage from "./pages/aboutpage/aboutpage.component";
import { Switch, Route } from "react-router-dom";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HabitScorecard from "./pages/scorecard/scorecard.component";
import ScoreCard from "./pages/scorecard/scorecard.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tools" component={ToolsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/scorecard" component={ScoreCard} />
        </Switch>
      </div>
    );
  }
}

export default App;
