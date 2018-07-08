import React from "react";
import { Link } from "react-router-dom";
import ThemeTogglerButton from "../Utils/theme-toggler-button";
import { withTheme } from '../Utils/theme-context';

const links = ["top", "new", "show", "ask", "jobs", "best"];


function Navbar(props) {
  const active = props.active;
  const theme = props.theme.theme;

  const navLinks = links.map(link => {
    if (link === active) 
      return <Link key={link} className="nav-link active" to={`/${link}`}>{link}</Link>
    else 
      return <Link key={link} className="nav-link" to={`/${link}`}>{link}</Link>
  });
  
  return (
    <div className="nav-scroller box-shadow" style={{backgroundColor: theme.navBackground, color: theme.color}}>
      <nav className="nav nav-underline">
        <p className="nav-link">Hacker News</p>
        {navLinks}
        <ThemeTogglerButton />
      </nav>
    </div>    
  )
}

export default withTheme(Navbar);
