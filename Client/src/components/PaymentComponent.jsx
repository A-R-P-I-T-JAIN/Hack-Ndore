import React, { useState } from 'react';
import './PaymentComponent.css'; // Assuming you have a separate CSS file for styling
import { faCreditCard, faUniversity, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const PaymentComponent = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePayment = () => {
    alert(`Selected Payment Method: ${selectedPaymentMethod}`);
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>How would you like to pay?</p>

      <div className="payment-method">
        <label>
          <input
            type="radio"
            value="Card Payment"
            checked={selectedPaymentMethod === 'Card Payment'}
            onChange={handlePaymentMethodChange}
          />
          Card Payment
        </label>
        <FontAwesomeIcon icon={faCreditCard} className='font' />
      </div>

      <div className="payment-method">
        <label>
          <input
            type="radio"
            value="Net Banking"
            checked={selectedPaymentMethod === 'Net Banking'}
            onChange={handlePaymentMethodChange}
          />
          Net Banking
        </label>
        <FontAwesomeIcon icon={faUniversity} className='font' />
      </div>

      <div className="payment-method">
        <label>
          <input
            type="radio"
            value="UPI Payment"
            checked={selectedPaymentMethod === 'UPI Payment'}
            onChange={handlePaymentMethodChange}
          />
          UPI Payment
        </label>
        <FontAwesomeIcon icon={faMobileAlt} className='font' />
        {selectedPaymentMethod === 'UPI Payment' && (
          <select onChange={handlePaymentMethodChange}>
            <option value="">Select UPI App</option>
            <option value="Razorpay">Razorpay</option>
            <option value="PhonePe">PhonePe</option>
            <option value="GPay">GPay</option>
            <option value="Paytm">Paytm</option>
          </select>
        )}

      </div>

     
<button className="payment-button" onClick={handlePayment}>
        Make Payment
      </button>
    </div>
  );
};

export default PaymentComponent;
