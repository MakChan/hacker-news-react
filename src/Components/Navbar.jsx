import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "../Utils/theme-toggler-button";
import { withTheme } from '../Utils/theme-context';

const links = ["top", "new", "show", "ask", "jobs", "best"];


function Navbar(props) {
  const active = props.active;
  const theme = props.theme.theme;

  const navLinks = links.map(link => {
    if (link === active) 
      return <Link key={link} style={{color: theme.secondaryColor}} className="nav-link active" to={`/${link}`}>{link}</Link>
    else 
      return <Link key={link} style={{color: theme.secondaryColor}} className="nav-link" to={`/${link}`}>{link}</Link>
  });
  
  return (
    <div className="nav-scroller box-shadow" style={{backgroundColor: theme.navBackground}}>
      <nav className="nav nav-underline">
        <p className="nav-link" style={{color: theme.secondaryColor}}>Hacker News</p>
        {navLinks}
        <ThemeSwitch />
      </nav>
    </div>    
  )
}

export default withTheme(Navbar);
