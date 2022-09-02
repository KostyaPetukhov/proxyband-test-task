import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../config/axios';

export const fetchUserProfile = createAsyncThunk(
	'profile/fetchUserProfile',
	async (id) => {
		const response = await apiClient.get(`users/${id}`);
		return response.data;
	}
);

const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		profile: '',
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[fetchUserProfile.pending]: (state, action) => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchUserProfile.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.profile = action.payload;
			state.error = false;
		},
		[fetchUserProfile.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.error;
		},
	},
});

const { reducer } = profileSlice;

export default reducer;
