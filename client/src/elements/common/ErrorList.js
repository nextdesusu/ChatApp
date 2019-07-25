import React from 'react';
import PropTypes from 'prop-types';
import ErrorCMP from './ErrorCMP';

export default function ErrorList({ listOfErros }){
	const condition = listOfErros && listOfErros.length
	let ErrorObjects;
	if (condition){
		let counter = 0;
		ErrorObjects = listOfErros.map((error) => {
			return <li key = {counter++}><ErrorCMP message = {error} /></li>
		});
	}
	//console.log("this is errors =>", ErrorObjects)
	return (
		<ul>
			{ErrorObjects}
		</ul>
	)
}

ErrorList.propTypes = {
	listOfErros: PropTypes.array.isRequired,
};