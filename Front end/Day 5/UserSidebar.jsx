// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/UserSidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to="/">Recharge App</Link>
      </div>
      <nav className="nav-links">
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <Link to="/UserProfilePage">Profile</Link>
        <Link to="/RechargePlansPage">Recharge Plans</Link>
        <Link to="/UserPaymentPage">Payment</Link>
        <Link to="/TransactionHistoryPage">Transaction History</Link>
        <Link to="/UserAddOnsPage">User AddOns</Link>
        <Link to="/UserSupportPage">Support</Link>
        <Link to="/UserFeedbackPage">Feedback Form</Link>
       
        
        
      </nav>
    </aside>
  );
};

export default Sidebar;