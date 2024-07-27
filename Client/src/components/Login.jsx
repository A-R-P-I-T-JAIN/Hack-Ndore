// src/components/Login.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProperty } from '../redux/propertySlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const property = useSelector((state) => state.property.property);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [propertyId, setPropertyId] = useState("");
  const [ownedBy, setOwnedBy] = useState("");
  const [mobile, setMobile] = useState("");
  const [aadhar, setAadhar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const propertyData = {
      propertyId,
      ownedBy,
      aadhar,
      mobile,
      area: "Downtown",
      size: 2000,
      type: "Residential",
      propertyTax: false,
      waterTax: true,
      garbageTax: false,
      propertyMonths: 1,
      waterMonths: 1,
      garbageMonths: 1,
    };
  
    try {
      // Await the dispatch to ensure the action is complete
      const result = await dispatch(addProperty(propertyData));
  
      if (addProperty.fulfilled.match(result)) {
        // After successful addition, navigate to the dashboard with property data
        navigate('/dashboard', { state: { property: propertyData } });
      } else {
        console.error('Failed to add property:', result.error.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Property Id</label>
        <input type="text" value={propertyId} onChange={(e) => setPropertyId(e.target.value)} />
        <label htmlFor="">Aadhar No.</label>
        <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} />
        <label htmlFor="">Owned By</label>
        <input type="text" value={ownedBy} onChange={(e) => setOwnedBy(e.target.value)} />
        <label htmlFor="">Mobile No.</label>
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {property ? (
        <div>
          <h1>Property ID: {property.propertyId}</h1>
          <p>Owner: {property.ownedBy}</p>
          <p>Aadhar: {property.aadhar}</p>
          <p>Mobile: {property.mobile}</p>
          <p>Size: {property.size}</p>
        </div>
      ) : (
        <h1>Nothing here</h1>
      )}
    </div>
  );
};

export default Login;
