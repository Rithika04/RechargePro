// UserSupportPage.jsx

import React from 'react';
import '../assets/css/UserSupportPage.css';
//import './UserSupportPage.css';

const UserSupportPage = () => {
  return (
    <div className="user-support-container">
      <h2>Support and Help</h2>
      <div className="support-content">
        {/* Include user support and help information here */}
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

export default UserSupportPage;
