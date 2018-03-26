import React from "react";
import "./Navbar.css";

const Nav = () => (
  <nav className="navbar bg-info navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle ">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          React Movie Watch List
        </a>
      </div>
      <form className="form-inline">
      <div className="form-group">
        <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
          <button type="submit" className="btn btn-primary" id="button1" type="submit">Search</button>
        </div>
        </form>
    </div>
  </nav>
);

export default Nav;
