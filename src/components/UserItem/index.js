import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const UserItem = (props) => {
	const { user, openProfile } = props;

	const handleOpenProfile = () => {
		openProfile(user);
	};

	return (
		<div onClick={handleOpenProfile} className='listItem'>
			{user.id}. {user.name}
		</div>
	);
};

UserItem.propTypes = {
	users: PropTypes.object,
	openProfile: PropTypes.func,
};

export default UserItem;
