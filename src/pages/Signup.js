import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    // Vérification des champs vides
    if (!email.trim()) {
      errors.email = "Veuillez entrer votre adresse e-mail.";
    }
    if (!password) {
      errors.password = "Veuillez entrer un mot de passe.";
    } else if (password.length < 6) {
      // Supposons que le mot de passe doit faire au moins 6 caractères
      errors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }
    // Si le formulaire est valide, soumettre le formulaire
    if (Object.keys(errors).length === 0) {
      // Soumettre le formulaire
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <label htmlFor="confirmPassword">Confirmez votre mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Signup;
