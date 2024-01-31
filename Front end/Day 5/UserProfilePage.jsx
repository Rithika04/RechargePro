// UserProfilePage.jsx

import React from 'react';
import UserSidebar from './UserSidebar';
import '../assets/css/UserProfilePage.css';
//import './UserProfilePage.css';

const UserProfilePage = () => {
  return (
    <div className="user-page">
      <UserSidebar />
      <div className="user-content user-profile-page">
        <h2>Your Profile</h2>
        <div className="profile-details">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Phone:</strong> +1 123-456-7890</p>
          <p><strong>Address:</strong> 123 Main St, Cityville</p>
          <p><strong>Date of Birth:</strong> January 1, 1990</p>
          {/* Add more user profile details as needed */}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
