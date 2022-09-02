import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import UsersList from './components/UsersList';
import UserProfile from './components/UserProfile';
import UserPosts from './components/UserPosts';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/users' replace />} />
				<Route path='/users' element={<UsersList />} />
				<Route path='/users/:id' element={<UserProfile />} />
				<Route path='/users/:id/posts' element={<UserPosts />} />
				<Route path='*' element={<Navigate to='/users' replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
