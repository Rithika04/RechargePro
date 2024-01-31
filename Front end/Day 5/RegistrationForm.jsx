// RegistrationForm.jsx

import React, { useState } from 'react';
import '../assets/css/RegistrationForm.css';
import { Link } from 'react-router-dom';
// import './RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Example: You might want to send a request to a server for user registration
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

       
        <button type="button" onClick={handleRegister}>
        Register
      </button>
      <Link to="/">Already have an account? Login here.</Link>
    
      </form>
    </div>
  );
};

export default RegistrationForm;
