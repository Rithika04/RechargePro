// UserFeedbackPage.jsx

import React, { useState } from 'react';
import '../assets/css/UserFeedbackPage.css';

const UserFeedbackPage = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the user's feedback, for example, send it to the backend
    console.log('User Feedback submitted:', feedback);
    // You can add further actions like displaying a thank you message or clearing the input
    setFeedback('');
  };

  return (
    <div className="user-feedback-container">
      <h2>Give Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Type your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default UserFeedbackPage;
