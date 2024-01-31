// UserAddOnsPageV2.jsx

import React, { useState } from 'react';
import '../assets/css/UserAddOnsPage.css';

const UserAddOnsPage = () => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleAddOnSelect = (addOn) => {
    // Toggle the selected state of the add-on
    setSelectedAddOns((prevAddOns) =>
      prevAddOns.includes(addOn)
        ? prevAddOns.filter((selected) => selected !== addOn)
        : [...prevAddOns, addOn]
    );
  };

  const availableAddOns = [
    { id: 1, name: 'Extra Data', price: 5 },
    { id: 2, name: 'Premium Features', price: 10 },
    { id: 3, name: 'Extended Warranty', price: 15 },
  ];

  return (
    <div className="user-addons-container-v2">
      <h2>Select Add-Ons</h2>
      <div className="add-on-cards">
        {availableAddOns.map((addOn) => (
          <div key={addOn.id} className={`add-on-card ${selectedAddOns.includes(addOn) ? 'selected' : ''}`}>
            <label>
              <input
                type="checkbox"
                checked={selectedAddOns.includes(addOn)}
                onChange={() => handleAddOnSelect(addOn)}
              />
              <span className="add-on-name">{addOn.name}</span>
              <span className="add-on-price">${addOn.price}</span>
            </label>
          </div>
        ))}
      </div>
      <p className="total-cost">Total Cost: ${selectedAddOns.reduce((total, addOn) => total + addOn.price, 0)}</p>
    </div>
  );
};

export default UserAddOnsPage;
