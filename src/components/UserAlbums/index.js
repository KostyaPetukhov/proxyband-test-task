import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUserAlbums } from '../../store/reducers/albumsSlice';
import './style.css';

const UserAlbums = (props) => {
	const { id } = props;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserAlbums(id));
	}, []);

	const albums = useSelector((state) => state.albums.albums);

	return (
		<>
			<h3 className='title'>User albums: </h3>
			<div className='albums'>
				{albums.map((album, index) => (
					<div className='albumItem'>
						{index + 1}. {album.title}
					</div>
				))}
			</div>
		</>
	);
};

UserAlbums.propTypes = {
	id: PropTypes.number.isRequired,
};

export default UserAlbums;
