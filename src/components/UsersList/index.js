import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../store/reducers/usersSlice';
import UserItem from '../UserItem';

const UsersList = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const users = useSelector((state) => state.users.users);

	const handleOpenProfile = (user) => {
		navigate(`/users/${user.id}`);
	};

	return (
		<>
			<h3>Users list: </h3>
			{users.map((user) => (
				<UserItem
					key={user.id}
					user={user}
					openProfile={handleOpenProfile}
				/>
			))}
		</>
	);
};

export default UsersList;
