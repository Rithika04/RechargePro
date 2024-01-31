// AdminProfilePage.jsx

import React from 'react';
import '../assets/css/AdminProfilePage.css';
import AdminSidebar from './AdminSidebar';

const AdminProfilePage = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />

      <div className="admin-content-container">
        <h2>Admin Profile</h2>
        <div className="admin-profile">
          <img
            src="https://via.placeholder.com/150"
            alt="Admin Profile"
            className="admin-profile-image"
          />
          <div className="admin-details">
            <p>
              <span className="label">Username:</span> admin123
            </p>
            <p>
              <span className="label">Email:</span> admin@example.com
            </p>
            <p>
              <span className="label">Role:</span> Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
