// src/components/DashBoard.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertytax, getWatertax, getGarbagetax } from '../redux/propertySlice';
import { useLocation } from 'react-router-dom';

const DashBoard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { property } = location.state || {};

  const { isPropertyTaxpaid, propertytaxAmount, isWaterTaxpaid, watertaxAmount, isGarbageTaxpaid, garbagetaxAmount, status, error } = useSelector((state) => state.property);

  useEffect(() => {
    if (property) {
      dispatch(getPropertytax({ propertyId: property.propertyId }));
      dispatch(getWatertax({ propertyId: property.propertyId }));
      dispatch(getGarbagetax({ propertyId: property.propertyId }));
    }
  }, [dispatch, property]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <p>Property Tax: {isPropertyTaxpaid ? 'Paid' : `Due. Amount: $${propertytaxAmount}`}</p>
          <p>Water Tax: {isWaterTaxpaid ? 'Paid' : `Due. Amount: $${watertaxAmount}`}</p>
          <p>Garbage Tax: {isGarbageTaxpaid ? 'Paid' : `Due. Amount: $${garbagetaxAmount}`}</p>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
