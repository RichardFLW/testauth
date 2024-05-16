import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>acceuil</li>
        </NavLink>
      </ul>

      <NavLink to="/about">
        <li>à propos</li>
      </NavLink>

      <NavLink to="/login">
        <li>connexion</li>
      </NavLink>
    </div>
  );
};

export default Navigation;
