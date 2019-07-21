import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ name, label, type, bindTo, handleFunction }){
	return (
		<React.Fragment>
			<label htmlFor = {name}>{label}</label>
			<input 
				name = {name}
				value = {bindTo} 
				type = 'text' 
				className = "form__inputForm"  
				onChange = {handleFunction}>
			</input><br></br>
		</React.Fragment>
	)
}

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	bindTo: PropTypes.string.isRequired,
	handleFunction: PropTypes.func.isRequired,
};