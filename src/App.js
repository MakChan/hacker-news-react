import React, {Component} from "react";
import TopView from "./Views/TopView.jsx"
import BestView from "./Views/BestView.jsx"
import AskView from "./Views/AskView.jsx"
import ShowView from "./Views/ShowView.jsx"
import JobsView from "./Views/JobsView.jsx"
import NewView from "./Views/NewView.jsx"
import {ThemeContext, themes} from './Utils/theme-context';

import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
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
      </ThemeContext.Provider>
    )
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default App;
