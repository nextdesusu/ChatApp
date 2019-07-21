import React from 'react';
import FormSubmit from '../common/FormSubmit';
import ErrorCMP from '../common/ErrorCMP';
import FormHeader from '../common/FormHeader';
import Textarea from '../common/Textarea';
import Input from '../common/Input';
import PostForm from '../../utils/PostForm';
import { Redirect } from 'react-router-dom';
import { CREATE_USER_ROUTE } from '../../consts/ClientConfig';
import { LOG_P } from '../../consts/PageRoutes';


export default class Registration extends React.Component {
	state = {
		emailInput: '',
		loginInput: '',
		passwordInput: '',
		passwordRepeat: '',
		tryingToRegister: false,
		error: '',
		succes: false,
	}
	handleInput = (e) => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	}
	makeNewUser = (e) =>{
		e.preventDefault();
		if (!this.isAllOk()){
			this.setState({error: "Одно из полей не заполнено"});
			return
		}
		if (this.state.tryingToRegister){
			this.setState({error: "В процессе регистрации..."});
			return
		}
		this.setState({ tryingToRegister: true });
		this.setState({ error: '' })
		const { emailInput, loginInput, passwordInput } = this.state;
		const formObj = {
			'email': emailInput,
			'login': loginInput,
			'password': passwordInput
		}
		PostForm(CREATE_USER_ROUTE, formObj)
			.then(response => {
					console.log('this is answer', response)
					if (response.success){
						this.setState({ tryingToRegister: false, succes: true });
					}
					else {
						this.setState({ error: response.error.message, tryingToRegister: false  })
					}
				})
				.catch(err =>{
					this.setState({ tryingToRegister: false });
					this.setState({ error: err.message, tryingToRegister: false  })
				})
	}
	isAllOk = () =>{
		const { emailInput, loginInput, passwordInput, passwordRepeat, tryingToRegister } = this.state;
		return emailInput.trim() && loginInput.trim() && passwordInput.trim() && passwordInput == passwordRepeat && !tryingToRegister
	}
	render(){
		const allIsOk = this.isAllOk();
		const { emailInput, loginInput, passwordInput, passwordRepeat, tryingToRegister, error, succes } = this.state;
		console.log("email input is", emailInput)
		return (
			<div className = "form__block">
				<form action = "" className = "form__common" onSubmit = {this.makeNewUser}>
					<FormHeader text = "Регистрация" />
					<Input 
						name = "emailInput" label = "Введите емэйл" 
						type = "text" bindTo = {emailInput} 
						handleFunction = {this.handleInput}
					/>
					<Input 
						name = "loginInput" label = "Введите логин" 
						type = "text" bindTo = {loginInput} 
						handleFunction = {this.handleInput} 
					/>
					<Input 
						name = "passwordInput" label = "Введите пароль" 
						type = "password" bindTo = {passwordInput} 
						handleFunction = {this.handleInput} 
					/>
					<Input 
						name = "passwordRepeat" label = "Повторите пароль" 
						type = "password" bindTo = {passwordRepeat} 
						handleFunction = {this.handleInput} 
					/>
					<FormSubmit disabledCondition = {!allIsOk} />
					<ErrorCMP message = {error} />
					{succes && <Redirect to = {LOG_P} />}
				</form>
			</div>
		)
	}
}