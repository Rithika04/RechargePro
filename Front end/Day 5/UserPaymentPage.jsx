import React, { useState } from 'react';
import '../assets/css/UserPaymentPage.css';

const UserPaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!cardNumber || !expiryDate || !cvv) {
      setError('All fields are required');
      return;
    }

    // Add more advanced validation logic if needed

    // Add logic to handle payment submission or integration with a payment gateway
    console.log('Payment submitted:', { cardNumber, expiryDate, cvv });
    // You can add further actions like displaying a success message or clearing the input
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setError('');
  };

  return (
    <div className="user-payment-container">
      <h2>Make a Payment</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter your card number"
        />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="Enter CVV"
        />

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default UserPaymentPage;
