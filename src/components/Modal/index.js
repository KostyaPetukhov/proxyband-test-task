import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Modal = (props) => {
	const { open, setOpen, children } = props;

	const handleCloseModal = () => {
		setOpen(false);
	};
	return (
		<div
			className={open ? 'modal active' : 'modal'}
			onClick={handleCloseModal}
		>
			<div className={open ? 'modalContent active' : 'modalContent'}>
				{children}
			</div>
		</div>
	);
};

Modal.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
};

export default Modal;
