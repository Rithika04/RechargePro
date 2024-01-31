// AdminAddonsPage.jsx

import React, { useState, useEffect } from 'react';
import '../assets/css/AdminAddonsPage.css';

const AdminAddonsPage = () => {
  const [addons, setAddons] = useState([]);
  const [newAddon, setNewAddon] = useState({ name: '', description: '', price: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Fetch or initialize the addons data
    // Replace this with your actual data fetching logic
    const mockData = [
      { id: 1, name: 'Extra Data', description: 'Additional 5 GB', price: '$5' },
      { id: 2, name: 'International Calls', description: 'Unlimited calls to select countries', price: '$10' },
      // Add more addons as needed
    ];
    setAddons(mockData);
  }, []);

  const handleAddAddon = () => {
    setAddons([...addons, { ...newAddon, id: addons.length + 1 }]);
    setNewAddon({ name: '', description: '', price: '' });
  };

  const handleEditAddon = (index) => {
    setEditingIndex(index);
    setNewAddon({ ...addons[index] });
  };

  const handleUpdateAddon = () => {
    const updatedAddons = [...addons];
    updatedAddons[editingIndex] = { ...newAddon };
    setAddons(updatedAddons);
    setNewAddon({ name: '', description: '', price: '' });
    setEditingIndex(null);
  };

  const handleDeleteAddon = (index) => {
    const updatedAddons = addons.filter((_, i) => i !== index);
    setAddons(updatedAddons);
  };

  return (
    <div className="admin-addons-container">
      <h2>Admin - Add-ons</h2>

      <div className="addons-list">
        {addons.map((addon, index) => (
          <div key={addon.id} className="addon-item">
            <div>
              <strong>{addon.name}</strong>
              <p>{addon.description}</p>
              <p>{addon.price}</p>
            </div>
            <div className="actions">
              <button onClick={() => handleEditAddon(index)}>Edit</button>
              <button onClick={() => handleDeleteAddon(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="add-addon-form">
        <h3>{editingIndex !== null ? 'Edit Add-on' : 'Add New Add-on'}</h3>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={newAddon.name}
          onChange={(e) => setNewAddon({ ...newAddon, name: e.target.value })}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={newAddon.description}
          onChange={(e) => setNewAddon({ ...newAddon, description: e.target.value })}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={newAddon.price}
          onChange={(e) => setNewAddon({ ...newAddon, price: e.target.value })}
        />

        {editingIndex !== null ? (
          <button onClick={handleUpdateAddon}>Update Add-on</button>
        ) : (
          <button onClick={handleAddAddon}>Add Add-on</button>
        )}
      </div>
    </div>
  );
};

export default AdminAddonsPage;
