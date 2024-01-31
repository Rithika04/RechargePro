// AdminRechargeHistoryPage.jsx

import React, { useState, useEffect } from 'react';
import '../assets/css/AdminRechargeHistoryPage.css';

const AdminRechargeHistoryPage = () => {
  const [rechargeHistory, setRechargeHistory] = useState([]);

  useEffect(() => {
    // Fetch or initialize the recharge history data
    // Replace this with your actual data fetching logic
    const mockData = [
      { id: 1, user: 'John Doe', amount: '$20', date: '2022-03-15' },
      { id: 2, user: 'Jane Doe', amount: '$15', date: '2022-03-14' },
      // Add more recharge history entries as needed
    ];
    setRechargeHistory(mockData);
  }, []);

  return (
    <div className="admin-recharge-history-container">
      <h2>Admin - Recharge History</h2>

      <div className="recharge-history-list">
        {rechargeHistory.map((entry) => (
          <div key={entry.id} className="recharge-history-item">
            <div>
              <strong>User:</strong> {entry.user}
            </div>
            <div>
              <strong>Amount:</strong> {entry.amount}
            </div>
            <div>
              <strong>Date:</strong> {entry.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRechargeHistoryPage;
