import React from 'react';
import PropTypes from 'prop-types';
import FormSubmit from '../common/FormSubmit';
import ErrorCMP from '../common/ErrorCMP';
import FormHeader from '../common/FormHeader';
import Textarea from '../common/Textarea';
import Input from '../common/Input';
import PostForm from '../../utils/PostForm';
import PostThread from '../../utils/PostThread';

export default class CreateThread extends React.Component{
	state = {
		threadNameInput: '',
		threadTextInput: '',
		error: '',
		tryingToSend: false,
		success: false
	}
	createThread = (e) =>{
		e.preventDefault();
		this.setState({ error: '', tryingToSend: true })
		const { login, password } = this.props.currentUser;
		const { threadNameInput, threadTextInput } = this.state;
		const formObj = {
			'login': login,
			'password': password,
			'threadName': threadNameInput,
			'threadText': threadTextInput
		}
		PostThread(formObj)
			.then(response => {
				const { error, success } = response;
				this.setState({ error: error, success: success, tryingToSend: false})
				this.props.updateThreadList()
			})
	}
	handleInput = (e) => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	}
	allIsOk = () => {
		return true
	}
	render(){
		const allIsOk = this.allIsOk();
		const { threadNameInput, threadTextInput, error, tryingToSend, success } = this.state;
		return (
			<div className = "form__block">
				<form action = "" className = "form__common" onSubmit = {this.createThread}>
					<Input 
						name = "threadNameInput" label = "Название треда" 
						type = "password" bindTo = {threadNameInput} 
						handleFunction = {this.handleInput} 
					/>
					<Textarea name = "threadTextInput" label = "Сообщение" bindTo = {threadTextInput} handleFunction = {this.handleInput} />
					<FormSubmit disabledCondition = {!allIsOk} />
					<ErrorCMP message = {error} />
				</form>
			</div>
		)
	}
}

CreateThread.propTypes = {
	currentUser: PropTypes.object.isRequired,
};