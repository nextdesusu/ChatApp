import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ButtonLink({ to, text }) {
	return (
		<Link to = {to}>
			<button className = "nav__button">{text}</button>
		</Link>
	);
}

ButtonLink.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};