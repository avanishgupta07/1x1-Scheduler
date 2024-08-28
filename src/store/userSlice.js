import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (params) => {
  const response = await axios.get('http://localhost:5000/api/users', { params });
  return response.data;
});

export const createTeam = createAsyncThunk('users/createTeam', async (userIds) => {
  const response = await axios.post('http://localhost:5000/api/team', { userIds });
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages: 1,
    team: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload.users;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createTeam.fulfilled, (state, action) => {
        state.team = action.payload;
      });
  },
});

export default userSlice.reducer;