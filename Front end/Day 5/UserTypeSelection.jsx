// UserTypeSelection.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserTypeSelection = ({ onSelectUserType }) => {
  const [userType, setUserType] = useState('user');

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  const handleContinue = () => {
    onSelectUserType(userType);
  };

  return (
    <div>
      <h2  style={{backgroundColor:"crimson"}}>Select User Type</h2>
      <div>
        <Link to="/LoginForm">
        <button style={{backgroundColor:"red"}}
          className={userType === 'user' ? 'active' : ''}
          onClick={() => handleUserTypeSelect('user')}
        >
          User
        </button>
        <br></br>
        </Link>
        <br></br>
        <Link to="/AdminLoginForm">
        <button style={{backgroundColor:"red"}}
          className={userType === 'admin' ? 'active' : ''}
          onClick={() => handleUserTypeSelect('admin')}
        >
          Admin
        </button>
        </Link>
        <br></br>
      </div>
    
    </div>
  );
};

export default UserTypeSelection;
