// TransactionHistoryPage.jsx

import React from 'react';
import '../assets/css/TransactionHistoryPage.css';

const TransactionHistoryPage = () => {
  // Sample transaction data
  const transactions = [
    { id: 1, date: '2023-01-15', amount: 25.99, description: 'Purchase of goods' },
    { id: 2, date: '2023-02-03', amount: 50.00, description: 'Monthly subscription' },
    { id: 3, date: '2023-03-22', amount: 15.50, description: 'Online service payment' },
    { id: 4, date: '2023-04-22', amount: 15.50, description: 'Online service payment' },
    
    // Add more transactions as needed
  ];

  return (
    <div className="transaction-history-container">
      <h2>Transaction History</h2>
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-info">
              <p><span className="field-label">ID:</span> {transaction.id}</p>
              <p><span className="field-label">Date:</span> {transaction.date}</p>
              <p><span className="field-label">Amount:</span> ${transaction.amount.toFixed(2)}</p>
              <p><span className="field-label">Description:</span> {transaction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
