import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './TaxEstimator.css';
import { useNavigate } from 'react-router-dom';

const TaxEstimator = ({setShow}) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [estimatedTax, setEstimatedTax] = useState(0);

  const baseTaxAmount = 1000; // Example base tax amount
  const dailyPenaltyRate = 0.01; // 1% daily penalty rate
  const dueDate = new Date('2024-01-01'); // Example due date

  const calculateTax = (date) => {
    const diffTime = Math.abs(date - dueDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const penalty = (diffDays > 0) ? (baseTaxAmount * dailyPenaltyRate * diffDays) : 0;
    const totalTax = baseTaxAmount + penalty;
    return totalTax;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const newEstimatedTax = calculateTax(date);
    setEstimatedTax(newEstimatedTax);
  };

  return (
    <div className="tax-estimator">
      <h1 style={{fontSize:"25px"}} >Property Tax Estimator</h1>
      <section className='calender' style={{
        display: "flex",
        alignItems:"center",
        justifyContent:"center"
      }}>
        <h2>Select Payment Date</h2>
        <DatePicker className='date_pick'
          selected={selectedDate} 
          onChange={date => handleDateChange(date)} 
          dateFormat="yyyy-MM-dd"
        />
      </section>
      <section className='estimated-tax'>
        <h2 style={{fontSize:"25px"}} >Estimated Tax</h2>
        <p style={{fontSize:"20px",color:"#383737"}} >Base Tax Amount: ${baseTaxAmount}</p>
        <p style={{fontSize:"20px",color:"#383737"}} >Selected Date: {selectedDate.toDateString()}</p>
        <p style={{fontSize:"20px",color:"#383737"}} >Due Date: {dueDate.toDateString()}</p>
        <p style={{fontSize:"20px",color:"#383737"}} >Estimated Total Tax (including penalties): ${estimatedTax.toFixed(2)}</p>
      </section>

      
        <button  className="pay_now" onClick={() => navigate('/payment')} style={{marginBottom:"10px"}}>Pay Now</button>
        <button onClick={() => setShow(false)} >Close</button>
      
    </div>
  );
};

export default TaxEstimator