import React from "react";
import { Link } from "react-router-dom";

const links = ["top", "new", "show", "ask", "jobs", "best"];


function Navbar(props) {
  const active = props.active;

  const navLinks = links.map(link => {
    if (link === active) 
      return <Link className="nav-link active" to={`/${link}`}>{link}</Link>
    else 
      return <Link className="nav-link" to={`/${link}`}>{link}</Link>
  });

  return (
    <div className="nav-scroller bg-white box-shadow">
      <nav className="nav nav-underline">
        <p className="nav-link">Hacker News</p>
        {navLinks}
      </nav>
    </div>    
  )
}

export default Navbar;
