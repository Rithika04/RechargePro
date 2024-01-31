// AdminSidebar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../assets/css/AdminSidebar.css';
//import './AdminSidebar.css';

const AdminSidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`admin-sidebar ${sidebarVisible ? 'expanded' : ''}`}>
      <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
      ☰
      
      </button>
      <div className="sidebar-menu">
        <ul className='sidebar-links'>
         
          <li>
          <br></br>
            <Link to="/AdminProfilePage">Admin profile</Link>
          </li>

          

          <li>
          <br></br>
        
            <Link to="/AdminPrepaidPlansPage">Prepaid Plans</Link>
          </li>

          <li>
          <br></br>
        
            <Link to="/AdminPostPaidPlans">Postpaid Plans</Link>
          </li>

          <li>
          <br></br>
        
            <Link to="/AdminAddonsPage">Add ons</Link>
          </li>

          <li>
          <br></br>
        
            <Link to="/AdminRechargeHistoryPage">Recharge History</Link>
          </li>

          <li>

          <br></br>
         
            <Link to="/AdminReports">Reports</Link>
          </li>
          
          
          <li>
          <br></br>
        
            <Link to="/AdminSupportPage">Support</Link>
          </li>
          
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
}

export default AdminSidebar;
