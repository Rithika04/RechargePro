// AdminNavigation.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/AdminNavigation.css';
//import './AdminNavigation.css';

const AdminNavigation = () => {
  return (
    <nav className="admin-navigation">
      <ul>
        <li>
          <Link to="/admin-home">Home</Link>
        </li>
        <li>
          <Link to="/admin-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin-users">Users</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default AdminNavigation;
