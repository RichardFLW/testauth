import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <div className="navigation">
        <ul>
          <NavLink to="/LegalNotice">
            <li>mentions légales</li>
          </NavLink>
        </ul>

        <NavLink to="/cookie">
          <li>cookies</li>
        </NavLink>
      </div>
    );
};

export default Footer;