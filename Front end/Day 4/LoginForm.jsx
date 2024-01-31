// LoginForm.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Add your authentication logic here

    // Assuming a successful login, redirect to the home page
    // You may replace this with your actual authentication logic
    const isAuthenticated = true;

    if (isAuthenticated) {
      navigate('/UserHomePage');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="submit-button">
          Login
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/RegistrationForm">Register Here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
