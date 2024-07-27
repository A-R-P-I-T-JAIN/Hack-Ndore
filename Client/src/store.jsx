import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './redux/propertySlice'

const store = configureStore({
    reducer: {
      property: propertyReducer,
    },
  });
  
  export default store;