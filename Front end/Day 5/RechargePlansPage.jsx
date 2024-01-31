// RechargePlansPage.jsx

import React from 'react';
import '../assets/css/RechargePlansPage.css';

const RechargePlansPage = () => {
  // Sample recharge plans data
  const rechargePlans = [
    { id: 1, name: 'Basic Plan', amount: 10.99, validity: '30 days', data: '1 GB' },
    { id: 2, name: 'Standard Plan', amount: 19.99, validity: '45 days', data: '2 GB' },
    { id: 3, name: 'Premium Plan', amount: 29.99, validity: '60 days', data: '5 GB' },
    { id: 4, name: 'Ultra Plan', amount: 49.99, validity: '90 days', data: '10 GB' },
    // Add more plans as needed
  ];

  return (
    <div className="recharge-plans-container">
      <h2>Recharge Plans</h2>
      <div className="plans-list">
        {rechargePlans.map((plan) => (
          <div key={plan.id} className="plan-item">
            <div className="plan-info">
              <p><span className="field-label">Plan:</span> {plan.name}</p>
              <p><span className="field-label">Amount:</span> ${plan.amount.toFixed(2)}</p>
              <p><span className="field-label">Validity:</span> {plan.validity}</p>
              <p><span className="field-label">Data:</span> {plan.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RechargePlansPage;
