// UserNavigation.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/UserNavigation.css'
//import './UserNavigation.css';

const UserNavigation = () => {
  return (
    <nav className="user-navigation">
      <ul>
        <li>
          <Link to="/user-home">Home</Link>
        </li>
        <li>
          <Link to="/user-profile">Profile</Link>
        </li>
        <li>
          <Link to="/user-settings">Settings</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default UserNavigation;
