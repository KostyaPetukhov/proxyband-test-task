import { configureStore } from '@reduxjs/toolkit';

import users from './reducers/usersSlice';
import profile from './reducers/profileSlice';
import posts from './reducers/postsSlice';
import albums from './reducers/albumsSlice';

const store = configureStore({
	reducer: { users, profile, posts, albums },
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
