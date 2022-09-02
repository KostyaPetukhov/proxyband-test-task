import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { fetchUserProfile } from '../../store/reducers/profileSlice';
import './style.css';
import Modal from '../Modal';
import UserAlbums from '../UserAlbums';

const UserProfile = () => {
	const [openModal, setOpenModal] = useState(false);

	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserProfile(params.id));
	}, []);

	const user = useSelector((state) => state.profile.profile);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	return (
		<>
			<button
				className='button'
				onClick={() => navigate('/users', { replace: true })}
			>
				Back
			</button>
			{user ? (
				<div className='profile'>
					<h3>{user.name}</h3>
					<div>UserName: {user.username}</div>
					<div>Email: {user.email}</div>
					<div>
						Adress: {user.address.city}
						{user.address.street} {user?.address.zipcode}
					</div>
					<div>Website: {user.website}</div>
					<div className='buttonBlock'>
						<button
							className='button'
							onClick={() =>
								navigate(`/users/${params.id}/posts`)
							}
						>
							Posts
						</button>
						<button className='button' onClick={handleOpenModal}>
							Albums
						</button>
					</div>
				</div>
			) : (
				<h3>User not found</h3>
			)}
			<Modal open={openModal} setOpen={setOpenModal}>
				<UserAlbums id={params.id} />
			</Modal>
		</>
	);
};

export default UserProfile;
