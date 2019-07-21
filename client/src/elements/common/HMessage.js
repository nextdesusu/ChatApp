import React from 'react';
import PropTypes from 'prop-types';

export default function HMessage({ text }) {
	return <h1 className = "HMessage__common">{text}</h1>
}

HMessage.propTypes = {
	text: PropTypes.string.isRequired,
};