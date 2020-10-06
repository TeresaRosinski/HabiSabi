import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ToolsPage from "./pages/toolspage/toolspage.component";
import AboutPage from "./pages/aboutpage/aboutpage.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tools" component={ToolsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
