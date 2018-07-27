import React, { Component } from 'react';
import {ThemeContext} from './theme-context';
import Switch from "react-switch";

class Button extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    this.props.toggleTheme();
  }

  render() {
    return (
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          onColor="#757676"
          onHandleColor="#fff"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="theme-switch"
          aria-label="Switch for theme"
        />
    )
  }
}


export default ThemeSwitch => (
  <ThemeContext.Consumer>
    { ({ theme, toggleTheme}) => <Button theme={theme} toggleTheme={toggleTheme} /> }
  </ThemeContext.Consumer>
);