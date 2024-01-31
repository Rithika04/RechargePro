// AdminPostPaidPlansPage.jsx

import React, { useState, useEffect } from 'react';
import '../assets/css/AdminPostPaidPlans.css';

const AdminPostPaidPlans = () => {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ name: '', data: '', price: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Fetch or initialize the plans data
    // Replace this with your actual data fetching logic
    const mockData = [
      { id: 1, name: 'Standard Plan', data: '10 GB', price: '$15' },
      { id: 2, name: 'Premium Plan', data: '30 GB', price: '$25' },
      // Add more plans as needed
    ];
    setPlans(mockData);
  }, []);

  const handleAddPlan = () => {
    setPlans([...plans, { ...newPlan, id: plans.length + 1 }]);
    setNewPlan({ name: '', data: '', price: '' });
  };

  const handleEditPlan = (index) => {
    setEditingIndex(index);
    setNewPlan({ ...plans[index] });
  };

  const handleUpdatePlan = () => {
    const updatedPlans = [...plans];
    updatedPlans[editingIndex] = { ...newPlan };
    setPlans(updatedPlans);
    setNewPlan({ name: '', data: '', price: '' });
    setEditingIndex(null);
  };

  const handleDeletePlan = (index) => {
    const updatedPlans = plans.filter((_, i) => i !== index);
    setPlans(updatedPlans);
  };

  return (
    <div className="admin-postpaid-plans-container">
      <h2>Admin - Postpaid Plans</h2>

      <div className="plans-list">
        {plans.map((plan, index) => (
          <div key={plan.id} className="plan-item">
            <div>
              <strong>{plan.name}</strong>
              <p>{plan.data}</p>
              <p>{plan.price}</p>
            </div>
            <div className="actions">
              <button onClick={() => handleEditPlan(index)}>Edit</button>
              <button onClick={() => handleDeletePlan(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="add-plan-form">
        <h3>{editingIndex !== null ? 'Edit Plan' : 'Add New Plan'}</h3>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={newPlan.name}
          onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
        />

        <label htmlFor="data">Data:</label>
        <input
          type="text"
          id="data"
          value={newPlan.data}
          onChange={(e) => setNewPlan({ ...newPlan, data: e.target.value })}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={newPlan.price}
          onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })}
        />

        {editingIndex !== null ? (
          <button onClick={handleUpdatePlan}>Update Plan</button>
        ) : (
          <button onClick={handleAddPlan}>Add Plan</button>
        )}
      </div>
    </div>
  );
};

export default AdminPostPaidPlans;
