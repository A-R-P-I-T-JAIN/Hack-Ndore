// src/redux/propertySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks
export const getPropertytax = createAsyncThunk('property/getPropertytax', async ({ propertyId }) => {
  const response = await axios.get(`http://localhost:3000/getPropertyTax/${propertyId}`);
  return response.data;
});

export const getWatertax = createAsyncThunk('property/getWatertax', async ({ propertyId }) => {
  const response = await axios.get(`http://localhost:3000/getWaterTax/${propertyId}`);
  return response.data;
});

export const getGarbagetax = createAsyncThunk('property/getGarbagetax', async ({ propertyId }) => {
  const response = await axios.get(`http://localhost:3000/getGarbageTax/${propertyId}`);
  return response.data;
});

export const addProperty = createAsyncThunk('property/addProperty', async (propertyData) => {
  const response = await axios.post('http://localhost:3000/addProperty', propertyData);
  return response.data;
});

const propertySlice = createSlice({
  name: 'property',
  initialState: {
    property: null,  // Ensure this is null initially or an empty object if needed
    isPropertyTaxpaid: false,
    propertytaxAmount: 0,
    isWaterTaxpaid: false,
    watertaxAmount: 0,
    isGarbageTaxpaid: false,
    garbagetaxAmount: 0,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPropertytax.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPropertytax.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { paid, amount } = action.payload;
        state.isPropertyTaxpaid = paid;
        state.propertytaxAmount = amount || 0;
      })
      .addCase(getPropertytax.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getWatertax.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWatertax.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { paid, amount } = action.payload;
        state.isWaterTaxpaid = paid;
        state.watertaxAmount = amount || 0;
      })
      .addCase(getWatertax.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getGarbagetax.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGarbagetax.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { paid, amount } = action.payload;
        state.isGarbageTaxpaid = paid;
        state.garbagetaxAmount = amount || 0;
      })
      .addCase(getGarbagetax.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addProperty.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.property = action.payload; // Directly assign payload to property
      })
      .addCase(addProperty.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default propertySlice.reducer;
