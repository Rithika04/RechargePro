// AdminReportsPage.jsx

import React from 'react';
import '../assets/css/AdminReports.css';
//import './AdminReportsPage.css';

const AdminReports = () => {
  return (
    <div className="admin-reports-container">
      <h2>Admin Reports Page</h2>
      <div className="reports-content">
        {/* Add reports content here */}
        <div className="report">
          <h3>Report 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="report">
          <h3>Report 2</h3>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="report">
          <h3>Report 3</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminReports;
