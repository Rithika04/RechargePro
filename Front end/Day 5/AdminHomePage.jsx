// AdminHomePage.jsx

import React from 'react';
import '../assets/css/AdminHomePage.css';
import AdminSidebar from './AdminSidebar';

const AdminHomePage = () => {
  return (
    // <div className='side'>
    <div className="admin-home-container">
<AdminSidebar/>
      
      <header>
        <h2>Welcome to Admin Home Page</h2>
      </header>
      <section className="admin-content">
        <strong>WELCOME ADMIN!This is your Dashboard.</strong>
        <div className="tasks-section">
          <h3>Tasks</h3>
          <ul>
            <li>Review user reports</li>
            <li>Update system settings</li>
            <li>Generate monthly reports</li>
          </ul>
        </div>
        <div className="settings-section">
          <h3>System Settings</h3>
          <ul>
            <li>Manage user roles</li>
            <li>Configure notification preferences</li>
            <li>View system logs</li>
          </ul>
        </div>
      </section>
    </div>
    // </div>
  );
};

export default AdminHomePage;
