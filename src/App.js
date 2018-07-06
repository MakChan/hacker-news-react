import React from "react";
import HomeView from "./Views/HomeView.jsx"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


import "./App.css";

const App = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Redirect from="/top" to="/" />
        <Route component={NoMatch} />
      </Switch>
    </Router>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default App;
