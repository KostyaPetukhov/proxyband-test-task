import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../config/axios';

export const fetchUserAlbums = createAsyncThunk(
	'albums/fetchUserAlbums',
	async (id) => {
		const response = await apiClient.get(`users/${id}/albums`);
		return response.data;
	}
);

const albumsSlice = createSlice({
	name: 'albums',
	initialState: {
		albums: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[fetchUserAlbums.pending]: (state, action) => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchUserAlbums.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.albums = action.payload;
			state.error = false;
		},
		[fetchUserAlbums.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.error;
		},
	},
});

const { reducer } = albumsSlice;

export default reducer;
