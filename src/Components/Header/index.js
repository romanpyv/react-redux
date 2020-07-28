import {NavLink} from "react-router-dom";
import React from "react";
import './styles.css';

export default function Header() {
  return (
    <header className="App-header">
      <nav className="header-nav">
        <div className="home-link-container">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </div>

        <div className="other-link-container">
          <NavLink to="/test" activeClassName="active">Test</NavLink>

          <NavLink to="/chart" activeClassName="active">Charts</NavLink>

          <NavLink to="/result" activeClassName="active">Result</NavLink>
        </div>
      </nav>
    </header>
  );
}