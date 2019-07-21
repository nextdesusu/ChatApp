import React from 'react';
import PropTypes from 'prop-types';

export default function FormSubmit({ disabledCondition }) {
	return <input disabled = {disabledCondition} className = "form__send" type = "submit"></input>
}

FormSubmit.propTypes = {
	disabledCondition: PropTypes.bool.isRequired,
};