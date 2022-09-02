import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../config/axios';

export const fetchUserPosts = createAsyncThunk(
	'posts/fetchUsersPost',
	async (id) => {
		const response = await apiClient.get(`users/${id}/posts`);
		return response.data;
	}
);

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[fetchUserPosts.pending]: (state, action) => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchUserPosts.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.posts = action.payload;
			state.error = false;
		},
		[fetchUserPosts.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.error;
		},
	},
});

const { reducer } = postsSlice;

export default reducer;
