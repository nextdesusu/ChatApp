import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorCMP({ message }){
	return(
		<div className = 'errorForm__block'>
			{message && <p className = 'errorForm__message'>{message}</p>}
		</div>
	)
} 

ErrorCMP.propTypes = {
	message: PropTypes.string.isRequired,
};