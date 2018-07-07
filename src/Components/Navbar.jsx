import React from 'react';
import {
    Link
  } from "react-router-dom";


const Navbar = () =>
<div>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      {/* <p className="navbar-brand m-auto mr-lg-0">Hacker News</p> */}
      <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse offcanvas-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/top">Top
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new">New 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/show">Show
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ask">Ask
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">Jobs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/best">Best                
            </Link>
          </li>
        </ul>
      </div>
    </nav>

</div>

export default Navbar

