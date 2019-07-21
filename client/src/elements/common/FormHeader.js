import React from 'react';
import PropTypes from 'prop-types';

export default function FormMessage({ text }) {
	return <h3 className = "form__header">{text}</h3>
}

FormMessage.propTypes = {
	text: PropTypes.string.isRequired,
};