import React from 'react';
import PropTypes from 'prop-types';

export default function Textarea({ name, label, bindTo, handleFunction }){
	return (
		<React.Fragment>
			<label htmlFor = {name}>{label}</label>
			<textarea 
				name = {name}
				value = {bindTo} 
				className = "form__inputForm"  
				onChange = {handleFunction}>
			</textarea><br></br>
		</React.Fragment>
	)
}

Textarea.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	bindTo: PropTypes.string.isRequired,
	handleFunction: PropTypes.func.isRequired,
};