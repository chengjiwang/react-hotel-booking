import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetAllRooms, apiGetRoom } from 'services/EventService';

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

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRooms.pending]: (state, action) => {
      state.allRoomStatus= 'loading';
    },
    [fetchRooms.fulfilled]: (state, action) => {
      state.allRoomStatus = 'succeeded';
      state.allRoom = action.payload;
    },
    [fetchSingleRoom.pending]: (state, action) => {
      state.singleRoomStatus= 'loading';
      state.singleRoom = {};
    },
    [fetchSingleRoom.fulfilled]: (state, action) => {
      state.singleRoomStatus = 'succeeded';
      state.singleRoom = action.payload;
    }
  }
});

export default roomsSlice.reducer;