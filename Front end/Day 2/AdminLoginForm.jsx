// AdminLoginForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AdminLoginForm.css';

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminLogin = () => {
    // Basic validation
    if (!username || !password) {
      setError('Please enter the username and password');
      return;
    }

    // Add your admin authentication logic here
    // For simplicity, let's assume the login is successful
    const isAdminAuthenticated = true;

    if (isAdminAuthenticated) {
      // Redirect to the Admin Home Page
      navigate('/AdminHomePage');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleAdminLogin}>Login</button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
