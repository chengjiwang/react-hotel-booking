import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from 'slice/roomsSlice';

export default configureStore({
  reducer: {
    rooms: roomsReducer
  }
});