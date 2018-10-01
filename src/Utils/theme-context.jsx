import React from 'react';

export const themes = {
  light: {
    active: "",
    color: "#000",
    secondaryColor: "#000",
    storyColor: "#000",
    linkColor: "#5500ce",
    navBackground: "#eeeeee",
    storyBackground: "#f9f4ff",
    background: "#fff",
  },
  dark: {
    active: "active",
    color: "#fff",
    secondaryColor: "#bbbbbb",
    storyColor: "#bbb",
    linkColor: "#fff",
    navBackground: "#222222",
    storyBackground: "#25272a",
    background: "#141518"
  }
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

export function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
}
