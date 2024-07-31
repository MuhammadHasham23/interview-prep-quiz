import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './exampleSlice'; // Import your slice reducers

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
