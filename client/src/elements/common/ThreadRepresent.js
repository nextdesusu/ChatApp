import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './ButtonLink';
import { THREAD_CONST } from '../../consts/PageRoutes';
import PostList from './PostList';

export default function ThreadRepresent({ ButtonOn, threadId, poster, header, text }){
	return(
		<div className = 'thread__block'>
			{ButtonOn && <ButtonLink to = {THREAD_CONST + threadId} text = 'Перейти в тред' />}
			<h3 className = 'thread__header'>Тема: {header}</h3>
			<p className = "thread__poster">Автор треда: {poster}</p>
			<p className = "thread__text">{text}</p>
			<PostList threadId = {threadId}  />
		</div>
	)
}

ThreadRepresent.propTypes = {
	ButtonOn: PropTypes.bool.isRequired,
	threadId: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};