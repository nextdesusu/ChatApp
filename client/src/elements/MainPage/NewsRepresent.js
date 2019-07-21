import React from 'react';

export default function NewsRepresent({ header, text }){
	return(
		<div className = 'news__block'>
			<h3 className = 'news__header'>Тема: {header}</h3>
			<p className = "news__text">{text}</p>
		</div>
	)
}