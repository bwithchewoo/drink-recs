import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav"
      style={{
        backgroundColor: "lightblue",
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
        <h1 className="home">Drink Recommendations</h1>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/alcoholic">
        Alcoholic
      </NavLink>
      <NavLink to="/non-alcoholic">
        Non-Alcoholic
      </NavLink>
      <NavLink to="/suggestion">
        Suggestion Bar
      </NavLink>
    </div>
  );
}

export default NavBar;