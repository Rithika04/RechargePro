// AdminSupportPage.jsx

import React from 'react';
import '../assets/css/AdminSupportPage.css';
//import './AdminSupportPage.css';

const AdminSupportPage = () => {
  return (
    <div className="admin-support-container">
      <h2>Admin Support and Help Page</h2>
      <div className="support-content">
        {/* Add support and help content here */}
        <div className="support-section">
          <h3>How can we assist you?</h3>
          <p>If you have any questions or need assistance, please feel free to reach out to our support team.</p>
        </div>
        <div className="support-section">
          <h3>Contact Information</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="support-section">
          <h3>Frequently Asked Questions (FAQs)</h3>
          <p>Find answers to common questions in our FAQs section.</p>
          <a href="/faq">Visit FAQs</a>
        </div>
      </div>
    </div>
  );
}

export default AdminSupportPage;
