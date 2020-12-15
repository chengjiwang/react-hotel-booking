import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetAllRooms, apiGetRoom, apiBookingRoom, apiClearReservation } from 'services/EventService';

const initialState = {
  allRoom: [],
  allRoomStatus: 'idle',
  singleRoom: {},
  singleRoomStatus: 'idle',
};

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
  const response = await apiGetAllRooms();
  return response.data.items;
});

export const fetchSingleRoom = createAsyncThunk('rooms/fetchSingleRoom', async(roomId) =>{
  const response = await apiGetRoom(roomId);
  return response.data;
});

export const addBooking = createAsyncThunk(
  'rooms/addBooking',
  async ({ roomId, data }, { rejectWithValue }) => {
    try {
      const response = await apiBookingRoom(roomId, data);
      return response.data.booking;
    } catch(err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const clearBooking = createAsyncThunk(
  'rooms/clearBooking',
  async () => {
    await apiClearReservation();
  }
);

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRooms.pending]: (state) => {
      state.allRoomStatus= 'loading';
    },
    [fetchRooms.fulfilled]: (state, action) => {
      state.allRoomStatus = 'succeeded';
      state.allRoom = action.payload;
    },
    [fetchSingleRoom.pending]: (state) => {
      state.singleRoomStatus= 'loading';
      state.singleRoom = {};
    },
    [fetchSingleRoom.fulfilled]: (state, action) => {
      state.singleRoomStatus = 'succeeded';
      state.singleRoom = action.payload;
    },
    [addBooking.fulfilled]: ({ singleRoom }, action) => {
      singleRoom.booking = singleRoom.booking.concat(action.payload);
    },
    [clearBooking.fulfilled]: ({ singleRoom }) => {
      singleRoom.booking = [];
    },
  }
});

export default roomsSlice.reducer;