import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';


const Login = () => {
    return (
      <div>
        <Navigation />
        <h1>Login</h1>

        <label htmlFor="email">Votre email</label>
        <input type="email" />

        <label htmlFor="password">Mot de passe</label>
        <input type="password" />

        <p>
          Crée un compte
          <NavLink to="/signup">
            <li>ICI</li>
          </NavLink>
        </p>
      </div>
    );
};

export default Login;