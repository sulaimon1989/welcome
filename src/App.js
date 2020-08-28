import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Sulaimon" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
