import React from "react";
import TopView from "./Views/TopView.jsx"
import BestView from "./Views/BestView.jsx"
import AskView from "./Views/AskView.jsx"
import ShowView from "./Views/ShowView.jsx"
import JobsView from "./Views/JobsView.jsx"
import NewView from "./Views/NewView.jsx"

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
        <Route exact path="/" component={TopView} />
        <Route path="/new" component={NewView} />
        <Route path="/best" component={BestView} />
        <Route path="/ask" component={AskView} />
        <Route path="/show" component={ShowView} />>
        <Route path="/jobs" component={JobsView} />
        <Redirect exact from="/top" to="/" />
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
