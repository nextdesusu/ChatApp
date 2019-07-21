import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './ButtonLink';
import { GET_POSTS } from '../../consts/ClientConfig';

export default function PostRepresent ({ poster, text }) {
	return(
		<div className = 'post__block'>
			<h3 className = 'post__header'>Автор поста: {poster}</h3>
			<p className = "post__text">{text}</p>
		</div>
	)
}

PostRepresent.propTypes = {
	poster: PropTypes.string,
	text: PropTypes.string.isRequired,
};