import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../config/axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await apiClient.get('users');
	return response.data;
});

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[fetchUsers.pending]: (state, action) => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchUsers.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.users = action.payload;
			state.error = false;
		},
		[fetchUsers.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.error;
		},
	},
});

const { reducer } = usersSlice;

export default reducer;
